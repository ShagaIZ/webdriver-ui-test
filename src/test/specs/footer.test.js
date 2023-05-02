import FooterBlock from '../../common/pageObjects/mainPage/blocks/footer.block.js';
import {urls} from '../../common/urls.js';

beforeEach(async () => {
	await browser.url(urls.mainPage);
});

describe('Footer', () => {
	it('Checking map picture', async () => {
		await expect(FooterBlock.mapPicture).toBeDisplayed();
	});

	it('Checking footer text block', async () => {
		await expect(FooterBlock.footerTextBlock).toBeDisplayed();
	});

	it('Checking "Mark Winteringham" text and link', async () => {
		await expect(FooterBlock.mark).toBeDisplayed();
		await expect(FooterBlock.mark).toHaveLink(urls.mwtestconsultancy);
	});

	it('Checking "Richard Bradshaw" text and link', async () => {
		await expect(FooterBlock.richard).toBeDisplayed();
		await expect(FooterBlock.richard).toHaveLink(urls.thefriendlytester);
	});

	it('Checking "Cookie-Policy" text and link', async () => {
		await expect(FooterBlock.cookie).toBeDisplayed();
		await expect(FooterBlock.cookie).toHaveLink(urls.cookie);
	});

	it('Checking "Privacy-Policy" text and link', async () => {
		await expect(FooterBlock.privacy).toBeDisplayed();
		await expect(FooterBlock.privacy).toHaveLink(urls.privacy);
	});

	it('Checking "Admin panel" text and link', async () => {
		await expect(FooterBlock.admin).toBeDisplayed();
		await expect(FooterBlock.admin).toHaveLink(urls.admin);
	});

	it('Checking " Automation in Testing" text and link', async () => {
		await expect(FooterBlock.automation).toBeDisplayed();
		await expect(FooterBlock.automation).toHaveLink(urls.automationintesting);
	});
});
