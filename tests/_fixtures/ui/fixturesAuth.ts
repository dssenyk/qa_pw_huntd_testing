import { test as base } from '@playwright/test';
import { SignUpPageRecruiter } from '../../../src/ui/pages/recruiter/SignUpRecruiterPage';
import { SignInPage } from '../../../src/ui/pages/SignInPage';
import { SignUpCandidatePage } from '../../../src/ui/pages/candidate/SignUpCandidatePage';

export const test = base.extend<{
  signUpRecruiterPage;
  signInPage;
  signUpCandidatePage;
}>({
  signUpRecruiterPage: async ({ page }, use) => {
    const signUpRecruiterPage = new SignUpPageRecruiter(page);

    await use(signUpRecruiterPage);
  },
  signInPage: async ({ page }, use) => {
    const signInPage = new SignInPage(page);

    await use(signInPage);
  },
  signUpCandidatePage: async ({ page }, use) => {
    const signUpCandidatePage = new SignUpCandidatePage(page);

    await use(signUpCandidatePage);
  }
});
