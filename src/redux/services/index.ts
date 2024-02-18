import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const rockCoreApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://85.193.87.7/api/",
        prepareHeaders: (headers) => {
            return headers;
        },

    }),
    credentials: 'include',
    changeOrigin: true,
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({

        userAuth: builder.mutation({
            query: (body) => ({
                url: `token/`,
                method: "POST",
                body,
            }),
        }),
        userCreate: builder.mutation({
            query: (body) => ({
                url: `auth/register/`,
                method: "POST",
                body,
            }),
        }),
    })
})
// экспортируем заданные поинты как хуки
export const {
  useUserAuthMutation,
  useUserCreateMutation,
} = rockCoreApi;
