import { test } from "../../../../../_fixtures/fixtures";
import { fillExpectationsTab } from '../../../../../../src/common/helpers/authCandidateHelpers/fillExpectationsTab'
import { fillExperienceTab } from '../../../../../../src/common/helpers/authCandidateHelpers/fillExpirienceTab'
import { fillRoleTab } from '../../../../../../src/common/helpers/authCandidateHelpers/fillRoleTab'
import { fillSignUpForm } from '../../../../../../src/common/helpers/authCandidateHelpers/fillSignUpForm'
import { generateRandomScenarioCandidate } from "../../../../../../src/ui/actions/randomScenarios";
import {
  FIRST_NAME,
  LAST_NAME
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
  await fillExperienceTab({ signUpCandidatePage, candidateUser, sc });
  await signUpCandidatePage.authBase.clickSaveAndContinueButton();

  await signUpCandidatePage.bio.fillKeyResultsField(candidateUser.keyResults);
  await signUpCandidatePage.bio.fillExpectationsField(candidateUser.expectations);
  await signUpCandidatePage.authBase.clickSaveAndContinueButton();

  await signUpCandidatePage.contactInfo.clickActivateProfileButton();

  await signUpCandidatePage.authBase.assertErrorMessageContainsText(FIRST_NAME);
  await signUpCandidatePage.authBase.assertErrorMessageContainsText(LAST_NAME);
});
