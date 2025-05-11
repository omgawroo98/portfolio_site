import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/GridLegacy';

const services = [
    {
        title: 'Web Development',
        desc: 'Building responsive, accessible, and high-performance websites.',
    },
    {
        title: 'Backend APIs',
        desc: 'Creating scalable REST and GraphQL APIs with Node.js.',
    },
    {
        title: 'UI/UX Design',
        desc: 'Designing intuitive user interfaces using modern tools.',
    },
];

const Services = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Services
            </Typography>
            <Grid container spacing={4}>
                {services.map(({ title, desc }) => (
                    <Grid item xs={12} md={4} key={title}>
                        <Paper elevation={2} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {desc}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Services;
