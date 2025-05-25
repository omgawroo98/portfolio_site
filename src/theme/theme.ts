import { createTheme, ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
// import OverusedGroteskWoff2 from '../assets/fonts/overused-grotesk-woff2';

const getTheme = (mode: PaletteMode): ThemeOptions =>
  createTheme({
    palette: {
      mode,
      background: {
        default: '#0f172a',
        paper: '#1e2333',
      },
      text: {
        primary: '#f1f5f9',      // main text color
        secondary: '#c8d1da',    // muted text (subtle, captions, etc.)
        disabled: '#7c8b9a',     // for disabled states
      },
      primary: {
        main: '#facc15',          // Yellow-400 as primary
        contrastText: '#0f172a',  // Text that appears on primary buttons
      },
    },
    typography: {
      fontFamily: 'OverusedGrotesk, Arial, sans-serif',
      h1: {
        fontSize: '5rem',
        fontWeight: 700,
        lineHeight: 1.4,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1.5rem',
        fontWeight: 300,
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
      },
      button: {
        fontWeight: 600,
        textTransform: 'none',
      },
    },
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: `
    //     @font-face {
    //       font-family: 'Overused Grotesk';
    //       font-style: normal;
    //       font-display: swap;
    //       font-weight: 400;
    //       src: local('Overused Grotesk'), local('OverusedGrotesk-Regular'),
    //            url(${OverusedGroteskWoff2}) format('woff2');
    //       unicode-range: U+0000-00FF, U+0131, U+0152-0153,
    //                      U+02BB-02BC, U+02C6, U+02DA, U+02DC,
    //                      U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
    //     }
    //   `,
    //   },
    // },
  });

export default getTheme;
