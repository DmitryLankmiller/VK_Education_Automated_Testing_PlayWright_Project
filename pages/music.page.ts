import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class MusicPage extends BasePage {
	private readonly musicVolume: Locator;
	private readonly rangeController: Locator;
	private readonly playBtn: Locator;
	private readonly searchBtn: Locator;

	constructor(page: Page) {
		super(page);
		this.musicVolume = page.locator("xpath=.//wm-range[@class='volume']");
		this.rangeController = this.musicVolume.locator(
			"xpath=//*[@class='range-bar']/input"
		);
		this.playBtn = page.locator(
			"xpath=.//wm-player//*[@data-tsid='play_button']"
		);
		this.searchBtn = page.locator('xpath=.//wm-search-input/input');
		this.checkPage();
	}

	public async dragRangeControllerOff() {
		await this.rangeController.click({ force: true, position: { x: 0, y: 0 } });
	}

	public async dragRangeControllerOn() {
		let box = await this.rangeController.boundingBox();
		let width: number = box === null ? 0 : box.width;
		expect(width !== undefined && width > 0).toBeTruthy();
		await this.rangeController.click({
			force: true,
			position: { x: width - 1, y: 0 },
		});
	}

	public async getMusicVolumeValue() {
		let progressAttr = await this.musicVolume.getAttribute('progress');
		let progress = progressAttr === null ? -1 : parseInt(progressAttr);
		return progress;
	}

	async checkPage() {
		// await expect(this.playBtn.isEnabled()).toBeTruthy();
		await expect(this.rangeController.isEnabled()).toBeTruthy();
		await expect(this.searchBtn.isEnabled()).toBeTruthy();
	}
}
