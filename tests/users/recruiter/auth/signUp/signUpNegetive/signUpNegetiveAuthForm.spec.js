import { test } from "../../../../../_fixtures/fixtures";
import {
  EMAIL_IS_REQUIRED,
  PASSWORD_IS_REQUIRED,
  REPEAT_PASSWORD_IS_REQUIRED,
  WRONG_EMAIL
} from '../../../../../../src/ui/constants/authErrorMessages';
import { RecruiterUserFactory } from "../../../../../../src/factoryItems/RecruiterUserFactory";

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
    errorMessage: REPEAT_PASSWORD_IS_REQUIRED,
    title: 'empty repeat password',
    ...userRecruiterFactory.generateRecruiterUser({ repeatedPassword: '' }),
  }
];

authScenarios.forEach(({ title, errorMessage, ...user }) => {
  test.describe('Sign Up negetive auth tests', () => {
    test(`Sign Up with ${title}`, async ({ signUpRecruiterPage }) => {
      await signUpRecruiterPage.open();

      await signUpRecruiterPage.authBase.fillEmailField(user.email);
      await signUpRecruiterPage.authBase.fillPasswordField(user.password);
      await signUpRecruiterPage.authBase.fillRepeatPasswordField(user.repeatedPassword);

      await signUpRecruiterPage.authBase.clickCreateAccountButton();

      await signUpRecruiterPage.authBase.assertErrorMessageContainsText(errorMessage);
    });
  });
});
