import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    name: "John Doe",
    role: "Homeowner",
    content: "Jarred did an amazing job renovating our kitchen. His attention to detail and professionalism were outstanding. We couldn't be happier with the results!",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Jane Smith",
    role: "Business Owner",
    content: "We hired Jarred for our office renovation, and he exceeded all our expectations. The project was completed on time and within budget. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Mike Johnson",
    role: "Real Estate Developer",
    content: "Jarred's expertise in custom home building is unparalleled. He brought our vision to life with creativity and precision. A true professional in every sense.",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

const Testimonials = () => {
  return (
    <AnimatedSection>
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography variant="h2" align="center" gutterBottom>
              Client Testimonials
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Don't just take our word for it - here's what our clients have to say
            </Typography>
          </AnimatedSection>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AnimatedSection>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                        <Avatar
                          src={testimonial.avatar}
                          sx={{ width: 80, height: 80 }}
                        />
                      </Box>
                      <Typography variant="h6" align="center" gutterBottom>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
                        {testimonial.role}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                        <FormatQuoteIcon color="primary" fontSize="large" />
                      </Box>
                      <Typography variant="body1" align="center">
                        {testimonial.content}
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

export default Testimonials;
