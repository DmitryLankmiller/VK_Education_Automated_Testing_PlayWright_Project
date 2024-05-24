import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
	private readonly loginField: Locator;
	private readonly passwordField: Locator;
	private readonly logInBtn: Locator;
	private readonly _failedLogInInfo: Locator;

	constructor(page: Page) {
		super(page);
		this.loginField = page.locator("xpath=.//*[@id='field_email']");
		this.passwordField = page.locator("xpath=.//*[@id='field_password']");
		this.logInBtn = page.locator(
			"xpath=.//*[@class='login-form-actions']/input"
		);
		this._failedLogInInfo = page.locator(
			"xpath=.//*[contains(@class,'login_error')]"
		);
		this.checkPage();
	}
	public async setLogin(login: string) {
		await this.loginField.fill(login);
		return this;
	}

	public async setPassword(password: string) {
		await this.passwordField.fill(password);
		return this;
	}

	public async clickLogInBtn() {
		await this.logInBtn.click();
	}

	public get failedLogInInfo(): Locator {
		return this._failedLogInInfo;
	}

	async checkPage() {
		await expect(this.loginField.isEnabled()).toBeTruthy();
		await expect(this.passwordField.isEnabled()).toBeTruthy();
		await expect(this.logInBtn.isEnabled()).toBeTruthy();
	}
}
