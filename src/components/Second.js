import * as React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "./box.css";
import Box from "./Box";

export default function Second() {
  return (
    <>
      <Box
        number="26,799"
        label="Likes"
        firstIcon={<ThumbUpIcon className="firstIcon blue" />}
        secondIcon={<ArrowDropUpIcon className="green" />}
      />
      <Box
        number="6,754"
        label="Love"
        firstIcon={<FavoriteIcon className="firstIcon red" />}
        secondIcon={<ArrowRightIcon className="gray" />}
      />
      <Box
        number="52,789"
        label="Smiles"
        firstIcon={<EmojiEmotionsIcon className="firstIcon yellow" />}
        secondIcon={<ArrowDropDownIcon className="redtext" />}
      />

      <div
        style={{
          height: 400,
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        View Dashboard
      </div>
    </>
  );
}
