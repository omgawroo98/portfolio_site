import {
    Box,
    Button,
    Typography,
    IconButton,
    Stack,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/GridLegacy'; // ← Grid2
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                {/* Left Column */}
                <Grid xs={12} md={5}>
                    <Stack spacing={2}>
                        <Typography variant="h3" fontWeight="bold">
                            {t('home.title')}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {t('home.subtitle')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {t('home.description')}
                        </Typography>
                        <Button
                            variant="contained"
                            color="error"
                            size="large"
                            sx={{ width: 'fit-content' }}
                        >
                            {t('home.cta')}
                        </Button>
                        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                            <IconButton color="error" href="https://github.com/your-github" target="_blank">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton color="error" href="https://linkedin.com/in/your-linkedin" target="_blank">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton color="error" href="https://instagram.com/your-instagram" target="_blank">
                                <InstagramIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Grid>

                {/* Right Column */}
                <Grid xs={12} md={5} sx={{ textAlign: 'center' }}>
                    <Box
                        component="img"
                        src="/avatar.png"
                        alt="Omar illustration"
                        sx={{ width: '100%', maxWidth: 400 }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
