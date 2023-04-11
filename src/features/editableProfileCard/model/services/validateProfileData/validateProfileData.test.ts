import { validateProfileData } from "./validateProfileData";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidateProfileError } from "../../types/editableProfileCardSchema";

const data = {
  username: 'Username',
  age: 42,
  city: "Lisbon",
  lastname: 'lastname',
  first: 'first',
  currency: Currency.EUR,
  country: Country.Portugal,
}

describe('validateProfileData test', () => {
  test('works correctly with correct data', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([])
  })

  test('without first and lastname', async () => {

    const result = validateProfileData({ ...data, first: '', lastname: '' });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ]);
  })

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE
    ]);
  })

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  })

  test('incorrect city', async () => {
    const result = validateProfileData({ ...data, city: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_CITY
    ]);
  })

  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  })
})
