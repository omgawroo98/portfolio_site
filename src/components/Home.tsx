import {
    Box,
    Button,
    Typography,
    IconButton,
    Stack,
    Grid
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import profileImage from '../assets/images/portfolio picture.jpg';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Grid container spacing={4}
        // justifyContent="center" alignItems="center"
        >
            {/* Left Column */}
            <Grid size={7}>
                <Box
                    sx={{
                        height: '100%',           // or a fixed height if you need
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Top Section: Typography */}
                    <Box>
                        <Typography variant="h1" fontWeight="bold">
                            {t('home.title')}
                        </Typography>
                        <Typography variant="h2" color="text.secondary">
                            {t('home.subtitle')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {t('home.description')}
                        </Typography>
                    </Box>

                    {/* Bottom Section: CTA Button + Icons */}
                    <Box>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                width: 'fit-content',
                                backgroundColor: 'surface.light',
                            }}
                        >
                            {t('home.cta')}
                        </Button>

                        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                            <IconButton color="primary" href="https://github.com/omgawroo98" target="_blank">
                                <GitHubIcon sx={{ fontSize: '2rem' }} />
                            </IconButton>
                            <IconButton color="primary" href="https://www.linkedin.com/in/omar-elbakri-345171349/" target="_blank">
                                <LinkedInIcon sx={{ fontSize: '2rem' }} />
                            </IconButton>
                            <IconButton color="primary" href="https://www.youtube.com/@OmarElbakri2" target="_blank">
                                <YouTubeIcon sx={{ fontSize: '2rem' }} />
                            </IconButton>
                        </Stack>
                    </Box>
                </Box>
            </Grid>

            {/* Right Column */}
            <Grid size={4} sx={{
                ml: 'auto',
            }}>
                <Box
                    component="img"
                    src={profileImage}
                    alt="Omar illustration"
                    sx={{
                        width: 400,
                        borderRadius: 8,
                        boxShadow: 3,
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default Home;
