import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
   reducer: {
      user: userSlice,
      [apiSlice.reducerPath]: apiSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
