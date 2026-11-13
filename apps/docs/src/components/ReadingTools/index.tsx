import React, {useEffect, useId, useRef, useState} from 'react';
import {READING_EVENT, getReadingSettings, saveReadingSettings, isBookmarked, toggleBookmark, getReadingPosition, saveReadingPosition} from '../../utils/readingStorage.mjs';
import {articleProgress, readingMinutes, resumeTarget} from '../../utils/readingMetrics.mjs';
import {readingStrings} from './strings.mjs';
import './styles.css';

type Settings = {fontSize: string; width: string; focus: boolean};
type Props = {locale: string; path: string; title: string};
export default function ReadingTools({locale, path, title}: Props) {
  const t = readingStrings[locale === 'nl' ? 'nl' : 'en'];
  const [minutes, setMinutes] = useState(1);
  const [progress, setProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [settings, setSettings] = useState<Settings>({fontSize:'standard',width:'standard',focus:false});
  const [open, setOpen] = useState(false);
  const [resume, setResume] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const settingsId = useId();
  const settingsButton = useRef<HTMLButtonElement>(null);
  const focusButton = useRef<HTMLButtonElement>(null);
  const generation = useRef(0);

  useEffect(() => {
    const token = ++generation.current;
    const article = document.querySelector<HTMLElement>('.theme-doc-markdown');
    setStatus('');setOpen(false);setBookmarked(isBookmarked(locale,path));setSettings(getReadingSettings());
    const previous = getReadingPosition(locale,path);
    if (!previous) saveReadingPosition(locale,{path,title,progress:0});
    setResume(previous && previous.progress > .02 && previous.progress < .98 ? previous.progress : null);
    setMinutes(readingMinutes(article?.textContent ?? ''));
    let frame = 0;
    let dirty = false;
    let lastSaved = -1;
    const measure = (persist = false) => {
      if (!article?.isConnected || generation.current !== token) return;
      const value = articleProgress(article.getBoundingClientRect(),window.innerHeight);
      setProgress(value);
      // Save only actual scrolling, not the initial render (which would destroy a resume offer).
      if (persist && Math.abs(value-lastSaved) >= .005) {
        saveReadingPosition(locale,{path,title,progress:value});lastSaved=value;
      }
    };
    const schedule = () => {
      dirty=true;
      if (!frame) frame=window.requestAnimationFrame(()=>{frame=0;measure(dirty);dirty=false});
    };
    const resize = () => measure();
    const sync = () => {setBookmarked(isBookmarked(locale,path));setSettings(getReadingSettings())};
    const pagehide = () => {if(dirty) measure(true)};
    measure();
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',resize);
    window.addEventListener('pagehide',pagehide);
    window.addEventListener('storage',sync);
    window.addEventListener(READING_EVENT,sync);
    const observer = typeof ResizeObserver !== 'undefined' && article ? new ResizeObserver(resize) : null;
    if (observer && article) observer.observe(article);
    return () => {
      if(dirty) measure(true);
      ++generation.current;
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener('scroll',schedule);window.removeEventListener('resize',resize);
      window.removeEventListener('pagehide',pagehide);window.removeEventListener('storage',sync);window.removeEventListener(READING_EVENT,sync);
    };
  },[locale,path,title]);

  useEffect(()=>{
    const root=document.documentElement;
    root.dataset.readingFont=settings.fontSize;root.dataset.readingWidth=settings.width;
    root.dataset.readingFocus=String(settings.focus);
    return ()=>{delete root.dataset.readingFont;delete root.dataset.readingWidth;delete root.dataset.readingFocus};
  },[settings]);
  function updateSettings(next: Settings) {
    setSettings(next);
    if(!saveReadingSettings(next)) setStatus(t.storageFailed);
  }
  function exitFocus() {
    updateSettings({...settings,focus:false});
    (open ? focusButton.current : settingsButton.current)?.focus();
  }
  useEffect(()=>{
    const escape=(event: KeyboardEvent)=>{
      if(event.key !== 'Escape') return;
      if(settings.focus) exitFocus();
      else if(open) {setOpen(false);settingsButton.current?.focus()}
    };
    window.addEventListener('keydown',escape);
    return ()=>window.removeEventListener('keydown',escape);
  },[settings,open,t]);
  useEffect(()=>{
    const searchShortcut=(event: KeyboardEvent)=>{
      if(settings.focus && (event.ctrlKey || event.metaKey) && event.key.toLowerCase()==='k') {
        event.preventDefault();event.stopImmediatePropagation();
        updateSettings({...settings,focus:false});
        window.requestAnimationFrame(()=>document.querySelector<HTMLInputElement>('.navbar__search-input')?.focus());
      }
    };
    window.addEventListener('keydown',searchShortcut,true);
    return ()=>window.removeEventListener('keydown',searchShortcut,true);
  },[settings]);
  async function copyLink() {
    const token=generation.current;
    setStatus('');
    try {
      await navigator.clipboard.writeText(window.location.href);
      if(generation.current===token) setStatus(t.copied);
    } catch {if(generation.current===token) setStatus(t.copyFailed)}
  }
  function bookmark() {
    const result=toggleBookmark(locale,{path,title});
    setBookmarked(result.bookmarked);
    setStatus(result.ok ? (result.bookmarked ? t.bookmarkAdded : t.bookmarkRemoved) : t.storageFailed);
  }
  function resumeReading() {
    const article=document.querySelector<HTMLElement>('.theme-doc-markdown');
    if(article && resume !== null) {
      const top=resumeTarget(article.getBoundingClientRect(),window.innerHeight,window.scrollY,resume);
      const old=article.getAttribute('tabindex');
      article.setAttribute('tabindex','-1');article.focus({preventScroll:true});
      if(old === null) article.removeAttribute('tabindex');else article.setAttribute('tabindex',old);
      window.scrollTo({top,behavior:'auto'});
    }
    setResume(null);
  }
  return <section className="reading-tools" aria-label={t.tools}>
    <div className="reading-tools__bar">
      <span className="reading-tools__time">{minutes} {t.minutes}</span>
      <button type="button" aria-pressed={bookmarked} onClick={bookmark}>{bookmarked ? t.saved : t.save}</button>
      <button type="button" onClick={copyLink}>{t.copy}</button>
      <button type="button" onClick={()=>{try {window.print()}catch{setStatus(t.printFailed)}}}>{t.print}</button>
      <button type="button" ref={settingsButton} aria-expanded={open} aria-controls={settingsId} onClick={()=>setOpen(!open)}>{t.settings}</button>
      {settings.focus && <button type="button" className="reading-tools__exit" onClick={exitFocus}>{t.exitFocus}</button>}
    </div>
    <div className="reading-tools__progress"><progress max={1} value={progress} aria-label={t.progress}/><span aria-hidden="true">{Math.round(progress*100)}%</span></div>
    {resume !== null && <div className="reading-tools__resume"><span>{t.resumeOffer}</span><button type="button" onClick={resumeReading}>{t.resume}</button><button type="button" onClick={()=>{setResume(null);settingsButton.current?.focus()}}>{t.dismiss}</button></div>}
    <div id={settingsId} hidden={!open} className="reading-tools__settings">
      <p>{locale === 'nl' ? 'Bladwijzers, leespositie en voorkeuren worden alleen in deze browser bewaard; ze worden niet gesynchroniseerd.' : 'Bookmarks, reading position and preferences are saved only in this browser; they do not sync across devices.'}</p>
      <label>{t.font}<select aria-label={t.font} value={settings.fontSize} onChange={e=>updateSettings({...settings,fontSize:e.target.value})}><option value="standard">{t.standard}</option><option value="large">{t.large}</option><option value="larger">{t.larger}</option></select></label>
      <label>{t.width}<select aria-label={t.width} value={settings.width} onChange={e=>updateSettings({...settings,width:e.target.value})}><option value="standard">{t.standard}</option><option value="wide">{t.wide}</option></select></label>
      <button type="button" ref={focusButton} aria-pressed={settings.focus} onClick={()=>updateSettings({...settings,focus:!settings.focus})}>{t.focus}</button>
      <button type="button" onClick={()=>{setOpen(false);settingsButton.current?.focus()}}>{t.close}</button>
    </div>
    <p className="reading-tools__status" role="status" aria-live="polite" aria-atomic="true">{status}</p>
  </section>;
}
