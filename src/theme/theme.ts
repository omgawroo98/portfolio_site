import { createTheme, ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const getTheme = (mode: PaletteMode): ThemeOptions =>
  createTheme({
    palette: {
      mode,
      background: {
        default: '#0a0a0a', // Deep black base
        paper: '#121212',   // Slightly lighter for cards
      },
      text: {
        primary: '#f5f5f5',
        secondary: '#a1a1aa',
      },
      primary: {
        main: '#ffffff', // Neutral white
        contrastText: '#008080',  // Text that appears on primary buttons
      },
      secondary: {
        main: '#888888', // Subtle secondary for muted text/icons
      }
    },
    typography: {
      fontFamily: 'Overused Grotesk, Arial, sans-serif',

      h1: {
        fontSize: '5rem',
        fontWeight: 700,
        lineHeight: 0.85,           // 85%
        letterSpacing: '-0.05em',   // -5%
      },
      h2: {
        fontSize: '4rem',
        fontWeight: 600,
        lineHeight: 0.9,            // 90%
        letterSpacing: '-0.045em',
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 0.92,           // 92%
        letterSpacing: '-0.04em',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 0.95,           // 95%
        letterSpacing: '-0.035em',
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 300,
        lineHeight: 1.0,            // 100%
        letterSpacing: '-0.03em',
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.0,
        letterSpacing: '-0.03em',
      },

      body1: {
        fontSize: '1.5rem',
        fontWeight: 300,
        lineHeight: 1.5,           // 150%
        letterSpacing: '-0.01em',  // -1%
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.3,           // 130%
      },

      button:
      {
        fontWeight: 600,
        textTransform: 'none'
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
            @font-face {
            font-family: 'Overused Grotesk';
            src: url('/fonts/overused-grotesk-woff2/OverusedGrotesk-Light.woff2') format('woff2');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'Overused Grotesk';
            src: url('/fonts/overused-grotesk-woff2/OverusedGrotesk-Regular.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'Overused Grotesk';
            src: url('/fonts/overused-grotesk-woff2/OverusedGrotesk-Medium.woff2') format('woff2');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'Overused Grotesk';
            src: url('/fonts/overused-grotesk-woff2/OverusedGrotesk-SemiBold.woff2') format('woff2');
            font-weight: 600;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'Overused Grotesk';
            src: url('/fonts/overused-grotesk-woff2/OverusedGrotesk-Bold.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'Overused Grotesk';
            src: url('/fonts/overused-grotesk-woff2/OverusedGrotesk-ExtraBold.woff2') format('woff2');
            font-weight: 800;
            font-style: normal;
            font-display: swap;
          }
      `,
      },
    },
  });

export default getTheme;
