import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercise = ({ exercise, setExercise, bodyPart }) => {
  console.log("exercise exercise =>", exercise);
  return (
    <Box
      id="exercises"
      sx={{
        mt: {
          lg: "110px",
        },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Result
      </Typography>

      <Stack
        direction="row"
        sx={{
          gap: {
            lg: "110px",
            xs: "50px",
          },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercise.map((items, index) => (
          <ExerciseCard key={index} exercise={items} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {
            exercise.length > 9 && (
              <Pagination color="standard">

              </Pagination>
            )
          }
      </Stack>
    </Box>
  );
};

export default Exercise;
