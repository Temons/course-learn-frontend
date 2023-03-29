import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import {
  articleDetailsPageRecommendationsReducer
} from "../slices/ArticleDetailsPageRecommendationsSlice";
import { articleDetailsCommentsReducer } from "../slices/ArticleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentsReducer
})