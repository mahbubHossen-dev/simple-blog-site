import { userApi } from "./userApiFetch";

const reUseUserApi = userApi.injectEndpoints({
    endpoints: (build) => ({
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

export const { useAddUserMutation } = reUseUserApi