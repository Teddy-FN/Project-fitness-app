import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../Component/HeroBanner";
import SearchExercise from "../Component/SearchExercise";
import Exercise from "../Component/Exercise";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  // // Filter Data
  const [exercise, setExercise] = useState([]);
  console.log("bodyPart =>", bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercise={setExercise}
      />
      <Exercise
        bodyPart={bodyPart}
        exercise={exercise}
        setExercise={setExercise}
      />
    </Box>
  );
};

export default Home;
