import { Box, Typography, Grid, CardContent } from '@mui/material';
import CustomCard from '../layout/CustomCard';

const experiences = [
    {
        role: 'Frontend Developer',
        company: 'TechCorp GmbH',
        period: 'Jan 2023 – Present',
        description: [
            'Built reusable React components and improved performance by 20%.',
            'Collaborated with design team to implement responsive UIs.',
            'Integrated REST APIs and optimized state management.',
        ],
    },
    {
        role: 'Web Developer Intern',
        company: 'CreativeLabs',
        period: 'Jul 2022 – Dec 2022',
        description: [
            'Assisted in developing landing pages using Next.js and Tailwind CSS.',
            'Wrote unit tests and contributed to deployment pipelines.',
        ],
    },
    {
        role: 'Web Developer Intern',
        company: 'CreativeLabs',
        period: 'Jul 2022 – Dec 2022',
        description: [
            'Assisted in developing landing pages using Next.js and Tailwind CSS.',
            'Wrote unit tests and contributed to deployment pipelines.',
        ],
    },
    {
        role: 'Web Developer Intern',
        company: 'CreativeLabs',
        period: 'Jul 2022 – Dec 2022',
        description: [
            'Assisted in developing landing pages using Next.js and Tailwind CSS.',
            'Wrote unit tests and contributed to deployment pipelines.',
        ],
    },
    {
        role: 'Web Developer Intern',
        company: 'CreativeLabs',
        period: 'Jul 2022 – Dec 2022',
        description: [
            'Assisted in developing landing pages using Next.js and Tailwind CSS.',
            'Wrote unit tests and contributed to deployment pipelines.',
        ],
    },
    {
        role: 'Web Developer Intern',
        company: 'CreativeLabs',
        period: 'Jul 2022 – Dec 2022',
        description: [
            'Assisted in developing landing pages using Next.js and Tailwind CSS.',
            'Wrote unit tests and contributed to deployment pipelines.',
        ],
    },
];

export default function Experience() {
    return (
        <Box width="70%" pb="5rem" sx={{ display: 'flex', flexDirection: 'column', gap: 3, mx: 'auto', alignItems: "center", mt: -3 }} id="experience">
            <CustomCard glow={false} sx={{
                backgroundImage: 'linear-gradient(to top, rgba(26, 26, 26, 0.95) 0%, rgba(15, 15, 15, 0.9) 40%, rgba(10, 10, 10, 1) 100%), radial-gradient(ellipse at bottom left, rgba(149, 76, 233, 0.15), transparent 70%)',
                gap: 3
            }}>
                <Grid container spacing={2} sx={{ pt: 30 }}>
                    <Typography variant="h2" alignSelf="center" gutterBottom>
                        Experience
                    </Typography>
                    {experiences.map((exp, index) => (
                        <Grid size={6} key={index}>
                            <CustomCard sx={{ backgroundColor: 'background.paper', borderRadius: 2 }}>
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600}>
                                        {exp.role} @ {exp.company}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                        {exp.period}
                                    </Typography>
                                    <ul style={{ paddingLeft: 16 }}>
                                        {exp.description.map((point, idx) => (
                                            <li key={idx}>
                                                <Typography variant="body2">{point}</Typography>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </CustomCard>
                        </Grid>
                    ))}
                </Grid>
            </CustomCard>
        </Box >
    );
}
