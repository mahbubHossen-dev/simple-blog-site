import { blogApi } from "@/features/blogsAPIFetch";
import { userApi } from "@/features/userApiFetch";
import { configureStore } from "@reduxjs/toolkit";

const myStore = () => {
    return configureStore({
        reducer: {
            [blogApi.reducerPath]: blogApi.reducer,
            [userApi.reducerPath]: userApi.reducer,
        },
       middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
                .concat(blogApi.middleware)
                .concat(userApi.middleware) 
    })
}

export default myStore