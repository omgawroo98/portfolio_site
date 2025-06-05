import { Box, Typography } from '@mui/material';
import { Carousel, ValueCard } from '../layout/MuiCarousel';
import { useTranslation } from 'react-i18next';
import { Spotlight } from '../effects/Spotlight';
import { Code2, Bug, Gauge, Sparkles, MousePointerClick } from 'lucide-react';

function About() {
  const { t } = useTranslation();
  const cards = values.map((value, index) => (
    <ValueCard key={index} {...value} />
  ));

  return (
    <Box
      sx={{
        position: 'relative',
        // height: '300rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        mx: 'auto',
        alignItems: 'center',
        py: 10,
        // bgcolor: '#000', // dark background
      }}
    >
      {/* Spotlight background effect */}
      {/* <Spotlight className="absolute top-10 left-20 opacity-100 rotate-90" fill="#008080" /> */}



      {/* Foreground content */}
      <Typography
        variant="h5"
        sx={{
          background: 'linear-gradient(90deg, #008080, #ccffff)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
          fontWeight: 600,
          display: 'inline-block',
          mb: 1,
          zIndex: 1,
        }}
      >
        Welcome aboard!
      </Typography>

      <Typography
        variant="h1"
        px={2}
        textAlign="center"
        sx={{
          background: 'linear-gradient(135deg, #888888 20%, #ffffff 50%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
          display: 'inline-block',
          zIndex: 1,
        }}
      >
        {t('about.heading')}
      </Typography>

      <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Carousel items={cards} />
      </Box>
    </Box>
  );
}

const values = [
  {
    icon: <Code2 size={35} strokeWidth={1.5} />,
    title: 'Clean Code',
    description: 'Readable, maintainable, and scalable code that’s easy to build on.',
    moreInfo: 'I follow principles like DRY, KISS, and SOLID to ensure that the codebase remains clean and extensible. Every line of code is written with purpose and clarity.'
  },
  {
    icon: <Bug size={35} strokeWidth={1.5} />,
    title: 'Testing Matters',
    description: 'Writing tests is critical for ensuring long-term stability and reliability.',
    moreInfo: 'I use tools like Jest and Cypress to write unit, integration, and end-to-end tests that prevent regressions and increase confidence in deployments.'
  },
  {
    icon: <Gauge size={35} strokeWidth={1.5} />,
    title: 'Performance',
    description: 'Optimized applications that load fast and feel responsive.',
    moreInfo: 'Performance isn’t just a metric—it’s an experience. I optimize rendering, reduce payload sizes, and use profiling tools to improve runtime speed.'
  },
  {
    icon: <Sparkles size={35} strokeWidth={1.5} />,
    title: 'Attention to Detail',
    description: 'From visual polish to accessibility, I care about the full picture.',
    moreInfo: 'Small things matter: consistent spacing, pixel-perfect UI, accessible interactions, and meaningful animations all contribute to a better UX.'
  },
  {
    icon: <MousePointerClick size={35} strokeWidth={1.5} />,
    title: 'User-Centered Design',
    description: 'Coding with the end user in mind results in better products.',
    moreInfo: 'I collaborate closely with designers and stakeholders to ensure the product feels intuitive, inclusive, and delightful to use.'
  },
];

export default About;
