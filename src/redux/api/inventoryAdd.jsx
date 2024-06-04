import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../utils/currentUser";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const token = getToken();

export const inventoryAddApi = createApi({
  reducerPath: "inventoryAddApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllInventory: builder.query({
      query: () => "/inventory/all",
    }),

    getSingleInventory: builder.query({
      query: (id) => ({
        url: `/inventory/${id}`,
      }),
    }),
    getPersonalAdds: builder.query({
      query: () => ({
        url: "/inventory/currentuser",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteInventory: builder.mutation({
      query: (id) => ({
        url: `/inventory/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllInventoryQuery,
  useGetSingleInventoryQuery,
  useGetPersonalAddsQuery,
  useDeleteInventoryMutation
} = inventoryAddApi;
