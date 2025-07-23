import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from '../notifications/notificationSlice';
import appReducer from './slices/appSlice';
import exampleReducer from './slices/exampleSlice';
export const store = configureStore({
  reducer: {
    example: exampleReducer,
    app: appReducer,
    notifications: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
