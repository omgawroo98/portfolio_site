'use client';
import React, { useEffect, useRef, useState, createContext, useContext, JSX, RefObject } from 'react';
import { Box, IconButton, Modal, Paper, Typography, useTheme } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    const ref = carouselRef.current;
    if (!ref) return;

    const children = ref.querySelectorAll('[data-carousel-card]');
    let firstVisible = 0;

    for (let i = 0; i < children.length; i++) {
      const card = children[i] as HTMLElement;
      const cardLeft = card.getBoundingClientRect().left;
      const containerLeft = ref.getBoundingClientRect().left;

      if (cardLeft >= containerLeft - 4) {
        firstVisible = i;
        break;
      }
    }

    setVisibleIndex(firstVisible);
    setCanScrollLeft(ref.scrollLeft > 0);
    setCanScrollRight(ref.scrollLeft < ref.scrollWidth - ref.clientWidth);
  };

  const scrollBy = (dir: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container || !container.firstChild) return;

    const firstCard = (container.firstChild as HTMLElement).firstChild as HTMLElement;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 16;

    const scrollAmount = cardWidth + gap;
    container.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  const handleCardClose = (index: number) => {
    const ref = carouselRef.current;
    if (!ref) return;
    const cardWidth = window.innerWidth < 768 ? 260 : 340;
    const gap = window.innerWidth < 768 ? 8 : 16;
    const scrollPosition = (cardWidth + gap) * (index + 1);
    ref.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <Box position="relative" width="100%">
        <Box
          ref={carouselRef}
          onScroll={checkScrollability}
          display="flex"
          overflow="auto"
          py={{ xs: 5, md: 5 }}
          sx={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)`,
            maskImage: `linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)`,
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
          }}
        >
          <Box display="flex" gap={2} pl={2}>
            {items.map((item, index) => (
              <motion.div
                key={`card-${index}`}
                data-carousel-card
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                style={{ borderRadius: 24 }}
              >
                {React.cloneElement(item, { isActive: index === visibleIndex })}
              </motion.div>
            ))}
          </Box>
        </Box>

        <Box position="absolute" right={16} bottom={-16} display="flex" gap={1}>
          <IconButton
            onClick={() => scrollBy('left')}
            disabled={!canScrollLeft}
            sx={{
              bgcolor: 'rgba(255,255,255,0.05)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
            }}
          >
            <ArrowBackIosNew fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => scrollBy('right')}
            disabled={!canScrollRight}
            sx={{
              bgcolor: 'rgba(255,255,255,0.05)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
            }}
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </CarouselContext.Provider>
  );
};

export type DevValueCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
  moreInfo: string;
  isActive?: boolean;
};

export const ValueCard = ({
  icon,
  title,
  description,
  moreInfo,
  isActive = false,
}: DevValueCard) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          width: { xs: 260, sm: 300, md: 340 },
          minHeight: 240,
          p: 3,
          borderRadius: 3,
          backgroundColor: '#0B0B0B',
          backgroundImage: isActive
            ? `radial-gradient(circle at 50% 90%, rgba(0,255,255,0.4), transparent 70%)`
            : 'none',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: isActive
            ? '0 0 20px rgba(0,255,255,0.2), inset 0 0 8px rgba(0,255,255,0.1)'
            : '0 0 12px rgba(255,255,255,0.05)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-3px) scale(1.015)',
            boxShadow: '0 0 18px rgba(255,255,255,0.08)',
          },
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Box sx={{ fontSize: 28 }}>{icon}</Box>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.6 }}>
            {description}
          </Typography>
        </Box>

        <Typography
          onClick={() => setOpen(true)}
          sx={{
            mt: 2,
            fontSize: 14,
            color: '#80d8ff',
            cursor: 'pointer',
            fontWeight: 500,
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Learn More →
        </Typography>
      </Paper>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#121212',
            color: 'white',
            p: 4,
            borderRadius: 2,
            maxWidth: 420,
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
          }}
        >
          <Typography variant="h6" mb={2}>
            {title}
          </Typography>
          <Typography variant="body2" color="grey.400">
            {moreInfo}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
