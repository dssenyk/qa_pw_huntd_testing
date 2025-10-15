import { test } from "../../../_fixtures/fixtures";
import { signUpCandidateUser } from '../../../../src/ui/actions/auth/signUpCandidateUser';

let newSettings;

test.beforeEach(async ({ page, factories }) => {
  await signUpCandidateUser(page);

  newSettings = factories.candidateUser.generateCandidateUser();
});

test('Update Candidate user settings', async ({
  homePage,
  editCandidatePage,
  previewCandidatePage
}) => {
  await homePage.baseHeader.clickProfileButton();
  await homePage.clickEditLink();
  await editCandidatePage.authBase.fillPositionField(newSettings.position);
  await editCandidatePage.clickSaveChangesButton();

  await editCandidatePage.clickExpectationsButton();
  await editCandidatePage.expectations.fillSalaryField(newSettings.salary);
  await editCandidatePage.clickSaveChangesButton();

  await editCandidatePage.clickExperienceButton();
  await editCandidatePage.clickEditIcon();
  await editCandidatePage.expirience.fillRoleField(newSettings.role);
  await editCandidatePage.authBase.fillCompanyField(newSettings.company);
  await editCandidatePage.clickSaveButton();

  await editCandidatePage.clickBioButton();
  await editCandidatePage.bio.fillKeyResultsField(newSettings.keyResults);
  await editCandidatePage.bio.fillExpectationsField(newSettings.expectations);
  await editCandidatePage.clickSaveChangesButton();

  await editCandidatePage.clickContactsButton();
  await editCandidatePage.authBase.fillFirstNameField(newSettings.firstName);
  await editCandidatePage.authBase.fillLastNameField(newSettings.lastName);
  await editCandidatePage.clickSaveChangesButton();

  await homePage.baseHeader.clickProfileButton();
  await homePage.clickPreviewProfileLink();

  await previewCandidatePage.assertPositionIsVisible(newSettings.position);
  await previewCandidatePage.assertSalaryValue(newSettings.salary);

  await previewCandidatePage.assertAchievementsSectionValues(newSettings.keyResults);
  await previewCandidatePage.assertAchievementsSectionValues(newSettings.expectations);
  await previewCandidatePage.assertAchievementsSectionValues(newSettings.role);
  await previewCandidatePage.assertAchievementsSectionValues(newSettings.company);

  await previewCandidatePage.assertFullNameInContacts(newSettings.firstName, newSettings.lastName);
});
