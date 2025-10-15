import { BaseComponent } from "../../BaseComponent";

export class Expectations extends BaseComponent {
  constructor(page) {
    super(page);

    this.page = page;
    this.salaryField = page.locator('#salary');
    this.jobExpirienceDropdown = page.locator('.select__placeholder', { hasText: 'Job experience' });
    this.englishLevelDropdown = page.locator('.select__control', { hasText: 'English level' });
    this.cityInput = page.locator('input#location');

    this.emptyPlace = page.getByText('Profile information');
    this.option = (text) => page.locator('div.pac-item', { hasText: text }).first();
  }

  async fillSalaryField(salary) {
    const salaryStr = salary.toString();
    await this.step(`Fill salary: ${salaryStr}`, async () => {
      await this.salaryField.type(salaryStr);
    });
  }

  async selectJobExperience(exp) {
    await this.step(`Select job experience: ${exp}`, async () => {
      await this.selectDropdown(this.jobExpirienceDropdown, exp);
    });
  }

  async selectEnglishLvl(engLvl) {
    await this.step(`Select English level: ${engLvl}`, async () => {
      await this.englishLevelDropdown.click();
      const option = this.page.locator('.select__menu-list .select__option', { hasText: engLvl });
      await option.first().click();
    });
  }

  async selectCity(city) {
    await this.step(`Select city: ${city}`, async () => {
      await this.cityInput.fill(city);
      await this.option(city).click();
        for (let i = 0; i < 3; i++) {
          await this.emptyPlace.click();
        };
    });
  }
}
