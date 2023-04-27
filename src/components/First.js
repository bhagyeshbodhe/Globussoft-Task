import React from "react";
import "./first.css";
import { Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
const First = () => {
  return (
    <>
      <div>
        <h1>Hi John,</h1>
        <h1 className="welcome">Welcome back!</h1>

        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          This page is designed to give some important information about the
          application. Let's make something together
        </Typography>
        <div className="image">
          <img src="office.png" />
        </div>
      </div>

      <Card
        sx={{
          textAlign: "center",
          color: "white",
          backgroundColor: "blue",
          borderRadius: 4,
        }}
      >
        <CardContent
          sx={{
            padding: "4px 8px",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: 28,
              padding: "2px 5px",
              color: "blue",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          >
            <StarIcon />
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: 16 }} component="div">
            Congratulations John
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: "small" }}>
            You have completed 75% of your profile. Your current progress is
            great
          </Typography>
          <Typography
            component="span"
            style={{
              color: "black",
              backgroundColor: "white",
              fontWeight: "bold",
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
              fontSize: "10px",
            }}
          >
            View Profile
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default First;
