// SectionWrapper.tsx
import { Box, useTheme, Paper } from '@mui/material';
import { GlowingEffect } from './GlowingEffect'; // adjust the path as needed

const SectionWrapper = ({
  children,
  id,
  fullHeight = false,
  pt,
}: {
  children: React.ReactNode;
  id: string;
  fullHeight?: boolean;
  pt?: number | string
}) => {
  const theme = useTheme();

  return (
    <Box
      id={id}
      component="section"
      sx={{
        width: '100%',
        minHeight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: 2, sm: 4 },
        pt: pt ?? { xs: 6, sm: 8 },
        pb: { xs: 6, sm: 8 },
      }}
    >
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '1100px',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)'
          // backgroundColor: theme.palette.background.paper
        }}
      >
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            borderRadius: 4,
            p: { xs: 3, sm: 5 },
            zIndex: 1,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.25)',
          }}
        >
          {children}
        </Paper>

      </Box>
    </Box>
  );
};



export default SectionWrapper;
