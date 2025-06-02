import { Box, Typography } from '@mui/material';
import { Carousel, ValueCard } from '../layout/MuiCarousel';
import { useTranslation } from 'react-i18next';
import CustomCard from '../layout/CustomCard';
import { BugReport, Speed, AutoAwesome, TouchApp } from '@mui/icons-material';
import { Code2, Bug, Gauge, Sparkles, MousePointerClick } from 'lucide-react';


function About() {
  const { t } = useTranslation()
  const cards = values.map((value, index) => (
    <ValueCard key={index} {...value} />
  ));

  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mx: 'auto', alignItems: "center" }}>
      <CustomCard sx={{
        backgroundImage: 'linear-gradient(to bottom, rgba(26, 26, 26, 0.95) 0%, rgba(15, 15, 15, 0.9) 40%, rgba(10, 10, 10, 1) 100%), radial-gradient(ellipse at bottom left, rgba(149, 76, 233, 0.15), transparent 70%)',
      }}>
        <Typography
          variant="h1"
          px={2}
        >
          {t('about.heading')}
        </Typography>
        <Carousel items={cards} />
      </CustomCard>
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


export default About