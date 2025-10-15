import { BasePage } from "../BasePage";
import { AuthBase } from "../../components/signUp/AuthBase";
import { Role } from "../../components/signUp/candidate/Role";
import { Expectations } from "../../components/signUp/candidate/Expectations";
import { Expirience } from "../../components/signUp/candidate/Expirience";
import { Bio } from "../../components/signUp/candidate/Bio";

export class EditCandidatePage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.authBase = new AuthBase(this.page);
    this.role = new Role(this.page);
    this.expectations = new Expectations(this.page);
    this.expirience = new Expirience(this.page);
    this.bio = new Bio(this.page);

    this.roleButton = page.getByRole('button', { name: 'Role' });
    this.expectationsButton = page.getByRole('button', { name: 'Expectations' });
    this.experienceButton = page.getByRole('button', { name: 'Experience' });
    this.bioButton = page.getByRole('button', { name: 'Bio' });
    this.contactsButton = page.getByRole('button', {name: 'Contacts'});
    this.saveChangesButton = page.getByRole('button', {name: 'Save changes'});
    this.editIcon = page.locator('.icon-edit');
    this.saveButton = page.getByRole('button', {name: 'Save'});
  }

  async clickSaveChangesButton() {
    await this.step(`Click save changes button`, async () => {
      await this.saveChangesButton.click();
    });
  }

  async clickRoleButton() {
    await this.step(`Click Role button`, async () => {
      await this.roleButton.click();
    });
  }

  async clickExpectationsButton() {
    await this.step(`Click Expectations button`, async () => {
      await this.expectationsButton.click();
    });
  }

  async clickExperienceButton() {
    await this.step(`Click Experience button`, async () => {
      await this.experienceButton.click();
    });
  }

  async clickBioButton() {
    await this.step(`Click Bio button`, async () => {
      await this.bioButton.click();
    });
  }

  async clickContactsButton() {
    await this.step(`Click contacts button`, async () => {
      await this.contactsButton.click();
    });
  }

  async clickEditIcon() {
    await this.step(`Click edit icon on experience tab`, async () => {
      await this.editIcon.click();
    });
  }

  async clickSaveButton() {
    await this.step(`Click save button`, async () => {
      await this.saveButton.click();
    });
  }
}
