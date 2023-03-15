import { StateSchema } from "app/providers/StoreProvider";
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError
} from "./articleDetails";

describe('getArticleDetailsData test', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      subtitle: 'lorem20'
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  })

  test('should return error with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  })

  test('should return isLoading with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
  })


  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  })

  test('should return isLoading with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })
})

