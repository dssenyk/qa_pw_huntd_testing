import { BaseComponent } from "../../BaseComponent";

export class FeedBack extends BaseComponent {
  constructor(page) {
    super(page);

    this.page = page;
    this.descriptionField = page.locator('#description');
    this.sendButton = page.getByRole('button', {name: 'Send'});
  }

  async fillDescriptionField(desc) {
    await this.step(`Fill description: ${desc}`, async () => {
      await this.descriptionField.fill(desc);
    });
  }

  async clickSendButton() {
    await this.step(`Click send button`, async () => {
      await this.sendButton.click();
    });
  }
}
