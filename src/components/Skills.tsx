import {
    Box,
    Grid,
    Typography,
    Stack,
    Divider,
    useTheme,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import RainbowCard from "../layout/RainbowCard";
import { LinkPreview } from "../effects/LinkPreview";

const skills = {
    Frontend: [
        { label: "React", desc: "Component-based UI", icon: <DeveloperBoardIcon />, url: "https://react.dev/" },
        { label: "TypeScript", desc: "Static typing for JS", icon: <CodeIcon />, url: "https://www.typescriptlang.org/" },
        { label: "Tailwind CSS", desc: "Utility-first styling", icon: <BrushIcon />, url: "https://tailwindcss.com/" },
    ],
    Backend: [
        { label: "Node.js", desc: "JS runtime", icon: <CodeIcon />, url: "https://nodejs.org" },
        { label: "Express", desc: "Minimal backend framework", icon: <CodeIcon />, url: "https://expressjs.com/" },
        { label: "PostgreSQL", desc: "Relational DB", icon: <StorageIcon />, url: "https://www.postgresql.org/" },
    ],
    Tools: [
        { label: "Git", desc: "Version control", icon: <CodeIcon />, url: "https://git-scm.com/" },
        { label: "Docker", desc: "Containerization", icon: <CodeIcon />, url: "https://www.docker.com/" },
        { label: "Jest", desc: "Testing library", icon: <CodeIcon />, url: "https://jestjs.io/" },
    ],
    Languages: [
        { label: "JavaScript", desc: "Web scripting", icon: <CodeIcon />, url: "https://developer.mozilla.org/docs/Web/JavaScript" },
        { label: "Python", desc: "General-purpose", icon: <CodeIcon />, url: "https://www.python.org/" },
        { label: "C++", desc: "Low-level performance", icon: <CodeIcon />, url: "https://isocpp.org/" },
    ],
};

function Skills() {
    const theme = useTheme();
    const entries = Object.entries(skills);

    return (
        <Box sx={{ py: 8, maxWidth: "70%", mx: "auto" }}>
            <RainbowCard>
                <Typography variant="h1" fontWeight="bold" mb={6} textAlign="left">
                    Skills
                </Typography>

                {entries.map(([category, items], idx) => (
                    <Box key={category} sx={{ mb: 3 }}>
                        <Typography
                            variant="h3"
                            sx={{ color: 'linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)', mb: 2, fontWeight: 600, }}
                        >
                            {category}
                        </Typography>

                        <Grid container spacing={4}>
                            {items.map(({ label, desc, icon, url }) => (
                                <Grid key={label} size={4}>

                                    <Stack direction="row" spacing={2} alignItems="flex-start">
                                        <Box sx={{ mt: 0.5 }}>{icon}</Box>
                                        <LinkPreview
                                            url={url}
                                            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                                        >
                                            <Box>
                                                {label}
                                            </Box>
                                            <Typography variant="body2" color="text.secondary">
                                                {desc}
                                            </Typography>
                                        </LinkPreview>
                                    </Stack>

                                </Grid>
                            ))}
                        </Grid>

                        {/* Divider between sections (but not after last) */}
                        {
                            idx < entries.length - 1 && (
                                <Divider
                                    sx={{ mt: 3, borderColor: "rgba(255,255,255,0.08)" }}
                                />
                            )
                        }
                    </Box>
                ))
                }
            </RainbowCard >
        </Box >
    );
}

export default Skills