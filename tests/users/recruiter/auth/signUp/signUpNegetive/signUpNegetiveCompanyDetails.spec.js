import { test } from "../../../../../_fixtures/fixtures";
import {
  ROLE_IS_REQUIRED,
  COMPANY_IS_REQUIRD
} from '../../../../../../src/ui/constants/authErrorMessages';
import { RecruiterUserFactory } from "../../../../../../src/factoryItems/RecruiterUserFactory";

const userRecruiterFactory = new RecruiterUserFactory();

export const companyScenarios = [
  {
    errorMessage: ROLE_IS_REQUIRED,
    title: 'empty role',
    ...userRecruiterFactory.generateRecruiterUser({ position: '' }),
  },
  {
    errorMessage: COMPANY_IS_REQUIRD,
    title: 'empty company',
    ...userRecruiterFactory.generateRecruiterUser({ company: '' }),
  }
];

companyScenarios.forEach(({ title, errorMessage, ...user }) => {
  test.describe('Sign Up negetive company tests', () => {
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

      await signUpRecruiterPage.authBase.assertErrorMessageContainsText(errorMessage);
    });
  });
});
