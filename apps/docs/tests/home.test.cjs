const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const root = path.resolve(__dirname, '..');
function load(locale, runtime = {}) {
  const source = fs.readFileSync(path.join(root, 'src/pages/index.tsx'), 'utf8');
  const output = ts.transpileModule(source, {compilerOptions: {jsx: ts.JsxEmit.React, module: ts.ModuleKind.CommonJS, esModuleInterop: true}});
  const exports = {};
  vm.runInNewContext(output.outputText, {exports, window: runtime.window, require(id) {
    if (id === 'react' && runtime.react) return runtime.react;
    if (id.endsWith('readingStorage.mjs') && runtime.storage) return runtime.storage;
    if (id === '@docusaurus/Link') return ({to, children, ...props}) => React.createElement('a', {...props, href: to}, children);
    if (id === '@docusaurus/useDocusaurusContext') return () => ({i18n: {currentLocale: locale}});
    if (id === '@theme/Layout') return ({children}) => React.createElement('div', null, children);
    if (id.endsWith('.css')) return {};
    if (id.endsWith('readingStorage.mjs')) return {READING_EVENT: 'stroomlijnen:reading-change', listBookmarks: () => [], listRecentReading: () => []};
    return require(id);
  }});
  return exports;
}
for (const locale of ['en', 'nl']) {
  test(`${locale}: accessible homepage, real localized topic and role paths`, () => {
    const html = renderToStaticMarkup(React.createElement(load(locale).default));
    assert.match(html, locale === 'en' ? /<h1[^>]*>Charging, clearly explained\.<\/h1>/ : /<h1[^>]*>Laden, helder uitgelegd\.<\/h1>/);
    const prefix = locale === 'en' ? '/en' : '';
    assert.ok(html.includes(`action="${prefix}/search"`));
    assert.match(html, /method="get"/);
    assert.match(html, /<label[^>]*for="kb-search"/);
    assert.match(html, /<input[^>]*id="kb-search"[^>]*name="q"/);
    for (const route of ['energie/netcongestie','plug-and-charge/what-is-pnc','klantportaal/overview','pandeneigenaren/overzicht','getting-started/intro','chauffeurs/elektrisch-touren']) assert.ok(html.includes(`href="${prefix}/docs/${route}"`), route);
    assert.match(html, /<ol[^>]*class="kb-topics"/);
    assert.doesNotMatch(html, /\p{Extended_Pictographic}/u);
    assert.match(html, locale === 'en' ? /this browser/ : /deze browser/);
  });
}
test('reading events refresh locale-specific library data and unsubscribe on unmount', () => {
  const events = new EventTarget();
  let effect, cleanup, state, updates = 0;
  const calls = [];
  const entry = {path: '/en/docs/energie/netcongestie', title: 'Grid congestion', updatedAt: 1};
  const runtime = {
    window: events,
    react: {...React, useState: initial => [initial, value => {state = value; updates++;}], useEffect: fn => {effect = fn;}},
    storage: {READING_EVENT: 'stroomlijnen:reading-change', listBookmarks: locale => {calls.push(locale); return [entry];}, listRecentReading: () => []},
  };
  load('en', runtime).default();
  assert.equal(updates, 0, 'storage not accessed during server/initial render');
  cleanup = effect();
  assert.equal(state.bookmarks[0].title, 'Grid congestion');
  events.dispatchEvent(new Event('stroomlijnen:reading-change'));
  events.dispatchEvent(new Event('storage'));
  assert.equal(updates, 3);
  assert.deepEqual(calls, ['en', 'en', 'en']);
  cleanup();
  events.dispatchEvent(new Event('storage'));
  events.dispatchEvent(new Event('stroomlijnen:reading-change'));
  assert.equal(updates, 3, 'both listeners are removed');
});
test('personal library renders saved and recent article links, without inventing data', () => {
  const {PersonalLibrary} = load('en');
  assert.equal(typeof PersonalLibrary, 'function');
  const html = renderToStaticMarkup(React.createElement(PersonalLibrary, {locale: 'en', bookmarks: [{path:'/en/docs/energie/netcongestie', title:'Grid congestion', updatedAt:1}], recent: [{path:'/en/docs/klantportaal/overview',title:'Customer portal',progress:0.4,updatedAt:2}]}));
  assert.match(html, /href="\/en\/docs\/energie\/netcongestie"/);
  assert.match(html, /Grid congestion/);
  assert.match(html, /href="\/en\/docs\/klantportaal\/overview"/);
  assert.match(html, /<progress[^>]*value="0.4"/);
});
