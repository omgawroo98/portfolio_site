import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
  Button,
  Box,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion } from 'framer-motion';
//@ts-ignore
import Scrollspy from 'react-scrollspy';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { ColorModeContext } from '../theme/ThemeContext';
import { useTheme } from '@mui/material/styles';


const navItems = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
const languages = [
  { code: 'en', label: '🇬🇧' },
  { code: 'fr', label: '🇫🇷' },
  { code: 'de', label: '🇩🇪' },
  { code: 'it', label: '🇮🇹' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <Slide appear={false} direction="down" in={true}>
      <motion.div
        initial={{ boxShadow: 'none' }}
        animate={{
          boxShadow: trigger
            ? '0 2px 12px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.06)'
            : 'none',
        }}
        transition={{ duration: 0.25 }}
      >

        <AppBar
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            transition: 'box-shadow 0.3s ease-in-out',
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              maxWidth: '1200px',
              mx: 'auto',
              width: '100%',
            }}
          >
            {/* Branding */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
              omar
            </Typography>

            {/* Scrollspy Nav Links */}
            <Box
              component={Scrollspy}
              items={navItems}
              currentClassName="active"
              offset={-100}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  href={`#${item}`}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                    color: 'text.primary',
                    scrollBehavior: 'smooth',
                    '&.active': {
                      color: 'error.main',
                    },
                  }}
                >
                  {t(`nav.${item}`)}
                </Button>
              ))}

              {/* Language Switcher */}
              <IconButton onClick={handleLanguageClick}>
                <LanguageIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
                {languages.map(({ code, label }) => (
                  <MenuItem key={code} onClick={() => handleLanguageChange(code)}>
                    {label}
                  </MenuItem>
                ))}
              </Menu>
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </motion.div>
    </Slide>
  );
};

export default Navbar;
