/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { join } from 'path';
import test from 'playwright/test';
import { TheConfig } from 'sicolo';
import BonoxPage from '../support/pages/BonoxsPage';

test.describe('Bonoxs Tests', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let bonoxPage: BonoxPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.bonoxs')
    .retrieveData();

  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.bonoxs')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    bonoxPage = new BonoxPage(page);
    await page.goto(BASE_URL);
  });

  test('Access Most Popular page', async () => {
    await bonoxPage.accessMostPopularPage();
  });

  test('Access the page of LoL game', async () => {
    await bonoxPage.accesLoLCardGame();
  });

  test('Select 610 RP and Add to cart', async () => {
    await bonoxPage.selectValueOf610RpAndAddToCart();
  });

  test('Select 485 RP and Buy with PicPay', async () => {
    await bonoxPage.selectValueOf485RpAndBuy();
  });
});
