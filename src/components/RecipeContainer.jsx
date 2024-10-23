import { Box, Typography } from "@mui/material";
import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeContainer({ search,data }) {
  // const data = {
  //   id: 1,
  //   name: "Classic Margherita Pizza",
  //   ingredients: [
  //     "Pizza dough",
  //     "Tomato sauce",
  //     "Fresh mozzarella cheese",
  //     "Fresh basil leaves",
  //     "Olive oil",
  //     "Salt and pepper to taste",
  //   ],
  //   instructions: [
  //     "Preheat the oven to 475°F (245°C).",
  //     "Roll out the pizza dough and spread tomato sauce evenly.",
  //     "Top with slices of fresh mozzarella and fresh basil leaves.",
  //     "Drizzle with olive oil and season with salt and pepper.",
  //     "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
  //     "Slice and serve hot.",
  //   ],
  //   prepTimeMinutes: 20,
  //   cookTimeMinutes: 15,
  //   servings: 4,
  //   difficulty: "Easy",
  //   cuisine: "Italian",
  //   caloriesPerServing: 300,
  //   tags: ["Pizza", "Italian"],
  //   userId: 166,
  //   image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  //   rating: 4.6,
  //   reviewCount: 98,
  //   mealType: ["Dinner"],
  // };

  let filtered = data.filter((name) =>
    search
      ? name?.name.toLowerCase().includes(search?.toLowerCase()) ||
        name?.cuisine.toLowerCase().includes(search?.toLowerCase())
      : data
  );
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          flexWrap: "wrap",
          overflow: "auto",
        }}
      >
        {filtered.length>0?
        filtered.map((item)=>(
        <RecipeCard data={item} />
        )):(
          <Box
          sx={{
            padding: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: 5,
              width: "50%",
              textAlign: "center",
            }}
          >
            <Box>
              <Typography
                variant="overline"
                fontFamily={"Poppins"}
                fontSize={20}
              >
                Oops
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                fontFamily={"Poppins"}
                fontSize={16}
              >
                We could not understand what you mean, try rephrasing the query
              </Typography>
            </Box>
          </Box>
        </Box>
        )}
      </Box>
    </div>
  );
}
