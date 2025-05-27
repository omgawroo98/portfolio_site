import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { GlowingEffect } from './GlowingEffect';

interface GlassCardProps {
  children: ReactNode;
  sx?: object;
}

const RainbowCard = ({ children, sx = {} }: GlassCardProps) => {
  return (
    <Box
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 4,
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: `
          0 0 0 1px rgba(255, 255, 255, 0.08),
          0 0 12px rgba(255, 255, 255, 0.05)
        `,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.15),
            0 0 18px rgba(255, 255, 255, 0.08)
          `,
        },
        ...sx,
      }}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      {children}
    </Box>
  );
};

export default RainbowCard;
