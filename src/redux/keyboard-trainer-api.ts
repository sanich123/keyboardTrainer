import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, REDUCER_NAMES } from '../utils/const';

export const keyboardTrainerApi = createApi({
  reducerPath: REDUCER_NAMES.keyboardTrainerApi,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  tagTypes: ['statistic', 'userData'],
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: (name) => `/races/${name}`,
      providesTags: ['statistic'],
    }),

    addRaceData: builder.mutation({
      query: (body) =>
        ({
          url: '/race',
          method: 'POST',
          body,
        }),
      invalidatesTags: ['statistic'],
    }),
  }),
});

export const {
  useGetStatisticsQuery,
  useAddRaceDataMutation,
} = keyboardTrainerApi;
