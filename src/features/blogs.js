
import { blogApi } from "./blogsAPIFetch"

const reUseBlogsApi = blogApi.injectEndpoints({
    endpoints: (build) => ({
        getBlogs: build.query({
            query: () => '/blogs'
        }),
        updateBlog: build.mutation({
            query: ({ id, updatedData }) => ({
                url: `/blogs/${id}`,
                method: 'PUT',
                body: updatedData,
                headers: {
                    "Content-Type": "application/json",
                },
            })
        })
    })
})

export const { useGetBlogsQuery, useUpdateBlogMutation } = reUseBlogsApi