import faker from 'faker';

import { InvalidFieldError } from '../../errors/invalid-field-error';
import { MinLengthValidation } from './min-length-validation';

const makeSut = (field: string): MinLengthValidation => new MinLengthValidation(field, 5);

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const field = faker.database.column();
    const sut = makeSut(field);

    const error = sut.validate(faker.random.alphaNumeric(3));

    expect(error).toEqual(new InvalidFieldError(field));
  });

  test('Should return falsy if value is valid', () => {
    const field = faker.database.column();
    const sut = makeSut(field);

    const error = sut.validate(faker.random.alphaNumeric(5));

    expect(error).toBeFalsy();
  });

  test('Should return falsy if field does not exists in schema', () => {
    const sut = makeSut('any_field');

    const error = sut.validate(faker.random.alphaNumeric(5));

    expect(error).toBeFalsy();
  });
});
