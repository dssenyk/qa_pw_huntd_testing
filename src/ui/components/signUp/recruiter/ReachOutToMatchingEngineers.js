import { BaseComponent } from "../../BaseComponent";

export class ReachOutToMatchingEngineers extends BaseComponent {
  constructor(page) {
    super(page);

    this.page = page;
    this.messageField = page.locator('#messageBody');
    this.sendButton = page.getByRole('button', {name: 'Send'});
  }

  async fillMessageField(message) {
    await this.step(`Fill message field`, async () => {
      await this.messageField.fill(message);
    });
  }

  async clickSendButton() {
    await this.step(`Click send button`, async () => {
      await this.sendButton.click();
    });
  }
}
