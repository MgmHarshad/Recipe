import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "40px 20px",
        marginTop: "auto",
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Column 1: About */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "600" }} gutterBottom>
            About Recipe Book
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Recipe Book is your online kitchen companion, providing delicious
            recipes for all tastes. Discover new flavors and learn the art of
            cooking with step-by-step guides.
          </Typography>
        </Grid>

        {/* Column 2: Quick Links */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography sx={{ fontWeight: "600" }} variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
            Home
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "grey" }}>
            About Us
          </Link>
          <Link to="/recipe" style={{ textDecoration: "none", color: "grey" }}>
            Recipes
          </Link>
        </Grid>

        {/* Column 3: Contact */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "600" }} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: support@recipebook.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: +1 234 567 890
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: 123 Recipe St, Culinary City, Foodland
          </Typography>
        </Grid>
      </Grid>

      <Box textAlign="center" marginTop={4}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Recipe Book. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
