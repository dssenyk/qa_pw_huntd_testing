import { test } from "../../../../../_fixtures/fixtures";
import { fillSignUpForm } from '../../../../../../src/common/helpers/authCandidateHelpers/fillSignUpForm'
import {
  POSITION_IS_REQUIRED,
  SELECT_AT_LEAST_ONE_ROLE,
  SELECT_AT_LEAST_FIVE_SKILLS
} from "../../../../../../src/ui/constants/authErrorMessages";

test(`Sign up with empty role tab fields`, async ({ signUpCandidatePage, factories }) => {
  const candidateUser = factories.candidateUser.generateCandidateUser();

  await fillSignUpForm({ signUpCandidatePage, candidateUser });
  await signUpCandidatePage.clickCandidateLink();
  await signUpCandidatePage.authBase.clickSaveAndContinueButton();

  await signUpCandidatePage.authBase.assertErrorMessageContainsText(POSITION_IS_REQUIRED);
  await signUpCandidatePage.authBase.assertErrorMessageContainsText(SELECT_AT_LEAST_ONE_ROLE);
  await signUpCandidatePage.authBase.assertErrorMessageContainsText(SELECT_AT_LEAST_FIVE_SKILLS);
});
