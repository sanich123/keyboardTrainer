import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, REDUCER_NAMES } from '../utils/const';

export const keyboardTrainerApi = createApi({
  reducerPath: REDUCER_NAMES.keyboardTrainerApi,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: (name) => `/races/${name}`,
    }),

    addRaceData: builder.mutation({
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
  useGetStatisticsQuery,
  useAddRaceDataMutation,
} = keyboardTrainerApi;
