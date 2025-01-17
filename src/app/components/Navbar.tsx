'use client';
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeContext';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6" sx={{ flexGrow: 1, display: isMobile ? 'none' : 'block' }}>
          Goal Invest
        </Typography>

        {isMobile ? (
          <>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose} component={Link} href="/">
                Investimentos
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} href="/faq">
                FAQ
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button component={Link} href="/" color="inherit" sx={{ marginRight: 2 }}>
              Investimentos
            </Button>
            <Button component={Link} href="/faq" color="inherit" sx={{ marginRight: 2 }}>
              FAQ
            </Button>
          </>
        )}

        <Button
          variant="outlined"
          color="inherit"
          onClick={toggleTheme}
          sx={{ mb: 0.5 }}
        >
          {darkMode ? 'Tema Claro' : 'Tema Escuro'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
