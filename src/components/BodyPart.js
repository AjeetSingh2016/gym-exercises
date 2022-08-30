import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const images={
  abs: "https://img.icons8.com/external-filled-outline-icons-maxicons/85/000000/external-abs-fitness-filled-outline-filled-outline-icons-maxicons.png",

  all: "https://img.icons8.com/external-flaticons-flat-flat-icons/96/000000/external-workout-stay-at-home-flaticons-flat-flat-icons-3.png",

  back: "https://img.icons8.com/external-gradient-icons-maxicons/85/000000/external-back-fitness-gradient-gradient-icons-maxicons.png",

  cardio: "https://img.icons8.com/color/48/000000/exercise.png",

  chest: "https://img.icons8.com/color/48/000000/torso.png",

  LowerArm: "https://img.icons8.com/external-flat-icons-maxicons/85/000000/external-arm-human-body-flat-flat-icons-maxicons.png",

  LowerArm: "https://img.icons8.com/external-flat-icons-maxicons/85/000000/external-arm-human-body-flat-flat-icons-maxicons.png"



}

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      sx={{
        borderTop: bodyPart === item ? "4px solid #58E2F9" : " ",
        width: "270px",
        height: "280px",
        gap: "47px",
        cursor: "pointer",
      }}
      type="button"
      justifyContent="center"
      className="bodyPart-card"
      alignItems="center"
      backgroundColor="white"
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img
        src={images.all}
        alt="dumbbell"
        style={{ width: "80px", height: "80px" }}
      />
      <Typography fontSize="24px" fontWeight={600} textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
