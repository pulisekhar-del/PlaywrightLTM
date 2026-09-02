import {Page, Locator} from '@playwright/test'

export class LoginPage {

    private readonly page:Page;
    private readonly Username: Locator;
    private readonly Password: Locator;
    private readonly Submit: Locator;

    constructor(page:Page){

        this.page = page;
        this.Username= page.locator('#username');
        this.Password=page.locator('#password');
        this.Submit=page.locator('#submit');
    }
 
    async login(username:string,password:string){
         await this.Username.fill("Username")
         await this.Password.fill("Password")
         await this.Submit.click();
         
    }

   }