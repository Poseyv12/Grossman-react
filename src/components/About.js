import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <AnimatedSection>
      <Box id="about" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <AnimatedSection>
                <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRzaG90fGVufDB8fDB8fHww" 
                    alt="Jarred Grossman" 
                    style={{ width: '100%', borderRadius: '4px' }}
                  />
                </Paper>
              </AnimatedSection>
            </Grid>
            <Grid item xs={12} md={8}>
              <AnimatedSection>
                <Typography variant="h4" gutterBottom>
                  Jarred Grossman - Your Trusted Contractor
                </Typography>
                <Typography paragraph>
                  With over 15 years of experience in the construction industry, I've built a reputation for quality craftsmanship and attention to detail. My passion for building and renovating spaces drives me to deliver exceptional results for every client.
                </Typography>
                <Typography variant="h5" gutterBottom>
                  My Approach
                </Typography>
                <Typography paragraph>
                  I believe in personalized service, clear communication, and a commitment to bringing your vision to life. Whether it's a home renovation, a commercial project, or a custom build, I work closely with you to ensure your project exceeds expectations.
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Why Choose Me?
                </Typography>
                <ul>
                  <li>Extensive experience in residential and commercial projects</li>
                  <li>Dedication to quality and craftsmanship</li>
                  <li>Personalized service and attention to detail</li>
                  <li>Clear communication throughout the project</li>
                </ul>
              </AnimatedSection>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AnimatedSection>
  );
};

export default About;
