import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../../utils/currentUser';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const token = getToken();

export const truckAddApi = createApi({
  reducerPath: 'truckAddApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllLoaders: builder.query({
      query: () => '/loader/all',
    }),

    getSingleLoader: builder.query({
      query: (id) => ({
        url: `/loader/${id}`,
      }),
    }),

    myPersonalAdds: builder.query({
      query: () => ({
        url: '/loader/currentuser',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllLoadersQuery,
  useGetSingleLoaderQuery,
  useMyPersonalAddsQuery,
} = truckAddApi;
