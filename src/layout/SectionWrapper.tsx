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
        minHeight: fullHeight ? '100vh' : 'auto',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: theme.spacing(8), md: theme.spacing(12) },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '75rem',
        mx: 'auto',
        scrollMarginTop: theme.spacing(10),
      }}
    >
      {children}
    </Box>
  );
};

export default SectionWrapper;
