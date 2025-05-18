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
      h1: {
        fontSize: '5rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2.25rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '1.625rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.5px',
        color: '#0f172a',
      },
      body1: {
        fontSize: '1.4rem',
        lineHeight: 1.6,
      },
      nav: {
        fontSize: '1.2rem',
        fontWeight: 500,
        textTransform: 'none',
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontSize: '1.5rem',
            fontWeight: 500,
            textTransform: 'none',
          },
        },
      },
    },
  });

export default getTheme;
