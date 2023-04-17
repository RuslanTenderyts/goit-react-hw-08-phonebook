import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setValueFilter(state, action) {
      return state = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setValueFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;