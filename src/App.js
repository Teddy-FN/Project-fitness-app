import React from "react";
// Style
import "./App.css";
// Material UI
import { Box } from "@mui/material";
// React Router Dom
import { Routes, Route } from "react-router-dom";
// Component
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
// Pages
import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";

const App = () => {
  return (
    <Box
      width="480px"
      sx={{
        width: {
          xl: "1448px",
        },
      }}
      m="auto"
    >
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="exercise/:id" Component={ExerciseDetail} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
