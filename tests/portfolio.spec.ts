import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ContactsPage } from './pages/ContactsPage';

test.describe('Портфоліо: Головна сторінка', () => {
  
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
  });

  test('Має правильний заголовок сторінки', async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.heading.first()).toContainText('Максим');
  });

  test('Містить 3 картки проєктів', async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.projects).toHaveCount(3);
  });

  test('Реактивне перемикання теми працює коректно', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.toggleTheme();
    await expect(page.locator('body')).toHaveClass(/dark/);
  });
});

test.describe('Портфоліо: Сторінка контактів', () => {

  test.beforeEach(async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    await contactsPage.goto();
  });

  test('Містить правильний заголовок та активний email', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    await expect(contactsPage.heading.first()).toContainText('Контакти');
    await expect(contactsPage.emailLink).toContainText('makstrigyb950@gmail.com');
  });
});