import { expect } from "allure-playwright";
import { BasePage } from "./BasePage";

export class CandidatePage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.profileTitle = page.locator('h2').first();
    this.startChatButton = page.getByRole('button', {name: 'Start chat'}).nth(1);
    this.messageField = page.locator('textarea[name="messageBody"]');
    this.sendMessageButton = page.getByRole('button', {name: 'Send message'});
  }

  async fillMessageFieldOnConnectionRequest(value) {
    await this.step(`Fill message field on connection request`, async () => {
      await this.messageField.fill(value);
    });
  }

  async clickStartChatButton() {
    await this.step(`Click start chat button`, async () => {
      await this.startChatButton.click();
    });
  }

  async clickSendMessageButton() {
    await this.step(`Click send message button`, async () => {
      await this.sendMessageButton.click();
    });
  }

  async assertCandidatesCvIsVisible() {
    await this.step(`Assert candidates CV is visible`, async () => {
      const CvArea = this.page.locator('.CandidateProfilesList_listItem__opFAQ').first();
      await expect(CvArea).toBeVisible();
    });
  }
}
