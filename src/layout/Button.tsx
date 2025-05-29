import React from 'react';
import { Button, ButtonProps, Box, Typography } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '9999px',
        px: 4,
        py: 1.5,
        textTransform: 'none',
        backgroundColor: '#0A0A0A',
        transition: 'all 0.3s',
        width: '10rem',
        boxShadow: `
          0 0 0 1px rgba(255, 255, 255, 0.08),
          0 0 12px rgba(255, 255, 255, 0.05)
        `,
        '& .bgLayer': {
          position: 'absolute',
          inset: 2,
          borderRadius: '9999px',
          backgroundColor: '#121212',
          zIndex: 1,
        },
        '& .glow': {
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: '80%',
          height: '33%',
          transform: 'translateX(-50%)',
          borderRadius: '9999px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          filter: 'blur(8px)',
          opacity: 0.5,
          transition: 'all 0.5s',
          zIndex: 1,
        },
        '&:hover .glow': {
          height: '66%',
          opacity: 1,
        },
        '& .content': {
          position: 'relative',
          zIndex: 2,
          color: 'transparent',
          backgroundImage: 'linear-gradient(to top, rgba(255,255,255,0.25), #ffffff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        },
      }}
    >
      <Box className="bgLayer" />
      <Box className="glow" />
      <Box className="content">
        <Typography variant="h4">{children}</Typography>
      </Box>
    </Button>
  );
};

export default CustomButton;
