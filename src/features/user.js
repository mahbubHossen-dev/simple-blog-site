import { userApi } from "./userApiFetch";

const reUseUserApi = userApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query({
            query: () => '/register' 
        }),
        addUser: build.mutation({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData,
                headers: {
                    'content-type': 'application/json'
                }
            })
        })
    })
})

export const { useGetUserQuery, useAddUserMutation } = reUseUserApi