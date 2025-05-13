import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/GridLegacy';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center', // vertically center
        justifyContent: 'center', // horizontally center
        px: 2, // optional padding
      }}
    >
      <Grid
        container
        spacing={4}
        maxWidth="md"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="h3" align="center" fontWeight="bold">
            About Me
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            I'm Omar, a full stack developer based in Germany...
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About