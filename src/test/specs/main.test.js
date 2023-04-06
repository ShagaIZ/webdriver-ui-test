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

describe('Feedback', () =>{
    
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


describe('Contacts', () =>{
    
    it('Validate name comapny text and icon', async () => {
        await expect(MainPage.nameCompany).toBeDisplayed()
        await expect(MainPage.iconNameCompany).toBeDisplayed()
    })

    it('Validate address comapny text', async () => {
        await expect(MainPage.addressCompany).toBeDisplayed()
      
    
    })

    it('Validate phone number comapny text and icon', async () => {
        await expect(MainPage.phoneNumberCompany).toBeDisplayed()
        await expect(MainPage.iconPhoneNumberCompany).toBeDisplayed()
    
    })

    it('Validate email comapny text and icon', async () => {
        await expect(MainPage.emailCompany).toBeDisplayed()
        await expect(MainPage.iconEmailCompany).toBeDisplayed()
    
    })
   
})

describe('Rooms', () => {

    
    it('Checkings titles', async () => {
        await expect(MainPage.titleRooms).toBeDisplayed()
        await expect(MainPage.titleSingle).toBeDisplayed()
    })

    it('Checking pictures', async () => {
        await expect(MainPage.roomsPic).toBeDisplayed()
    })

    it('Checking icon man', async () => {
        await expect(MainPage.iconMan).toBeDisplayed()
    })

    it('Checking text of single block', async () => {
        await expect(MainPage.singleBlock).toHaveTextContaining(text.singleBlock)
    })

    it('Checking  button "Book this room"', async () => {
        await expect(MainPage.bookThisRoomButton).toBeDisplayed()
    })

    it('Checking  "TV" item', async () => {
        await expect(MainPage.tvItem).toBeDisplayed()
    })

    it('Checking  "WiFi" item', async () => {
        await expect(MainPage.wififItem).toBeDisplayed()
    })

    it('Checking "Safe" item', async () => {
        await expect(MainPage.saveItem).toBeDisplayed()
    })

})