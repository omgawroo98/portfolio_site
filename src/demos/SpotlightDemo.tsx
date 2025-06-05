import { Box, Typography, Container } from "@mui/material";
import { Spotlight } from "../effects/Spotlight";

const SpotlightDemo = () => {
  return (
    <Box
      sx={{
        // position: "relative",
        // overflow: "hidden",
        // bgcolor: "#000", // dark background to make spotlight visible
        // py: 10,
      }}
    >
      {/* Spotlight positioned absolutely behind text */}
      <Spotlight
        className="top-0 left-1/2 -translate-x-1/2 opacity-100"
        fill="white"
      />

      <Container sx={{ position: "relative", zIndex: 10 }}>
        <Typography
          variant="h5"
          sx={{
            background: "linear-gradient(90deg, #008080, #ccffff)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            fontWeight: 600,
            display: "inline-block",
            mb: 2,
          }}
        >
          Welcome aboard!
        </Typography>

        <Typography
          variant="h1"
          textAlign="center"
          sx={{
            background:
              "linear-gradient(135deg, #888888 20%, #ffffff 50%, #888888 80%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
            display: "inline-block",
          }}
        >
          What I Value
        </Typography>
      </Container>
    </Box>
  );
};

export default SpotlightDemo;
