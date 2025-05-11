import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Omar
        </Typography>

        <Stack direction="row" spacing={3}>
          {navItems.map((item) => (
            <Button
              key={item}
              component={NavLink}
              to={`/${item === 'home' ? '' : item}`}
              sx={{
                textTransform: 'none',
                fontWeight: 500,
                color: 'text.primary',
                '&.active': {
                  color: 'error.main',
                },
              }}
            >
              {t(`nav.${item}`)}
            </Button>
          ))}

          {/* Language switcher */}
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
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
