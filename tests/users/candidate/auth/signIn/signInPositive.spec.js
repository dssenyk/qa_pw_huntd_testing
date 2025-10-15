import { test } from "../../../../_fixtures/fixtures";
import { signUpCandidateUser } from "../../../../../src/ui/actions/auth/signUpCandidateUser";
import { SignInPage } from "../../../../../src/ui/pages/SignInPage";
import { PreviewCandidatePage } from "../../../../../src/ui/pages/candidate/PreviewCandidatePage";

let signInPage;
let previewCandidatePage;
let candidateUser;

test.use({ contextsNumber: 2 });

test.beforeEach(async ({ pages }) => {
  candidateUser = await signUpCandidateUser(pages[0]);
  signInPage = new SignInPage(pages[1]);
  previewCandidatePage = new PreviewCandidatePage(pages[1]);
});

test('Candidate user is able to sign in', async () => {
  await signInPage.open();
  await signInPage.authBase.fillEmailField(candidateUser.email);
  await signInPage.authBase.fillPasswordField(candidateUser.password);
  await signInPage.clickSignInButton();
  await previewCandidatePage.assertFullNameInContacts(candidateUser.firstName, candidateUser.lastName);
});


