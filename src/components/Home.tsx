import {
    Box,
    Button,
    Typography,
    IconButton,
    Stack,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Grid from '@mui/material/GridLegacy';
import profileImage from '../assets/images/portfolio picture.jpg';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                {/* Left Column */}
                <Grid xs={12} md={5}>
                    <Stack spacing={2}>
                        <Typography variant="h1" fontWeight="bold">
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
                                <GitHubIcon sx={{ fontSize: '2rem' }} />
                            </IconButton>
                            <IconButton color="error" href="https://linkedin.com/in/your-linkedin" target="_blank">
                                <LinkedInIcon sx={{ fontSize: '2rem' }} />
                            </IconButton>
                            <IconButton color="error" href="https://youtube.com/your-channel" target="_blank">
                                <YouTubeIcon sx={{ fontSize: '2rem' }} />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Grid>

                {/* Right Column */}
                <Grid xs={12} md={5} sx={{ ml: 'auto' }}>
                    <Box
                        component="img"
                        src={profileImage}
                        alt="Omar illustration"
                        sx={{
                            width: '100%',
                            maxWidth: 400,
                            borderRadius: 8,
                            boxShadow: 3,
                        }}
                    />
                </Grid>
            </Grid>
    );
};

export default Home;
