import { apiSlice } from "../api/apiSlice";

const token = localStorage.getItem("access");

export const rockCoreApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      userAuth: builder.mutation({
         query: (body) => ({
            url: `token/`,
            method: "POST",
            body,
         }),
      }),
      userRefresh: builder.mutation({
         query: () => ({
            url: `token/refresh/`,
            method: "POST",
            body: { refresh: localStorage.getItem("refresh") },
         }),
      }),
      userCreate: builder.mutation({
         query: (body) => ({
            url: `auth/register/`,
            method: "POST",
            body,
         }),
      }),
      changeData: builder.mutation({
         query: (body, headers) => ({
            url: `profile/my/`,
            method: "PUT",
            body,
         }),
         headers: {
            Authorization: `Bearer ${token}`,
         },
      }),
      refreshPwd: builder.mutation({
         query: (phoneNumber) => ({
            url: `auth/reset/`,
            method: "POST",
            body: phoneNumber,
         }),
      }),
      getProfile: builder.query({
         query: () => ({
            url: "profile/my/",
         }),
      }),
   }),
});
// экспортируем заданные поинты как хуки
export const {
   useUserAuthMutation,
   useUserRefreshMutation,
   useUserCreateMutation,
   useGetProfileQuery,
   useChangeDataMutation,
   useRefreshPwdMutation,
} = rockCoreApi;
