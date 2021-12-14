import { configureStore } from "@reduxjs/toolkit";

import isLoggedReducer from "./isLogged";

const store = configureStore({
  reducer: { isLogged: isLoggedReducer },
});

export default store;
