import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class MainPage extends BasePage {
	private readonly _profileBtn: Locator;
	private readonly feed: Locator;
	private readonly searchInput: Locator;
	private readonly alternativeContent: Locator;
	private readonly friendsBtn: Locator;
	private readonly photoBtn: Locator;
	private readonly musicBtn: Locator;

	constructor(page: Page) {
		super(page);
		this.searchInput = page.locator(
			"xpath=.//*[@id='toolbar_search']/toolbar-search//input[@name='st.query']"
		);
		this.feed = page.locator("xpath=.//*[@id='hook_Block_MainFeedsWrapper'");
		this.alternativeContent = page.locator(
			"xpath=.//*[@id='hook_Block_AlternativeContent'"
		);
		this._profileBtn = page.locator(
			"xpath=.//div[@class='navigation']//a[contains(@data-l,'userPage')]"
		);
		this.friendsBtn = page.locator(
			"xpath=.//div[@class='navigation']//a[contains(@data-l,'userFriend')]"
		);
		this.photoBtn = page.locator(
			"xpath=.//div[@class='navigation']//a[contains(@data-l,'userPhoto')]"
		);
		this.musicBtn = page.locator(
			"xpath=.//*[@id='hook_Block_MusicToolbarButton']"
		);
	}

	get profileBtn(): Locator {
		return this._profileBtn;
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

	async openFriends() {
		await this.friendsBtn.click();
	}

	async openPhoto() {
		await this.photoBtn.click();
	}

	async openMusic() {
		await this.musicBtn.click();
	}

	async checkPage() {
		await expect(this.feed.isVisible()).toBeTruthy();
		await expect(this.profileBtn.isEnabled()).toBeTruthy();
		await expect(this.friendsBtn.isEnabled()).toBeTruthy();
	}
}
