import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidateProfileError } from "../../consts/consts";

const data = {
  id: '1',
  username: 'Username',
  age: 42,
  city: "Lisbon",
  lastname: 'lastname',
  first: 'first',
  currency: Currency.EUR,
  country: Country.Portugal
}

describe('updateProfileData test', () => {
  test('works correctly with correct data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data)
  })

  test('works correctly with error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ statue: 403 }));

    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data, lastname: ''
        }
      }
    });

    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })
})
