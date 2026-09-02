import{test,expect} from '@playwright/test'

test ('Testing locators', async({page})=>{

    await page.goto("https://kiro.dev/")

    //await expect (page.getByAltText("Kiro")).toBeVisible()

    await page.locator ('#header').getByAltText ('Kiro').click();
})