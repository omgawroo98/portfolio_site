// Material UI React Implementation of the Glowing Effect Demo
import React, { useEffect, useRef, useCallback } from 'react';
import { Box, Container, Grid, Paper, Typography, IconButton } from '@mui/material';
import { Box as BoxIcon, Lock, Search, Settings, Sparkles } from 'lucide-react';
import { GlowingEffect } from './GlowingEffect';

const glowGradient = `
  radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
  radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
  radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
  radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
  repeating-conic-gradient(
    from 236.84deg at 50% 50%,
    #dd7bbb 0%,
    #5a922c 50%,
    #4c7894 75%,
    #dd7bbb 100%
  )
`;

interface GridItemProps {
  //   area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => (
  <Grid size={12}>
    <Box sx={{
      position: "relative",
      borderRadius: 4,
      border: "1px solid rgba(255, 255, 255, 0.12)", // moved here
    }}>
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <Paper elevation={3} sx={{ position: 'relative', borderRadius: 4, p: 4, height: '100%', zIndex: 1 }}>
        < Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <IconButton size="large" sx={{ border: '1px solid #666', borderRadius: 2, width: 'fit-content' }}>
            {icon}
          </IconButton>
          <Typography variant="h6" color="white" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="#ccc">
            {description}
          </Typography>
        </Box>
      </Paper>
    </Box >
  </Grid >
);

export default function GlowingEffectMaterialDemo() {
  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={4}>
        <GridItem
          icon={<BoxIcon size={24} />}
          title="Do things the right way"
          description="Running out of copy so I'll write anything."
        />
        <GridItem
          icon={<Settings size={24} />}
          title="The best AI code editor ever."
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        />
        <GridItem
          icon={<Lock size={24} />}
          title="You should buy Aceternity UI Pro"
          description="It's the best money you'll ever spend"
        />
        <GridItem
          icon={<Sparkles size={24} />}
          title="This card is also built by Cursor"
          description="I'm not even kidding. Ask my mom if you don't believe me."
        />
        <GridItem
          icon={<Search size={24} />}
          title="Coming soon on Aceternity UI"
          description="I'm writing the code as I record this, no shit."
        />
      </Grid>
    </Container>
  );
}
