import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const rockCoreApi = createApi({
  reducerPath: "generatorCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://85.193.87.7/api/",
    // credentials: "same-origin",
    // mode: 'cors',
    prepareHeaders: (headers) => {
      // headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
      // headers.set('Accept', 'application/json')
      // headers.set('Content-Type', 'application/json')
      // headers.set('Content-Type', 'application/x-www-form-urlencoded')
      // headers.set('Content-Type', 'text/html')
      return headers;
    },

  }),
  credentials: 'include',
  changeOrigin: true,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({

  }),
});
// экспортируем заданные поинты как хуки
export const {
  // useGetMusiciansQuery,
} = rockCoreApi;
