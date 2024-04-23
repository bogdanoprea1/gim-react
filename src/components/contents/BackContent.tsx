import React from "react";
import Dropdown from "../Dropdown"; // Import the Dropdown component

const BackContent = () => {
  const latsPath = "/gim-react/assets/gifs/back/Lats/";
  const lowerBackPath = "/gim-react/assets/gifs/back/Lower_Back/";
  const middleBackPath = "/gim-react/assets/gifs/back/Middle_Back/";
  const upperBackPath = "/gim-react/assets/gifs/back/Upper_Back/";

  const dropdownItems = [
    {
      id: 1,
      label: "Lats",
      gifs: [
        latsPath + "Assisted-Pull-up.gif",
        latsPath + "Barbell-Bent-Over-Row.gif",
        latsPath + "Bent-Over-Dumbbell-Row.gif",
        latsPath + "Cable-Bent-Over-Row.gif",
        latsPath + "Cable-One-Arm-Lat-Pulldown.gif",
        latsPath + "Cable-Seated-Pullover.gif",
        latsPath + "Cable-Straight-Arm-Pulldown.gif",
        latsPath + "Chin-Up.gif",
        latsPath + "Close-Grip-Lat-Pulldown.gif",
        latsPath + "Double-Cable-Neutral-Grip-Lat-Pulldown-On-Floor.gif",
        latsPath + "Dumbbell-Bent-Over-Reverse-Row.gif",
        latsPath + "Dumbbell-Row.gif",
        latsPath + "Front-Pulldown Machine.gif",
        latsPath + "Lat-Pulldown.gif",
        latsPath + "Lever-Pullover-plate-loaded.gif",
        latsPath + "Pull-up.gif",
        latsPath + "Reverse-grip-Pull-up.gif",
        latsPath + "Reverse-Lat-Pulldown.gif",
        latsPath + "Rope-Straight-Arm-Pulldown.gif",
        latsPath + "V-bar-Lat-Pulldown.gif",
      ],
    },
    {
      id: 2,
      label: "Lower Back",
      gifs: [
        lowerBackPath + "Hyperextension.gif",
        lowerBackPath + "Seated Back Extension.gif",
      ],
    },
    {
      id: 3,
      label: "Middle Back",
      gifs: [
        middleBackPath + "Close-grip-cable-row.gif",
        middleBackPath + "One-arm-Cable-Row.gif",
        middleBackPath + "Reverse-Grip-Machine-Row.gif",
        middleBackPath + "Seated-Cable-Rope-Row.gif",
        middleBackPath + "Seated-Cable-Row.gif",
        middleBackPath + "Seated-Row-Machine.gif",
        middleBackPath + "T-bar-rows.gif",
      ],
    },
    {
      id: 4,
      label: "Upper Back",
      gifs: [
        upperBackPath + "Cable-Rear-Pulldown.gif",
        upperBackPath + "Incline-Barbell-Row.gif",
        upperBackPath + "Incline-Dumbbell-Hammer-Row.gif",
        upperBackPath + "Incline-Reverse-Grip-Dumbbell-Row.gif",
        upperBackPath + "Inverted-Row.gif",
        upperBackPath + "Kettlebell-Bent-Over-Row.gif",
        upperBackPath + "Lever-Cable-Rear-Pulldown.gif",
        upperBackPath + "Lever-High-Row.gif",
        upperBackPath + "Lever-Reverse-T-Bar-Row.gif",
        upperBackPath + "Lever-T-bar-Row.gif",
        upperBackPath + "Plate-Loaded-Seated-Row.gif",
        upperBackPath + "Reverse-Grip-Barbell-Row.gif",
        upperBackPath + "Smith-Machine-Bent-Over-Row.gif",
      ],
    },
    // Add more items as needed
  ];
  return <Dropdown items={dropdownItems} />;
};

export default BackContent;
