export async function fillSignUpForm({ signUpCandidatePage, candidateUser }) {
  await signUpCandidatePage.open();
  await signUpCandidatePage.authBase.fillEmailField(candidateUser.email);
  await signUpCandidatePage.authBase.fillPasswordField(candidateUser.password);
  await signUpCandidatePage.authBase.fillRepeatPasswordField(candidateUser.repeatedPassword);
  await signUpCandidatePage.authBase.clickCreateAccountButton();
}
