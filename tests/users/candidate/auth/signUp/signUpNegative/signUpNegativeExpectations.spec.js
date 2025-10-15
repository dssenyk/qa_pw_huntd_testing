import { test } from "../../../../../_fixtures/fixtures";
import { fillRoleTab } from '../../../../../../src/common/helpers/authCandidateHelpers/fillRoleTab'
import { fillSignUpForm } from '../../../../../../src/common/helpers/authCandidateHelpers/fillSignUpForm'
import { generateRandomScenarioCandidate } from "../../../../../../src/ui/actions/randomScenarios";
import {
  SALARY_IS_REQUIRED,
  JOB_EXPERIENCE_IS_REQUIRED,
  ENGLISH_LEVEL_IS_REQUIRED
} from "../../../../../../src/ui/constants/authErrorMessages";

test(`Sign up with empty expectations tab fields`, async ({ signUpCandidatePage, factories }) => {
  const candidateUser = factories.candidateUser.generateCandidateUser();
  const sc = generateRandomScenarioCandidate(5);

  await fillSignUpForm({ signUpCandidatePage, candidateUser });
  await signUpCandidatePage.clickCandidateLink();
  await fillRoleTab({ signUpCandidatePage, candidateUser, sc });
  await signUpCandidatePage.authBase.clickSaveAndContinueButton();
  await signUpCandidatePage.authBase.clickSaveAndContinueButton();

  await signUpCandidatePage.authBase.assertErrorMessageContainsText(SALARY_IS_REQUIRED);
  await signUpCandidatePage.authBase.assertErrorMessageContainsText(JOB_EXPERIENCE_IS_REQUIRED);
  await signUpCandidatePage.authBase.assertErrorMessageContainsText(ENGLISH_LEVEL_IS_REQUIRED);
});
