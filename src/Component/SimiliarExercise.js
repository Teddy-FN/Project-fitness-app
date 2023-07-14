import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizonTalScrollBar from "./HorizonTalScrollBar";
import Loader from "./Loader";

const SimiliarExercise = ({ targetMuscleExercise, equipmentExercise }) => {
  console.log("targetMuscleExercise =>", targetMuscleExercise);
  return (
    <Box
      sx={{
        mt: {
          lg: "20px",
          xs: 0,
        },
      }}
      p="20px"
    >
      <Typography variant="h4" mb={5}>
        Exercise That target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {targetMuscleExercise.length ? (
          <HorizonTalScrollBar data={targetMuscleExercise} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h4" mb={5}>
        Exercise That use the same muscle equipment
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {equipmentExercise.length ? (
          <HorizonTalScrollBar data={equipmentExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimiliarExercise;
