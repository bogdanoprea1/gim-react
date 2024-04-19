import React from "react";
interface MenuProps {
  menu: MenuItem[];
}
const Menu: React.FC<MenuProps> = ({ menu }) => {
  return (
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li className="nav-item">
        {menu.map((item) => (
          <a
            className={`nav-link rounded-0 ${
              item.activePanel === item.href ? "tabActive" : ""
            }`}
            key={item.id}
            id={item.href + "-tab"}
            data-toggle="pill"
            href={"#" + item.href}
            role="tab"
            aria-controls={item.href}
            aria-selected="false"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default anchor link behavior
              item.onClick(item.href); // Trigger the onClick function passed from the parent
            }}
            style={{ borderRadius: "none!important" }}
          >
            <img
              src={item.imgSrc}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20%",
                objectFit: "cover",
              }}
            ></img>
          </a>
        ))}
      </li>
    </ul>
  );
};

export default Menu;
