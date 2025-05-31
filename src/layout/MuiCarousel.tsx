'use client';
import React, { useEffect, useRef, useState, createContext, useContext, JSX, RefObject } from 'react';
import { Box, IconButton, Modal, Paper, Typography, useTheme } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos, Close } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';


interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => { },
  currentIndex: 0,
});

const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref?.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, callback]);
};


export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    const ref = carouselRef.current;
    if (!ref) return;
    setCanScrollLeft(ref.scrollLeft > 0);
    setCanScrollRight(ref.scrollLeft < ref.scrollWidth - ref.clientWidth);
  };

  const scrollBy = (dir: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container || !container.firstChild || !(container.firstChild as HTMLElement).firstChild) return;

    // Access the first card
    const firstCard = (container.firstChild as HTMLElement).firstChild as HTMLElement;
    const cardWidth = firstCard.getBoundingClientRect().width;

    // Use actual `gap` between cards (2 * 8px default MUI spacing)
    const gap = 16; // adjust if you change Box gap

    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };


  const handleCardClose = (index: number) => {
    const ref = carouselRef.current;
    if (!ref) return;
    const cardWidth = window.innerWidth < 768 ? 230 : 384;
    const gap = window.innerWidth < 768 ? 4 : 8;
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
          }}
        >
          <Box display="flex" gap={2} pl={2} maxWidth="100%">
            {items.map((item, index) => (
              <motion.div
                key={'card' + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                style={{ borderRadius: 24 }}
              >
                {item}
              </motion.div>
            ))}
          </Box>
        </Box>
        <Box position="absolute" right={16} bottom={-16} display="flex" gap={1}>
          <IconButton onClick={() => scrollBy('left')} disabled={!canScrollLeft}>
            <ArrowBackIosNew />
          </IconButton>
          <IconButton onClick={() => scrollBy('right')} disabled={!canScrollRight}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>
    </CarouselContext.Provider>
  );
};

export const BlurImage = ({ src, alt, ...rest }: { src: string; alt: string;[key: string]: any }) => {
  const [loading, setLoading] = useState(true);
  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoading(false)}
      style={{
        width: '100%',
        height: '100%',
        filter: loading ? 'blur(10px)' : 'none',
        transition: 'filter 0.3s ease',
        ...rest.style,
      }}
      {...rest}
    />
  );
};

export type DevValueCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
  moreInfo: string;
};

export const ValueCard = ({ icon, title, description, moreInfo }: DevValueCard) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          width: { xs: 230, md: 300 },
          minHeight: 220,
          p: 2.5,
          borderRadius: 3,
          backgroundColor: 'rgba(255,255,255,0.03)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 20px rgba(255, 255, 255, 0.05)',
          transition: 'box-shadow 0.3s ease, transform 0.2s ease',
          '&:hover': {
            boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.15), 0 6px 24px rgba(255, 255, 255, 0.08)',
            transform: 'translateY(-2px)',
          },
        }}
      >
        {/* Circular Icon Holder */}
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Box sx={{ color: 'white', fontSize: 28 }}>
            {icon}
          </Box>
        </Box>

        {/* Content */}
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="grey.400">
            {description}
          </Typography>
        </Box>

        <Typography
          onClick={() => setOpen(true)}
          sx={{
            mt: 2,
            fontSize: 14,
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 500,
            alignSelf: 'flex-start',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Learn More →
        </Typography>
      </Paper>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#111',
            color: 'white',
            p: 4,
            borderRadius: 3,
            maxWidth: 400,
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.15)',
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