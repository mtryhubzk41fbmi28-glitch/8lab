import { type Page, type Locator } from '@playwright/test';

export class HomePage {
  readonly heading: Locator;
  readonly projects: Locator;
  readonly themeBtn: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.locator('h1');
    this.projects = page.locator('.project-card'); 
    this.themeBtn = page.getByRole('button', { name: /Тема|Theme/ });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async toggleTheme(): Promise<void> {
    await this.themeBtn.click();
  }
}