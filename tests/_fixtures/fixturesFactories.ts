import { test as base } from '@playwright/test';
import { RecruiterUserFactory } from '../../src/factoryItems/RecruiterUserFactory';
import { CandidateUserFactory } from '../../src/factoryItems/CandidateUserFactory';

export const test = base.extend<{
  factories;
}>({
  factories: async ({}, use) => {
    const factories = {
      recruiterUser: new RecruiterUserFactory(),
      candidateUser: new CandidateUserFactory(),
    };

    await use(factories);
  },
});
