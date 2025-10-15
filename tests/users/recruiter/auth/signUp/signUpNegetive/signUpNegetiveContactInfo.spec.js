import { test } from "../../../../../_fixtures/fixtures";
import {
  FIRST_NAME,
  LAST_NAME
} from '../../../../../../src/ui/constants/authErrorMessages';
import { RecruiterUserFactory } from "../../../../../../src/factoryItems/RecruiterUserFactory";

const userRecruiterFactory = new RecruiterUserFactory();

export const contactScenarios = [
  {
    errorMessage: FIRST_NAME,
    title: 'empty first name',
    ...userRecruiterFactory.generateRecruiterUser({ firstName: '' }),
  },
  {
    errorMessage: LAST_NAME,
    title: 'empty last name',
    ...userRecruiterFactory.generateRecruiterUser({ lastName: '' }),
  }
];

contactScenarios.forEach(({ title, errorMessage, ...user }) => {
  test.describe('Sign Up negetive contact tests', () => {
    test(`Sign Up with ${title}`, async ({ signUpRecruiterPage }) => {
      await signUpRecruiterPage.open();

      await signUpRecruiterPage.authBase.fillEmailField(user.email);
      await signUpRecruiterPage.authBase.fillPasswordField(user.password);
      await signUpRecruiterPage.authBase.fillRepeatPasswordField(user.repeatedPassword);

      await signUpRecruiterPage.authBase.clickCreateAccountButton();

      await signUpRecruiterPage.clickRecruiterLink();

      await signUpRecruiterPage.authBase.fillPositionField(user.position);
      await signUpRecruiterPage.authBase.fillCompanyField(user.company);
      await signUpRecruiterPage.authBase.clickSaveAndContinueButton();

      await signUpRecruiterPage.authBase.fillFirstNameField(user.firstName);
      await signUpRecruiterPage.authBase.fillLastNameField(user.lastName);
      await signUpRecruiterPage.authBase.clickSaveAndContinueButton();

      await signUpRecruiterPage.authBase.assertErrorMessageContainsText(errorMessage);
    });
  });
});
