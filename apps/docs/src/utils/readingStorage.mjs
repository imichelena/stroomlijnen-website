export const READING_EVENT = 'stroomlijnen:reading-change';
const prefix = 'stroomlijnen:reading:v1';
const defaults = {fontSize: 'standard', width: 'standard', focus: false};
const key = (locale, kind) => `${prefix}:${locale}:${kind}`;
const safePath = path => typeof path === 'string' && /^\/(?!\/)[^?#\\\s]*$/.test(path);
function read(locale, kind, fallback) {
  try { return JSON.parse(window.localStorage.getItem(key(locale, kind))) ?? fallback; }
  catch { return fallback; }
}
function write(locale, kind, value) {
  try {
    window.localStorage.setItem(key(locale, kind), JSON.stringify(value));
    window.dispatchEvent(new CustomEvent(READING_EVENT, {detail: {locale, kind}}));
    return true;
  } catch { return false; }
}
function list(locale, kind) {
  const value = read(locale, kind, []);
  if (!Array.isArray(value)) return [];
  return value.filter(v => v && safePath(v.path) && typeof v.title === 'string' && Number.isFinite(v.updatedAt)
    && (kind !== 'positions' || (Number.isFinite(v.progress) && v.progress >= 0 && v.progress <= 1)))
    .sort((a,b) => b.updatedAt - a.updatedAt).slice(0,100);
}
export const listBookmarks = locale => list(locale, 'bookmarks');
export const listRecentReading = locale => list(locale, 'positions');
export const isBookmarked = (locale, path) => listBookmarks(locale).some(v => v.path === path);
export function toggleBookmark(locale, entry) {
  const current = listBookmarks(locale);
  const was = current.some(v => v.path === entry.path);
  if (!safePath(entry.path) || typeof entry.title !== 'string') return {ok:false,bookmarked:was};
  const next = current.filter(v => v.path !== entry.path);
  if (!was) next.unshift({path:entry.path,title:entry.title,updatedAt:Date.now()});
  const ok = write(locale,'bookmarks',next.slice(0,100));
  return {ok,bookmarked:ok ? !was : was};
}
export const getReadingPosition = (locale,path) => listRecentReading(locale).find(v => v.path === path) ?? null;
export function saveReadingPosition(locale, entry) {
  if (!safePath(entry.path) || typeof entry.title !== 'string' || !Number.isFinite(entry.progress)) return false;
  const next = listRecentReading(locale).filter(v => v.path !== entry.path);
  next.unshift({path:entry.path,title:entry.title,progress:Math.min(1,Math.max(0,entry.progress)),updatedAt:Date.now()});
  return write(locale,'positions',next.slice(0,100));
}
function settings(value) {
  return {fontSize:['standard','large','larger'].includes(value?.fontSize) ? value.fontSize : defaults.fontSize,
    width:value?.width === 'wide' ? 'wide' : 'standard',focus:value?.focus === true};
}
export const getReadingSettings = () => settings(read('all','settings',defaults));
export const saveReadingSettings = value => write('all','settings',settings(value));
