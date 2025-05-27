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
import { GlowingEffect } from '../layout/GlowingEffect';
import RainbowCard from '../layout/RainbowCard';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Box
            id="home"
            component="section"
            sx={{
                width: '100%',
                minHeight: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // px: { xs: 2, sm: 4 },
                // pt: { xs: 6, sm: 6 },
                // pb: { xs: 6, sm: 8 },
                position: 'relative',
            }}
        >

            <Stack
                direction="column"
                spacing={4}
                sx={{
                    width: '100%',
                    maxWidth: '80rem',
                    mx: 'auto',
                    // px: { xs: 2, sm: 4 },
                    // py: { xs: 6, sm: 8 },
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Row of 2: Hero text + Profile image */}
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={4}
                    alignItems="stretch"
                >
                    {/* Card 1: Hero Text */}
                    <RainbowCard>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography variant="h1" fontWeight="bold">
                                {t('home.title')}
                            </Typography>
                            <Typography variant="h2" color="text.secondary">
                                {t('home.subtitle')}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {t('home.description')} Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                            </Typography>
                        </Box>
                    </RainbowCard>

                    {/* Card 2: Profile Image */}
                    <RainbowCard sx={{ minWidth: 350 }}>
                        <Box
                            component="img"
                            src={profileImage}
                            alt="Omar illustration"
                            sx={{ width: 300, borderRadius: 4 }}
                        />
                    </RainbowCard>
                </Stack>

                {/* Card 3: Buttons and Icons */}
                <RainbowCard sx={{ flexDirection: 'row' }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: 'surface.light',
                        }}
                    >
                        {t('home.cta')}
                    </Button>

                    <Stack direction="row" spacing={2}>
                        <IconButton color="primary" href="https://github.com/..." target="_blank"><GitHubIcon /></IconButton>
                        <IconButton color="primary" href="https://linkedin.com/..."><LinkedInIcon /></IconButton>
                        <IconButton color="primary" href="https://youtube.com/..."><YouTubeIcon /></IconButton>
                    </Stack>
                </RainbowCard>
            </Stack>


        </Box >

    );
};

export default Home;
