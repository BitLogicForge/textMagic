import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Box, Switch } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { toggleTheme } from '../../stores/slices/appSlice';

export default function DarkModeSwitch() {
  const isDarkMode = useAppSelector(state => state.app.isDarkTheme);
  const dispatch = useAppDispatch();

  return (
    <Box display='flex' alignItems='center' flexWrap={'nowrap'}>
      <Brightness7 color={isDarkMode ? 'disabled' : 'primary'} />
      <Switch checked={isDarkMode} onChange={() => dispatch(toggleTheme())} />
      <Brightness4 color={isDarkMode ? 'primary' : 'disabled'} />
    </Box>
  );
}
