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
import TypescriptIcon from '../assets/logos/icons8-typescript.svg';
import DisplayIcon from "../layout/DisplayIcon";

const skills = {
    Languages: [
        { label: "React", desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.", icon: <DeveloperBoardIcon />, url: "https://react.dev/" },
        { label: "TypeScript", desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.", icon: <DisplayIcon icon={TypescriptIcon} />, url: "https://www.typescriptlang.org/" },
        { label: "Tailwind CSS", desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.", icon: <BrushIcon />, url: "https://tailwindcss.com/" },
    ],
    Frameworks: [
        { label: "Node.js", desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.", icon: <CodeIcon />, url: "https://nodejs.org" },
        { label: "Express", desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.", icon: <CodeIcon />, url: "https://expressjs.com/" },
        { label: "PostgreSQL", desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.", icon: <StorageIcon />, url: "https://www.postgresql.org/" },
    ],
    Tools: [
        { label: "Git", desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore. ", icon: <CodeIcon />, url: "https://git-scm.com/" },
        { label: "Docker", desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore. ", icon: <CodeIcon />, url: "https://www.docker.com/" },
        { label: "Jest", desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.", icon: <CodeIcon />, url: "https://jestjs.io/" },
    ]
};

function Skills() {
    const theme = useTheme();
    const entries = Object.entries(skills);

    return (
        <Box sx={{ py: 4, maxWidth: "70%", mx: "auto", px: 8 }}>
            <Typography variant="h1" mb={3} textAlign="left">
                Meine Fähigkeiten
            </Typography>
            <Typography variant="h3" fontWeight={200} mb={6} textAlign="left">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </Typography>

            {entries.map(([category, items], idx) => (
                <Box key={category} sx={{ mb: 3 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            background: 'linear-gradient(90deg, #008080, #ccffff)', // teal to pale teal/white
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            lineHeight: 'normal',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 600,
                            display: 'inline-block',
                            mb: 3
                        }}
                    >
                        {category}
                    </Typography>

                    <Grid container spacing={4}>
                        {items.map(({ label, desc, icon, url }) => (
                            <Grid key={label} size={4}>
                                <Stack direction="row" spacing={1} alignItems="center">

                                    {/* <LinkPreview
                                        url={url}
                                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                                    > */}
                                    <Box>{icon}</Box>
                                    <Typography variant="h5">{label}</Typography>
                                    {/* </LinkPreview> */}
                                </Stack>
                                <Typography variant="body2" color="text.secondary">
                                    {desc}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Divider between sections (but not after last) */}
                    {
                        idx < entries.length - 1 && (
                            <Divider
                                sx={{ mt: 3, borderColor: "rgba(255,255,255,0.1)" }}
                            />
                        )
                    }
                </Box>
            ))
            }
        </Box >
    );
}

export default Skills