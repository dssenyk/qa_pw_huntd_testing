import { BasePage } from "./BasePage";
import { expect } from "allure-playwright";

export class AccountSettingsPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.changePasswordTab = page.getByRole('link', {name: 'Change password'});
    this.changePasswordButton = page.getByRole('button', {name: 'Change password'});
    this.currentPasswordField = page.locator('#currentPassword');
    this.newPasswordField = page.locator('#password');
    this.repeatNewPasswordField = page.locator('#repeatPassword');
    this.saveChangesButton = page.getByRole('button', {name: 'Save changes'});
  }

  async clickChangePasswordTab() {
    await this.step(`Click change password tab`, async () => {
      await this.changePasswordTab.click();
    });
  }

  async clickChangePasswordButton() {
    await this.step(`Click change password button`, async () => {
      await this.changePasswordButton.click();
    });
  }

  async fillCurrentPasswordField(currentPassword) {
    await this.step(`Fill ${currentPassword} field`, async () => {
      await this.currentPasswordField.fill(currentPassword);
    })
  }

  async fillNewPasswordField(newPassword) {
    await this.step(`Fill ${newPassword} field`, async () => {
      await this.newPasswordField.fill(newPassword);
    })
  }

  async fillRepeatNewPasswordField(newPassword) {
    await this.step(`Fill repeat ${newPassword} field`, async () => {
      await this.repeatNewPasswordField.fill(newPassword);
    })
  }

  async clickSaveChangesButton() {
    await this.step(`Click save changes button`, async () => {
      await this.saveChangesButton.click();
    })
  }

  async assertSuccessfulMessageIsVisible() {
    await this.step(`Assert successful message is visible`, async () => {
      await expect(this.page.getByText('Password changed')).toBeVisible();
    });
  }
}
