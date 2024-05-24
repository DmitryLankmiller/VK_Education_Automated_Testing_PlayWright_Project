import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { MainPage } from '../pages/main.page';

const BOT_LOGIN = 'technopol65';
const BOT_PASSWORD = 'technopolisPassword';
const BOT_WRONG_PASSWORD = 'qwerty';

test.describe('Testing logging page', () => {
	let loginPage: LoginPage;
	test.beforeEach(async ({ page }) => {
		loginPage = new LoginPage(page);
		await page.goto('/');
	});

	test('Log in', async ({ page }) => {
		await loginPage.setLogin(BOT_LOGIN);
		await loginPage.setPassword(BOT_PASSWORD);
		await loginPage.clickLogInBtn();
		let mainPage = new MainPage(page);
		await expect(mainPage.profileBtn).toContainText(BOT_LOGIN);
	});

	test('Failed log in', async ({ page }) => {
		await loginPage.setLogin(BOT_LOGIN);
		await loginPage.setPassword(BOT_WRONG_PASSWORD);
		await loginPage.clickLogInBtn();
		await expect(loginPage.failedLogInInfo).toBeVisible();
	});
});
