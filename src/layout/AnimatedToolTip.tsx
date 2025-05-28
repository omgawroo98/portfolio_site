'use client';

import React, { useState } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'framer-motion';

type TooltipItem = {
  id: number;
  name: string;
  designation: string;
  icon: React.ReactNode;
};

export const AnimatedTooltip = ({ items }: { items: TooltipItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const x = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 12 };
  const rotate = useSpring(useTransform(x, [-100, 100], [-25, 25]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-40, 40]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const half = e.currentTarget.offsetWidth / 2;
    x.set(e.nativeEvent.offsetX - half);
  };

  return (
    <Box display="flex" gap={2} alignItems="center">
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{ position: 'relative', p: 1.5 }}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.75 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 250,
                    damping: 18,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.75 }}
                style={{ translateX, rotate }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -70,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    bgcolor: '#000',
                    color: '#fff',
                    borderRadius: 1,
                    px: 2,
                    py: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: 4,
                    whiteSpace: 'nowrap',
                    minWidth: 100,
                  }}
                >
                  <Typography variant="subtitle2" fontWeight={700}>
                    {item.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#ccc' }}>
                    {item.designation}
                  </Typography>
                  {/* Moved underline to the bottom of the tooltip */}
                  <Box
                    sx={{
                      mt: 1,
                      height: 2,
                      width: '40%',
                      background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)',
                      borderRadius: 1,
                    }}
                  />
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Icon Button */}
          <Box
            onMouseMove={handleMouseMove}
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: '#1c1c1c',
              border: '2px solid white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.25s ease',
              position: 'relative',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.07)',
                zIndex: 30,
              },
            }}
          >
            <Avatar sx={{ bgcolor: 'transparent', width: 40, height: 40 }}>
              {item.icon}
            </Avatar>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
