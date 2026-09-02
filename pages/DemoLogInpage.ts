import{Page,Locator} from'@playwright/test';

export class LogInpage{

    private readonly page:Page;
    private readonly loginlink:Locator;
    private readonly Username:Locator;
    private readonly Password: Locator;
    private readonly Login:Locator;

constructor(page:Page) 
{
    this.page = page;
    this.loginlink=this.page.locator('#login2');
    this.Username =this.page.locator('#loginusername');
    this.Password = this.page.locator('#loginpassword');
    this.Login= this.page.locator('.btn btn-primary');

}

// async clickloginlink()
// {
//    await this.loginlink.click();
// }
// async enterusername(Username:String)
// {
//     await this.Username.fill('Username');
// }
// async enterpassword(Password:String)
// {
//     await this.Password.fill('Password');
// }
// async clickloginbutton()
// {
//     await this.Login.click();
// }

async Loginfeature(Username:string,Password:string)
{
    await this.loginlink.click();
    await this.Username.fill('Username');
    await this.Password.fill('Password');
    await this.Login.click();
}
}