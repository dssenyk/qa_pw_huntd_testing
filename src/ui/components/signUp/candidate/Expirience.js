import { BaseComponent } from "../../BaseComponent";

export class Expirience extends BaseComponent {
  constructor(page) {
    super(page);

    this.page = page;
    this.addManuallyButton = page.getByRole('button', {name: 'Add manually'});
    this.roleField = page.locator('#title');
    this.monthDropdown = page.locator('.select__placeholder', {hasText: 'Month'});
    this.yearField = page.getByRole('textbox', {name: 'Year'});
    this.achievementsField = page.locator('#description');
    this.saveButton = page.getByRole('button', {name: 'Save'});
  }

  async fillRoleField(role) {
    await this.step(`Fill role: ${role}`, async () => {
      await this.roleField.fill(role);
    });
  }

  async selectMonthField(month) {
    await this.step(`Fill month: ${month}`, async () => {
      await this.monthDropdown.click(month);
      await this.page.locator('.select__option', { hasText: month }).click();
    });
  }

  async fillYearField(year) {
    const yearStr = year.toString();
    await this.step(`Fill year: ${yearStr}`, async () => {
      await this.yearField.fill(yearStr);
    });
  }

  async fillAchievementsField(desc) {
    await this.step(`Fill achievements: ${desc}`, async () => {
      await this.achievementsField.fill(desc);
    });
  }

  async clickAddManuallyButton() {
    await this.step(`Click add manually button`, async () => {
      await this.addManuallyButton.click();
    });
  }

  async clickSaveButton() {
    await this.step(`Click save button`, async () => {
      await this.saveButton.click();
    });
  }
}
