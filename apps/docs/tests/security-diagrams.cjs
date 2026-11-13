const {chromium}=require('/tmp/docs-ui-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{const b=await chromium.launch({headless:true}); const base=process.env.BASE_URL||'http://127.0.0.1:8765';let checks=0;fs.mkdirSync('design/qa/security',{recursive:true});
try {for(const width of [320,375,768,1024,1280,1440])for(const theme of ['light','dark'])for(const locale of ['en','nl']){
 const c=await b.newContext({viewport:{width,height:950},colorScheme:theme});const p=await c.newPage();const errors=[];p.on('pageerror',e=>errors.push(String(e)));const prefix=locale==='en'?'/en':'';
 let r=await p.goto(base+prefix+'/');assert.equal(r.status(),200);
 await p.waitForFunction(t=>document.documentElement.dataset.theme===t,theme);
 assert.match(await p.locator('h1').innerText(),locale==='en'?/Secure energy/:/Veilige energie/);
 const cta=p.locator('.kb-hero a[href$="/docs/security/architecture"]');assert.equal(await cta.count(),1);await cta.click();
 await p.waitForURL('**/docs/security/architecture*');await p.locator('.architecture-figure').first().waitFor();
 assert.equal(await p.locator('.architecture-figure').count(),2);
 for(const img of await p.locator('.architecture-scroll .architecture-'+theme).all()) {await img.scrollIntoViewIfNeeded();await img.evaluate(e=>e.decode());assert(await img.isVisible());}
 assert.equal(await p.locator('.architecture-scroll .architecture-'+(theme==='light'?'dark':'light')).first().isVisible(),false);
 assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'page overflow '+width+locale);
 const region=p.locator('.architecture-scroll').first();assert(await region.evaluate(e=>e.scrollWidth<=e.clientWidth+1),'diagram clipped');
 const figure=p.locator('.architecture-figure').first();await figure.locator('figcaption button').click();const dialog=figure.locator('dialog');assert(await dialog.isVisible());await dialog.getByRole('button',{name:locale==='en'?'Zoom in':'Inzoomen',exact:true}).click();const canvas=dialog.locator('.architecture-dialog-canvas');await canvas.focus();await p.keyboard.press('ArrowRight');if(width<1280)await p.waitForFunction(()=>document.querySelector('dialog[open] .architecture-dialog-canvas').scrollLeft>0);await p.keyboard.press('Escape');assert.equal(await dialog.isVisible(),false);assert(await figure.locator('figcaption button').evaluate(e=>e===document.activeElement),'focus returns to enlarge button');
 for(const a of await p.locator('.architecture-figure a').all()){const u=await a.getAttribute('href');const res=await c.request.get(base+u);assert.equal(res.status(),200);assert.match(await res.text(),/<svg/);}
 if(width===375||width===1440)await p.screenshot({path:`design/qa/security/${locale}-${theme}-${width}.png`,fullPage:true});assert.deepEqual(errors,[]);checks++;await c.close();
 }console.log(JSON.stringify({passed:checks,locales:['en','nl'],themes:['light','dark'],widths:[320,375,768,1024,1280,1440],pageErrors:0}));}finally{await b.close();}})().catch(e=>{console.error(e);process.exit(1)});
