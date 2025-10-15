import { BaseComponent } from "../../BaseComponent";

export class Bio extends BaseComponent {
  constructor(page) {
    super(page);

    this.page = page;
    this.keyResultsField = page.locator('#achievements');
    this.expectationsField = page.locator('#workExpectations');
  }

  async fillKeyResultsField(value) {
    await this.step(`Fill key results: ${value}`, async () => {
      await this.keyResultsField.fill(value);
    });
  }

  async fillExpectationsField(value) {
    await this.step(`Fill expectations: ${value}`, async () => {
      await this.expectationsField.fill(value);
    });
  }
}
