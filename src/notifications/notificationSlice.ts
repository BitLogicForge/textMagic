import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type TNotification, type TNotificationState } from './types';

const generateId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

const initialState: TNotificationState = {
  notifications: [],
  config: {
    autoHideDuration: 3000,
    maxNotifications: 5,
    spacing: 70,
    position: { vertical: 'bottom', horizontal: 'center' },
  },
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<{
        message: string;
        severity: TNotification['severity'];
      }>
    ) => {
      const { message, severity } = action.payload;
      const newNotification: TNotification = {
        id: generateId(),
        message,
        severity,
        timestamp: Date.now(),
      };

      state.notifications.push(newNotification);

      // Keep only the latest notifications if we exceed max
      if (state.notifications.length > state.config.maxNotifications) {
        state.notifications = state.notifications.slice(-state.config.maxNotifications);
      }
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(notification => notification.id !== action.payload);
    },
    clearAllNotifications: state => {
      state.notifications = [];
    },
    updateConfig: (state, action: PayloadAction<Partial<TNotificationState['config']>>) => {
      state.config = { ...state.config, ...action.payload };
    },
  },
});

export const { addNotification, removeNotification, clearAllNotifications, updateConfig } = notificationSlice.actions;

export default notificationSlice.reducer;
