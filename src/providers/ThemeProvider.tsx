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
      //700 is the main color,
      main: '#388e3c',
      light: '#5fa463',
      dark: '#27632a',
    },
    secondary: {
      main: '#f57c00',
      light: '#f79633',
      dark: '#ab5600',
    },
  },
};

const lightTheme = {
  palette: {
    mode: THEME_MODES.LIGHT,
    //300 is the main color,
    primary: {
      main: '#81c784',
      light: '#9ad29c',
      dark: '#5a8b5c',
    },
    secondary: {
      main: '#ffb74d',
      light: '#ffc570',
      dark: '#b28035',
    },
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
