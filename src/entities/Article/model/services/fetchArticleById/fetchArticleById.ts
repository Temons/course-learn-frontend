import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(
  'articleDetails/fetchProfileData',
  async ( articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log('error loginByUsername')
      return rejectWithValue('username or password wrong :(')
    }
  }
)