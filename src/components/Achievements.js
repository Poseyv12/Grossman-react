import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';
import BuildIcon from '@mui/icons-material/Build';
import AnimatedSection from './AnimatedSection';

const achievements = [
  { icon: HomeIcon, count: 250, label: 'Projects Completed' },
  { icon: StarIcon, count: 150, label: '5-Star Reviews' },
  { icon: GroupIcon, count: 1000, label: 'Happy Clients' },
  { icon: BuildIcon, count: 25, label: 'Years Experience' },
];

const Achievements = () => {
  return (
    <AnimatedSection component="section" sx={{ py: 8, bgcolor: 'background.paper' }}>
     <Box id="Achievements">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Achievements
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Building success, one project at a time
        </Typography>
        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <AnimatedSection>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 3 }}>
                  <achievement.icon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <CardContent>
                    <Typography variant="h3" component="div" align="center" gutterBottom>
                      {achievement.count}
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary">
                      {achievement.label}
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

export default Achievements;