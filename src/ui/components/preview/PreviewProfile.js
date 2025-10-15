import { BaseComponent } from "../BaseComponent"
import { expect } from "allure-playwright";

export class PreviewProfile extends BaseComponent {
  constructor(page) {
    super(page);
    this.page = page;

    this.editProfileLink = page.getByRole('link', {name: 'Edit profile'});
    this.previewSection = page.locator('.ProfileMeta_metaWrapper__yrLhv');
    this.contactsSection = page.locator('.cell.large-4');
  }

  async clickEditProfileLink() {
    await this.step(`Click edit profile link`, async () => {
      await this.editProfileLink.click();
    });
  }

  async assertPreviewSectionValues(value) {
    await this.step(`Assert preview section contains "${value}"`, async () => {
      await expect(this.previewSection.getByText(value)).toBeVisible();
    });
  }

  async assertContactSectionValues(value) {
    await this.step(`Assert contact section contains "${value}"`, async () => {
      await expect(this.contactsSection.getByText(value)).toBeVisible();
    });
  }
}
