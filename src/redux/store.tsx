import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import listPostsReducer from "./listPostsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    listPosts: listPostsReducer,
  },
});