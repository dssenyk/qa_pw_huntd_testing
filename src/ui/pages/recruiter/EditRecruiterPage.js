import { BasePage } from "../BasePage";
import { AuthBase } from "../../components/signUp/AuthBase";

export class EditRecruiterPage extends BasePage {
  constructor(page) {
    super(page);

    this.page = page;
    this.authBase = new AuthBase(this.page);
    this.saveChangesButton = page.getByRole('button', {name: 'Save changes'});
    this.contactsLink = page.getByRole('link', {name: 'Contacts'});
  }

  async clickSaveChangesButton() {
    await this.step(`Click save changes button`, async () => {
      await this.saveChangesButton.click();
    });
  }

  async clickContactsLink() {
    await this.step(`Click contacts link`, async () => {
      await this.contactsLink.click();
    });
  }
}
