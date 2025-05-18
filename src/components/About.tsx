import { Box, Typography, Button, Stack, Divider } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import DownloadIcon from '@mui/icons-material/Download';
import ReactIcon from '../assets/logos/react.svg'
import NodeIcon from '../assets/logos/nodedotjs.svg'
import TypeScriptIcon from '../assets/logos/tsnode.svg'

const About = () => {
  return (
      <Grid container spacing={6} alignItems="center">
        {/* Left: Text */}
        <Grid item xs={12} md={7}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Get to Know Me
              </Typography>
              <Divider sx={{ width: 40, borderColor: 'primary.main', mb: 2 }} />
              <Typography variant="body1" color="text.secondary">
                I'm Omar, a passionate <strong>Full Stack Developer</strong> based in Germany with a knack for
                crafting elegant, scalable applications using technologies like React, Node.js, and TypeScript.
              </Typography>
            </Box>

            <Typography variant="body2" color="text.secondary">
              Whether working on solo projects or contributing to collaborative teams, I focus on writing clean, maintainable code
              and building intuitive user experiences that make a real impact.
            </Typography>

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
        <Grid item xs={12} md={5}>
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
