import { Box, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/GridLegacy';

const projects = [
    { title: 'Dev Portfolio', desc: 'My personal site built with React & MUI.' },
    { title: 'Weather App', desc: 'A weather forecasting app using OpenWeather API.' },
    { title: 'Blog CMS', desc: 'A markdown-based blog system with Node.js backend.' },
];

const Portfolio = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Portfolio
            </Typography>
            <Grid container spacing={4}>
                {projects.map(({ title, desc }) => (
                    <Grid item xs={12} sm={6} md={4} key={title}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Portfolio;
