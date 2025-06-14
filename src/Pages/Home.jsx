import React, { useState, useEffect } from "react";
import { Box, Typography, Container, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import RecipeContainer from "../components/RecipeContainer";

export default function Home() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from API
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data.recipes))
      .catch(err => console.error('Error fetching recipes:', err));
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontFamily: 'Poppins' }}>
            Discover Delicious Recipes
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, fontFamily: 'Poppins' }}>
            Find and share your favorite recipes with our community
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              maxWidth: '600px',
              backgroundColor: 'white',
              borderRadius: '8px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </Box>

      {/* Featured Recipes Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4, fontFamily: 'Poppins' }}>
          Featured Recipes
        </Typography>
        <RecipeContainer search={search} data={recipes} />
      </Container>
    </Box>
  );
}
