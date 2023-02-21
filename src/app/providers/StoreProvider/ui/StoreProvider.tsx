import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { DeepPartial } from "@reduxjs/toolkit";

interface StoreProviderProps {
    children? : ReactNode;
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const store = createReduxStore(initialState as StateSchema)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
