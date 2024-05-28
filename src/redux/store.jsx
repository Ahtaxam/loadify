import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './api/user';
import { setupListeners } from '@reduxjs/toolkit/query';
import { truckAddApi } from './api/truckadd';
import { inventoryAddApi } from './api/inventoryAdd';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [truckAddApi.reducerPath]: truckAddApi.reducer,
    [inventoryAddApi.reducerPath]: inventoryAddApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      truckAddApi.middleware,
      inventoryAddApi.middleware
    ),
});

setupListeners(store.dispatch);
