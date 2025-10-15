import { SignUpPageRecruiter } from "../../pages/recruiter/SignUpRecruiterPage";
import { ChatsRecruiterPage } from "../../pages/recruiter/ChatsRecruiterPage";
import { RecruiterUserFactory } from "../../../factoryItems/RecruiterUserFactory";
import { engLvlRecruiter, jobExpRecruiter, roles, technologies } from "../../constants/otherThings";
import { testStep } from "../../../common/helpers/pw";

export async function signUpRecruiterUser(page, userId = 0) {
  const recruiter = await testStep(
    `Sign up recruiter user`,
    async () => {
      const signUpRecruiterPage = new SignUpPageRecruiter(page, userId);
      const chatsRecruiterPage = new ChatsRecruiterPage(page, userId);
      const recruiterUserFactory = new RecruiterUserFactory();
      const recruiter = recruiterUserFactory.generateRecruiterUser();

      await signUpRecruiterPage.open();
      await signUpRecruiterPage.authBase.fillEmailField(recruiter.email);
      await signUpRecruiterPage.authBase.fillPasswordField(recruiter.password);
      await signUpRecruiterPage.authBase.fillRepeatPasswordField(recruiter.repeatedPassword);
      await signUpRecruiterPage.authBase.clickCreateAccountButton();

      await signUpRecruiterPage.clickRecruiterLink();
      await signUpRecruiterPage.authBase.fillPositionField(recruiter.position);
      await signUpRecruiterPage.authBase.fillCompanyField(recruiter.company);
      await signUpRecruiterPage.authBase.clickSaveAndContinueButton();

      await signUpRecruiterPage.authBase.fillFirstNameField(recruiter.firstName);
      await signUpRecruiterPage.authBase.fillLastNameField(recruiter.lastName);
      await signUpRecruiterPage.authBase.clickSaveAndContinueButton();

      await signUpRecruiterPage.engineersFilter.selectRole(roles.DEVOPS);
      await signUpRecruiterPage.engineersFilter.selectTechnologies([technologies.JAVASCRIPT]);
      await signUpRecruiterPage.engineersFilter.selectJobExperience(jobExpRecruiter.THREE_PLUS_YEARS);
      await signUpRecruiterPage.engineersFilter.selectEnglishLvl(engLvlRecruiter.INTERMEDIATE);
      await signUpRecruiterPage.engineersFilter.clickNextButton();
      await signUpRecruiterPage.messagingPage.fillMessageField(recruiter.message);
      await signUpRecruiterPage.messagingPage.clickSendButton();
      await chatsRecruiterPage.assertUrlIsCorrect();

      return recruiter;
    }
  );

  return recruiter;
}
