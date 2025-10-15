import { BaseComponent } from "../../BaseComponent";

export class EngineersFilters extends BaseComponent {
  constructor(page) {
    super(page);
    this.page = page;

    this.rolesDropdown = page.locator('.select__placeholder', { hasText: 'Select roles' });
    this.techSkillsInput = page.locator('input#technologies');
    this.jobExpirienceDropdown = page.locator('.select__placeholder', { hasText: 'Job experience' });
    this.minusIcon = this.jobExpirienceDropdown.locator('.icon-minus');
    this.englishLevelDropdown = page.locator('.select__control', { hasText: 'English level' }).locator('svg.icon-plus');

    this.emptyPlace = page.getByText("Let's find your first engineers!");

    this.option = (text) => this.page.getByText(text, { exact: true });

    this.nextButton = page.getByRole('button', { name: 'Next' });
  }

  async selectDropdown(dropdown, value) {
    await this.step(`Select ${value}`, async () => {
      await dropdown.click();
      await this.option(value).click();
      await this.emptyPlace.click();
    });
  }

  async selectRole(role) {
    await this.step(`Select role: ${role}`, async () => {
      await this.selectDropdown(this.rolesDropdown, role);
    });
  }

  async selectTechnologies(techs) {
    await this.step(`Select technologies: ${techs}`, async () => {
      for (const tech of techs) {
        await this.techSkillsInput.fill(tech);

        const menuOption = this.page.locator('.select__menu-list .select__option', { hasText: tech, exact: true });
        await menuOption.first().waitFor({ state: 'visible', timeout: 5000 });

        await this.techSkillsInput.press('Enter');
      }
      await this.emptyPlace.click();
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
      await this.option(engLvl).click();
    });
  }

  async clickNextButton() {
    await this.step(`Click next button`, async () => {
      await this.nextButton.click();
    });
  }
}
