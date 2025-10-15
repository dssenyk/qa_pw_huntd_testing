import { test as base } from '@playwright/test'
import { AccountSettingsPage } from '../../../src/ui/pages/AccountSettingsPage';

export const test = base.extend<{
  accountSettingsPage;
}>({
  accountSettingsPage: async ({ page }, use) => {
    const accountSettingsPage = new AccountSettingsPage(page);

    await use(accountSettingsPage);
  }
})
