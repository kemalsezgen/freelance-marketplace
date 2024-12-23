import { configureStore } from '@reduxjs/toolkit';
import freelancersReducer from "./freelancersSlice";

export const store = configureStore({
  reducer: {
    freelancers: freelancersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;