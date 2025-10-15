import { test } from "../../../../_fixtures/fixtures";
import { engLvlRecruiter, jobExpRecruiter, roles, technologies } from "../../../../../src/ui/constants/otherThings";

export const scenarios = [
  {
    english: engLvlRecruiter.UPPER_INTERMEDIATE,
    exp: jobExpRecruiter.THREE_PLUS_YEARS,
    role: roles.FULL_STACK,
    technologies: [technologies.JAVASCRIPT],
  },
  {
    english: engLvlRecruiter.INTERMEDIATE,
    exp: jobExpRecruiter.ONE_PLUS_YEARS,
    role: roles.FULL_STACK,
    technologies: [technologies.NODE_JS],
  },
  {
    english: engLvlRecruiter.ADVANCED,
    exp: jobExpRecruiter.FIVE_PLUS_YEARS,
    role: roles.QA,
    technologies: [technologies.MANUAL_TESTING],
  },
  {
    english: engLvlRecruiter.PRE_INTERMEDIATE,
    exp: jobExpRecruiter.LESS_THAN_ONE_YEAR,
    role: roles.FRONTEND,
    technologies: [technologies.REACT],
  },
  {
    english: engLvlRecruiter.INTERMEDIATE,
    exp: jobExpRecruiter.THREE_PLUS_YEARS,
    role: roles.DEVOPS,
    technologies: [technologies.DOCKER],
  },
];


scenarios.forEach((scenario, index) => {
  test(`Sign up positive scenario #${index + 1}`, async ({ signUpRecruiterPage, factories, chatsRecruiterPage }) => {
    const recruiter = factories.recruiterUser.generateRecruiterUser();

    await signUpRecruiterPage.open();
    await signUpRecruiterPage.submitSignUpForm(recruiter, scenario);
    await signUpRecruiterPage.engineersFilter.clickNextButton();
    await signUpRecruiterPage.messagingPage.fillMessageField(recruiter.message);
    await signUpRecruiterPage.messagingPage.clickSendButton();
    await chatsRecruiterPage.assertUrlIsCorrect();
  });
});
