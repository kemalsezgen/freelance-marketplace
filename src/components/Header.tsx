import React from 'react';
import { AppBar, Toolbar, Box, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleTheme } from '../redux/themeSlice';
import { useNavigate } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ROUTES, COLOURS } from '../constants';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state: RootState) => state.theme.mode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleLogoClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: mode == "dark" ? COLOURS.DARK_BLUE : "#eeeeee" }}>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          sx={{ cursor: 'pointer' }}
          onClick={handleLogoClick}
        >
          <img
            src={`/assets/odine-logo-${mode}.png`}
            alt="Odine Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
        </Box>

        <Box sx={{ marginLeft: 'auto' }}>
          <IconButton onClick={handleToggleTheme} >
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
