import { Typography, Paper, Container, Grid } from '@mui/material';
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
          <Grid size={6} key={key}>
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
