import { BaseAuthFactory } from './BaseAuthFactory';

export class RecruiterUserFactory extends BaseAuthFactory {
  generateRecruiterUser(options = {}) {
    const recruiterUser = {};
    const password = options.password ?? this.generatePassword();

    recruiterUser.email = options.email ?? this.generateEmail(options.firstName);
    recruiterUser.password = password;
    recruiterUser.repeatedPassword = options.repeatedPassword ?? password;
    recruiterUser.position = options.position ?? this.generatePosition();
    recruiterUser.company = options.company ?? this.generateCompany();
    recruiterUser.firstName = options.firstName ?? this.generateFirstName();
    recruiterUser.lastName = options.lastName ?? this.generateLastName();
    recruiterUser.message = options.message ?? this.generateMessage();

    return recruiterUser;
  }
}
