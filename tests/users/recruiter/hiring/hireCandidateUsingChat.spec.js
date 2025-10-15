import { test } from "../../../_fixtures/fixtures";
import { signUpRecruiterUser } from "../../../../src/ui/actions/auth/signUpRecruiterUser";

test.beforeEach(async ({ page }) => {
  await signUpRecruiterUser(page);
});

test('Recruiter user can hire candidate using chat tab', async ({
  homePage,
  candidatePage,
  factories,
  chatsRecruiterPage,
  hiringManagementPage
}) => {
  const newRecruiterData = factories.recruiterUser.generateRecruiterUser();

  await homePage.baseHeader.clickCandidatesLink();

  await candidatePage.assertCandidatesCvIsVisible();

  const title = await candidatePage.getElementText(candidatePage.profileTitle);

  await candidatePage.clickStartChatButton();
  await candidatePage.fillMessageFieldOnConnectionRequest(newRecruiterData.message);
  await candidatePage.clickSendMessageButton();
  await homePage.baseHeader.clickChatsLink();
  await candidatePage.reload();

  await chatsRecruiterPage.assertCandidatePositionIsVisible(title);

  await chatsRecruiterPage.clickCandidateTitleOnChatsPage();

  await chatsRecruiterPage.assertMessageIsVisibleInChat(newRecruiterData.message);

  await chatsRecruiterPage.clickHireCandidateButton();
  await chatsRecruiterPage.clickConfirmButton();

  await chatsRecruiterPage.assertMatchMessageIsVisibleInChat();

  await homePage.baseHeader.clickProfileButton();
  await homePage.clickHiringManagementLink();

  await hiringManagementPage.hiringsTab.assertHiredCandidateIsVisible(title);
});
