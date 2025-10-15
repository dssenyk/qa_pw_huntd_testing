import { EngineersFilters } from "../../components/signUp/recruiter/EngineersFilters";
import { AuthBase } from '../../components/signUp/AuthBase'
import { uiRoutes } from "../../constants/uiRoutes";
import { BasePage } from "../BasePage";
import { Bio } from "../../components/signUp/candidate/Bio";
import { ContactInfo } from '../../components/signUp/candidate/ContactInfo';
import { Expectations } from "../../components/signUp/candidate/Expectations";
import { Expirience } from "../../components/signUp/candidate/Expirience";
import { FeedBack } from "../../components/signUp/candidate/FeedBack";
import { Role } from "../../components/signUp/candidate/Role";

export class SignUpCandidatePage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.authBase = new AuthBase(this.page);
    this.engineersFilter = new EngineersFilters(this.page);
    this.bio = new Bio(this.page);
    this.contactInfo = new ContactInfo(this.page);
    this.expectations = new Expectations(this.page);
    this.expirience = new Expirience(this.page);
    this.feedBack = new FeedBack(this.page);
    this.role = new Role(this.page);
    this.candidateLink = page.getByRole('link', {name: 'hunting for interesting job offers'});
  }

  get url() {
    return uiRoutes.register;
  }

  async clickCandidateLink() {
    await this.step(`Click candidate link`, async () => {
      await this.candidateLink.click();
    });
  }
}
