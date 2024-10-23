import { Box, Typography } from "@mui/material";
import React from "react";
import error from "../Assets/Images/error.jpg";
export default function Error() {
  return (
    <Box
      sx={{
        p: 3,
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img style={{ width: "50%" }} src={error} />
      <Typography
        variant="overline"
        sx={{ fontWeight: "600", fontSize: "30px", color: "grey" }}
      >
        No Page Found!
      </Typography>
    </Box>
  );
}
