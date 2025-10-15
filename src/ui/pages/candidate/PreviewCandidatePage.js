import { expect } from "allure-playwright";
import { BasePage } from "../BasePage";
import { PreviewProfile } from "../../components/preview/PreviewProfile";

export class PreviewCandidatePage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.previewProfile = new PreviewProfile(page);
    this.position = page.locator('h1');
    this.previewSection = page.locator('.ProfileMeta_metaWrapper__yrLhv');
    this.profileSection = page.locator('.cell.large-7 dl');
    this.contactsSection = page.locator('.cell.large-4');
  }

  async assertPositionIsVisible(position) {
    await this.step(`Assert position "${position}" is visible`, async () => {
      await expect(this.position).toBeVisible();
      await expect(this.position).toHaveText(position);
    });
  }

  async assertAchievementsSectionValues(value) {
    await this.step(`Assert achievements section contains "${value}"`, async () => {
      await expect(this.profileSection.getByText(value)).toBeVisible();
    });
  }

  async assertSalaryValue() {
    await this.step(`Assert salary has correct format`, async () => {
      const salaryRegex = /^\$\d+(\.\d+)?k \(\$\d+(\.\d+)?k \/ month\)$/;

      await expect(this.previewSection.getByText(salaryRegex)).toBeVisible();
    });
  }

  async assertCoreSkills(values) {
    await this.step(`Assert core skills contain: ${values.join(', ')}`, async () => {
      for (const skill of values) {
        await expect(this.profileSection.getByText(skill, { exact: true })).toBeVisible();
      }
    });
  }

  async assertDateContainsMonth(month) {
    const shortMonth = month.slice(0, 3).charAt(0).toUpperCase() + month.slice(1, 3).toLowerCase();

    await this.step(`Assert date contains month "${shortMonth}"`, async () => {
      await expect(
        this.profileSection.locator('.ProfileWorkHistory_term__FOog3').filter({ hasText: shortMonth })
      ).toBeVisible();
    });
  }

  async assertFullNameInContacts(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    await this.step(`Assert contact section contains full name "${fullName}"`, async () => {
      await expect(this.contactsSection.getByText(fullName)).toBeVisible();
    });
  }
}
