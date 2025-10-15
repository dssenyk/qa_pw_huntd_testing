import { BaseComponent } from "../../BaseComponent";

export class Role extends BaseComponent {
  constructor(page) {
    super(page);

    this.page = page;
    this.techSkillsInput = page.locator('input#technologies');
    this.rolesDropdown = page.locator('.Select_select__Dy9ee', { hasText: 'Select roles' }).locator('svg.icon-plus');
    this.emptyPlace = page.getByText('Profile information');
    this.rolesOption = (role) => page.locator('.select__option', { hasText: role });
  }

  async selectRoles(role) {
    await this.step(`Select role: ${role}`, async () => {
      await this.rolesDropdown.click();
      await this.rolesOption(role).click();
      await this.emptyPlace.click();
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
    });
  }
}
