import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../../utils/currentUser';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const inventoryAddApi = createApi({
  reducerPath: 'inventoryAddApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllInventory: builder.query({
      query: () => '/inventory/all',
    }),

    getSingleInventory: builder.query({
      query: (id) => ({
        url: `/inventory/${id}`,
      }),
    }),
  }),
});

export const { useGetAllInventoryQuery, useGetSingleInventoryQuery } =
  inventoryAddApi;
