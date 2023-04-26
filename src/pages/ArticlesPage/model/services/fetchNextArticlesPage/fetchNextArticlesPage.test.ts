import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

import { fetchNextArticlesPage } from "./fetchNextArticlesPage";

import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock('../fetchArticlesList/fetchArticlesList');
describe('fetchNextArticlesPage test', () => {
  test('works correctly with correct data', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true
      }
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalled()
  })

  test('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true
      }
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
