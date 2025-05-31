import React, { useState, useRef, useContext } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslation } from "react-i18next";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '../theme/ThemeContext';
import LanguageIcon from '@mui/icons-material/Language';
//@ts-ignore
import Scrollspy from 'react-scrollspy';

const languages = [
  { code: 'en', label: '🇬🇧' },
  { code: 'fr', label: '🇫🇷' },
  { code: 'de', label: '🇩🇪' },
  { code: 'it', label: '🇮🇹' },
];

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
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
        {!isMobile && <NavItems t={t} />}
        {!isMobile && <NavbarButtons />}
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
        backgroundColor: visible ? "#141414" : "transparent", // 👈 dynamic background
        boxShadow: visible
          ? `0 4px 12px rgba(0, 0, 0, 0.3),
     0 12px 32px rgba(0, 0, 0, 0.4),
     0 24px 64px rgba(0, 0, 0, 0.5)`
          : "none",
        width: visible ? '60%' : '100%',
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      style={{
        maxWidth: "70%",
        margin: "0 auto",
        borderRadius: visible ? '999px' : '0px'
      }}
      className="relative z-[60] flex flex-row items-center justify-between self-start px-4 py-2 lg:flex"
    >
      {children}
    </motion.div >
  );
};

export const NavItems = ({ t }: { t: (arg0: string) => string }) => {
  const items = [
    { name: "nav.home", link: "home" },
    { name: "nav.about", link: "about" },
    { name: "nav.skills", link: "skills" },
    { name: "nav.contact", link: "contact" },
  ];
  return (
    <Box component={Scrollspy} items={items.map(i => i.link)} currentClassName="active" offset={-100} display="flex" gap={2}>
      {items.map((item, idx) => (
        <Button
          key={idx}
          href={`#${item.link}`}
          sx={{
            color: 'text.secondary',
            textTransform: 'none',
            '&:hover': {
              color: 'text.primary',
              backgroundColor: 'action.hover',
              borderRadius: '999px',
            },
            '&.active': {
              color: 'error.main',
            }
          }}
        >
          <Typography variant="h5" sx={{fontWeight: 500}}>
          {t(item.name)}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export const NavbarLogo = () => {
  return (
    <Box display="flex" alignItems="center" sx={{ width: '8rem' }}>
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
        style={{ marginRight: 8 }}
      />
      <Typography variant="h4" color="text.primary">
        Startup
      </Typography>
    </Box>
  );
};

export const NavbarButtons = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { i18n } = useTranslation();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="space-around" sx={{ width: "8rem" }}>
      <IconButton onClick={handleLanguageClick} sx={{ color: 'text.primary' }}>
        <LanguageIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)} disableScrollLock>
        {languages.map(({ code, label }) => (
          <MenuItem key={code} onClick={() => handleLanguageChange(code)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
      <IconButton onClick={colorMode.toggleColorMode} sx={{ color: 'text.primary' }}>
        {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Box>
  );
};

export default Navbar;