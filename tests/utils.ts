import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

const BOT_LOGIN = 'technopol65';
const BOT_PASSWORD = 'technopolisPassword';

export async function logIn(page: Page) {
	await page.goto('/');
	let loginPage = new LoginPage(page);
	await loginPage.setLogin(BOT_LOGIN);
	await loginPage.setPassword(BOT_PASSWORD);
	await loginPage.clickLogInBtn();
}
