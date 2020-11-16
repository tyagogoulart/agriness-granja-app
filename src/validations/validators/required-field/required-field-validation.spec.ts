import faker from 'faker';

import { RequiredFieldError } from '../../errors/required-field-error';
import { RequiredFieldValidation } from './required-field-validation';

const makeSut = (field: string): RequiredFieldValidation => new RequiredFieldValidation(field);

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const field = faker.database.column();
    const sut = makeSut(field);

    const error = sut.validate('');

    expect(error).toEqual(new RequiredFieldError(field));
  });

  test('Should return falsy if field is not empty', () => {
    const field = faker.database.column();
    const sut = makeSut(field);

    const error = sut.validate(faker.random.word());

    expect(error).toBeFalsy();
  });
});
