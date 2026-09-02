import{test,expect} from '@playwright/test'
import {LogInpage} from '../pages/DemoLogInpage';

test('loginpage',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    const loginpage=new LogInpage(page);

    await loginpage.Loginfeature('pulis','puli@1976')

})
    
    