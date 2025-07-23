import { Alert, Snackbar } from '@mui/material';
import { useAppSelector } from '../stores/hooks';
import { useNotificationAutoHide } from './useNotificationAutoHide';
import { useNotificationDispatch } from './useNotificationDispatch';

export const NotificationStack = () => {
  const { notifications, config } = useAppSelector((state: any) => state.notifications);
  const { hideNotification } = useNotificationDispatch();

  // Handle auto-hide logic
  useNotificationAutoHide();

  return (
    <>
      {notifications.map((notification: any, index: number) => (
        <Snackbar
          key={notification.id}
          open={true}
          autoHideDuration={null}
          anchorOrigin={config.position}
          style={{
            [config.position.vertical]: 16 + index * config.spacing,
          }}
        >
          <Alert
            onClose={() => hideNotification(notification.id)}
            severity={notification.severity}
            sx={{ width: '100%' }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
};
