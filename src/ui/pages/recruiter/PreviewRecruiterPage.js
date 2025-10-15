import { BasePage } from "../BasePage";
import { expect } from "allure-playwright";

export class PreviewRecruiterPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.fullName = page.locator('h1');
    this.previewSection = page.locator('.ProfileMeta_metaWrapper__yrLhv');
  }

  async assertPositionIsVisible(position) {
    await this.step(`Assert position "${position}" is visible`, async () => {
      await expect(this.previewSection).toContainText(position);
    });
  }

  async assertCompanyIsVisible(company) {
    await this.step(`Assert company "${company}" is visible`, async () => {
      await expect(this.previewSection).toContainText(company);
    });
  }

  async assertFullNameIsCorrect(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    await this.step(`Assert contact section contains full name "${fullName}"`, async () => {
      await expect(this.fullName).toHaveText(fullName);
    });
  }
}
