import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type FadeInOnScrollProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down"; // new prop
};

export const FadeInOnScroll = ({
  children,
  delay = 0,
  direction = "up",
}: FadeInOnScrollProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // run once
    threshold: 0.5,     // 50% visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const yOffset = direction === "up" ? 40 : -40;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
