import { test } from '../../_fixtures/fixtures';
import {
  EMAIL_IS_REQUIRED,
  PASSWORD_IS_REQUIRED,
  WRONG_EMAIL,
  WRONG_CREDENTIALS
} from '../../../src/ui/constants/authErrorMessages';
import { RecruiterUserFactory } from "../../../src/factoryItems/RecruiterUserFactory";

const userRecruiterFactory = new RecruiterUserFactory();

export const authScenarios = [
  {
    errorMessage: EMAIL_IS_REQUIRED,
    title: 'empty email',
    ...userRecruiterFactory.generateRecruiterUser({ email: '' }),
  },
  {
    errorMessage: WRONG_EMAIL,
    title: 'wrong email format',
    ...userRecruiterFactory.generateRecruiterUser({ email: '1' })
  },
  {
    errorMessage: PASSWORD_IS_REQUIRED,
    title: 'empty password',
    ...userRecruiterFactory.generateRecruiterUser({ password: '' }),
  },
  {
    errorMessage: WRONG_CREDENTIALS,
    title: 'wrong credentials',
    ...userRecruiterFactory.generateRecruiterUser({ email: 'WrongCredo@gmail.com' }),
  }
];

authScenarios.forEach(({ title, errorMessage, ...user }) => {
  test.describe('Sign In negetive auth tests', () => {
    test(`Sign In with ${title}`, async ({ signInPage }) => {
      await signInPage.open();

      await signInPage.authBase.fillEmailField(user.email);
      await signInPage.authBase.fillPasswordField(user.password);

      await signInPage.clickSignInButton();

      await signInPage.authBase.assertErrorMessageContainsText(errorMessage);
    });
  });
});
