import React, { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const images = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
];

const roles = [
  "Expert Contractor",
  "Master Builder",
  "Renovation Specialist",
  "Custom Home Designer"
];

const HeroSection = styled(Box)({
  height: '100vh',
  position: 'relative',
  overflow: 'hidden',
});

const BackgroundImage = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'opacity 1s ease-in-out',
});

const ContentBox = styled(Box)(({ theme, opacity }) => ({
  position: 'absolute',
  top: '50%',
  right: '0%', // Position on the right side
  transform: 'translateY(-50%)',
  zIndex: 1,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(4),
  borderRadius: '20px 0 0 20px', // Rounded corners on the left side
  textAlign: 'left',
  maxWidth: '500px',
  width: '90%',
  boxShadow: theme.shadows[5],
  color: '#fff',
  opacity: opacity,
  transition: 'opacity 0.3s ease-in-out',
}));

const fadeInOut = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const RotatingText = styled(Typography)({
  height: '1.5em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  '& > span': {
    position: 'absolute',
    animation: `${fadeInOut} 3s ease-in-out`,
  },
});

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    const roleInterval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        setFadeIn(true);
      }, 500);
    }, 3000);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Adjust this value to control fade speed (lower value = faster fade)
      const fadeHeight = windowHeight * 0.5; 
      const newOpacity = 1 - (scrollPosition / fadeHeight);
      setOpacity(Math.max(newOpacity, 0));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(imageInterval);
      clearInterval(roleInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeroSection id="home">
        {images.map((image, index) => (
          <BackgroundImage
            key={index}
            sx={{
              backgroundImage: `url(${image})`,
              opacity: index === currentImage ? 1 : 0,
            }}
          />
        ))}
      </HeroSection>
      <ContentBox opacity={opacity}>
        <Typography variant="h2" component="h1" gutterBottom>
          Jared Grossman
        </Typography>
        <RotatingText variant="h4" gutterBottom>
          <span style={{ opacity: fadeIn ? 1 : 0, transition: 'opacity 0.5s' }}>
            {roles[currentRole]}
          </span>
        </RotatingText>
        <Typography variant="h6" paragraph>
          Bringing your construction dreams to life with skill and precision
        </Typography>
        <Button variant="contained" color="secondary" size="large" href="#contact">
          Get a Quote
        </Button>
      </ContentBox>
    </>
  );
}

export default Home;