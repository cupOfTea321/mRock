import {generatorCoreApi} from "./index.ts";


export const mutationsApi = generatorCoreApi.injectEndpoints({
    endpoints: builder => ({
        emailSend: builder.mutation({
            query: (credentials) => ({
                url: `/sendSpecData.php`,
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
})

// экспортируем заданные поинты как хуки
export const { useEmailSendMutation } = mutationsApi

export const {
    endpoints: { emailSend },
} = mutationsApi

