import {
    Box,
    Typography,
    Stack,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import profileImage from '../assets/images/portfolio picture.png';
import { useTranslation } from 'react-i18next';
import CustomCard from '../layout/CustomCard';
import { AnimatedTooltip } from '../layout/AnimatedToolTip';

const Home = () => {
    const { t } = useTranslation();
    const title = t('home.title'); // "Hello there, I'm Omar."
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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: '-4rem',
            }}
        >
            <CustomCard
                sx={{
                    backgroundImage:
                        'linear-gradient(to top, rgba(26, 26, 26, 0.95) 0%, rgba(15, 15, 15, 0.9) 20%, rgba(10, 10, 10, 1) 100%), radial-gradient(ellipse at bottom left, rgba(149, 76, 233, 0.15), transparent 70%)',
                    pt: '10rem',
                }}
            >
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center" justifyContent="center" width="100%">
                    <Stack spacing={3} alignItems="start" flex={1}>
                        <Typography variant="h1" textAlign="center">
                            {before}
                            <Box component="span" sx={{ color: '#008080' }}>
                                {name}
                            </Box>
                            {after}
                        </Typography>
                        <Typography variant="h3" color="text.secondary">
                            {t('home.subtitle')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ textJustify: "inter-word" }}>
                            {t('home.paragraph1')}
                            {/* {t('home.paragraph2')} */}
                        </Typography>
                        <AnimatedTooltip items={icons} />
                    </Stack>
                    <Box
                        component="img"
                        src={profileImage}
                        alt="Omar illustration"
                        sx={{ width: 300, borderRadius: 4 }}
                    />
                </Stack>

                {/* <Stack direction="row" spacing={2} flexWrap="nowrap" width="100%">
                    <AnimatedTooltip items={icons} />

                    <RainbowCard sx={{ flex: 1 }}>
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
                </Stack> */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        background: `
      radial-gradient(
        circle at bottom center,
        rgba(0, 255, 255, 0.12) 0%,
        rgba(0, 128, 128, 0.08) 40%,
        rgba(0, 64, 64, 0.04) 60%,
        transparent 85%
      )
    `,
                        filter: 'blur(40px)',
                        opacity: 1,
                    }}
                />

            </CustomCard>
        </Box>
    );
};

export default Home;
