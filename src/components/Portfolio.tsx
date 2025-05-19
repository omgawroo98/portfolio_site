import { Typography, Card, CardContent, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const projectKeys = ['portfolio', 'weather', 'blog'];

const Portfolio = () => {
  const { t } = useTranslation();

  return (
      <Container maxWidth="lg">
        <Typography variant="h1" gutterBottom>
          {t('portfolio.title')}
        </Typography>
        <Grid container spacing={4}>
          {projectKeys.map((key) => (
            <Grid size={4} key={key}>
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
