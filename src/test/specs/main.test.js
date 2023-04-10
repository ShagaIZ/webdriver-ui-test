import MainPage from '../../common/pageObjects/mainPage/main.page.js'
import { text } from '../../common/data/mainData.js'




beforeEach(async()=>{
    await browser.url('https://automationintesting.online/#/')
})

describe('Common tests', () => {

    it('Cheking URL', async () => {
        await expect(browser).toHaveUrl('https://automationintesting.online/#/')
    })

    it('Checking logo and text under it', async () => {
        await expect(MainPage.logoHotel).toBeDisplayed()
        await expect(MainPage.logoHotel).toHaveAttr('src','https://www.mwtestconsultancy.co.uk/img/rbp-logo.png')
        await expect(MainPage.infoText).toBeDisplayed()
        await expect(MainPage.infoText).toHaveText(text.info)
    })
})





