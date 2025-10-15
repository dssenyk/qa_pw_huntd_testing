import { BasePage } from "../BasePage";
import { uiRoutes } from '../../constants/uiRoutes';
import { expect } from "@playwright/test";

export class ChatsRecruiterPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.candidatePosition = page.locator('.ChatSelectorItem_chatSelectorItem__GHD_h').first();
    this.hireButton = page.getByRole('button', {name: 'Hire candidate'});
    this.confirmButton = page.getByRole('button', {name: 'Confirm'});
    this.chatsContainer = page.locator('.MessageBox_messageBox__sdc_U');
  }

  get url() {
    return uiRoutes.chats;
  }

  async clickCandidateTitleOnChatsPage() {
    await this.step(`Click candidate title on chats page`, async () => {
      await this.candidatePosition.click();
    });
  }

  async clickHireCandidateButton() {
    await this.step(`Hover on actions menu and click "Hire candidate"`, async () => {
      const actionsMenu = this.page.locator('.ChatActions_actionsContainer__BCiOO');
      await actionsMenu.hover();
      await this.hireButton.waitFor({ state: 'visible' });
      await this.hireButton.click();
    });
  }

  async clickConfirmButton() {
    await this.step(`Click confirm button`, async () => {
      await this.confirmButton.click();
    });
  }

  async assertUrlIsCorrect() {
    await this.step(`Assert Url is correct`, async () => {
      await expect(this.page).toHaveURL(this.url);
    });
  }

  async assertCandidatePositionIsVisible(value) {
    await this.step(`Assert candidate positon is visible`, async () => {
      await expect(this.candidatePosition).toContainText(value);
    });
  }

  async assertMessageIsVisibleInChat (message) {
    await this.step(`Assert ${message} is visible in chat`, async () => {
      await expect(this.chatsContainer).toContainText(message);
    });
  }

  async assertMatchMessageIsVisibleInChat() {
    await this.step(`Assert match message is visible in chat`, async () => {
      await expect(this.chatsContainer).toContainText('Recruiter said we\'re a match');
    });
  }
}
