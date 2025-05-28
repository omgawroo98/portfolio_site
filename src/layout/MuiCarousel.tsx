'use client';
import React, { useEffect, useRef, useState, createContext, useContext, JSX, RefObject } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
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
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
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

type CardProps = {
  card: {
    src: string;
    title: string;
    category: string;
  };
  index: number;
  layout?: boolean;
};

export const Card = ({ card, index, layout = false }: CardProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useOutsideClick(containerRef, () => handleClose());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      {/* Modal View */}
      <AnimatePresence>
        {open && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            zIndex={1200}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.8)' }}
          >
            <Box
              ref={containerRef}
              component={motion.div}
              layoutId={layout ? `card-${card.title}` : undefined}
              bgcolor="background.paper"
              p={{ xs: 3, md: 6 }}
              borderRadius={4}
              maxWidth="lg"
              width="90%"
              position="relative"
            >
              <IconButton
                onClick={handleClose}
                sx={{ position: 'absolute', top: 16, right: 16, backgroundColor: 'black', color: 'white' }}
              >
                <Close />
              </IconButton>

              <Typography variant="subtitle2" color="textSecondary" mb={1}>
                {card.category}
              </Typography>
              <Typography variant="h4" fontWeight={600} mb={3}>
                {card.title}
              </Typography>
            </Box>
          </Box>
        )}
      </AnimatePresence>

      {/* Card Preview */}
      <Box
        component={motion.button}
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        sx={{
          position: 'relative',
          width: { xs: 230, md: '20rem' },
          height: { xs: 320, md: '25rem' },
          overflow: 'hidden',
          borderRadius: 4,
          p: 0,
          border: 'none',
          cursor: 'pointer',
          backgroundColor: 'grey.900',
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={card.src}
          alt={card.title}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Top Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, transparent 50%)',
            zIndex: 1,
          }}
        />

        {/* Text Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            p: 3,
            zIndex: 2,
            width: '100%',
            color: 'common.white',
            textAlign: 'left',
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontWeight: 600, lineHeight: 1.2 }}
          >
            {card.category}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1rem', md: '1.5rem' },
              mt: 1,
              lineHeight: 1.3,
            }}
          >
            {card.title}
          </Typography>
        </Box>
      </Box>
    </>
  );
};