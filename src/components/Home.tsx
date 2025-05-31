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
import { Padding } from '@mui/icons-material';


const Home = () => {
    const { t } = useTranslation();
    const title = t('home.title'); // "Hello there, I'm Omar."

    // Split the name
    const name = 'Omar';
    const [before, after] = title.split(name);

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
                                {before}
                                <Box component="span" sx={{ color: '#fff' }}>
                                    {name}
                                </Box>
                                {after}
                            </Typography>
                            <Typography variant="h2" color="text.secondary">
                                {t('home.subtitle')}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {t('home.paragraph1')}
                                <br />
                                {/* <br /> */}
                                {t('home.paragraph2')}
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

                <Stack direction="row" spacing={2} useFlexGap flexWrap="nowrap">
                    <RainbowCard sx={{ flex: 1, flexDirection: 'row', justifyContent: "center" }}>
                        <AnimatedTooltip items={icons} />
                    </RainbowCard>

                    <RainbowCard sx={{ flex: 1.5 }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            {t('home.currentHeader')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {t('home.currentBody')}
                        </Typography>
                    </RainbowCard>

                    <RainbowCard sx={{ flex: 1 }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            {t('home.outsideHeader')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {t('home.outsideBody')}
                        </Typography>
                    </RainbowCard>
                </Stack>
            </Stack>


        </Box >

    );
};

export default Home;
