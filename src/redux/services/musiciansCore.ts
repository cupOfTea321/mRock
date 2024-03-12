import { apiSlice } from "../api/apiSlice";

export const musiciansApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getMusicians: builder.query({
         query: (params) => `musicians?limit=12${params}`,
      }),
      getRandom: builder.query({
         query: () => `musicians/random`,
      }),
      setLike: builder.mutation({
         query: (id) => `musicians/${id}/like`,
      }),
      setDislike: builder.mutation({
         query: (id) => `musicians/${id}/dislike`,
      }),
   }),
});

export const { useGetMusiciansQuery, useGetRandomQuery } = musiciansApi;
