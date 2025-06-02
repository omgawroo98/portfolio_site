"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Card as MUICard,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const theme = useTheme();
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <Box sx={{ position: "relative", height: "240px", width: { xs: "240px", md: "384px" } }}>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          style={{ transformOrigin: "top center", position: "absolute", width: "100%", height: "100%" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <MUICard
            sx={{
              height: "100%",
              borderRadius: 4,
              p: 2,
              boxShadow: 6,
              border: `1px solid ${
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : theme.palette.divider
              }`,
              backgroundColor: theme.palette.background.paper,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body1" color="text.secondary">
                {card.content}
              </Typography>
            </CardContent>
            <Box>
              <Typography variant="subtitle1" color="text.primary">
                {card.name}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {card.designation}
              </Typography>
            </Box>
          </MUICard>
        </motion.div>
      ))}
    </Box>
  );
};
