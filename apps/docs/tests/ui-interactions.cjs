const {chromium}=require(process.env.PLAYWRIGHT_PATH || '/tmp/docs-ui-qa/node_modules/playwright');
const assert=require('node:assert/strict');const fs=require('node:fs');
const base=process.env.BASE_URL||'http://127.0.0.1:8765';
(async()=>{
 const browser=await chromium.launch({headless:true});const errors=[];const results=[];
 fs.mkdirSync('/root/docs-new/design/qa',{recursive:true});
 for(const width of [375,1440]){
  const context=await browser.newContext({viewport:{width,height:900},permissions:['clipboard-read','clipboard-write'],ignoreHTTPSErrors:!!process.env.BASE_URL});
  const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
  await p.goto(base+'/en/docs/energie/netcongestie/');await p.getByRole('button',{name:'Reading settings',exact:true}).waitFor();
  await p.getByRole('button',{name:'Save',exact:true}).click();await p.getByRole('button',{name:'Saved',exact:true}).waitFor();
  await p.getByRole('button',{name:'Copy link',exact:true}).click();await p.getByText('Link copied',{exact:true}).waitFor();
  await p.getByRole('button',{name:'Reading settings',exact:true}).click();
  await p.getByLabel('Text size',{exact:true}).selectOption('larger');
  await p.getByLabel('Reading width',{exact:true}).selectOption('wide');
  assert.equal(await p.locator('html').getAttribute('data-reading-font'),'larger');
  await p.getByRole('button',{name:'Focus mode',exact:true}).click();
  assert.equal(await p.locator('.navbar').isVisible(),false);
  await p.getByRole('button',{name:'Exit focus mode',exact:true}).click();
  assert.equal(await p.locator('.navbar').isVisible(),true);
  await p.getByLabel('Text size',{exact:true}).selectOption('standard');await p.getByLabel('Reading width',{exact:true}).selectOption('standard');
  await p.getByRole('button',{name:'Close settings',exact:true}).click();
  await p.evaluate(()=>scrollTo(0,document.documentElement.scrollHeight*.3));await p.waitForTimeout(300);
  await p.reload();await p.getByRole('button',{name:'Resume reading',exact:true}).waitFor();
  await p.getByRole('button',{name:'Resume reading',exact:true}).click();await p.waitForFunction(()=>scrollY>100);
  await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(250);
  for(const mode of ['light','dark']){
   await p.emulateMedia({colorScheme:mode});await p.waitForFunction(m=>document.documentElement.dataset.theme===m,mode);await p.waitForTimeout(150);
   await p.screenshot({path:`/root/docs-new/design/qa/article-${width}-${mode}.png`,fullPage:false});
   assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,'article overflow '+width+mode);
  }
  await p.emulateMedia({media:'print'});assert.equal(await p.locator('.reading-tools').isVisible(),false);await p.emulateMedia({media:'screen'});
  if(width<997){await p.getByRole('button',{name:'Toggle navigation bar',exact:true}).click();await p.locator('.navbar-sidebar').waitFor({state:'visible'});await p.getByRole('button',{name:'Close navigation bar',exact:true}).click();}
  await p.goto(base+'/en/');await p.locator('.kb-library-panel').first().getByRole('link').first().waitFor();
  for(const mode of ['light','dark']){await p.emulateMedia({colorScheme:mode});await p.waitForFunction(m=>document.documentElement.dataset.theme===m,mode);await p.waitForTimeout(150);await p.screenshot({path:`/root/docs-new/design/qa/home-${width}-${mode}.png`,fullPage:false});}
  await p.locator('#kb-search').fill('charging');await p.locator('.kb-search button').click();await p.waitForURL(/search\/?\?q=charging/);await p.waitForTimeout(1200);
  await p.getByRole('heading',{name:'Search results for "charging"'}).waitFor();
  assert.ok(await p.locator('a[href*="/docs/"]').count()>0,'search returns document links');
  assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,'search overflow');
  results.push({width,passed:['bookmark','copy','settings','focus','resume','print','library','search','themes']});await context.close();
 }
 assert.deepEqual(errors,[]);console.log(JSON.stringify({results,errors},null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
