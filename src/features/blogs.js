
import { blogApi } from "./blogsAPIFetch"

const reUseBlogsApi = blogApi.injectEndpoints({
    endpoints: (build) => ({
        getBlogs: build.query({
            query: () => '/blogs'
        }),
        addBlog: build.mutation({
            query: ({blogData}) => ({
                url: `/blogs`,
                method: 'POST',
                body: blogData,
                headers: {
                    'content-type': 'application/json'
                }
            })
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
        }),
        deleteBlog: build.mutation({
            query: ({id}) => ({
                url: `/blogs/${id}`,
                method: 'DELETE',
            })
        })
    })
})

export const { useGetBlogsQuery, useUpdateBlogMutation, useDeleteBlogMutation, useAddBlogMutation } = reUseBlogsApi