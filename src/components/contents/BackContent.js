import { jsx as _jsx } from "react/jsx-runtime";
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
            gifs: ["https://example.com/gif2.gif", "https://example.com/gif3.gif"],
        },
        {
            id: 4,
            label: "Upper Back",
            gifs: ["https://example.com/gif2.gif", "https://example.com/gif3.gif"],
        },
        // Add more items as needed
    ];
    return _jsx(Dropdown, { items: dropdownItems });
};
export default BackContent;
