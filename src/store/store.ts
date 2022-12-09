import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Infer the RootState and AppDispatch types from this store.ts file.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
