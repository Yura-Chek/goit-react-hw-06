import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    enter: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.enter = action.payload.toLowerCase();
    },
  },
});

function selectFilters(state) {
  return state.filters.enter;
}

const { changeFilter } = filtersSlice.actions;

export { selectFilters, changeFilter };
export default filtersSlice.reducer;
