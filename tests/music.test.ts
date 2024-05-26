import { test, expect, Page } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { logIn } from './utils';
import { MusicPage } from '../pages/music.page';

test.describe('Testing music page', () => {
	let musicPage: MusicPage;

	test.beforeEach(async ({ page }) => {
		await logIn(page);
		musicPage = await new MainPage(page).openMusic();
	});

	test('Volume off', async () => {
		await musicPage.dragRangeControllerOff();
		let progress = await musicPage.getMusicVolumeValue();
		expect(progress, "Couldn't get value of the volume").toBeGreaterThanOrEqual(0);
		expect(progress, 'Value of the volume should be zero').toBe(0);
	});
});
