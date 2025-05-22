import React from 'react';
import { Button, useTheme } from '@mui/material';

interface NavButtonProps {
    label: string;
    href: string;
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
            target={href}
            variant="contained"
            sx={{
                backgroundColor: '#7e5ffb',
                color: '#ffffff',
                borderRadius: '0.5rem', // pill shape
                textTransform: 'none', // disable uppercase
                fontWeight: 600,
                paddingX: 2.5,
                paddingY: 1,
                '&:hover': {
                    backgroundColor: '#6c4fe0', // slightly darker on hover
                },
            }}
        >
            {label}
        </Button>
    );
};

export default NavButton;
