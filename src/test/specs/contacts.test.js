import ContactsBlock from '../../common/pageObjects/mainPage/blocks/contacts.block.js';
import {urls} from '../../common/urls.js';

beforeEach(async () => {
	await browser.url(urls.mainPage);
});

describe('Contacts', () => {
	it('Validate name comapny text and icon', async () => {
		await expect(ContactsBlock.nameCompany).toBeDisplayed();
		await expect(ContactsBlock.iconNameCompany).toBeDisplayed();
	});

	it('Validate address comapny text', async () => {
		await expect(ContactsBlock.addressCompany).toBeDisplayed();
	});

	it('Validate phone number comapny text and icon', async () => {
		await expect(ContactsBlock.phoneNumberCompany).toBeDisplayed();
		await expect(ContactsBlock.iconPhoneNumberCompany).toBeDisplayed();
	});

	it('Validate email comapny text and icon', async () => {
		await expect(ContactsBlock.emailCompany).toBeDisplayed();
		await expect(ContactsBlock.iconEmailCompany).toBeDisplayed();
	});
});
