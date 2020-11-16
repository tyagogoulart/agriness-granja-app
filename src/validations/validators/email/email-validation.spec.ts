import faker from 'faker';

import { InvalidFieldError } from '../../errors/invalid-field-error';
import { EmailValidation } from './email-validation';

const makeSut = (field: string): EmailValidation => new EmailValidation(field);

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const field = faker.database.column();
    const sut = makeSut(field);
    const error = sut.validate(faker.random.word());
    expect(error).toEqual(new InvalidFieldError(field));
  });

  test('Should return falsy if email is valid', () => {
    const field = faker.database.column();
    const sut = makeSut(field);
    const error = sut.validate(faker.internet.email());
    expect(error).toBeFalsy();
  });

  test('Should return falsy if email is empty', () => {
    const field = faker.database.column();
    const sut = makeSut(field);
    const error = sut.validate('');
    expect(error).toBeFalsy();
  });
});
