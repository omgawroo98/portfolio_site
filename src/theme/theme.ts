import { createTheme, ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

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
  });

export default getTheme;
