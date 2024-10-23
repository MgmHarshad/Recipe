import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Assets/Images/icon.png";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        sx={{ backgroundColor: "#f5f5f5", p: 2, color: "black" }}
        position="static"
      >
        <Toolbar>
          <Box
            sx={{
              width: "25%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Avatar src={logo} variant="square" />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "900", fontSize: "26px" }}
            >
              Recipe Book
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              gap: "50px",
            }}
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "900", color: "black" }}
              >
                Home
              </Typography>
            </Link>
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "900", color: "black" }}
              >
                About
              </Typography>
            </Link>
            <Link to={"/recipe"} style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "900", color: "black" }}
              >
                Recipe
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
