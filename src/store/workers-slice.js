import { createSlice } from "@reduxjs/toolkit";

const workersSlice = createSlice({
  name: "workers",
  initialState: { workers: [] },
  reducers: {
    setWorkers(state, action) {
      state.workers = action.payload.workers;
    },
  },
});

export const workersActions = workersSlice.actions;

export default workersSlice;
