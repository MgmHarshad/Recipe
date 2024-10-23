import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SingleRecipe from "./SingleRecipe";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%" },
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};

export default function RecipeCard({ data }) {
  const [open, setOpen] = React.useState(false);
  const [singleRecipeInfo, setSingleRecipeInfo] = React.useState(null);
  const handleClose = () => setOpen(false);

  const handleSingle = (singleData) => {
    setOpen(true);
    setSingleRecipeInfo(singleData)
  };

  return (
    <Box>
      <Card
        onClick={() => handleSingle(data)}
        sx={{
          width: 350,
          margin: 1,
          cursor: "pointer",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {data.name[0].toUpperCase()}
            </Avatar>
          }
          title={data.name}
          subheader={data.cuisine}
        />
        <CardMedia
          component="img"
          height="280"
          image={data.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.mealType}
            <Chip
              color="success"
              size="small"
              sx={{ float: "right", borderRadius: "5px" }}
              label={data.rating}
              icon={<StarIcon />}
            />
          </Typography>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SingleRecipe item={singleRecipeInfo}/>
        </Box>
      </Modal>
    </Box>
  );
}
