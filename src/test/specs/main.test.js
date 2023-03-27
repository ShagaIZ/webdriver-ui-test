import MainPage from '../../common/pageObjects/main.page.js'
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

describe('Test for feedback', () =>{
    
    it('Validate "Name" field', async () => {
        await expect(MainPage.iconNameField).toBeDisplayed()
        await expect(MainPage.nameField).toBeDisplayed()
        await expect(MainPage.nameField).toHaveAttr('placeholder', 'Name')
    })

    it('Validate "Email" field', async () => {
        await expect(MainPage.iconEmailField).toBeDisplayed()
        await expect(MainPage.emailField).toBeDisplayed()
        await expect(MainPage.emailField).toHaveAttr('placeholder', 'Email')
    })

    it('Validate "Phone" field', async () => {
        await expect(MainPage.iconPhoneField).toBeDisplayed()
        await expect(MainPage.phoneField).toBeDisplayed()
        await expect(MainPage.phoneField).toHaveAttr('placeholder', 'Phone')
    })

    it('Validate "Subject" field', async () => {
        await expect(MainPage.iconSubjectField).toBeDisplayed()
        await expect(MainPage.subjectField).toBeDisplayed()
        await expect(MainPage.subjectField).toHaveAttr('placeholder', 'Subject')
    })

    it('Validate "Message" field', async () => {
        await expect(MainPage.messageTitle).toBeDisplayed()
        await expect(MainPage.messageField).toBeDisplayed()
    })

    it('Validate "Submit" button', async () => {
        await expect(MainPage.submitButton).toBeDisplayed()
    
    })
})