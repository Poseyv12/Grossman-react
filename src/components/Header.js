import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
  backgroundColor: 'transparent',
}));

const LogoBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2),
  borderRadius: '0 0 10px 0',
  position: 'absolute',
  top: 0,
  color: 'white',
  left: 0,
  zIndex: 1100,
}));

const NavBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: '0 0 0 10px',
  display: 'flex',
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 1100,
}));

const NavItems = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const NavItem = styled(Button)(({ theme }) => ({
  color: '#fff',
  marginLeft: theme.spacing(2),
}));

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowLogo(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Jarred Grossman
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item} component="a" href={`#${item.toLowerCase()}`}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {showLogo && (
        <LogoBox>
          <Typography variant="h6" component="div">
            Jared Grossman
          </Typography>
        </LogoBox>
      )}
      <NavBox>
        <NavItems>
          {menuItems.map((item) => (
            <NavItem key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </NavItem>
          ))}
        </NavItems>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

      </NavBox>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;