import { Box, Typography, Stack } from '@mui/material';
import { useState } from 'react';
import { CardStack } from '../layout/CardStack';
import SelectableButtonGroup from '../layout/SelectableButtonGroup'; // ✅ new import
import { FadeInOnScroll } from '../effects/FadeInOnScroll';

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
        role: 'Software Engineer',
        company: 'DataStream Solutions',
        period: 'Mar 2021 – Jun 2022',
        description: [
            'Developed internal dashboards using React and D3.',
            'Implemented authentication and access control using OAuth2.',
            'Worked closely with data scientists to visualize analytics results.',
        ],
    },
    {
        role: 'Junior Developer',
        company: 'BrightApps Inc.',
        period: 'Aug 2020 – Feb 2021',
        description: [
            'Maintained and refactored legacy codebase in a Vue.js project.',
            'Wrote integration tests and monitored build pipelines.',
            'Contributed to bug triaging and sprint planning sessions.',
        ],
    },
];

// Static card array — never changes
const allCards = experiences.map((exp, roleIndex) => ({
    id: roleIndex,
    roleIndex,
    name: exp.role,
    designation: `${exp.company} · ${exp.period}`,
    content: exp.description[0], // or join all into one string
}));

export default function Experience() {
    const [activeRoleIndex, setActiveRoleIndex] = useState(0);

    const roleOptions = experiences.map((exp, index) => ({
        value: index,
        label: `${exp.role} @ ${exp.company}`,
    }));

    return (
        <Box
            sx={{
                position: 'relative',
                zIndex: 5,
                overflow: 'hidden',
                borderRadius: '1rem',
            }}
        >
            {/* 🌈 Gradient background overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    background: `
                    radial-gradient(
                        circle at top center,
                        rgba(0, 255, 255, 0.9) 0%,
                        rgba(0, 255, 255, 0.8) 10%,
                        rgba(0, 255, 255, 0.5) 25%,
                        rgba(0, 255, 255, 0.2) 40%,
                        rgba(0, 255, 255, 0.1) 60%,
                        transparent 80%
                    )
    `,
                    filter: 'blur(60px)',
                    opacity: 1,
                    pointerEvents: 'none',

                    // ✨ Magic fading
                    maskImage: 'linear-gradient(to bottom, white 0%, white 10%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, white 0%, white 10%, transparent 100%)',
                }}
            />


            {/* Actual Experience content */}
            <Box
                sx={{
                    pt: { xs: 12, md: 25 },
                    pb: 20,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 6,
                    maxWidth: '1200px',
                    mx: 'auto',
                    // position: 'relative',
                }}
                id="experience"
            >
                {/* Left Text + Buttons */}
                <FadeInOnScroll>
                    <Stack direction="column" alignItems="start" justifyContent="center" width="100%" minWidth="25rem">
                        <Typography
                            variant="h5"
                            sx={{
                                background: 'linear-gradient(90deg, #008080, #ccffff)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 600,
                                display: 'inline-block',
                                mb: 1,
                            }}
                        >
                            Welcome aboard!
                        </Typography>
                        <Typography variant="h1" color="primary" sx={{ mb: 2 }}>
                            My Journey
                        </Typography>

                        <Typography variant="h3" sx={{ mb: 2 }}>
                            Experience Highlights
                        </Typography>

                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            Tap a role to explore what I’ve worked on.
                        </Typography>

                        <SelectableButtonGroup
                            options={roleOptions}
                            selected={activeRoleIndex}
                            onChange={(val) => setActiveRoleIndex(val as number)}
                        />
                    </Stack>
                </FadeInOnScroll>

                {/* Right Card Stack */}
                <FadeInOnScroll direction="down">
                    <CardStack items={allCards} triggerFlipIndex={activeRoleIndex} />
                </FadeInOnScroll>

            </Box>
        </Box >
    );
}
