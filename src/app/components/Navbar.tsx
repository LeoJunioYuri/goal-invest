'use client'
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeContext';

const Navbar: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Goal Invest
        </Typography>
        <Button component={Link} href="/" color="inherit" sx={{ marginRight: 2 }}>
          Investimentos
        </Button>
        <Button component={Link} href="/faq" color="inherit" sx={{ marginRight: 2 }}>
          FAQ
        </Button>
        <Button
        variant="outlined"
        color="inherit"
        onClick={toggleTheme}
      >
        {darkMode ? 'Tema Claro' : 'Tema Escuro'}
      </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
