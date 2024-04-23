import React, { useState } from "react";
import Menu from "./components/Menu";
import BackContent from "./components/contents/BackContent";
import BicepsContent from "./components/contents/BicepsContent";
import CalvesContent from "./components/contents/CalvesContent";
import ChestContent from "./components/contents/ChestContent";
import GlutesContent from "./components/contents/GlutesContent";
import LegsContent from "./components/contents/LegsContent";
import ShouldersContent from "./components/contents/ShouldersContent";
import TricepsContent from "./components/contents/TricepsContent";

const App: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string>("");
  const iconPath = "/gim-react/assets/icons/";
  const menuItems: MenuItem[] = [
    {
      id: 1,
      imgSrc: iconPath + "back.png",
      href: "v-pills-back",
      onClick: setActivePanel,
      activePanel: activePanel,
      content: <BackContent />,
      title: "Back",
    },
    {
      id: 2,
      imgSrc: iconPath + "biceps.png",
      href: "v-pills-biceps",
      onClick: setActivePanel,
      activePanel: activePanel,
      content: <BicepsContent />,
      title: "Biceps",
    },
    {
      id: 3,
      imgSrc: iconPath + "calves.png",
      href: "v-pills-calves",
      onClick: setActivePanel,
      activePanel: activePanel,
      content: <CalvesContent />,
      title: "Calves",
    },
    {
      id: 4,
      imgSrc: iconPath + "chest.png",
      href: "v-pills-chest",
      onClick: setActivePanel,
      activePanel: activePanel,
      content: <ChestContent />,
      title: "Chest",
    },
    {
      id: 5,
      imgSrc: iconPath + "glutes.png",
      href: "v-pills-glutes",
      onClick: setActivePanel,
      activePanel: activePanel,
      content: <GlutesContent />,
      title: "Glites",
    },
    {
      id: 6,
      imgSrc: iconPath + "legs.png",
      href: "v-pills-legs",
      onClick: setActivePanel,
      activePanel: activePanel,
      content: <LegsContent />,
      title: "Legs",
    },
    {
      id: 7,
      imgSrc: iconPath + "shoulders.png",
      href: "v-pills-shoulders",
      onClick: setActivePanel,
      activePanel: activePanel,
      content: <ShouldersContent />,
      title: "Shoulders",
    },
    {
      id: 8,
      imgSrc: iconPath + "triceps.png",
      href: "v-pills-triceps",
      onClick: setActivePanel,
      activePanel: activePanel,
      content: <TricepsContent />,
      title: "Triceps",
    },
  ];
  return (
    <div className="myrow-content">
      <div className="mymenu-content">
        <Menu menu={menuItems}></Menu>
      </div>
      <div className="mytab-content">
        <div className="tab-content" id="v-pills-tabContent">
          {menuItems.map((item) => (
            <div
              className={
                "tab-pane fade" +
                (activePanel === item.href ? " show active" : "")
              }
              id={item.href}
              key={item.id}
              role="tabpanel"
              aria-labelledby={item.href + "-tab"}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
