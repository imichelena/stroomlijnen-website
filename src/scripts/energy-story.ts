const isEnglish = document.documentElement.lang === 'en';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const nav = document.querySelector<HTMLElement>('#story-nav');
function setMenu(open:boolean) { toggle?.setAttribute('aria-expanded',String(open)); nav?.classList.toggle('is-open',open); }
toggle?.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape' && toggle?.getAttribute('aria-expanded')==='true'){setMenu(false);toggle.focus();}});
if ('IntersectionObserver' in window) { const reveals = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');reveals.unobserve(entry.target);}}),{threshold:.08}); document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el=>{el.classList.add('will-reveal');reveals.observe(el);}); }
const states = isEnglish ? [
 {time:'08:00',name:'Starting up',grid:90,building:65,charging:30,solar:5,battery:0,batteryLabel:'Battery on standby',insight:'Your building uses 65 kW. Vehicles charge at 30 kW. Solar contributes 5 kW.'},
 {time:'12:00',name:'Using your solar',grid:60,building:45,charging:40,solar:45,battery:20,batteryLabel:'Battery charging',insight:'Your roof contributes 45 kW. Alongside the building and vehicles, the battery charges at 20 kW.'},
 {time:'17:00',name:'Managing the peak',grid:75,building:70,charging:35,solar:5,battery:25,batteryLabel:'Battery supplying',insight:'The battery supplies 25 kW. With another 5 kW from solar, demand on the grid stays at 75 kW.'},
 {time:'22:00',name:'Preparing for tomorrow',grid:80,building:20,charging:60,solar:0,battery:0,batteryLabel:'Battery on standby',insight:'The building needs less power. There is room for vehicles to charge at 60 kW.'}
] : [
 {time:'08:00',name:'Opstarten',grid:90,building:65,charging:30,solar:5,battery:0,batteryLabel:'Batterij in rust',insight:'Uw gebouw gebruikt 65 kW. De voertuigen laden met 30 kW. De zon draagt 5 kW bij.'},
 {time:'12:00',name:'Eigen zon benutten',grid:60,building:45,charging:40,solar:45,battery:20,batteryLabel:'Batterij laadt op',insight:'45 kW van uw dak doet mee. Naast uw gebouw en voertuigen laadt ook de batterij met 20 kW.'},
 {time:'17:00',name:'De piek verdelen',grid:75,building:70,charging:35,solar:5,battery:25,batteryLabel:'Batterij levert',insight:'De batterij levert 25 kW. Samen met 5 kW zon blijft de vraag uit het net op 75 kW.'},
 {time:'22:00',name:'Morgen voorbereiden',grid:80,building:20,charging:60,solar:0,battery:0,batteryLabel:'Batterij in rust',insight:'Het gebouw vraagt minder. Er is ruimte om de voertuigen met 60 kW te laden.'}
];
let currentDay = -1;
function activateDay(index:number) { if(index===currentDay) return; currentDay=index; const s=states[index]; const visual=document.querySelector<HTMLElement>('.day-visual'); if(!visual) return; visual.dataset.currentDay=String(index); const time=visual.querySelector('.visual-time');if(time)time.textContent=s.time; const status=visual.querySelector('.day-state');if(status)status.textContent=s.name; ['grid','building','charging','solar','battery'].forEach(key=>{const value=s[key as keyof typeof s] as number;const num=document.getElementById(`${key}-value`);if(num)num.textContent=String(value);const bar=document.getElementById(key==='grid'?'grid-gauge':`${key}-bar`);if(bar)bar.style.width=`${value}%`;}); const bl=document.getElementById('battery-label');if(bl)bl.textContent=s.batteryLabel; const insight=document.getElementById('day-insight');if(insight)insight.textContent=s.insight; document.querySelectorAll<HTMLElement>('[data-day-link]').forEach(a=>{const active=Number(a.dataset.dayLink)===index;a.classList.toggle('is-active',active);if(active)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current');}); document.querySelectorAll<HTMLElement>('.day-chapter').forEach(ch=>ch.classList.toggle('is-active',Number(ch.dataset.day)===index)); }
const chapters=Array.from(document.querySelectorAll<HTMLElement>('.day-chapter'));let scheduled=false;
function readingPoint(){ const sticky=document.querySelector<HTMLElement>('.day-sticky'); const overlay=window.innerWidth<=800 && sticky ? Math.min(sticky.offsetHeight+10,window.innerHeight*.6) : 0; return overlay+(window.innerHeight-overlay)*.49; }
function updateScroll(){ const max=document.documentElement.scrollHeight-window.innerHeight;document.documentElement.style.setProperty('--reading',`${max>0?window.scrollY/max*100:0}%`);if(chapters.length){const point=readingPoint();let nearest=0;let distance=Infinity;chapters.forEach((ch,i)=>{const rect=ch.getBoundingClientRect();const d=Math.abs(rect.top+rect.height*.45-point);if(d<distance){distance=d;nearest=i;}});activateDay(nearest);}scheduled=false; }
window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateScroll);}},{passive:true});window.addEventListener('resize',updateScroll);updateScroll();
const tabs=Array.from(document.querySelectorAll<HTMLButtonElement>('[data-sector]'));
function activateTab(index:number,focus=false){tabs.forEach((tab,i)=>{const active=i===index;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;const panel=document.getElementById(tab.getAttribute('aria-controls')!);if(panel)panel.hidden=!active;});if(focus)tabs[index].focus();}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>activateTab(index));tab.addEventListener('keydown',e=>{let next=index;if(e.key==='ArrowDown'||e.key==='ArrowRight')next=(index+1)%tabs.length;else if(e.key==='ArrowUp'||e.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();activateTab(next,true);});});
reduceMotion.addEventListener('change',()=>document.documentElement.classList.toggle('reduce-motion',reduceMotion.matches));

document.querySelectorAll<HTMLAnchorElement>('[data-day-link]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();const index=Number(link.dataset.dayLink);const chapter=chapters[index];if(!chapter)return;const target=window.scrollY+chapter.getBoundingClientRect().top+chapter.offsetHeight*.45-readingPoint();history.replaceState(null,'',link.hash);window.scrollTo({top:target,behavior:reduceMotion.matches?'instant':'smooth'});}));
const motionToggle=document.querySelector<HTMLButtonElement>('[data-home-motion]');
motionToggle?.addEventListener('click',()=>{const paused=document.body.classList.toggle('motion-paused');motionToggle.setAttribute('aria-pressed',String(paused));motionToggle.textContent=paused?(isEnglish?'Play animation':'Animatie afspelen'):(isEnglish?'Pause animation':'Animatie pauzeren');});

document.querySelectorAll<HTMLElement>('[data-rendered-campus]').forEach(campus=>{
  const choices=Array.from(campus.querySelectorAll<HTMLButtonElement>('[data-campus-choice]'));
  const detail=campus.querySelector<HTMLElement>('.campus-detail');
  choices.forEach((button,index)=>button.addEventListener('click',()=>{
    choices.forEach((choice,i)=>choice.setAttribute('aria-pressed',String(i===index)));
    campus.querySelectorAll<HTMLElement>('[data-campus-point]').forEach((point,i)=>point.classList.toggle('is-active',i===index));
    if(detail)detail.textContent=button.dataset.description||'';
  }));
});
