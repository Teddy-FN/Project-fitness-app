import React from "react";
import { Typography, Button, Stack } from "@mui/material";

import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentPartImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  console.log("exerciseDetail =>", exerciseDetail);
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: targetImage,
      name: target,
    },
    {
      icon: equipmentPartImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: {
          lg: "row",
        },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img alt={name} src={gifUrl} loading="lazy" className="detail-image" />
      <Stack
        sx={{
          gap: {
            lg: "35px",
            xs: "20px",
          },
        }}
      >
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          {" "}
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail.map((items) => (
          <Stack direction="row" key={items.id} gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={items.icon}
                alt="items"
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {items.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
