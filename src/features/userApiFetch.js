import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`}),
    endpoints: (build) =>({})
})