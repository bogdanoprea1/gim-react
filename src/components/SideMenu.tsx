// import React, { useState } from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";

// // Define the type for the menu items

// const iconPath = "/assets/icons/";

// const SideMenu: React.FC = () => {
//   const [activePanel, setActivePanel] = useState<React.ReactNode>(null);

//   //   const menuItems: MenuItem[] = [
//   //     { id: 1, imgSrc: iconPath + "back.png", component: <PanelOne /> },
//   //     { id: 2, imgSrc: iconPath + "biceps.png", component: <PanelTwo /> },
//   //     { id: 3, imgSrc: iconPath + "calves.png", component: <PanelThree /> },
//   //   ];

//   const handleItemClick = (component: React.ReactNode) => {
//     setActivePanel(component);
//   };

//   return; //(
//   // <Container>
//   //   <Col
//   //     xs={2}
//   //     className="d-flex flex-column align-items-center bg-light min-vh-100"
//   //   >
//   //     <div className="d-flex flex-column align-items-center">
//   //       {menuItems.map((item) => (
//   //         <Image
//   //           key={item.id}
//   //           src={item.imgSrc}
//   //           roundedCircle
//   //           style={{
//   //             width: "50px",
//   //             height: "50px",
//   //             cursor: "pointer",
//   //             margin: "10px",
//   //           }}
//   //           onClick={() => handleItemClick(item.component)}
//   //         />
//   //       ))}
//   //     </div>
//   //   </Col>
//   //   <Col>{activePanel}</Col>
//   // </Container>
//   // );
// };

// const PanelOne: React.FC = () => <div>Panel One Content</div>;

// const PanelTwo: React.FC = () => <div>Panel Two Content</div>;

// const PanelThree: React.FC = () => <div>Panel Three Content</div>;

// export default SideMenu;
