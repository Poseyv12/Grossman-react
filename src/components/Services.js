import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    title: "Home Renovations",
    description: "Transform your living spaces with custom renovations tailored to your style and needs.",
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
  },
  {
    title: "Custom Home Building",
    description: "Bring your dream home to life with personalized design and expert construction.",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  {
    title: "Commercial Renovations",
    description: "Upgrade your business space with professional renovations that enhance functionality and aesthetics.",
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  }
];

const Services = () => {
  return (
    <AnimatedSection>
      <Box id="services" sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center">
            Services
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Expert solutions for all your construction needs
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AnimatedSection>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.imageUrl}
                      alt={service.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
                        {service.title}
                      </Typography>
                      <Typography>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </AnimatedSection>
  );
};

export default Services;
