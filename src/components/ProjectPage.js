import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AnimatedSection from './AnimatedSection';
import { projectData } from './Projects';


const ProjectPage = () => {
    const { id } = useParams();
    const project = projectData.find(p => p.id === parseInt(id));
    const [fullscreenImage, setFullscreenImage] = useState(null);
  
    if (!project) {
      return <Typography>Project not found</Typography>;
    }
  
    const handleImageClick = (image) => {
      setFullscreenImage(image);
    };
  
    const handleCloseFullscreen = () => {
      setFullscreenImage(null);
    };
  
    return (
      <AnimatedSection>
        <Box sx={{ 
          py: 8, 
          bgcolor: 'background.paper',
         
        }}>
          <Container maxWidth="lg">
            <Button component={Link} to="/" variant="outlined" sx={{ mb: 4 }}>
              Back to Home
            </Button>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <AnimatedSection>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h5" gutterBottom>
                      Photo Gallery
                    </Typography>
                    <Grid container spacing={2}>
                      {project.gallery.map((image, index) => (
                        <Grid item xs={6} key={index}>
                          <img 
                            src={image} 
                            alt={`${project.title} - Image ${index + 1}`} 
                            style={{ width: '100%', height: 'auto', borderRadius: '4px', cursor: 'pointer' }}
                            onClick={() => handleImageClick(image)}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </AnimatedSection>
              </Grid>
              <Grid item xs={12} md={6}>
                <AnimatedSection>
                  <Typography variant="h2" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {project.description}
                  </Typography>
                </AnimatedSection>
              </Grid>
            </Grid>
          </Container>
        </Box>
  
        <Modal
          open={!!fullscreenImage}
          onClose={handleCloseFullscreen}
          aria-labelledby="fullscreen-image"
          aria-describedby="fullscreen-image-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '90%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <IconButton
              aria-label="close"
              onClick={handleCloseFullscreen}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Modal>
      </AnimatedSection>
    );
  };

export default ProjectPage;
