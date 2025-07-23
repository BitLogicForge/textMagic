import './App.css';
import NotificationProvider from './notifications/NotificationProvider';
import PageOne from './pages/PageOne';
import ThemeProvider from './providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <PageOne />
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
