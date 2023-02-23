import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer

  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
