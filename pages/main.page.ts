import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class MainPage extends BasePage {
	readonly feed: Locator;
	readonly searchInput: Locator;
	readonly alternativeContent: Locator;
	readonly profileBtn: Locator;
	readonly friendsBtn: Locator;
	readonly photoBtn: Locator;

	constructor(page: Page) {
		super(page);
		this.searchInput = page.locator(
			"xpath=.//*[@id='toolbar_search']/toolbar-search//input[@name='st.query']"
		);
		this.feed = page.locator("xpath=.//*[@id='hook_Block_MainFeedsWrapper'");
		this.alternativeContent = page.locator(
			"xpath=.//*[@id='hook_Block_AlternativeContent'"
		);
		this.profileBtn = page.locator(
			"xpath=.//div[@class='navigation']//a[contains(@data-l,'userPage')]"
		);
		this.friendsBtn = page.locator(
			"xpath=.//div[@class='navigation']//a[contains(@data-l,'userFriend')]"
		);
		this.photoBtn = page.locator(
			"xpath=.//div[@class='navigation']//a[contains(@data-l,'userPhoto')]"
		);
	}

	async setValueToSearchBar(value: string) {
		await this.searchInput.fill(value);
		return this;
	}

	async pressSearchBtn() {
		await this.searchInput.press('Enter');
		return this;
	}

	async search(value: string) {
		await this.setValueToSearchBar(value);
		await this.pressSearchBtn();
	}

	getProfileBtn(): Locator {
		return this.profileBtn;
	}

	async openFriends() {
		this.friendsBtn.click();
	}

	async openPhoto() {
		this.friendsBtn.click();
	}

	async checkPage() {
		await expect(this.feed.isVisible()).toBeTruthy();
		await expect(this.profileBtn.isEnabled()).toBeTruthy();
		await expect(this.friendsBtn.isEnabled()).toBeTruthy();
	}
}
