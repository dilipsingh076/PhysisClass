"use client"; 
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import SignIn from '@/pages/api/auth/signin';
import Image from 'next/image';
import Nav from './Nav';

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Brand Logo */}
            <Link href={"/"} > <Image src={"/brandLogo.svg"} alt='Brand Logo' width={150} height={40} /></Link>
          </Typography>
          <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
            <Nav/>
          </Typography>
          <SignIn />
          {/* <Signup /> */}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <List>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.path} passHref>
              <ListItem button component="a" onClick={handleDrawerClose}>
                <ListItemText primary={link.label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
