import {rockCoreApi} from "./index";


export const musiciansApi = rockCoreApi.injectEndpoints({
    endpoints: builder => ({
        getMusicians: builder.query<void, string>({
            query: () => `musicians`,
        }),
        changeMailing: builder.mutation({
            query: (id, body ) => ({
                url: `mailings/${id}`,
                method: 'PUT',
                body
            }),
        }),
        removeMailing: builder.mutation({
            query: (id ) => ({
                url: `mailings/${id}`,
                method: 'DELETE',
            }),
        }),
        getMailings: builder.query({query: () => `mailings`}),
        setMailing: builder.mutation({
            query: (body ) => ({
                url: `mailings`,
                method: 'POST',
                body
            }),
        }),
    }),
})

export const {
    useGetMusiciansQuery,
} = musiciansApi
