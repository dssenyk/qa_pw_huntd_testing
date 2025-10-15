import { test } from "../../../../_fixtures/fixtures";
import { signUpRecruiterUser } from "../../../../../src/ui/actions/auth/signUpRecruiterUser";
import { SignInPage } from "../../../../../src/ui/pages/SignInPage";
import { PreviewRecruiterPage } from "../../../../../src/ui/pages/recruiter/PreviewRecruiterPage";

let signInPage;
let previewRecruiterPage;
let recruiterUser;

test.use({ contextsNumber: 2 });

test.beforeEach(async ({ pages }) => {
  recruiterUser = await signUpRecruiterUser(pages[0]);
  signInPage = new SignInPage(pages[1]);
  previewRecruiterPage = new PreviewRecruiterPage(pages[1]);
});

test('Recruiter user is able to sign in', async () => {
  await signInPage.open();
  await signInPage.authBase.fillEmailField(recruiterUser.email);
  await signInPage.authBase.fillPasswordField(recruiterUser.password);
  await signInPage.clickSignInButton();
  await previewRecruiterPage.assertFullNameIsCorrect(recruiterUser.firstName, recruiterUser.lastName);
});


