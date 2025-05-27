"use client";

import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 1);
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <motion.div
      ref={ref}
      className={`sticky top-0 z-40 w-full ${className || ""}`}
    >
      <NavBody visible={visible}>
        <NavbarLogo />
        {!isMobile && <NavItems />}
        {!isMobile && (
          <NavbarButton variant="primary" href="#get-started">
            Get Started
          </NavbarButton>
        )}
        {isMobile && (
          <IconButton>
            <MenuIcon />
          </IconButton>
        )}
      </NavBody>
    </motion.div>
  );
};

interface NavBodyProps {
  children: React.ReactNode;
  visible: boolean;
}

export const NavBody = ({ children, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset"
          : "none",
        width: visible ? '70%' : '100%',
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      style={{
        backgroundColor: visible ? "rgba(18, 18, 18, 0.95)" : "#0f0f0f",
        maxWidth: "100%",
        margin: "0 auto",
      }}
      className="relative z-[60] flex flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex"
    >
      {children}
    </motion.div>
  );
};



export const NavItems = () => {
  const items = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <Box display="flex" gap={2}>
      {items.map((item, idx) => (
        <Button
          key={idx}
          href={item.link}
          sx={{
            color: "text.secondary",
            "&:hover": {
              color: "text.primary",
              backgroundColor: "action.hover",
              borderRadius: "999px",
            },
          }}
        >
          {item.name}
        </Button>
      ))}
    </Box>
  );
};

export const NavbarLogo = () => {
  return (
    <Box display="flex" alignItems="center">
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
        style={{ marginRight: 8 }}
      />
      <Typography variant="h6" color="text.primary">
        Startup
      </Typography>
    </Box>
  );
};

export const NavbarButton = ({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "gradient";
}) => {
  const styles = {
    primary:
      "px-4 py-2 rounded-md bg-white text-black text-sm font-bold shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark:
      "bg-black text-white shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Button
      href={href}
      className={`transition duration-200 inline-block text-center ${styles[variant]}`}
    >
      {children}
    </Button>
  );
};

export default Navbar