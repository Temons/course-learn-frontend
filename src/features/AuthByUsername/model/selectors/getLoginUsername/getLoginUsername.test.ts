import { getLoginUsername } from "./getLoginUsername";

import { StateSchema } from "@/app/providers/StoreProvider";

describe('getLoginUsername test', () => {
  test('should return right username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'Alex'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual( 'Alex' )
  })

  test('should return false, different passwords expected and get', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '321123'
      }
    }
    expect(getLoginUsername(state as StateSchema)).not.toEqual('Some wrong and different username!')
  })

  test('should return empty string with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})