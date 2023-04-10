import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

interface listPosts {
  listPosts: Post[];
}

const initialState: listPosts = {
  listPosts: [],
};

export const listPostsReducer = createSlice({
  name: "listPosts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.listPosts.push(action.payload);
    },
    editPost: (state, action: PayloadAction<Post>) => {
      const index = state.listPosts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.listPosts[index] = action.payload;
      }
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.listPosts = state.listPosts.filter(
        (post) => post.id !== action.payload
      );
    },
  },
});

export const { addPost, editPost, deletePost } = listPostsReducer.actions;

export const selectListPosts = (state: { listPosts: listPosts }) =>
  state.listPosts;

export default listPostsReducer.reducer;
