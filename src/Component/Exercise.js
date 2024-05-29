import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercise = ({ exercise, setExercise, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const paginate = async (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirtsExercise = indexOfLastExercise - exercisePerPage;

  const currentExercise = exercise.slice(
    indexOfFirtsExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
      if (bodyPart === "all" || bodyPart === "All") {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises?limit=900`,
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=900`,
          exerciseOptions
        );
      }

      setExercise(exerciseData);
    };

    fetchExerciseData();
  }, [bodyPart]);

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
        {currentExercise.map((items, index) => (
          <ExerciseCard key={index} exercise={items} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercise.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          ></Pagination>
        )}
      </Stack>
    </Box>
  );
};

export default Exercise;
