import { blogApi } from "@/features/blogsAPIFetch";
import { configureStore } from "@reduxjs/toolkit";

const myStore = () => {
    return configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(blogApi.middleware)
    }
})
}

export default myStore