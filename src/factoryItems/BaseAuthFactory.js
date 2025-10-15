import { faker } from "@faker-js/faker";

export class BaseAuthFactory {
  generateEmail(firstName = 'user') {
    return `${firstName}_${faker.internet.email().toLowerCase().replace(/[^a-z0-9@._-]/g, '')}`;
  }

  generatePassword() {
    return faker.internet.password();
  }

  generateFirstName() {
    return faker.person.firstName();
  }

  generateLastName() {
    return faker.person.lastName();
  }

  generateCompany() {
    return faker.company.name();
  }

  generateMessage() {
    return faker.lorem.words(5);
  }

  generatePosition() {
    return faker.word.sample();
  }
}
