import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  name: "",
  isLoggedIn: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<string>) => {
      return { ...state, isLoggedIn: true, name: action.payload };
    },
    logout: (state) => {
      return { ...state, isLoggedIn: false, name: "" };
    },
  },
});

export const { changeUser, logout } = userReducer.actions;

export const selectUser = (state: { user: UserState }) => state.user;

export default userReducer.reducer;