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

type Card = {
  id: number;
  roleIndex: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
  triggerFlipIndex,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  triggerFlipIndex?: number;
}) => {
  const theme = useTheme();
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    setCards(items);
  }, [items]);

  useEffect(() => {
    if (typeof triggerFlipIndex === 'number') {
      flipToRole(triggerFlipIndex);
    }
  }, [triggerFlipIndex]);

  const flipToRole = (roleIndex: number) => {
    setCards(prev => {
      const targetIndex = prev.findIndex(card => card.roleIndex === roleIndex);
      if (targetIndex === -1) return prev;

      const newArray = [...prev];
      for (let i = 0; i < targetIndex; i++) {
        newArray.unshift(newArray.pop()!);
      }
      return newArray;
    });
  };

  return (
    <Box sx={{
      position: "relative",
      height: "17rem",
      width: { xs: "17rem", md: "40rem" },
      mt: `4rem`
    }}>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          style={{
            transformOrigin: "top center",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <MUICard
            sx={{
              height: "100%",
              borderRadius: 4,
              p: 2,
              boxShadow: 6,
              border: `1px solid ${theme.palette.mode === "dark"
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
