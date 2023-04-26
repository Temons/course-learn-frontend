import { getProfileData } from "./getProfileData";

import { StateSchema } from "@/app/providers/StoreProvider";
import { Currency } from "@/entities/Currency";

describe('getProfileData test', () => {
  test('should return error', () => {
    const data = {
      username: 'Username',
      age: 42,
      city: "Lisbon",
      lastname: 'lastname',
      first: 'first',
      currency: Currency.EUR,
    }
    const state: DeepPartial<StateSchema> = {
      profile: { data }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data);
  })

  test('should return error with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})