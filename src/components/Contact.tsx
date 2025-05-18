import { Box, Typography, TextField, Button, Stack, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom align="center">
          {t('contact.title')}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3} align="center">
          {t('contact.subtitle')}
        </Typography>

        <Stack spacing={2} maxWidth={500} mx="auto">
          <TextField
            label={t('contact.form.name')}
            fullWidth
          />
          <TextField
            label={t('contact.form.email')}
            type="email"
            fullWidth
          />
          <TextField
            label={t('contact.form.message')}
            multiline
            rows={4}
            fullWidth
          />
          <Button variant="contained" color="primary">
            {t('contact.form.submit')}
          </Button>
        </Stack>
      </Container>
  );
};

export default Contact;
