import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
   baseUrl: "https://xn--80affwgpn.xn--p1ai/api",
   prepareHeaders: (headers) => {
      const access = localStorage.getItem("access");

      if (access) {
         headers.set("Authorization", `Bearer ${access}`);
      }
      return headers;
   },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
   // console.log(args); // request url, method, body
   // console.log(api); // signal, dispatch, getState()
   // console.log(extraOptions); //custom like {shout: true}

   let result = await baseQuery(args, api, extraOptions);
   if (result?.error?.status === 401) {
      const refresh = localStorage.getItem("refresh");
      if (refresh) {
         const refreshResult = await baseQuery(
            {
               url: "token/refresh/",
               method: "POST",
               body: JSON.stringify({
                  refresh: localStorage.getItem("refresh"),
               }),
               headers: {
                  "Content-Type": "application/json",
               },
            },
            api,
            extraOptions
         );

         if (refreshResult?.data) {
            localStorage.setItem("access", refreshResult?.data?.access);
            result = await baseQuery(args, api, extraOptions);
         } else {
            if (refreshResult?.error?.status === 401) {
               localStorage.removeItem("access");
               localStorage.removeItem("refresh");
               return refreshResult;
            }
         }
      } else {
         return result;
      }
   }

   return result;
};

export const apiSlice = createApi({
   reducerPath: "api",
   baseQuery: baseQueryWithReauth,
   changeOrigin: true,
   credentials: "include",
   refetchOnMountOrArgChange: true,
   endpoints: (builder) => ({}),
});

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
