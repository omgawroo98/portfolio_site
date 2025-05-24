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
import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
//@ts-ignore
import Scrollspy from 'react-scrollspy';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
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
          color="transparent"
          elevation={0}
          sx={{
            backdropFilter: 'blur(10px)',
            px: 2,
            pt: 1.5,
            boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              mx: 'auto',
              backgroundColor: '#1e2333',
              backdropFilter: 'blur(12px)',
              border: theme.palette.mode === 'dark'
                ? '1px solid rgba(255,255,255,0.05)'
                : '1px solid rgba(0,0,0,0.05)',
              borderRadius: '60rem',
              px: { xs: 2, md: 4 },
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 700, width: '10rem' }}>
              Omar Elbakri
            </Typography>

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
                    color: 'text.primary',
                    scrollBehavior: 'smooth',
                    textTransform: 'none',
                    '&.active': {
                      color: 'error.main',
                    },
                    fontSize: '1.125rem',
                  }}
                >
                  {t(`nav.${item}`)}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                width: '10rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
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
          </Box>
        </AppBar>
      </motion.div>
    </Slide>
  );
};

export default Navbar;
