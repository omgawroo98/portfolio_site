import { createTheme, ThemeOptions } from '@mui/material/styles';

const getTheme = (mode: 'light' | 'dark'): ThemeOptions =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#1e88e5',
      },
      error: {
        main: '#e53935',
      },
      background: {
        default: mode === 'dark' ? '#121212' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#1c1c1c',
      },
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });

export default getTheme;
