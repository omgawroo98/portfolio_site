import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { useTranslation } from 'react-i18next';

const projectKeys = ['portfolio', 'weather', 'blog'];

const Portfolio = () => {
  const { t } = useTranslation();

  return (
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          {t('portfolio.title')}
        </Typography>
        <Grid container spacing={4}>
          {projectKeys.map((key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {t(`portfolio.projects.${key}.title`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(`portfolio.projects.${key}.desc`)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
};

export default Portfolio;
