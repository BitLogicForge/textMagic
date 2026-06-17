import { ThemeProvider as MuiThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, useMediaQuery } from '@mui/material';
import { useEffect, type ReactNode } from 'react';
import { THEME_MODES } from '../constants/theme';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { setDarkTheme } from '../stores/slices/appSlice';

type TProps = {
  children: ReactNode;
};

const darkTheme = {
  palette: {
    mode: THEME_MODES.DARK,
    primary: {
      main: '#4ade80',
      light: '#86efac',
      dark: '#22c55e',
      contrastText: '#000',
    },
    secondary: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
      contrastText: '#000',
    },
    background: {
      default: '#0f0f0f',
      paper: '#1a1a1a',
    },
  },
  shape: {
    borderRadius: 12,
  },
};

const lightTheme = {
  palette: {
    mode: THEME_MODES.LIGHT,
    primary: {
      main: '#22c55e',
      light: '#4ade80',
      dark: '#16a34a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
      contrastText: '#fff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 12,
  },
};

export default function ThemeProvider({ children }: TProps) {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const dispatch = useAppDispatch();

  const isDarkMode = useAppSelector(state => state.app.isDarkTheme);

  const theme = createTheme({
    palette: {
      ...(isDarkMode ? darkTheme.palette : lightTheme.palette),
    },
  });

  useEffect(() => {
    dispatch(setDarkTheme(prefersDark));
  }, [prefersDark, dispatch]);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </>
  );
}
