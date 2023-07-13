import React, { useEffect, useState } from "react";
import HorizonTalScrollBar from "./HorizonTalScrollBar";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const SearchExercise = ({ setExercise, bodyPart, setBodyPart }) => {
  // Search
  const [search, setSearch] = useState("");
  // Body Part
  const [bodyParts, setBodyParts] = useState([]);

  // UseEffect
  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["All", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        exerciseOptions
      );

      // Filter Data
      const filtredDataExercise = exerciseData.filter(
        (items) =>
          items.name.toLowerCase().includes(search) ||
          items.target.toLowerCase().includes(search) ||
          items.equipment.toLowerCase().includes(search) ||
          items.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercise(filtredDataExercise);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You <br /> Should Now
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizonTalScrollBar
          data={bodyParts}
          bodyParts={bodyPart}
          setBodyParts={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercise;
