import{test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test ('validation of Login',async({page})=>{

    const loginPage = new LoginPage(page);

    await page.goto ("https://practicetestautomation.com/practice-test-login/");

    await loginPage.login('student','Password123');

    

})