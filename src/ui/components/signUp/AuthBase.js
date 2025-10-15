import { BaseComponent } from "../BaseComponent";
import { expect } from "allure-playwright";

export class AuthBase extends BaseComponent {
  constructor(page) {
    super(page);
    this.page = page;

    this.emailField = page.locator('#email');
    this.passwordField = page.locator('#password');
    this.repeatPasswordField = page.locator('#repeatPassword');
    this.myPositionField = page.locator('#position');
    this.companyField = page.locator('#companyName');
    this.uploadPhoto = page.getByLabel('Upload your photo');
    this.firstNameField = page.locator('#firstName');
    this.lastNameField = page.locator('#lastName');
    this.saveAndContinueButton = page.getByRole('button', {name: 'Save and continue'});
    this.createAccountButton = page.getByRole('button', { name: 'Create account' });
  }

  async fillEmailField(email) {
    await this.step(`Fill email field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(password) {
    await this.step(`Fill password field`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async fillRepeatPasswordField(password) {
    await this.step(`Fill repeat password field`, async () => {
      await this.repeatPasswordField.fill(password);
    });
  }

  async fillPositionField(position) {
    await this.step(`Fill my position field`, async () => {
      await this.myPositionField.fill(position);
    })
  }

  async fillCompanyField(company) {
    await this.step(`Fill company field`, async () => {
      await this.companyField.fill(company);
    })
  }

  async uploadUserPhoto(photoPath) {
    await this.step(`Upload candidate photo`, async () => {
      await this.uploadPhoto.setInputFiles(photoPath);
    });
  }

  async fillFirstNameField(firstName) {
    await this.step(`Fill first name field`, async () => {
      await this.firstNameField.fill(firstName);
    });
  }

  async fillLastNameField(lastName) {
    await this.step(`Fill last name field`, async () => {
      await this.lastNameField.fill(lastName);
    });
  }

  async clickSaveAndContinueButton() {
    await this.step(`Click save and continue button`, async () => {
      await this.saveAndContinueButton.click();
    });
  }

  async clickCreateAccountButton() {
    await this.step(`Click create account button`, async () => {
      await this.createAccountButton.click();
    });
  }

  async assertErrorMessageContainsText(expectedMessage) {
    await this.step(`Assert error message "${expectedMessage}" is visible`, async () => {
      await expect(this.page.getByText(expectedMessage)).toBeVisible();
    });
  }
}
