import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function About() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontFamily: 'Poppins' }}>
            About Recipe Hub
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Your ultimate destination for discovering, sharing, and creating amazing recipes
          </Typography>
        </Box>

        {/* Mission Statement */}
        <Paper elevation={0} sx={{ p: 4, mb: 8, backgroundColor: '#f5f5f5' }}>
          <Typography variant="body1" sx={{ textAlign: 'center', fontFamily: 'Poppins' }}>
            At Recipe Hub, we believe that cooking is more than just preparing food – it's about creating memories,
            sharing experiences, and bringing people together. Our mission is to make cooking accessible, enjoyable,
            and inspiring for everyone, from beginners to experienced chefs.
          </Typography>
        </Paper>

        {/* Features Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <RestaurantIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" component="h3" sx={{ mb: 2, fontFamily: 'Poppins' }}>
                Diverse Recipes
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Explore thousands of recipes from various cuisines, dietary preferences, and skill levels
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <PeopleIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" component="h3" sx={{ mb: 2, fontFamily: 'Poppins' }}>
                Community Driven
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Join our community of food enthusiasts to share your recipes and cooking experiences
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <FavoriteIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" component="h3" sx={{ mb: 2, fontFamily: 'Poppins' }}>
                Easy to Use
              </Typography>
              <Typography variant="body1" color="text.secondary">
                User-friendly interface designed to help you find and create recipes with ease
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Contact Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2, fontFamily: 'Poppins' }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Have questions or suggestions? We'd love to hear from you!
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Email us at: hvmagadum04@gmail.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
