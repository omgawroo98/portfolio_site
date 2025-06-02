import { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomCard from '../layout/CustomCard';
import InputElement from '../layout/InputElement';
import CustomButton from '../layout/Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange =
    (field: keyof FormData) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
          ...prev,
          [field]: event.target.value
        }));
      };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Box sx={{ py: 8, mx: 'auto' }}>
      {/* <RainbowCard> */}
        <Typography variant="h1" gutterBottom align="center">
          {t('contact.title')}
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3} align="center">
          {t('contact.subtitle')}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <InputElement
              label={t('contact.form.name')}
              value={formData.name}
              onChange={handleChange('name')}
              fullWidth
            />
            <InputElement
              label={t('contact.form.email')}
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              fullWidth
            />
            <InputElement
              label={t('contact.form.message')}
              multiline
              minRows={4}
              value={formData.message}
              onChange={handleChange('message')}
              fullWidth
            />
            <CustomButton type="submit">
              {t('contact.form.submit')}
            </CustomButton>
          </Stack>
        </form>
      {/* </RainbowCard> */}
    </Box>
  );
};

export default Contact;
