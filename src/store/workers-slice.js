import { createSlice } from "@reduxjs/toolkit";

const workersSlice = createSlice({
  name: "workers",
  initialState: { workers: [], searchedWorker: "" },
  reducers: {
    setWorkers(state, action) {
      state.workers = action.payload.workers;
    },
    sortWorkersByLastNameASC(state) {
      state.workers.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
    },
    sortWorkersByLastNameDSC(state) {
      state.workers.sort((a, b) => (a.lastName < b.lastName ? 1 : -1));
    },
    sortWorkersByNameASC(state) {
      state.workers.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortWorkersByNameDSC(state) {
      state.workers.sort((a, b) => (a.name < b.name ? 1 : -1));
    },
    setSearchedWorker(state, action) {
      state.searchedWorker = action.payload;
    },
  },
});

export const workersActions = workersSlice.actions;

export default workersSlice;
