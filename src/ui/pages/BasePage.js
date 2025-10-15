import { testStep } from "../../common/helpers/pw";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  get url() {
    throw Error(`The 'url' getter must be implemented in ${this.constructor.name}`);
  }

  async open() {
    await this.step(`Open ${this._pageName()} page`, async () => {
      await this.page.goto(this.url);
    });
  }

  async reload() {
    await this.step(`Reload ${this._pageName()} page`, async () => {
      await this.page.reload();
    });
  }

  async waitForLoading(urlPart = this.url) {
    await this.step(`Wait for ${this._pageName()} page to load`, async () => {
      await this.page.waitForURL(urlPart);
    });
  }

  _pageName() {
    return this.constructor.name.replace('Page', '');
  }

  async getElementText(locator) {
    return await this.step(`Get text from element`, async () => {
      return await locator.innerText();
    });
  }
}
