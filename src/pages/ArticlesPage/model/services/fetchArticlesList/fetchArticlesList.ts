import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType
} from "../../selectors/articlesPageSelectors";

import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article, ArticleType } from "@/entities/Article";
import { addQueryParams } from "@/shared/lib/url/addQueryParams/addQueryParams";

interface fetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  fetchArticlesListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async ( props, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState())
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNum(getState());
    const type = getArticlesPageType(getState());

    try {
      addQueryParams({
        sort, order, search, type
      })
      const response = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type_like: type === ArticleType.ALL ? undefined : type
        }
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('articlesPage/fetchArticlesList error :(')
    }
  }
)