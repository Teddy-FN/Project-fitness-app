/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import BodyParts from "./BodyParts";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import leftArrowImage from "../assets/icons/left-arrow.png";
import rightArrowImage from "../assets/icons/right-arrow.png";

// Left row
const leftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={leftArrowImage} alt="left-arrow" />
    </Typography>
  );
};

const rightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={rightArrowImage} alt="right-arrow" />
    </Typography>
  );
};

const HorizonTalScrollBar = ({ data, bodyPart, setBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={leftArrow} RightArrow={rightArrow}>
      {data.map((items) => (
        <Box
          key={items.id || items}
          itemID={items.id || items}
          title={items.id || items}
          m="0 40px"
        >
          <BodyParts
            item={items}
            setBodyPart={setBodyParts}
            bodyPart={bodyPart}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizonTalScrollBar;
