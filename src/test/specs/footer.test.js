import FooterBlock from '../../common/pageObjects/mainPage/blocks/footer.block.js'




beforeEach(async()=>{
    await browser.url('https://automationintesting.online/#/')
})

describe('Footer', () => {
   
    it('Checking map picture', async () => {
        await expect(FooterBlock.mapPicture).toBeDisplayed()
    })

    it('Checking footer text block', async () => {
        await expect(FooterBlock.footerTextBlock).toBeDisplayed()
    })

    it('Checking "Mark Winteringham" text and link', async () => {
        await expect(FooterBlock.mark).toBeDisplayed()
        await expect(FooterBlock.mark).toHaveLink('http://www.mwtestconsultancy.co.uk')
    })

    it('Checking "Richard Bradshaw" text and link', async () => {
        await expect(FooterBlock.richard).toBeDisplayed()
        await expect(FooterBlock.richard).toHaveLink('https://thefriendlytester.co.uk/')
    })

    it('Checking "Cookie-Policy" text and link', async () => {
        await expect(FooterBlock.cookie).toBeDisplayed()
        await expect(FooterBlock.cookie).toHaveLink('/#/cookie')
    })

    it('Checking "Privacy-Policy" text and link', async () => {
        await expect(FooterBlock.privacy).toBeDisplayed()
        await expect(FooterBlock.privacy).toHaveLink('/#/privacy')
    })

    it('Checking "Admin panel" text and link', async () => {
        await expect(FooterBlock.admin).toBeDisplayed()
        await expect(FooterBlock.admin).toHaveLink('/#/admin')
    })

    it('Checking " Automation in Testing" text and link', async () => {
        await expect(FooterBlock.automation).toBeDisplayed()
        await expect(FooterBlock.automation).toHaveLink('https://automationintesting.com')
    })

   

})
