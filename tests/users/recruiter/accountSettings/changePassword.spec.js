import { test } from "../../../_fixtures/fixtures";
import { signUpRecruiterUser } from "../../../../src/ui/actions/auth/signUpRecruiterUser";

let currentSettings;
let newSettings;

test.beforeEach(async ({ page, factories }) => {
  currentSettings = await signUpRecruiterUser(page);

  newSettings = factories.recruiterUser.generateRecruiterUser();
});

test('Recruiter user is able to change password, logout and then login with new password', async ({
  homePage,
  accountSettingsPage,
  signInPage,
  previewRecruiterPage
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

  await previewRecruiterPage.assertFullNameIsCorrect(currentSettings.firstName, currentSettings.lastName);
});
