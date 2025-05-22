import { createTheme, ThemeOptions } from '@mui/material/styles';

  const getTheme = (mode: 'light' | 'dark'): ThemeOptions => {
    const isLight = mode === 'light';

    return createTheme({
      palette: {
        mode,
        primary: {
          main: isLight ? '#b08968' : '#a78bfa', // soft violet
        },
        secondary: {
          main: isLight ? '#7f5539' : '#818cf8', // lavender-blue
        },
        background: {
          default: isLight ? '#fefae0' : '#0d0b1f', // deep navy purple
          paper: isLight ? '#ffffff' : '#1a162f', // surface cards
        },
        text: {
          primary: isLight ? '#1c1c1c' : '#e0e7ff', // light indigo white
          secondary: isLight ? '#4a4a4a' : '#a5b4fc',
        },
      },
      typography: {
        fontFamily: "'Inter', sans-serif",
        h1: {
          fontSize: '2.8rem',
          fontWeight: 700,
          color: isLight ? undefined : '#e0e7ff',
        },
        h2: {
          fontSize: '2.2rem',
          fontWeight: 600,
          color: isLight ? undefined : '#c4b5fd',
        },
        body1: {
          fontSize: '1rem',
          color: isLight ? '#333' : '#d1d5db',
        },
      },
      components: {
        // MuiButton: {
        //   styleOverrides: {
        //     root: {
        //       borderRadius: '8px',
        //       textTransform: 'none',
        //       background: isLight
        //         ? undefined
        //         : 'linear-gradient(90deg, #7c3aed, #a78bfa)',
        //       color: isLight ? undefined : '#fff',
        //       boxShadow: isLight
        //         ? undefined
        //         : '0 0 8px rgba(167, 139, 250, 0.4)',
        //     },
        //   },
        // },
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundImage: 'none',
              backgroundColor: isLight ? '#ffffff' : 'rgba(26, 22, 47, 0.6)',
              backdropFilter: isLight ? undefined : 'blur(10px)',
              border: isLight ? undefined : '1px solid rgba(255,255,255,0.05)',
            },
          },
        },
      },
    });
  };

  export default getTheme;
