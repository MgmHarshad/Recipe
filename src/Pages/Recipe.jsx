import { Box, CircularProgress, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import RecipeContainer from "../components/RecipeContainer";
import axios from 'axios'

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    setLoading(true)
    setTimeout(() => {
      
      setSearch(e.target.value);
      setLoading(false)
    }, 1000);
    
  };

  useEffect(()=>{
    setLoading(true)
    axios.get('https://dummyjson.com/recipes')
    .then((res)=>{
      console.log(res.data.recipes);
      setRecipes(res.data.recipes)//set the data into state
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false)
    })
  }, [])
  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{ width: "50%" }}
          label="Search recipe here..."
          type="search"
          color="secondary"
          onChange={handleSearch}
        />
      </Box>
      {loading ? (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "45%",
          }}
          size={100}
          color="secondary"
        />
      ) : (
        <RecipeContainer data={recipes} setData={setRecipes} search={search} />
      )}
    </div>
  );
}
