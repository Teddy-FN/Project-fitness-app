import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideo = ({ exerciseVideo, name }) => {
  console.log("exerciseVideo =>", exerciseVideo);
  if (!exerciseVideo.length) return "Loading....";
  return (
    <Box
      sx={{
        marginTop: {
          lg: "200px",
          xs: "20px",
        },
      }}
      p="20px"
    >
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        Exercise Videos{}
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: {
            lg: "row",
          },
          gap: {
            lg: "110px",
            xs: "0",
          },
        }}
      >
        {exerciseVideo?.slice(0, 3).map((items, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${items.video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={items.video.thumbnails[0].url} alt={items.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {items.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {items.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
