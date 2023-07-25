import { configureStore } from "@reduxjs/toolkit";
import { viewportReducer } from "./Viewport/viewportSlice";
import { menuDropDownReducer } from "./MenuDropDown/menuDropDownSlice";

export const store = configureStore({
  reducer: {
    viewport: viewportReducer,
    openMenuDropDown: menuDropDownReducer,
  },
});
