import { AuthBase } from '../../components/signUp/AuthBase';
import { BasePage } from '../BasePage';
import { EngineersFilters } from '../../components/signUp/recruiter/EngineersFilters';
import { ReachOutToMatchingEngineers } from '../../components/signUp/recruiter/ReachOutToMatchingEngineers';
import { uiRoutes } from '../../constants/uiRoutes';
import { testFiles } from '../../../common/testData/testFilesRoutes';

export class SignUpPageRecruiter extends BasePage {
  constructor(page) {
    super(page);

    this.page = page;
    this.authBase = new AuthBase(this.page);
    this.engineersFilter = new EngineersFilters(this.page);
    this.messagingPage = new ReachOutToMatchingEngineers(this.page);
    this.recruiterLink = page.getByRole('link', {name: 'hiring talent'});
    this.errorMessage = page.locator('.AuthForm_authFormInputs__o4En2');
  }

  get url() {
    return uiRoutes.register;
  }

  async clickRecruiterLink() {
    await this.step(`Click recruiter link`, async () => {
      await this.recruiterLink.click();
    });
  }

  async submitSignUpForm(recruiter, scenario) {
    await this.step(`Submit sign up form`, async () => {
      await this.authBase.fillEmailField(recruiter.email);
      await this.authBase.fillPasswordField(recruiter.password);
      await this.authBase.fillRepeatPasswordField(recruiter.repeatedPassword);
      await this.authBase.clickCreateAccountButton();

      await this.clickRecruiterLink();
      await this.authBase.fillPositionField(recruiter.position);
      await this.authBase.fillCompanyField(recruiter.company);
      await this.authBase.clickSaveAndContinueButton();

      await this.authBase.uploadUserPhoto(testFiles.recruiterAvatar);
      await this.authBase.fillFirstNameField(recruiter.firstName);
      await this.authBase.fillLastNameField(recruiter.lastName);
      await this.authBase.clickSaveAndContinueButton();

      await this.engineersFilter.selectRole(scenario.role);
      await this.engineersFilter.selectTechnologies(scenario.technologies);
      await this.engineersFilter.selectJobExperience(scenario.exp);
      await this.engineersFilter.selectEnglishLvl(scenario.english);
    });
  }
}
