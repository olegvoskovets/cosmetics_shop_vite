import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openMenuDropDown: false,
  menu: false,
};

export const menuDropDownSlice = createSlice({
  name: "menuDropDownSlice",
  initialState,
  reducers: {
    updateMenuDropDown: (state) => {
      state.openMenuDropDown = !state.openMenuDropDown;
    },
    updateMenu: (state, { payload }) => {
      state.menu = payload;
    },
  },
});

export const menuDropDownReducer = menuDropDownSlice.reducer;
export const { updateMenuDropDown, updateMenu } = menuDropDownSlice.actions;
