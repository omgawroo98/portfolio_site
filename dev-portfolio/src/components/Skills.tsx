import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/GridLegacy';


const Skills = () => {
    const { t } = useTranslation();

    const skillData = {
        frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Material UI'],
        backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
        tools: ['Git', 'Docker', 'Figma', 'Jest'],
        languages: ['JavaScript', 'TypeScript', 'Python', 'C++'],
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                {t('skills.title')}
            </Typography>
            <Grid container spacing={4}>
                {Object.entries(skillData).map(([category, skills]) => (
                    <Grid key={category} item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            {t(`skills.${category}`)}
                        </Typography>
                        <List dense>
                            {skills.map((skill) => (
                                <ListItem key={skill} disablePadding>
                                    <ListItemText primary={skill} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;
