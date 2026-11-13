const {chromium}=require(process.env.PLAYWRIGHT_PATH || '/tmp/docs-ui-qa/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({headless:true});let failures=[];
for(const width of [320,375,390,768,1440]){
 const page=await browser.newPage({viewport:{width,height:844}});
 for(const path of ['/en/','/en/docs/energie/netcongestie/','/en/docs/technical/ocpp-overview/','/docs/energie/netcongestie/']){
  await page.goto((process.env.BASE_URL||'http://127.0.0.1:8765')+path);await page.waitForTimeout(350);
  const s=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1, font:document.querySelector('h1') ? getComputedStyle(document.querySelector('h1')).fontFamily : 'missing h1',tableOverflow:[...document.querySelectorAll('.theme-doc-markdown table')].every(t=>getComputedStyle(t).overflowX==='auto')}));
  try{assert.equal(s.overflow,false,'horizontal page overflow');assert.match(s.font,/Archivo/,'brand headline font');if(width<997)assert.equal(s.tableOverflow,true,'tables independently scroll');console.log('PASS',width,path)}catch(e){failures.push({width,path,error:e.message});}
 }
 await page.close();
}
await browser.close();console.log(JSON.stringify(failures,null,2));if(failures.length)process.exitCode=1;})();
