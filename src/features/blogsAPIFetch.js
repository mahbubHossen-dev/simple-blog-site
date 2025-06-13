import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/api'}),
    endpoints: (build) => ({})
})