import { configureStore } from "@reduxjs/toolkit";
import spaceXReducer from "./features/spaceXSlice";

export const store = configureStore({
  reducer: {
    spaceX: spaceXReducer,
  },
});
