import { getProfileIsLoading } from "./getProfileIsLoading";

import { StateSchema } from "@/app/providers/StoreProvider";

describe('getProfileIsLoading test', () => {
  test('should work with filled state', () => {

    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  })

  test('should return error with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
  })
})