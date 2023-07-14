import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, youtubeOptions, fetchData } from "../utils/fetchData";

import Detail from "../Component/Detail";
import ExerciseVideo from "../Component/ExerciseVideo";
import SimiliarExercise from "../Component/SimiliarExercise";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideoData, setExerciseVideoData] = useState([]);
  const [targetData, setTargetData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);

  console.log("exerciseDetail =>", exerciseDetail);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      setExerciseDetail(exerciseDetailData);

      // Get Exercise Video Data
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideoData(exerciseVideosData.contents);

      // Target Muscle Exercise Data
      const targetMuscleExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetData(targetMuscleExerciseData);

      // Equipment Muscle Exercise Data
      const equipmentExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentData(equipmentExerciseData);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideo={exerciseVideoData}
        name={exerciseDetail.name}
      />
      <SimiliarExercise
        targetMuscleExercise={targetData}
        equipmentExercise={equipmentData}
      />
    </Box>
  );
};

export default ExerciseDetail;
