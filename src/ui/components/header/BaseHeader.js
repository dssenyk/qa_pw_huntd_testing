import { BaseComponent } from "../BaseComponent";

export class BaseHeader extends BaseComponent {
  constructor(page) {
    super(page);
    this.page = page;

    this.headerClass = page.locator('.HeaderNav_nav__jc5p8 a');
    this.huntdLogo = page.getByLabel('Huntd').first();
    this.candidatesLink = page.getByRole('link', {name: 'Candidates'});
    this.jobsLink = this.headerClass.getByRole('link', {name: 'Jobs'});
    this.chatsLink = page.getByRole('link', {name: 'Chats'});
    this.profileButton = page.getByRole('button', {name: 'Profile', exact: true});
  }

  async clickHuntdLogo() {
    await this.step(`Click huntd logo`, async () => {
      await this.huntdLogo.click();
    });
  }

  async clickCandidatesLink() {
    await this.step(`Click Candidates link`, async () => {
      await this.candidatesLink.click();
    });
  }

  async clickJobsLink() {
    await this.step(`Click Jobs link`, async () => {
      await this.jobsLink.click();
    });
  }

  async clickChatsLink() {
    await this.step(`Click chats link`, async () => {
      await this.chatsLink.click();
    });
  }

  async clickProfileButton() {
    await this.step(`Click Profile button`, async () => {
      await this.profileButton.click();
    });
  }
}
