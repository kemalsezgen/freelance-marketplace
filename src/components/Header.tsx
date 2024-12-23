import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { ROUTES, COLOURS } from '../constants';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: COLOURS.DARK_BLUE }}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            src={`/assets/odine-logo-${'white'}.png`}
            alt="Odine Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
        </Box>

        <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
          <Button sx={{ color: COLOURS.WHITE }} href={ROUTES.HOME}>
            Home
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;