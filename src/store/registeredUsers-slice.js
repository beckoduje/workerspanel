import { createSlice } from "@reduxjs/toolkit";

const registeredUsersSlice = createSlice({
  name: "registeredUsers",
  initialState: { registeredUsers: [] },
  reducers: {
    setRegisteredUsers(state, action) {
      state.registeredUsers = action.payload.users;
    },
  },
});

export const registeredUsersActions = registeredUsersSlice.actions;

export default registeredUsersSlice;
