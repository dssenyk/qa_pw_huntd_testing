import { faker } from "@faker-js/faker";
import { BaseAuthFactory } from "./BaseAuthFactory";

export class CandidateUserFactory extends BaseAuthFactory {
  generateCandidateUser(options = {}) {
    const candidateUser = {};
    const password = options.password ?? this.generatePassword();

    candidateUser.email = options.email ?? this.generateEmail(options.firstName);
    candidateUser.password = password;
    candidateUser.repeatedPassword = options.repeatedPassword ?? password;
    candidateUser.role = options.role ?? this.generateRole();
    candidateUser.company = options.company ?? this.generateCompany();
    candidateUser.salary = options.salary ?? this.generateSalary();
    candidateUser.firstName = options.firstName ?? this.generateFirstName();
    candidateUser.lastName = options.lastName ?? this.generateLastName();
    candidateUser.year = options.year ?? this.generateYear();
    candidateUser.keyResults = options.keyResults ?? this.generateMessage();
    candidateUser.achievements = options.achievements ?? this.generateMessage();
    candidateUser.expectations = options.expectations ?? this.generateMessage();
    candidateUser.position = options.position ?? this.generatePosition();
    candidateUser.description = options.description ?? this.generateMessage();

    return candidateUser;
  }

  generateRole() {
    return faker.word.words(2);
  }

  generateSalary() {
    return faker.number.int({ min: 10_000, max: 99_999 });
  }

  generateYear() {
    return faker.number.int({ min: 1925, max: 2025 });
  }
}
