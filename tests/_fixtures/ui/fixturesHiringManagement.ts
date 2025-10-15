import { test as base } from '@playwright/test'
import { HiringManagementPage } from '../../../src/ui/pages/HiringManagementPage'

export const test = base.extend<{
  hiringManagementPage;
}>({
  hiringManagementPage: async ({ page }, use) => {
    const hiringManagementPage = new HiringManagementPage(page);

    await use(hiringManagementPage);
  }
})
