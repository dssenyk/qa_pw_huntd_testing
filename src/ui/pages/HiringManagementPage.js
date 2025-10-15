import { BasePage } from "./BasePage";
import { HiringsTab } from '../../ui/components/hiringManagement/HiringsTab'
import { ConnectionsTab } from "../components/hiringManagement/ConnectionsTab";
import { expect } from "allure-playwright";

export class HiringManagementPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.hiringsTab = new HiringsTab(this.page);
    this.connectionsTab = new ConnectionsTab(this.page);
    this.position = page.locator('tbody tr .ConnectionsList_buddyPosition__1IYDf').first();
  }

  async assertCandidatePositionIsVisible(value) {
    await this.step(`Assert candidate position is visible`, async () => {
      await expect(this.position).toContainText(value);
    });
  }
}
