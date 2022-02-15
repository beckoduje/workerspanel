import { configureStore } from "@reduxjs/toolkit";
import isLoggedInSlice from "./isLoggedIn-slice";
import registeredUsersSlice from "./registeredUsers-slice";
import workersSlice from "./workers-slice";

const store = configureStore({
  reducer: {
    isLoggedIn: isLoggedInSlice.reducer,
    registeredUsers: registeredUsersSlice.reducer,
    workers: workersSlice.reducer,
  },
});

export default store;
