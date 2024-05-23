import { type Page } from '@playwright/test';

export abstract class BasePage {
	readonly page: Page;
	abstract checkPage(): void;

	constructor(page: Page) {
		this.page = page;
	}
}
