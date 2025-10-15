import { BaseComponent } from "../../BaseComponent";

export class ContactInfo extends BaseComponent {
  constructor(page) {
    super(page);
    this.page = page;
    this.usualAvatarButton = page.getByRole('button', {name: 'Usual avatar'});
    this.cvInput = page.locator('#cv');
    this.activateProfileButton = page.getByRole('button', {name: 'Activate profile'});
    this.previewProfileButton = page.getByRole('button', {name: 'Preview profile'});
  }

  async uploadCandidateCV(cvPath) {
    await this.step(`Upload candidate cv`, async () => {
      await this.cvInput.setInputFiles(cvPath);
    });
  }

  async clickUsualAvatarButton() {
    await this.step(`Click usual avatar button`, async () => {
      await this.usualAvatarButton.click();
    });
  }

  async clickActivateProfileButton() {
    await this.step(`Click activate profile button`, async () => {
      await this.activateProfileButton.click();
    });
  }

  async clickPreviewProfileButton() {
    await this.step(`Click preview profile button`, async () => {
      await this.previewProfileButton.click();
    });
  }
}
