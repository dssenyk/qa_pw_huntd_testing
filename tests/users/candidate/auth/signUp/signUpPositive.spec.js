import { test } from '../../../../_fixtures/fixtures';
import { fillExpectationsTab } from '../../../../../src/common/helpers/authCandidateHelpers/fillExpectationsTab';
import { fillExperienceTab } from '../../../../../src/common/helpers/authCandidateHelpers/fillExpirienceTab';
import { fillRoleTab } from '../../../../../src/common/helpers/authCandidateHelpers/fillRoleTab';
import { fillSignUpForm } from '../../../../../src/common/helpers/authCandidateHelpers/fillSignUpForm';
import { generateRandomScenarioCandidate } from '../../../../../src/ui/actions/randomScenarios';
import { testFiles } from '../../../../../src/common/testData/testFilesRoutes';
import { cities } from '../../../../../src/ui/constants/otherThings';

const SCENARIOS_COUNT = 1;

for (let i = 0; i < SCENARIOS_COUNT; i++) {
  test(`Sign up candidate user with positive random scenario #${i + 1}`, async ({
    signUpCandidatePage,
    candidateUser,
    previewCandidatePage
  }) => {
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

    await signUpCandidatePage.contactInfo.clickUsualAvatarButton();
    await signUpCandidatePage.authBase.uploadUserPhoto(testFiles.candidateAvatar);
    await signUpCandidatePage.authBase.fillFirstNameField(candidateUser.firstName);
    await signUpCandidatePage.authBase.fillLastNameField(candidateUser.lastName);
    await signUpCandidatePage.contactInfo.uploadCandidateCV(testFiles.candidateCV);
    await signUpCandidatePage.contactInfo.clickActivateProfileButton();

    await signUpCandidatePage.feedBack.fillDescriptionField(candidateUser.description);
    await signUpCandidatePage.feedBack.clickSendButton();

    await previewCandidatePage.assertPositionIsVisible(candidateUser.position);
    await previewCandidatePage.previewProfile.assertPreviewSectionValues(cities.NEW_YORK);
    await previewCandidatePage.assertSalaryValue(candidateUser.salary);
    await previewCandidatePage.previewProfile.assertPreviewSectionValues(sc.english);

    await previewCandidatePage.assertAchievementsSectionValues(candidateUser.keyResults);
    await previewCandidatePage.assertCoreSkills(sc.technologies);
    await previewCandidatePage.assertAchievementsSectionValues(candidateUser.expectations);
    await previewCandidatePage.assertAchievementsSectionValues(sc.role);
    await previewCandidatePage.assertAchievementsSectionValues(candidateUser.role);
    await previewCandidatePage.assertAchievementsSectionValues(candidateUser.company);
    await previewCandidatePage.assertAchievementsSectionValues(candidateUser.year);
    await previewCandidatePage.assertDateContainsMonth(sc.month);
    await previewCandidatePage.assertAchievementsSectionValues(candidateUser.achievements);

    await previewCandidatePage.assertFullNameInContacts(candidateUser.firstName, candidateUser.lastName);
    await previewCandidatePage.previewProfile.assertContactSectionValues(candidateUser.email);
  });
}
