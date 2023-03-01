import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe('getLoginPassword test', () => {
  test('should return right pass', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '321'
      }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual( '321' )
  })

  test('should return false, different passwords expected and get', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '321123'
      }
    }
    expect(getLoginPassword(state as StateSchema)).not.toEqual('Some wrong and different password!')
  })

  test('should return empty string with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})