import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../utils/currentUser";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const token = getToken();

export const truckAddApi = createApi({
  reducerPath: "truckAddApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Inventory"],
  endpoints: (builder) => ({
    getAllLoaders: builder.query({
      query: () => "/loader/all",
      providesTags: ["Inventory"],
    }),

    getSingleLoader: builder.query({
      query: (id) => ({
        url: `/loader/${id}`,
      }),
    }),

    myPersonalAdds: builder.query({
      query: () => ({
        url: "/loader/currentuser",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    deleteLoader: builder.mutation({
      query: (id) => ({
        url: `/loader/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Inventory"],
    }),
  }),
});

export const {
  useGetAllLoadersQuery,
  useGetSingleLoaderQuery,
  useMyPersonalAddsQuery,
  useDeleteLoaderMutation,
} = truckAddApi;
