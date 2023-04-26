import { getLoginError } from "./getLoginError";

import { StateSchema } from "@/app/providers/StoreProvider";

describe('getLoginError test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: "error!"
      }
    }
    expect(getLoginError(state as StateSchema)).toEqual('error!')
  })

  test('should return error with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})