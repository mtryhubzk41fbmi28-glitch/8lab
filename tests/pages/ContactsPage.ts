import { type Page, type Locator } from '@playwright/test';

export class ContactsPage {
  readonly heading: Locator;
  readonly emailLink: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.locator('h1');
    this.emailLink = page.locator('a[href^="mailto:"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('/contacts');
  }
}