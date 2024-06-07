import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/user";
import { setupListeners } from "@reduxjs/toolkit/query";
import { truckAddApi } from "./api/truckadd";
import { inventoryAddApi } from "./api/inventoryAdd";
import { chatApi } from "./api/chatApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [truckAddApi.reducerPath]: truckAddApi.reducer,
    [inventoryAddApi.reducerPath]: inventoryAddApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      truckAddApi.middleware,
      inventoryAddApi.middleware,
      chatApi.middleware
    ),
});

setupListeners(store.dispatch);
