export async function fillExperienceTab({ signUpCandidatePage, candidateUser, sc }) {
  await signUpCandidatePage.expirience.clickAddManuallyButton();
  await signUpCandidatePage.expirience.fillRoleField(candidateUser.role);
  await signUpCandidatePage.authBase.fillCompanyField(candidateUser.company);
  await signUpCandidatePage.expirience.selectMonthField(sc.month);
  await signUpCandidatePage.expirience.fillYearField(candidateUser.year);
  await signUpCandidatePage.expirience.fillAchievementsField(candidateUser.achievements);
  await signUpCandidatePage.expirience.clickSaveButton();
}
