import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authorizationHeader } from "../../utils/currentUser";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      return authorizationHeader(headers, getState);
    },
  }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/message/send/${id}`,
        method: "POST",
        body: { message: data },
      }),
    }),
    getMessages: builder.query({
      query: (id) => `/message/${id}`,
    }),

    getUserChats: builder.query({
      query: () => "/message/user",
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetUserChatsQuery,
  useGetMessagesQuery,
} = chatApi;