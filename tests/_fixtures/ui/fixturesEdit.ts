import { test as base } from '@playwright/test';
import { EditRecruiterPage } from '../../../src/ui/pages/recruiter/EditRecruiterPage';
import { EditCandidatePage } from '../../../src/ui/pages/candidate/EditCandidatePage';

export const test = base.extend<{
  editRecruiterPage,
  editCandidatePage
}>({
  editRecruiterPage: async ({ page }, use) => {
    const editRecruiterPage = new EditRecruiterPage(page);

    await use(editRecruiterPage);
  },
  editCandidatePage: async ({ page }, use) => {
    const editCandidatePage = new EditCandidatePage(page);

    await use(editCandidatePage);
  }
})
