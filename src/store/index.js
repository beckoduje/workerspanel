import { configureStore } from "@reduxjs/toolkit";
import isLoggedInSlice from "./isLoggedIn-slice";
import registeredUsersSlice from "./registeredUsers-slice";

const store = configureStore({
  reducer: {
    isLoggedIn: isLoggedInSlice.reducer,
    registeredUsers: registeredUsersSlice.reducer,
  },
});

export default store;
