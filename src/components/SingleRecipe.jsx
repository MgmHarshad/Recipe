import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Box,
  Typography,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Star as StarIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
} from "@mui/icons-material";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function SingleRecipe({item}) {
  // const item = {
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
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        maxHeight: "90vh",
        overflow: "auto",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: "50%" },
          height: { xs: "auto", sm: "100%" },
        }}
        image={item?.image}
        alt={item?.name}
      />
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <Box>
              <Typography component="div" variant="h5">
                {item?.name}
              </Typography>
            </Box>
            <Box>
              <Chip
                color="success"
                size="small"
                sx={{ float: "right", borderRadius: "5px" }}
                label={item.rating}
                icon={<StarIcon />}
              />
            </Box>
          </Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item?.cuisine} - {item?.mealType}
          </Typography>
          <Typography variant="overline" color="text.secondary">
            Tags :
            {item.tags.map((c, i) => (
              <Chip size="small" sx={{ m: "1px" }} label={c} key={i} />
            ))}
          </Typography>
          <Root>
            <Divider>
              <Typography variant="overline">Ingredients</Typography>
            </Divider>
            {item.ingredients.map((i) => (
              <span key={i}>{i},</span>
            ))}
          </Root>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ height: "45vh", overflow: "auto" }}>
            <Root>
              <Divider>
                <Typography variant="overline">Instructions</Typography>
              </Divider>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
                aria-label="contacts"
              >
                {item.instructions.map((ing) => (
                  <ListItem key={ing} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon sx={{ fontSize: "20px" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="subTitle2">{ing}</Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Root>
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
}

export default SingleRecipe;
