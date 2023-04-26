import React from "react";
import ProgressBars from "./ProgressBars";
import Box from "./Box";
import { Avatar } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
const Third = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
          marginBottom: 30,
        }}
      >
        <h4>Targets</h4>
        <div style={{ marginBottom: 30 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Views</span>
            <span>75%</span>
          </div>
          <ProgressBars value={75} color="blue" />
        </div>

        <div style={{ marginBottom: 30 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Followers</span>
            <span>50%</span>
          </div>
          <ProgressBars value={50} color="yellow" />
        </div>

        <div style={{ marginBottom: 30 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Income</span>
            <span>25%</span>
          </div>
          <ProgressBars value={25} color="red" />
        </div>
      </section>
      <h4 style={{ marginBottom: 30 }}>Meetings</h4>

      <Box
        number="8:00 - 10:00"
        label="Emmy Anderson"
        firstIcon={
          <Avatar
            alt="Emmy Anderson"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        }
        secondIcon={<KeyboardArrowRightIcon />}
      />

      <Box
        number="11:00 - 12:00"
        label="Joy McGlynn"
        firstIcon={
          <Avatar
            alt="Joy McGlynn"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        }
        secondIcon={<KeyboardArrowRightIcon />}
      />
      <Box
        number="14:00 - 15:00"
        label="Mara Dach"
        firstIcon={
          <Avatar
            alt="Mara Dach"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        }
        secondIcon={<KeyboardArrowRightIcon />}
      />
      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
          borderRadius: 10,
          padding: 5,
        }}
      >
        <AddIcon />
      </div>
    </>
  );
};

export default Third;
