import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Recipe from "./Pages/Recipe";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Error from "./Pages/Error";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Box>
          <NavBar />
        </Box>
        <Box sx={{ minHeight: "100vh" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/recipe" element={<Recipe />} />
            <Route exact path="/*" element={<Error />} />
          </Routes>
        </Box>
        <Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
