import { Box, Typography, Paper, Container } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { useTranslation } from 'react-i18next';

const serviceKeys = ['web', 'backend', 'design'];

const Services = () => {
  const { t } = useTranslation();

  return (
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" gutterBottom fontWeight="bold">
          {t('services.title')}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {serviceKeys.map((key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {t(`services.${key}.title`)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(`services.${key}.desc`)}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
};

export default Services;
