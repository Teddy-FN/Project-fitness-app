import React from "react";
import { Box } from "@mui/material";

import HeroBanner from "../Component/HeroBanner";
import SearchExercise from "../Component/SearchExercise";
import Exercise from "../Component/Exercise";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercise />
    </Box>
  );
};

export default Home;
