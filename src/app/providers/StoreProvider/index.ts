import type { StateSchema, ThunkConfig, StateSchemaKey, ReduxStoreWithManager } from "./config/StateSchema";
import { createReduxStore, AppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export {
  StoreProvider,
  createReduxStore
}

export type {
  ThunkConfig,
  StateSchema,
  AppDispatch,
  StateSchemaKey,
  ReduxStoreWithManager
}
