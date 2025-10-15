import { mergeTests } from "@playwright/test";
import { test as authTest } from './ui/fixturesAuth';
import { test as genericTest } from './fixturesGeneric';
import { test as factoryTest } from './fixturesFactories';
import { test as chatsTest } from './ui/fixturesChats';
import { test as previewTest } from './ui/fixturesPreview';
import { test as editTest } from './ui/fixturesEdit';
import { test as homePageTest } from './ui/fixturesHome';
import { test as accountSettingsTest } from './ui/fixturesAccountSettings';
import { test as candidateTest } from './ui/fixturesCandidate';
import { test as hiringManagement } from './ui/fixturesHiringManagement';

export const test = mergeTests(
  factoryTest,
  authTest,
  genericTest,
  chatsTest,
  previewTest,
  editTest,
  homePageTest,
  accountSettingsTest,
  candidateTest,
  hiringManagement
);

