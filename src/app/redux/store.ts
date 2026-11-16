import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "api/executeQuery/fulfilled",
          "api/executeQuery/rejected",
        ],
        // ignoredPaths: [
        //   /api\.queries\.exportFileRetailsApi.*/,
        // ],
      },
    }).concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export default store;
