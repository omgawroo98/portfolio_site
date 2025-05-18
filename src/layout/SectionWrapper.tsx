import { Box, useTheme } from '@mui/material';

const SectionWrapper = ({ children, id }: { children: React.ReactNode, id: string }) => {
  const theme = useTheme();
  return (
    <Box
      id={id}
      component="section"
      sx={{
        minHeight: '100vh',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: theme.spacing(8), md: theme.spacing(12) },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '95rem',
        mx: 'auto',
        scrollMarginTop: theme.spacing(10),
      }}
    >
      {children}
    </Box>
  );
};

export default SectionWrapper;
