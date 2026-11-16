// redux/provider.tsx (Client Component)
"use client";

import { Provider } from "react-redux";
import store from "./store";
import { childrenProps } from "@/src/app/types";

export default function ReduxProvider({ children }: childrenProps) {
  return <Provider store={store}>{children}</Provider>;
}
