import { AppBar as MuiAppBar, Box, Toolbar, Typography } from '@mui/material';
import DarkModeSwitch from './ui/DarkModeSwitch';
import IconLanguageSwitcher from './ui/lang/IconLanguageSwitcher';

const APP_BAR_HEIGHT = 64;

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar
        position="static"
        elevation={1}
        sx={{
          height: APP_BAR_HEIGHT,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Toolbar variant="regular" sx={{ gap: 2 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: -0.5,
            }}
          >
            TextMagic
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconLanguageSwitcher />
            <DarkModeSwitch />
          </Box>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
