import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from './notificationSlice';

export const useNotificationAutoHide = () => {
  const dispatch = useDispatch();
  const { notifications, config } = useSelector((state: any) => state.notifications);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    notifications.forEach((notification: any) => {
      const timeLeft = config.autoHideDuration - (Date.now() - notification.timestamp);

      if (timeLeft > 0) {
        const timeout = setTimeout(() => {
          dispatch(removeNotification(notification.id));
        }, timeLeft);
        timeouts.push(timeout);
      } else {
        // Remove immediately if already expired
        dispatch(removeNotification(notification.id));
      }
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [notifications, config.autoHideDuration, dispatch]);
};
