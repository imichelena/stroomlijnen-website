// Verify static documents against the five document roots, without contacting live sites.
// Run "node scripts/verify-release.mjs [path/to/release]" from any directory.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const gateway = 'stroomlijnen.nl';
const formEndpoint = 'https://formspree.io/f/mlgpjlbn';
const sectors = ['cultuur', 'hospitality', 'commercieel', 'docs'].map(name => name + '.' + gateway);
const hosts = [gateway, ...sectors];
const root = resolve(process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), '../release'));
const files = new Map();
const pages = new Map();
const errors = new Set();
let targetCount = 0;
let crossHostCount = 0;
const report = (source, message) => errors.add(source + ' — ' + message);
const previewHostname = /(?:^|\.)(?:chatgpt\.site|localhost)$|^127\.0\.0\.1$/i;
const pageKey = (host, path) => 'https://' + host + path;
const baseLocale = (value = '') => value.toLowerCase().split('-')[0];
const expectedLocale = path => /^\/en(?:\/|$)/.test(path) ? 'en' : 'nl';

function listFiles(directory) {
  const entries = [];
  for (const entry of readdirSync(directory, {withFileTypes: true})) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) entries.push(...listFiles(path));
    else if (entry.isFile()) entries.push(path);
    else throw new Error('Unsupported entry in the static release: ' + path);
  }
  return entries;
}

function decode(value) {
  return value.replace(/&(amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, (text, name) => {
    if (name.startsWith('#')) {
      const code = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : Number(name.slice(1));
      return code <= 0x10ffff ? String.fromCodePoint(code) : text;
    }
    return {amp:'&', quot:'"', apos:"'", lt:'<', gt:'>'}[name.toLowerCase()];
  });
}

// Only the start tags and their URL-bearing attributes are relevant here. Ignore
// raw JS/CSS contents, including markup inside string literals and React payloads.
function readTags(html) {
  const tags = [];
  const matcher = /<!--[\s\S]*?-->|<(script|style)\b((?:"[^"]*"|'[^']*'|[^'">])*)>[\s\S]*?<\/\1\s*>|<([a-z][\w:-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi;
  for (const match of html.matchAll(matcher)) {
    if (!match[1] && !match[3]) continue;
    const attrs = Object.create(null);
    const rawAttrs = match[2] ?? match[4];
    for (const field of rawAttrs.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
      attrs[field[1].toLowerCase()] = decode(field[2] ?? field[3] ?? field[4] ?? '');
    }
    tags.push({name:(match[1] ?? match[3]).toLowerCase(), attrs});
  }
  return tags;
}

function address(raw, source) {
  try { return new URL(raw, source); }
  catch { report(source, 'Invalid URL ' + raw); }
}

function staticPath(url) {
  let path;
  try { path = decodeURIComponent(url.pathname); } catch { return; }
  const hostFiles = files.get(url.hostname);
  const direct = path.replace(/\/$/, '');
  for (const candidate of [path, direct + '/index.html', direct + '.html']) {
    if (hostFiles?.has(candidate)) return candidate;
  }
}

// Matches Caddy's directory index and extensionless Docusaurus 404 shortcuts.
// Two URL spellings are equivalent only when they resolve to the same output file.
function sameDocument(a, b) {
  if (!a || !b || a.hostname !== b.hostname) return false;
  const path = staticPath(a);
  return Boolean(path && path === staticPath(b));
}

function resolvePage(url) {
  const key = staticPath(url);
  return key && pages.get(pageKey(url.hostname, key));
}

function checkTarget(raw, source, fragment = true) {
  const url = address(raw, source);
  if (!url || !['http:', 'https:'].includes(url.protocol)) return;
  if (previewHostname.test(url.hostname)) {report(source, 'Private or local URL ' + raw);return;}
  if (!hosts.includes(url.hostname)) return;
  targetCount++;
  if (source.hostname !== url.hostname) crossHostCount++;
  if (url.protocol !== 'https:') report(source, 'Insecure production URL ' + raw);
  const path = staticPath(url);
  if (!path) { report(source, 'Missing destination ' + url.href); return; }
  if (fragment && url.hash.length > 1 && path.endsWith('.html')) {
    const first = resolvePage(url);
    // These static redirect stubs carry the incoming hash to the final page.
    const page = first?.redirect ? resolvePage(first.redirect) : first;
    let id;
    try { id = decodeURIComponent(url.hash.slice(1)); }
    catch {report(source, 'Invalid fragment ' + url.hash);return;}
    // Text fragments and #top are browser features that need no element id.
    id = id.split(':~:text=')[0];
    if (id && id.toLowerCase() !== 'top' && !page?.ids.has(id)) {
      report(source, 'Missing anchor ' + url.href);
    }
  }
}

for (const host of hosts) {
  const directory = join(root, host);
  if (!statSync(directory, {throwIfNoEntry:false})?.isDirectory()) {
    console.error('Missing document root: ' + directory); process.exit(1);
  }
  const paths = listFiles(directory).map(f => '/' + relative(directory, f).split(sep).join('/'));
  files.set(host, new Set(paths));
  for (const path of paths.filter(f => f.endsWith('.html'))) {
    const html = readFileSync(join(directory,path), 'utf8');
    const tags = readTags(html);
    const url = new URL(pageKey(host,path.replace(/\/index\.html$/, '/')));
    const ids = new Set(tags.flatMap(({name, attrs}) => [attrs.id, name === 'a' && attrs.name].filter(Boolean)));
    const links = tags.filter(t => t.name === 'link');
    const alternate = new Map();
    for (const {attrs} of links.filter(t => t.attrs.rel === 'alternate' && t.attrs.hreflang)) {
      alternate.set(attrs.hreflang === 'x-default' ? 'x-default' : baseLocale(attrs.hreflang), address(attrs.href, url));
    }
    const refresh = tags.find(t => t.name === 'meta' && t.attrs['http-equiv']?.toLowerCase() === 'refresh');
    const target = refresh?.attrs.content?.match(/\burl\s*=\s*(.+)$/i)?.[1];
    const canonical = links.find(t => t.attrs.rel === 'canonical');
    pages.set(pageKey(host,path), {url, tags, ids, alternate, lang:baseLocale(tags.find(t => t.name === 'html')?.attrs.lang),
      canonical:canonical && address(canonical.attrs.href, url), redirect:target && address(target,url)});
  }
}

for (const page of pages.values()) {
  const {url,tags,lang,alternate,canonical,redirect} = page;
  if (lang !== expectedLocale(url.pathname)) report(url, 'Incorrect HTML language "' + lang + '"');
  if (!sameDocument(canonical,redirect ?? url)) report(url, 'Incorrect canonical target ' + (canonical?.href ?? '(none)'));
  if (redirect) {
    checkTarget(redirect.href,url);
    if (resolvePage(redirect)?.redirect) report(url, 'Redirect chain or loop to ' + redirect);
    if (expectedLocale(redirect.pathname) !== lang) report(url, 'Redirect changes the language');
  } else {
    for (const locale of ['nl','en']) {
      const target = alternate.get(locale);
      const peer = target && resolvePage(target);
      if (!peer || peer.lang !== locale || !sameDocument(peer.alternate.get(lang),url)) {
        report(url, 'Missing reciprocal ' + locale + ' alternate');
      }
      if (locale !== lang && !tags.some(t => t.name === 'a' && t.attrs.href && sameDocument(address(t.attrs.href,url),target))) {
        report(url, 'No visible link to the ' + locale + ' version');
      }
    }
    if (!sameDocument(alternate.get('x-default'),alternate.get('nl'))) report(url, 'x-default must point to the Dutch page');
  }

  const forms = tags.filter(tag => tag.name === 'form' &&
    (tag.attrs.action?.includes('formspree.io') || tag.attrs.method?.toLowerCase() === 'post'));
  const prefix = lang === 'en' ? '/en' : '';
  const contact = new URL(pageKey(gateway,prefix + '/contact/'));
  const receipt = new URL(pageKey(gateway,prefix + '/thanks/'));
  if (sameDocument(url,contact)) {
    if (redirect || forms.length !== 1 || forms[0].attrs.action !== formEndpoint || forms[0].attrs.method?.toLowerCase() !== 'post') {
      report(url,'Central contact page must render the existing POST form');
    }
    const next = tags.find(tag => tag.name === 'input' && tag.attrs.name === '_next')?.attrs.value;
    if (!next || !sameDocument(address(next,url),receipt)) report(url,'Form does not return to the localized central receipt');
  } else if (forms.length) {
    report(url,'Additional contact form outside the central contact page');
  }
  if (sameDocument(url,receipt) && redirect) report(url,'Expected a local central receipt page');
  if (['cultuur.stroomlijnen.nl','commercieel.stroomlijnen.nl'].includes(url.hostname) &&
      url.pathname === (lang === 'nl' ? '/' : '/en/')) {
    for (const central of [contact,receipt]) {
      const old = new URL(url.origin + central.pathname);
      if (!sameDocument(resolvePage(old)?.redirect,central)) report(url,'Missing legacy redirect at ' + old);
    }
  }

  for (const {name,attrs} of tags) {
    for (const attr of ['href','src','poster','action']) {
      if (attrs[attr]) checkTarget(attrs[attr],url,attr === 'href' && name === 'a');
    }
    if (attrs.srcset && !attrs.srcset.includes('data:')) {
      for (const candidate of attrs.srcset.split(',')) {
        checkTarget(candidate.trim().split(/\s+/)[0], url, false);
      }
    }
    if (attrs.property === 'og:image' && attrs.content) checkTarget(attrs.content,url,false);
    if (name==='input' && attrs.name==='_next' && attrs.value) checkTarget(attrs.value,url);
  }
}

for (const host of hosts) {
  for (const locale of ['nl','en']) {
    const path = locale === 'nl' ? '/' : '/en/';
    const url = new URL(pageKey(host,path));
    const page = resolvePage(url);
    if (!page || page.redirect || page.lang !== locale) {report(url, 'Missing localized entry point');continue;}
    const contact = host === 'hospitality.stroomlijnen.nl'
      ? new URL(path, 'https://lemnion.nl')
      : new URL(pageKey(gateway,path + 'contact/'));
    if (!page.tags.some(tag => tag.name === 'a' && tag.attrs.href &&
      (address(tag.attrs.href,url)?.href === contact.href || sameDocument(address(tag.attrs.href,url),contact)))) {
      report(url, 'No direct link to the contact destination at ' + contact);
    }
    if (host === gateway) {
      if (!resolvePage(new URL(pageKey(host,path + 'thanks/')))) report(url,'Missing central receipt page');
      const cards = page.tags.filter(t => t.name === 'a' && (t.attrs.class ?? '').split(/\s+/).includes('destination'));
      if (cards.length !== 4) report(url, 'The sector gateway must have four destination cards');
      for (const sector of sectors) {
        const target = new URL(pageKey(sector,path));
        if (!cards.some(({attrs}) => sameDocument(address(attrs.href,url),target))) report(url, 'Missing sector card to ' + target);
      }
    }
  }
  for (const file of files.get(host)) {
    const url = new URL(pageKey(host,file));
    if (!/\.(?:html|css|js|mjs|json|xml|txt)$/i.test(file)) continue;
    const text = readFileSync(join(root,host,file),'utf8');
    if (/https?:\/\/[a-z\d.-]+\.chatgpt\.site\b/i.test(text)) report(url,'Private preview hostname in production output');
    if (file.endsWith('.css')) {
      for (const match of text.matchAll(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi)) {
        if (!match[2].startsWith('data:')) checkTarget(match[2], url, false);
      }
    }
  }
}

if (errors.size) {
  for (const message of errors) console.error(message);
  console.error('Release verification failed with ' + errors.size + ' issue(s).');
  process.exitCode = 1;
} else {
  console.log('Verified ' + hosts.length + ' production hosts, ' + pages.size + ' HTML pages and ' +
    targetCount + ' local destinations, including ' + crossHostCount + ' cross-host references.');
}
