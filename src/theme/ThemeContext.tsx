import { createContext, useMemo, useState, ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import getTheme from './theme';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
    const getInitialMode = (): 'light' | 'dark' => {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') return saved;

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    };

    const [mode, setMode] = useState<'light' | 'dark'>(getInitialMode);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => {
                    const newMode = prev === 'light' ? 'dark' : 'light';
                    localStorage.setItem('theme', newMode);
                    return newMode;
                });
            },
        }),
        []
    );

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
