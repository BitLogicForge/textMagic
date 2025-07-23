import type { Severity } from '../constants/general';
import { useAppDispatch } from '../stores/hooks';
import { addNotification, clearAllNotifications, removeNotification } from './notificationSlice';

export const useNotificationDispatch = () => {
  const dispatch = useAppDispatch();

  function showNotification(message: string, severity: Severity) {
    dispatch(addNotification({ message, severity }));
  }

  function hideNotification(id: string) {
    dispatch(removeNotification(id));
  }

  function clearAll() {
    dispatch(clearAllNotifications());
  }

  return {
    showNotification,
    hideNotification,
    clearAll,
  };
};
