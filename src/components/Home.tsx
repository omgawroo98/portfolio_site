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
import RainbowCard from '../layout/RainbowCard';
import { AnimatedTooltip } from '../layout/AnimatedToolTip'


const Home = () => {
    const { t } = useTranslation();

    const icons = [
        {
            id: 1,
            name: 'YouTube',
            designation: 'Video Platform',
            icon: <YouTubeIcon fontSize="large" sx={{ color: 'white' }} />,
        },
        {
            id: 2,
            name: 'GitHub',
            designation: 'Code Hosting',
            icon: <GitHubIcon fontSize="large" sx={{ color: 'white' }} />,
        },
        {
            id: 3,
            name: 'LinkedIn',
            designation: 'Professional Network',
            icon: <LinkedInIcon fontSize="large" sx={{ color: 'white' }} />,
        },
    ];

    return (
        <Box
            id="home"
            component="section"
            sx={{
                width: '100%',
                height: 'calc(100vh - 4rem)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            <Stack
                direction="column"
                spacing={4}
                sx={{
                    width: '100%',
                    maxWidth: '70%',
                    mx: 'auto',
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
                            // src={profileImage}
                            alt="Omar illustration"
                            sx={{ width: 300, borderRadius: 4 }}
                        />
                    </RainbowCard>
                </Stack>

                <Stack direction="row" spacing={2} useFlexGap flexWrap="nowrap">
                    <RainbowCard sx={{ flex: 1, flexDirection: 'row', justifyContent: "center" }}>
                        <AnimatedTooltip items={icons} />
                    </RainbowCard>

                    <RainbowCard sx={{ flex: 1.5 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Lorem Ipsum Two
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </RainbowCard>

                    <RainbowCard sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Lorem Ipsum Three
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                    </RainbowCard>
                </Stack>
            </Stack>


        </Box >

    );
};

export default Home;
