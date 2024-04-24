import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const CardImage = ({ imagesrc }) => {
  return (
    <Card
      sx={{
        minWidth: "170px",
        maxWidth : "400px",
        bgcolor: "transparent",
        color: "white",
        margin : "10px auto",
        border: "0.5px solid #666363",
      }}
    >
      <CardMedia
        component="img"
        width="100%"
        height="auto"
        image={imagesrc}
        alt="camera capture"
      />
    </Card>
  );
};

export default CardImage;
