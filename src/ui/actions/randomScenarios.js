import {
  technologies,
  roles,
  jobExpRecruiter,
  jobExpCandidate,
  engLvlRecruiter,
  engLvlCandidate,
  months
} from "../constants/otherThings";

function getRandomValue(obj) {
  const values = Object.values(obj);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function getRandomTechnologies(count = 5) {
  const techArray = Object.values(technologies);

  for (let i = techArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [techArray[i], techArray[j]] = [techArray[j], techArray[i]];
  }

  return techArray.slice(0, count);
}

export function generateRandomScenarioCandidate() {
  return {
    role: getRandomValue(roles),
    technologies: getRandomTechnologies(),
    exp: getRandomValue(jobExpCandidate),
    english: getRandomValue(engLvlCandidate),
    month: getRandomValue(months),
  };
}

export function generateRandomScenarioRecruiter() {
  return {
    role: getRandomValue(roles),
    technologies: getRandomTechnologies(),
    exp: getRandomValue(jobExpRecruiter),
    english: getRandomValue(engLvlRecruiter),
  };
}
