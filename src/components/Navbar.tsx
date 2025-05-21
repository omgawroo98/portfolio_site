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
import NavButton from './NavButton';


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
            pt: 1.5
            // py: 1.5,
          }}
        >
          <Box
            sx={{
              width: '100%',
              mx: 'auto',
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(124, 58, 237, 0.08)' // semi-transparent purple
                  : theme.palette.background.paper,
              backdropFilter: 'blur(12px)',
              border: (theme) =>
                theme.palette.mode === 'dark'
                  ? '1px solid rgba(255,255,255,0.05)'
                  : '1px solid rgba(0,0,0,0.05)',

              // backgroundColor: 'surface.main',
              borderRadius: '60rem',
              px: { xs: 2, md: 4 },
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Branding */}
            <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 700 }}>
              Omar Elbakri
            </Typography>

            {/* Nav + buttons */}
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
                <NavButton
                  key={item}
                  label={t(`nav.${item}`)}
                  href={`#${item}`}
                  // active={currentSection === item}
                />
              ))}

              {/* Language Switcher */}
              <IconButton onClick={handleLanguageClick} sx={{ color: 'text.primary' }}>
                <LanguageIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
                {languages.map(({ code, label }) => (
                  <MenuItem key={code} onClick={() => handleLanguageChange(code)}>
                    {label}
                  </MenuItem>
                ))}
              </Menu>

              {/* Dark Mode Toggle */}
              <IconButton onClick={colorMode.toggleColorMode} sx={{ color: 'common.white' }}>
                {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>

              <Button
                variant="contained"
                sx={{
                  background: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(to right, #7c3aed, #a78bfa)'
                      : 'common.white',
                  color: (theme) =>
                    theme.palette.mode === 'dark' ? '#fff' : 'primary.dark',
                  fontWeight: 600,
                  borderRadius: '999px',
                  px: 3,
                  py: 1,
                  ml: 2,
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 0 12px rgba(167, 139, 250, 0.4)'
                      : 'none',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark'
                      ? '#a78bfa'
                      : 'grey.100',
                  },
                }}
              >
                {t('nav.cta') || 'Apply Now'}
              </Button>
            </Box>
          </Box>
        </AppBar>

      </motion.div>
    </Slide>
  );
};

export default Navbar;
