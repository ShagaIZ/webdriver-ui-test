import FeedbackBlock from '../../common/pageObjects/mainPage/blocks/feedback.block.js'




beforeEach(async()=>{
    await browser.url('https://automationintesting.online/#/')
})

describe('Feedback', () =>{
    
    it('Validate "Name" field', async () => {
        await expect(FeedbackBlock.iconNameField).toBeDisplayed()
        await expect(FeedbackBlock.nameField).toBeDisplayed()
        await expect(FeedbackBlock.nameField).toHaveAttr('placeholder', 'Name')
    })

    it('Validate "Email" field', async () => {
        await expect(FeedbackBlock.iconEmailField).toBeDisplayed()
        await expect(FeedbackBlock.emailField).toBeDisplayed()
        await expect(FeedbackBlock.emailField).toHaveAttr('placeholder', 'Email')
    })

    it('Validate "Phone" field', async () => {
        await expect(FeedbackBlock.iconPhoneField).toBeDisplayed()
        await expect(FeedbackBlock.phoneField).toBeDisplayed()
        await expect(FeedbackBlock.phoneField).toHaveAttr('placeholder', 'Phone')
    })

    it('Validate "Subject" field', async () => {
        await expect(FeedbackBlock.iconSubjectField).toBeDisplayed()
        await expect(FeedbackBlock.subjectField).toBeDisplayed()
        await expect(FeedbackBlock.subjectField).toHaveAttr('placeholder', 'Subject')
    })

    it('Validate "Message" field', async () => {
        await expect(FeedbackBlock.messageTitle).toBeDisplayed()
        await expect(FeedbackBlock.messageField).toBeDisplayed()
    })

    it('Validate "Submit" button', async () => {
        await expect(FeedbackBlock.submitButton).toBeDisplayed()
    
    })
})