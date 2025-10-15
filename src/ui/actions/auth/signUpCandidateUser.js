import { SignUpCandidatePage } from "../../pages/candidate/SignUpCandidatePage";
import { generateRandomScenarioCandidate } from "../randomScenarios";
import { fillExpectationsTab } from "../../../common/helpers/authCandidateHelpers/fillExpectationsTab";
import { fillExperienceTab } from '../../../common/helpers/authCandidateHelpers/fillExpirienceTab';
import { fillRoleTab } from '../../../common/helpers/authCandidateHelpers/fillRoleTab';
import { fillSignUpForm } from '../../../common/helpers/authCandidateHelpers/fillSignUpForm';
import { testStep } from "../../../common/helpers/pw";
import { CandidateUserFactory } from "../../../factoryItems/CandidateUserFactory";
import { testFiles } from "../../../common/testData/testFilesRoutes";
import { PreviewCandidatePage } from "../../pages/candidate/PreviewCandidatePage";

export async function signUpCandidateUser(page, userId = 0) {
  const candidate = await testStep(
    `Sign up candidate user`,
    async () => {
      const signUpCandidatePage = new SignUpCandidatePage(page, userId);
      const candidateUserFactory = new CandidateUserFactory(page, userId);
      const previewCandidatePage = new PreviewCandidatePage(page, userId);
      const candidateUser = candidateUserFactory.generateCandidateUser();
      const sc = generateRandomScenarioCandidate(1);

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

      await signUpCandidatePage.contactInfo.clickUsualAvatarButton();
      await signUpCandidatePage.authBase.uploadUserPhoto(testFiles.candidateAvatar);
      await signUpCandidatePage.authBase.fillFirstNameField(candidateUser.firstName);
      await signUpCandidatePage.authBase.fillLastNameField(candidateUser.lastName);
      await signUpCandidatePage.contactInfo.uploadCandidateCV(testFiles.candidateCV);
      await signUpCandidatePage.contactInfo.clickActivateProfileButton();

      await signUpCandidatePage.feedBack.fillDescriptionField(candidateUser.description);
      await signUpCandidatePage.feedBack.clickSendButton();

      await previewCandidatePage.assertFullNameInContacts(candidateUser.firstName, candidateUser.lastName);

      return candidateUser;
    }
  );

  return candidate;
}
