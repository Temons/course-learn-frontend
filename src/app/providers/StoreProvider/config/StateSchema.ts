import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CombinedState } from "redux";

import { ArticleDetailsSchema } from "@/entities/Article";
import { CounterSchema } from "@/entities/Counter";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/AuthByUsername";
import { UISchema } from "@/features/UI";
import { AddCommentFormSchema } from "@/features/addCommentForm";
import { ProfileSchema } from "@/features/editableProfileCard";
import { ArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage";
import { ArticlesPageSchema } from "@/pages/ArticlesPage";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

  // Async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
  add: (key: StateSchemaKey, reducer: Reducer) => void,
  remove: (key: StateSchemaKey) => void,
  // true = mounted, false - unmounted
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
