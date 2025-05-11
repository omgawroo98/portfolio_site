import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                {t('nav.about')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                I'm a passionate full stack developer focused on crafting clean, user-friendly, and performant web applications. I specialize in React, TypeScript, and Node.js.
            </Typography>
        </Box>
    );
};

export default About;
