import type { Severity } from '../constants/general';

export type TNotification = {
  id: string;
  message: string;
  severity: Severity;
  timestamp: number;
};

export type TNotificationState = {
  notifications: TNotification[];
  config: {
    autoHideDuration: number;
    maxNotifications: number;
    spacing: number;
    position: {
      vertical: 'top' | 'bottom';
      horizontal: 'left' | 'center' | 'right';
    };
  };
};
