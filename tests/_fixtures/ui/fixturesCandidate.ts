import { test as base } from '@playwright/test';
import { CandidatePage } from '../../../src/ui/pages/CandidatesPage';

export const test = base.extend<{
  candidatePage;
}>({
  candidatePage: async ({ page }, use) => {
    const candidatePage = new CandidatePage(page);

    await use(candidatePage);
  }
});
