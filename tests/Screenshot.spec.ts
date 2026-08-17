import{test,expect} from '@playwright/test'

test ('Screenhot',async({page})=>
{

await page.goto ("https://www.amazon.com")

const timestamp= Date.now()
await page.screenshot ({path:'Screenshot/'+'Homepage'+timestamp+'.png',fullPage:true});

})