import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonPlaceholderAPI = createApi({
  reducerPath: 'JSONPLACEHOLDER_API',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),

    getPosts: builder.query({
      query: () => '/posts',
    }),

    getComments: builder.query({
      query: () => '/comments',
    }),

    addComment: builder.mutation({
      query: ({id, ...body}) =>
        ({
          url: `/posts/${id}`,
          method: 'PUT',
          body,
        }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetPostsQuery,
  useGetCommentsQuery,
  useAddCommentMutation,
} = jsonPlaceholderAPI;
