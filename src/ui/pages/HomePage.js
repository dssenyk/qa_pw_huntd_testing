import { BasePage } from './BasePage';
import { BaseHeader } from '../../ui/components/header/BaseHeader'

export class HomePage extends BasePage {
  constructor(page) {
    super(page);

    this.page = page;
    this.baseHeader = new BaseHeader(this.page);
    this.previewProfileLink = page.getByRole('link', {name: 'Preview profile'});
    this.hiringManagement = page.getByRole('link', {name: 'Hiring management'});
    this.accountSettigsLink = page.getByRole('link', {name: 'Account settings'});
    this.editProfileLink = page.locator('.MenuLinks_wrapper__m_CIw').getByRole('link', {name: 'Edit profile'});
    this.signOut = page.getByRole('button', {name: 'Sign out'});
  }

  async clickPreviewProfileLink() {
    await this.step(`Click preview profile link`, async () => {
      await this.previewProfileLink.click();
    });
  }

  async clickEditLink() {
    await this.step(`Click edit profile link`, async () => {
      await this.editProfileLink.click();
    });
  }

  async clickHiringManagementLink() {
    await this.step(`Click hiring management link`, async () => {
      await this.hiringManagement.click();
    });
  }

  async clickAccountSettingsLink() {
    await this.step(`Click account settings link`, async () => {
      await this.accountSettigsLink.click();
    });
  }

  async clickSignOutButton() {
    await this.step(`Click sign out button`, async () => {
      await this.signOut.click();
    });
  }
}
