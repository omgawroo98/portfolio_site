import { Box, Typography, Button, Stack, Divider, Grid } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ReactIcon from '../assets/logos/react.svg'
import NodeIcon from '../assets/logos/nodedotjs.svg'
import TypeScriptIcon from '../assets/logos/tsnode.svg'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation()
  return (
    <Grid container spacing={6} alignItems="center">
      {/* Left: Text */}
      <Grid size={7}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h1" fontWeight="bold" gutterBottom>
              {t('about.heading')}
            </Typography>
            <Divider sx={{ width: 40, borderColor: 'primary.main', mb: 2 }} />
            <Typography>{t('about.paragraph1')}</Typography>
            <Typography>{t('about.paragraph2')}</Typography>
            <Typography>{t('about.paragraph3')}</Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<DownloadIcon />}
              href="/cv.pdf"
            >
              Download CV
            </Button>
          </Box>
        </Stack>
      </Grid>

      {/* Right: Image */}
      <Grid size={5}>
        <Box display="flex" gap={2} flexWrap="wrap">
          <img src={ReactIcon} alt="React" width={40} />
          <img src={NodeIcon} alt="Node.js" width={40} />
          <img src={TypeScriptIcon} alt="TypeScript" width={40} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
