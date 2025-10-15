import { uiRoutes } from '../constants/uiRoutes';
import { AuthBase } from '../components/signUp/AuthBase'
import { BasePage } from './BasePage';

export class SignInPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.authBase = new AuthBase(this.page);
    this.signInButton = page.getByRole('button', { name: 'Sign In', exact: true });
  }

  get url() {
    return uiRoutes.login;
  }

  async clickSignInButton() {
    await this.step(`Click sign in button`, async () => {
      await this.signInButton.click();
    });
  }
}
