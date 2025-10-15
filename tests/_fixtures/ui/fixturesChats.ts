import { test as base } from '@playwright/test';
import { ChatsRecruiterPage } from '../../../src/ui/pages/recruiter/ChatsRecruiterPage';

export const test = base.extend<{
  chatsRecruiterPage;
}>({
  chatsRecruiterPage: async ({ page }, use) => {
    const chatsRecruiterPage = new ChatsRecruiterPage(page);

    await use(chatsRecruiterPage);
  }
})
