import { test } from "../../../_fixtures/fixtures";
import { signUpCandidateUser } from '../../../../src/ui/actions/auth/signUpCandidateUser';

let currentSettings;
let newSettings;

test.beforeEach(async ({ page, factories }) => {
  currentSettings = await signUpCandidateUser(page);

  newSettings = factories.candidateUser.generateCandidateUser();
});

test('Candidate user is able to change password, logout and then login with new password', async ({
  homePage,
  accountSettingsPage,
  signInPage,
  previewCandidatePage
}) => {
  await homePage.baseHeader.clickProfileButton();
  await homePage.clickAccountSettingsLink();
  await accountSettingsPage.clickChangePasswordTab();
  await accountSettingsPage.clickChangePasswordButton();
  await accountSettingsPage.fillCurrentPasswordField(currentSettings.password);
  await accountSettingsPage.fillNewPasswordField(newSettings.password);
  await accountSettingsPage.fillRepeatNewPasswordField(newSettings.password);
  await accountSettingsPage.clickSaveChangesButton();

  await accountSettingsPage.assertSuccessfulMessageIsVisible();

  await homePage.baseHeader.clickProfileButton();
  await homePage.clickSignOutButton();

  await signInPage.authBase.fillEmailField(currentSettings.email);
  await signInPage.authBase.fillPasswordField(newSettings.password);
  await signInPage.clickSignInButton();

  await previewCandidatePage.assertFullNameInContacts(currentSettings.firstName, currentSettings.lastName);
});
