import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { MainPage } from '../pages/main.page';

const BOT_LOGIN = 'technopol65';
const BOT_PASSWORD = 'technopolisPassword';

test.describe('Testing logging page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('Log in', async ({ page }) => {
		let loginPage = new LoginPage(page);
		await loginPage.setLogin(BOT_LOGIN);
		await loginPage.setPassword(BOT_PASSWORD);
		await loginPage.clickLogInBtn();
		let mainPage = new MainPage(page);
		await expect(mainPage.getProfileBtn()).toContainText(BOT_LOGIN);
	});
});
