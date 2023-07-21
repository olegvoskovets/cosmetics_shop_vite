import { configureStore } from "@reduxjs/toolkit";
import { viewportReducer } from "./Viewport/viewportSlice";

export const store = configureStore({
  reducer: {
    viewport: viewportReducer,
  },
});
