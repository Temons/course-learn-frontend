import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe('getProfileError test', () => {
  test('should return error', () => {

    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '121121211221'
      }
    }
    expect(getProfileError(state as StateSchema)).toEqual('121121211221');
  })

  test('should return error with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})