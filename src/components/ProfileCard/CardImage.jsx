import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const CardImage = ({ imagesrc }) => {
  return (
    <Card
      sx={{
        minWidth: "170px",
        margin : "20px auto",
        maxWidth : "500px",
        bgcolor: "transparent",
        color: "white",
        border: "0.5px solid #666363",
      }}
    >
      <CardMedia
        component="img"
        width="100%"
        height="auto"
        image={`http://localhost:8000/${imagesrc}`}
        alt="camera capture"
      />
    </Card>
  );
};

export default CardImage;
