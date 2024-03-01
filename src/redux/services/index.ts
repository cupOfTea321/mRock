import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem('access')

export const rockCoreApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://xn--80affwgpn.xn--p1ai/api",
        prepareHeaders: (headers) => {
            const access = localStorage.getItem('access')
            const refresh = localStorage.getItem('refresh')
            if (token) {
                headers.set('Authorization', `Bearer ${access}`);
            }
            return headers;
        },

    }),
    // middleware: (baseQuery) => (fetchArgs, { getState }) => {
    //     const token = localStorage.getItem('access') // Получить токен из хранилища Redux
    //     console.log(fetchArgs)
    //     console.log('middleware')
    //     if (token && fetchArgs.method !== 'GET') {
    //         // Добавить заголовки к запросам, отличным от GET
    //         fetchArgs.headers = {
    //             ...fetchArgs.headers,
    //             Authorization: `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //         };
    //     }
    //
    //     return baseQuery(fetchArgs);
    // },
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
        userRefresh: builder.mutation({
            query: (body) => ({
                url: `token/refresh/`,
                method: "POST",
                body: {refresh: body},
            }),
        }),
        userCreate: builder.mutation({
            query: (body) => ({
                url: `auth/register/`,
                method: "POST",
                body,
            }),
        }),
        getProfile: builder.query({
            query: (token) => '/profile/my/',
        }),
        changeData: builder.mutation({
            query: (body, headers) => ({
                url: `profile/my/`,
                method: "PUT",
                body,

            }),
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        }),
    })
})
// экспортируем заданные поинты как хуки
export const {
  useUserAuthMutation,
  useUserRefreshMutation,
  useUserCreateMutation,
    useGetProfileQuery,
    useChangeDataMutation
} = rockCoreApi;
