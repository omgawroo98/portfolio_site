import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <Box
      id="about"
      sx={{
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center', // vertically center
        justifyContent: 'center', // horizontally center
        px: 2, // optional padding
      }}
    >
      <Grid
        container
        spacing={4}
        maxWidth="md"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="h3" align="center" fontWeight="bold">
            {t('about.title')}
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            {t('about.description')}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About