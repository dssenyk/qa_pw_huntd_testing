import { testStep } from '../../common/helpers/pw';

export class BaseComponent {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.optionText = (text) => page.getByText(text, { exact: true });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async selectDropdown(dropdown, value) {
    await this.step(`Select ${value}`, async () => {
      await dropdown.click();
      await this.optionText(value).click();
    });
  }
}
