import React from 'react';
import { Button, useTheme } from '@mui/material';

interface NavButtonProps {
    label: string;
    href?: string;
    active?: boolean;
    onClick?: () => void;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

const NavButton: React.FC<NavButtonProps> = ({
    label,
    href,
    active = false,
    onClick,
    target = '_self',
}) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Button
            href={href}
            onClick={onClick}
            target={href ? target : undefined}
            disableElevation
            variant="contained"
            sx={{
                backgroundColor: active
                    ? '#7e5ffb'
                    : 'transparent',
                color: active
                    ? '#ffffff'
                    : isDark
                        ? 'rgba(255,255,255,0.85)'
                        : 'rgba(0,0,0,0.85)',
                fontWeight: 600,
                fontSize: '0.9rem',
                borderRadius: '8px',
                padding: '8px 16px',
                textTransform: 'none',
                boxShadow: 'none',
                border: active
                    ? 'none'
                    : isDark
                        ? '1px solid rgba(255,255,255,0.1)'
                        : '1px solid rgba(0,0,0,0.1)',
                '&:hover': {
                    backgroundColor: active
                        ? '#704cf1'
                        : isDark
                            ? 'rgba(255,255,255,0.06)'
                            : 'rgba(0,0,0,0.05)',
                    boxShadow: 'none',
                },
                '&:active': {
                    backgroundColor: active ? '#6544e4' : undefined,
                },
            }}
        >
            {label}
        </Button>
    );
};

export default NavButton;
