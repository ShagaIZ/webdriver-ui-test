import MainPage from '../../common/pageObjects/mainPage/main.page.js'
import { text } from '../../common/data/mainData.js'
import { urls } from '../../common/urls.js'




beforeEach(async()=>{
    await browser.url(urls.mainPage)
})

describe('Common tests', () => {

    it('Cheking URL', async () => {
        await expect(browser).toHaveUrl(urls.mainPage)
    })

    it('Checking logo and text under it', async () => {
        await expect(MainPage.logoHotel).toBeDisplayed()
        await expect(MainPage.logoHotel).toHaveAttr('src',urls.mwtestconsultancyLogo)
        await expect(MainPage.infoText).toBeDisplayed()
        await expect(MainPage.infoText).toHaveText(text.info)
    })
})





