"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import store from "./store";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
