import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    palette: {
        primary: {
            main: '#1e88e5', 
        },
        error: {
            main: '#e53935', 
        },
        background: {
            default: '#ffffff',
        },
        text: {
            primary: '#1c1c1c',
        },
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

export default theme;
