import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employee/employeeSlice";

const store = configureStore({
  reducer: {
    employeeSlice: employeeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
