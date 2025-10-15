import { test } from "../../../_fixtures/fixtures";
import { signUpRecruiterUser } from "../../../../src/ui/actions/auth/signUpRecruiterUser";

test.beforeEach(async ({ page }) => {
  await signUpRecruiterUser(page);
});

test('Recruiter can hire candidate using connections tab', async ({
  homePage,
  hiringManagementPage,
}) => {
  await homePage.baseHeader.clickProfileButton();
  await homePage.clickHiringManagementLink();
  await hiringManagementPage.connectionsTab.clickConnectionsTab();

  const title = await hiringManagementPage.getElementText(hiringManagementPage.position);

  await hiringManagementPage.connectionsTab.clickHiredButton();
  await hiringManagementPage.connectionsTab.clickSubmitButton();
  await hiringManagementPage.hiringsTab.clickHiringsTab();
  await hiringManagementPage.assertCandidatePositionIsVisible(title);
});
