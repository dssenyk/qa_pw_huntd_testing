import { BaseComponent } from "../BaseComponent";

export class ConnectionsTab extends BaseComponent {
  constructor(page) {
    super(page);
    this.page = page;

    this.connectionsTab = page.getByRole('link', {name: 'Connections'});
    this.rejectedButton = page.getByRole('button', {name: 'Rejected'});
    this.hiredButton = page.getByRole('button', {name: 'Hired'}).first();
    this.submitButton = page.getByRole('button', {name: 'Submit'});
  }

  async clickConnectionsTab() {
    await this.step(`Click connections tab`, async () => {
      await this.connectionsTab.click();
    });
  }

  async clickRejectedButton() {
    await this.step(`Click reject button`, async () => {
      await this.rejectedButton.click();
    });
  }

  async clickHiredButton() {
    await this.step(`Click hired button`, async () => {
      await this.hiredButton.click();
    });
  }

  async clickSubmitButton() {
    await this.step(`Click submit button`, async () => {
      await this.submitButton.click();
    });
  }
}
