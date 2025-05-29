import React from 'react';
import { Button, ButtonProps, Typography } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
    return (
        <Button
            {...props}
            sx={{
                borderRadius: '100rem',
                px: 4,
                py: 1.5,
                textTransform: 'none',
                backgroundColor: '#ffffff',
                width: '10rem',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',

                '@keyframes shine': {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },

                '& .shine-text': {
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    color: '#000000',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'color 0.3s ease',
                },

                '&:hover .shine-text': {
                    background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
                    backgroundSize: '400% auto',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                    animation: 'shine 3s linear infinite',
                },
            }}
        >
            <Typography className="shine-text">{children}</Typography>
        </Button>
    );
};

export default CustomButton;
