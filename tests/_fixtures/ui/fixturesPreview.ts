import { test as base } from '@playwright/test';
import { PreviewCandidatePage } from '../../../src/ui/pages/candidate/PreviewCandidatePage';
import { PreviewRecruiterPage } from '../../../src/ui/pages/recruiter/PreviewRecruiterPage';

export const test = base.extend<{
  previewCandidatePage;
  previewRecruiterPage;
}>({
  previewCandidatePage: async ({ page }, use) => {
    const previewCandidatePage = new PreviewCandidatePage(page);

    await use(previewCandidatePage);
  },
  previewRecruiterPage: async ({ page }, use) => {
    const previewRecruiterPage = new PreviewRecruiterPage(page);

    await use(previewRecruiterPage);
  }
})
