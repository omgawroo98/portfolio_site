import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Container,
    Grid
} from '@mui/material';
import { useTranslation } from 'react-i18next';

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
                <Typography variant="h1" align="center" gutterBottom fontWeight="bold">
                    {t('skills.title')}
                </Typography>

                <Grid container justifyContent="space-around">
                    {Object.entries(skillData).map(([category, skills]) => (
                        <Grid key={category} size={3}>
                            <Typography variant="h3" gutterBottom>
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
