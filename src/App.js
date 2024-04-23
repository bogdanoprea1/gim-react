import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Menu from "./components/Menu";
import BackContent from "./components/contents/BackContent";
import BicepsContent from "./components/contents/BicepsContent";
import CalvesContent from "./components/contents/CalvesContent";
import ChestContent from "./components/contents/ChestContent";
import GlutesContent from "./components/contents/GlutesContent";
import LegsContent from "./components/contents/LegsContent";
import ShouldersContent from "./components/contents/ShouldersContent";
import TricepsContent from "./components/contents/TricepsContent";
const App = () => {
    const [activePanel, setActivePanel] = useState("");
    const iconPath = "/gim-react/assets/icons/";
    const menuItems = [
        {
            id: 1,
            imgSrc: iconPath + "back.png",
            href: "v-pills-back",
            onClick: setActivePanel,
            activePanel: activePanel,
            content: _jsx(BackContent, {}),
            title: "Back",
        },
        {
            id: 2,
            imgSrc: iconPath + "biceps.png",
            href: "v-pills-biceps",
            onClick: setActivePanel,
            activePanel: activePanel,
            content: _jsx(BicepsContent, {}),
            title: "Biceps",
        },
        {
            id: 3,
            imgSrc: iconPath + "calves.png",
            href: "v-pills-calves",
            onClick: setActivePanel,
            activePanel: activePanel,
            content: _jsx(CalvesContent, {}),
            title: "Calves",
        },
        {
            id: 4,
            imgSrc: iconPath + "chest.png",
            href: "v-pills-chest",
            onClick: setActivePanel,
            activePanel: activePanel,
            content: _jsx(ChestContent, {}),
            title: "Chest",
        },
        {
            id: 5,
            imgSrc: iconPath + "glutes.png",
            href: "v-pills-glutes",
            onClick: setActivePanel,
            activePanel: activePanel,
            content: _jsx(GlutesContent, {}),
            title: "Glites",
        },
        {
            id: 6,
            imgSrc: iconPath + "legs.png",
            href: "v-pills-legs",
            onClick: setActivePanel,
            activePanel: activePanel,
            content: _jsx(LegsContent, {}),
            title: "Legs",
        },
        {
            id: 7,
            imgSrc: iconPath + "shoulders.png",
            href: "v-pills-shoulders",
            onClick: setActivePanel,
            activePanel: activePanel,
            content: _jsx(ShouldersContent, {}),
            title: "Shoulders",
        },
        {
            id: 8,
            imgSrc: iconPath + "triceps.png",
            href: "v-pills-triceps",
            onClick: setActivePanel,
            activePanel: activePanel,
            content: _jsx(TricepsContent, {}),
            title: "Triceps",
        },
    ];
    return (_jsxs("div", { className: "myrow-content", children: [_jsx("div", { className: "mymenu-content", children: _jsx(Menu, { menu: menuItems }) }), _jsx("div", { className: "mytab-content", children: _jsx("div", { className: "tab-content", id: "v-pills-tabContent", children: menuItems.map((item) => (_jsx("div", { className: "tab-pane fade" +
                            (activePanel === item.href ? " show active" : ""), id: item.href, role: "tabpanel", "aria-labelledby": item.href + "-tab", children: item.content }, item.id))) }) })] }));
};
export default App;
