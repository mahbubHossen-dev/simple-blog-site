import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fetchBaseQuery({baseUrl:`${process.env.NEXT_PUBLIC_API_BASE_URL}/api`}),
    endpoints: (build) => ({}),
    mode: "cors", 
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*')
      return headers
    },
})

