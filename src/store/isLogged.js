import { createSlice } from "@reduxjs/toolkit";

const initialIsLoggedState = {
  isLogged: false,
};

const isLoggedSlice = createSlice({
  name: "isLoggedIn",
  initialState: initialIsLoggedState,
  reducers: {
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
  },
});

export const isLoggedActions = isLoggedSlice.actions;

export default isLoggedSlice.reducer;
