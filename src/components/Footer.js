import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  padding: theme.spacing(6, 0),
  position: 'relative', // Add this
  zIndex: 10, // Add this to ensure footer stays on top
}));

const Footer = () => {
  return (
    <FooterWrapper component="footer">
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Jarred Grossman Construction
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Bringing your construction dreams to life
        </Typography>
        <Typography variant="body2" color="inherit" align="center">
          {'Copyright © '}
          <Link color="inherit" href="#">
            Jarred Grossman
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;