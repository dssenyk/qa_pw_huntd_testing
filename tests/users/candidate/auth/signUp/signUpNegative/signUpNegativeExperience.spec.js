import { test } from "../../../../../_fixtures/fixtures";
import { fillRoleTab } from '../../../../../../src/common/helpers/authCandidateHelpers/fillRoleTab'
import { fillSignUpForm } from '../../../../../../src/common/helpers/authCandidateHelpers/fillSignUpForm'
import { fillExpectationsTab } from '../../../../../../src/common/helpers/authCandidateHelpers/fillExpectationsTab'
import { generateRandomScenarioCandidate } from "../../../../../../src/ui/actions/randomScenarios";
import {
  ROLE_IS_REQUIRED,
  COMPANY_NAME_IS_REQUIRED,
  START_MONTH_IS_REQUIRED,
  START_YEAR_IS_REQUIRED
} from "../../../../../../src/ui/constants/authErrorMessages";

test(`Sign up with empty experience tab fields`, async ({ signUpCandidatePage, factories }) => {
  const candidateUser = factories.candidateUser.generateCandidateUser();
  const sc = generateRandomScenarioCandidate(5);

  await fillSignUpForm({ signUpCandidatePage, candidateUser });
  await signUpCandidatePage.clickCandidateLink();
  await fillRoleTab({ signUpCandidatePage, candidateUser, sc });
  await signUpCandidatePage.authBase.clickSaveAndContinueButton();
  await fillExpectationsTab({ signUpCandidatePage, candidateUser, sc });
  await signUpCandidatePage.authBase.clickSaveAndContinueButton();
  await signUpCandidatePage.expirience.clickAddManuallyButton();
  await signUpCandidatePage.expirience.clickSaveButton();

  await signUpCandidatePage.authBase.assertErrorMessageContainsText(ROLE_IS_REQUIRED);
  await signUpCandidatePage.authBase.assertErrorMessageContainsText(COMPANY_NAME_IS_REQUIRED);
  await signUpCandidatePage.authBase.assertErrorMessageContainsText(START_MONTH_IS_REQUIRED);
  await signUpCandidatePage.authBase.assertErrorMessageContainsText(START_YEAR_IS_REQUIRED);
});
