import { cities } from "../../../ui/constants/otherThings";

export async function fillExpectationsTab({ signUpCandidatePage, candidateUser, sc }) {
  await signUpCandidatePage.expectations.fillSalaryField(candidateUser.salary);
  await signUpCandidatePage.expectations.selectJobExperience(sc.exp);
  await signUpCandidatePage.expectations.selectEnglishLvl(sc.english);
  await signUpCandidatePage.expectations.selectCity(cities.NEW_YORK);
}
