/* eslint-disable prettier/prettier */
import { Locator, Page } from 'playwright';
import BaseElements from './BaseElements';

export default class BonoxsElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getMostPopularNav(): Locator {
    return this.page.locator('#ui-id-4');
  }

  getLoLCardGame(): Locator {
    return this.page.locator('#product-item-info_1091');
  }

  getValueOf485Rp(): Locator {
    return this.page.locator(
      '#option-label-face_value_league_of_legends-716-item-3284'
    );
  }

  getValueOf610Rp(): Locator {
    return this.page.locator(
      '#option-label-face_value_league_of_legends-716-item-515'
    );
  }

  getButtonAddToCart(): Locator {
    return this.page.locator('#product-addtocart-button');
  }

  getButtonToCheckout(): Locator {
    return this.page.locator('#product-gotocheckout-button');
  }

  getPicPayButton(): Locator {
    return this.page.getByAltText('PicPay');
  }

  getNameInput(): Locator {
    return this.page.locator('#billing_address\\.name');
  }

  getLastNameInput(): Locator {
    return this.page.locator('#billing_address\\.last_name');
  }

  getCPFInput(): Locator {
    return this.page.locator('#billing_address\\.dni');
  }

  getEmailInput(): Locator {
    return this.page.locator('#billing_address\\.email');
  }

  getButtonEndPurchase(): Locator {
    return this.page.getByRole('button', { name: 'Finalizar compra' });
  }
}
