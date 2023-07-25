import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openMenuDropDown: false,
};

export const menuDropDownSlice = createSlice({
  name: "menuDropDownSlice",
  initialState,
  reducers: {
    updateMenuDropDown: (state) => {
      state.openMenuDropDown = !state.openMenuDropDown;
    },
  },
});

export const menuDropDownReducer = menuDropDownSlice.reducer;
export const { updateMenuDropDown } = menuDropDownSlice.actions;
