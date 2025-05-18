import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Container,
} from '@mui/material';
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
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
                    {t('skills.title')}
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {Object.entries(skillData).map(([category, skills]) => (
                        <Grid item key={category} xs={12} sm={6} md={3}>
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
            </Container>
    );
};

export default Skills;
