import { createTheme, ThemeOptions } from '@mui/material/styles';

const getTheme = (mode: 'light' | 'dark'): ThemeOptions =>
  createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#fefaf6',  // Creamy background
        paper: '#fdf6ec',    // Lighter surface like cards
      },
      primary: {
        main: '#d4a373',     // Warm tan for buttons/nav
        contrastText: '#fff',
      },
      secondary: {
        main: '#c89f81',     // Soft taupe for outlines or hover
      },
      text: {
        primary: '#2e2e2e',  // Neutral heading
        secondary: '#6b6b6b',
      },
      surface: {
        main: '#e7d9c4',     // NEW: Soft beige specifically for the navbar
        light: '#f0d3b7'
      },
      error: {
        main: '#e57373',     // Slightly muted red
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
            color: "#2e2e2e",
            '&:hover': {
              backgroundColor: 'grey.100',
            },
          },
        },
      },
    },
  });

export default getTheme;
