import { blogApi } from "./blogsAPIFetch"

const reUseBlogsApi = blogApi.injectEndpoints({
    endpoints: (build) => ({
        getBlogs: build.query({
            query: () => '/blogs'
        }),

    })
})

export const { useGetBlogsQuery } = reUseBlogsApi