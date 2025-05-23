// SectionWrapper.tsx
import { Box, useTheme, Paper } from '@mui/material';
import { GlowingEffect } from './GlowingEffect'; // adjust the path as needed

const SectionWrapper = ({
  children,
  id,
  fullHeight = false,
}: {
  children: React.ReactNode;
  id: string;
  fullHeight?: boolean;
}) => {
  const theme = useTheme();

  return (
    <Box
      id={id}
      component="section"
      sx={{
        width: '100%',
        minHeight: fullHeight ? '100vh' : 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: 2, sm: 4 },
        py: { xs: 6, sm: 8 },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '1100px',
          borderRadius: 4,
          overflow: 'hidden',
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

        <Paper
          elevation={4}
          sx={{
            position: 'relative',
            borderRadius: 4,
            p: { xs: 3, sm: 5 },
            bgcolor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            zIndex: 1,
          }}
        >
          {children}
        </Paper>
      </Box>
    </Box>
  );
};



export default SectionWrapper;
