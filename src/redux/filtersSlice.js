import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filter: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const selectFilters = (state) => state.filters.filter;

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
