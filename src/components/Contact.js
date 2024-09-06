import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Box, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AnimatedSection from './AnimatedSection';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <AnimatedSection>
      <Box id="contact" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Let's discuss your project and bring your vision to life
          </Typography>
          <AnimatedSection>
            <Box sx={{ mt: 4, mb: 6, display: 'flex', justifyContent: 'center' }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon sx={{ mr: 1 }} />
                    <Typography>(555) 123-4567</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon sx={{ mr: 1 }} />
                    <Typography>jarred@grossmanconstruction.com</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </AnimatedSection>
          <AnimatedSection>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" size="large">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </AnimatedSection>
        </Container>
      </Box>
    </AnimatedSection>
  );
}

export default Contact;
