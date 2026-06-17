import { Box } from '@mui/material';
import NotificationProvider from './notifications/NotificationProvider';
import PageOne from './pages/PageOne';
import ThemeProvider from './providers/ThemeProvider';
import AppBar from './components/AppBar';

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <AppBar />
          <PageOne />
        </Box>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
