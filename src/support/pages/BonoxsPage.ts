/* eslint-disable prettier/prettier */
import { faker } from '@faker-js/faker';
import { Page } from 'playwright';
import BonoxsElements from '../elements/BonoxsElements';
import BasePage from './BasePage';

export default class BonoxPage extends BasePage {
  readonly bonoxElements: BonoxsElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.bonoxElements = new BonoxsElements(page);
  }

  async accessMostPopularPage(): Promise<void> {
    // Acessa a pagina de "Mais Populares"
    await this.bonoxElements.getMostPopularNav().click();
  }

  async accesLoLCardGame(): Promise<void> {
    await this.bonoxElements.getMostPopularNav().click();
    await this.bonoxElements.getLoLCardGame().click();
  }

  async selectValueOf610RpAndAddToCart(): Promise<void> {
    await this.bonoxElements.getMostPopularNav().click();
    await this.bonoxElements.getLoLCardGame().click();
    await this.bonoxElements.getValueOf610Rp().click();
    await this.bonoxElements.getButtonAddToCart().click();
  }

  async selectValueOf485RpAndBuy(): Promise<void> {
    await this.bonoxElements.getMostPopularNav().click();
    await this.bonoxElements.getLoLCardGame().click();
    await this.bonoxElements.getValueOf485Rp().click();
    await this.bonoxElements.getButtonToCheckout().click();
    await this.bonoxElements.getPicPayButton().click();
    await this.bonoxElements.getNameInput().fill(faker.person.firstName());
    await this.bonoxElements.getLastNameInput().fill(faker.person.lastName());
    await this.bonoxElements.getCPFInput().fill('93877636098');
    await this.bonoxElements.getEmailInput().fill('a@b.com.br');
    await this.bonoxElements.getButtonEndPurchase().click();
  }
}
