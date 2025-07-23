import { type ReactNode } from 'react';
import { NotificationStack } from './NotificationStack';

interface NotificationProviderProps {
  children: ReactNode;
}

export default function NotificationProvider({ children }: NotificationProviderProps) {
  return (
    <>
      {children}
      <NotificationStack />
    </>
  );
}
