import MainPage from '../../common/pageObjects/main.page.js'
import { text } from '../../common/data/mainData.js'


beforeEach(async()=>{
    await browser.url('https://automationintesting.online/#/')
})

describe('Footer', () => {
   
    it('Checking map picture', async () => {
        await expect(MainPage.mapPicture).toBeDisplayed()
    })

    it('Checking footer text block', async () => {
        await expect(MainPage.footerTextBlock).toBeDisplayed()
    })

    it('Checking "Mark Winteringham" text and link', async () => {
        await expect(MainPage.mark).toBeDisplayed()
        await expect(MainPage.mark).toHaveLink('http://www.mwtestconsultancy.co.uk')
    })

    it('Checking "Richard Bradshaw" text and link', async () => {
        await expect(MainPage.richard).toBeDisplayed()
        await expect(MainPage.richard).toHaveLink('https://thefriendlytester.co.uk/')
    })

    it('Checking "Cookie-Policy" text and link', async () => {
        await expect(MainPage.cookie).toBeDisplayed()
        await expect(MainPage.cookie).toHaveLink('/#/cookie')
    })

    it('Checking "Privacy-Policy" text and link', async () => {
        await expect(MainPage.privacy).toBeDisplayed()
        await expect(MainPage.privacy).toHaveLink('/#/privacy')
    })

    it('Checking "Admin panel" text and link', async () => {
        await expect(MainPage.admin).toBeDisplayed()
        await expect(MainPage.admin).toHaveLink('/#/admin')
    })

    it('Checking " Automation in Testing" text and link', async () => {
        await expect(MainPage.automation).toBeDisplayed()
        await expect(MainPage.automation).toHaveLink('https://automationintesting.com')
    })

   

})
