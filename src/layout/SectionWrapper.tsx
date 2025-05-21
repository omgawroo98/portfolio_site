import { Box, useTheme } from '@mui/material';

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
        minHeight: fullHeight ? '80vh' : 'auto',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: theme.spacing(8), md: theme.spacing(12) },
        background: theme.palette.mode === 'light'
          ? 'radial-gradient(circle at top right, #ffeccb 0%, #fff3e0 40%, #ffffff 80%)'
          : 'radial-gradient(circle at center, #5b21b6 0%, #1e1b35 70%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '80rem',
        mx: 'auto',
        scrollMarginTop: theme.spacing(10),

        // 🌟 Card-style additions:
        backgroundColor: '#fffaf6', // or theme.palette.background.paper
        borderRadius: '1.5rem',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        mt: fullHeight ? 18 : 0,
        marginBottom: 10
      }}
    >
      {children}
    </Box>
  );
};

export default SectionWrapper;
