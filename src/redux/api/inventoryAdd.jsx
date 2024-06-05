import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../../utils/currentUser';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const token = getToken();

export const inventoryAddApi = createApi({
  reducerPath: 'inventoryAddApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Inventory'],
  endpoints: (builder) => ({
    getAllInventory: builder.query({
      query: () => '/inventory/all',
      providesTags: ['Inventory'],
    }),

    getSingleInventory: builder.query({
      query: (id) => ({
        url: `/inventory/${id}`,
      }),
    }),
    getPersonalAdds: builder.query({
      query: (authToken) => ({
        url: '/inventory/currentuser',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }),
      providesTags: ['Inventory'],
    }),
    deleteInventory: builder.mutation({
      query: (id) => ({
        url: `/inventory/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Inventory'],
    }),
  }),
});

export const {
  useGetAllInventoryQuery,
  useGetSingleInventoryQuery,
  useGetPersonalAddsQuery,
  useDeleteInventoryMutation,
} = inventoryAddApi;
