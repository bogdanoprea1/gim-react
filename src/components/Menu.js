import { jsx as _jsx } from "react/jsx-runtime";
const Menu = ({ menu }) => {
    return (_jsx("ul", { className: "nav nav-pills nav-flush flex-column mb-auto text-center", children: _jsx("li", { className: "nav-item", children: menu.map((item) => (_jsx("a", { className: `nav-link rounded-0 ${item.activePanel === item.href ? "tabActive" : ""}`, id: item.href + "-tab", "data-toggle": "pill", href: "#" + item.href, role: "tab", "aria-controls": item.href, "aria-selected": "false", onClick: (e) => {
                    e.preventDefault(); // Prevent the default anchor link behavior
                    item.onClick(item.href); // Trigger the onClick function passed from the parent
                }, style: { borderRadius: "none!important" }, children: _jsx("img", { src: item.imgSrc, alt: "", style: {
                        width: "100%",
                        height: "100%",
                        borderRadius: "20%",
                        objectFit: "cover",
                    } }) }, item.id))) }) }));
};
export default Menu;
