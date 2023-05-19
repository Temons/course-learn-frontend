import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsCommentsReducer } from '../slices/ArticleDetailsCommentsSlice';
import { articleDetailsPageRecommendationsReducer } from '../slices/ArticleDetailsPageRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
  });
