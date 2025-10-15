import { test } from "../../../_fixtures/fixtures";
import { signUpRecruiterUser } from "../../../../src/ui/actions/auth/signUpRecruiterUser";

let newSettings;

test.beforeEach(async ({ page, factories }) => {
  await signUpRecruiterUser(page);

  newSettings = factories.recruiterUser.generateRecruiterUser();
});

test('Update Recruiter user settings', async ({
  homePage,
  editRecruiterPage,
  previewRecruiterPage
}) => {
  await homePage.baseHeader.clickProfileButton();
  await homePage.clickEditLink();
  await editRecruiterPage.authBase.fillPositionField(newSettings.position);
  await editRecruiterPage.authBase.fillCompanyField(newSettings.company);
  await editRecruiterPage.clickSaveChangesButton();

  await editRecruiterPage.clickContactsLink();
  await editRecruiterPage.authBase.fillFirstNameField(newSettings.firstName);
  await editRecruiterPage.authBase.fillLastNameField(newSettings.lastName);
  await editRecruiterPage.clickSaveChangesButton();

  await homePage.baseHeader.clickProfileButton();
  await homePage.clickPreviewProfileLink();

  await previewRecruiterPage.assertFullNameIsCorrect(newSettings.firstName, newSettings.lastName);
  await previewRecruiterPage.assertPositionIsVisible(newSettings.position);
  await previewRecruiterPage.assertCompanyIsVisible(newSettings.company);
});
