import { BaseComponent } from "../BaseComponent";
import { expect } from "allure-playwright";

export class HiringsTab extends BaseComponent {
  constructor(page) {
    super(page);
    this.page = page;

    this.hiringsTab = page.getByRole('link', {name: 'Hirings'});
    this.candidateBlock = page.locator('tbody tr td').first();
  }

  async assertHiredCandidateIsVisible(value) {
    await this.step(`Assert hired candidate is visible`, async () => {
      await expect(this.candidateBlock).toContainText(value);
    })
  }

  async clickHiringsTab() {
    await this.step(`Click hirings tab`, async () => {
      await this.hiringsTab.click();
    });
  }
}
