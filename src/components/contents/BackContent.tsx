import React from "react";
import Dropdown from "../Dropdown"; // Import the Dropdown component

const BackContent = () => {
  const latsPath = "/gim-react/assets/gifs/back/Lats/";
  const lowerBackPath = "/gim-react/assets/gifs/back/Lower_Back/";
  const middleBackPath = "/gim-react/assets/gifs/back/Middle_Back/";
  const upperBackPath = "/gim-react/assets/gifs/back/Upper_Back/";

  const dropdownItems = [
    { id: 1, label: "Lats", gifs: ["https://example.com/gif1.gif"] },
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
      gifs: ["https://example.com/gif2.gif", "https://example.com/gif3.gif"],
    },
    {
      id: 4,
      label: "Upper Back",
      gifs: ["https://example.com/gif2.gif", "https://example.com/gif3.gif"],
    },
    // Add more items as needed
  ];
  return <Dropdown items={dropdownItems} />;
};

export default BackContent;
