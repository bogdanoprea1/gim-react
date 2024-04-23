import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import FullScreenGif from "./FullScreenGif";
function extractGifNameFromPath(path) {
    const parts = path.split("/");
    const fileName = parts.pop() || "";
    return fileName.replace(/\.\w+$/, "");
}
const Dropdown = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const handleSelect = (event) => {
        const id = parseInt(event.target.value, 10);
        const item = items.find((item) => item.id === id) || null;
        setSelectedItem(item);
    };
    return (_jsxs("div", { className: "dropdown", children: [_jsxs("select", { className: "form-select sticky-select", onChange: handleSelect, value: selectedItem?.id || "", children: [_jsx("option", { value: "", children: "Select an item" }), items.map((item) => (_jsx("option", { value: item.id, children: item.label }, item.id)))] }), selectedItem && (_jsx("div", { className: "mt-3 scrollable-gifs", children: selectedItem.gifs.map((gif, index) => (_jsxs("figure", { className: "figure-custom", children: [_jsx("figcaption", { className: "figure-caption figure-caption-centered", children: extractGifNameFromPath(gif) }), _jsx(FullScreenGif, { src: gif, alt: `GIF ${index}`, className: "img-responsive img-thumbnail" })] }, index))) }))] }));
};
export default Dropdown;
