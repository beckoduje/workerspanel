import { configureStore } from "@reduxjs/toolkit";
import isLoggedInSlice from "./isLoggedIn-slice";

const store = configureStore({
  reducer: {
    isLoggedIn: isLoggedInSlice.reducer,
  },
});

export default store;
