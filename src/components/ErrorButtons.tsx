import { Button } from '@mui/material';
import { useNotificationDispatch } from '../notifications/useNotificationDispatch';

export default function ErrorButtons() {
  const { showNotification } = useNotificationDispatch();
  const handleShowNotification = (severity: 'success' | 'error' | 'warning' | 'info') => {
    showNotification(`This is a ${severity} notification!`, severity);
  };
  return (
    <>
      <Button variant='outlined' color='success' onClick={() => handleShowNotification('success')}>
        Show Success
      </Button>
      <Button variant='outlined' color='error' onClick={() => handleShowNotification('error')}>
        Show Error
      </Button>
      <Button variant='outlined' color='warning' onClick={() => handleShowNotification('warning')}>
        Show Warning
      </Button>
      <Button variant='outlined' color='info' onClick={() => handleShowNotification('info')}>
        Show Info
      </Button>
    </>
  );
}
