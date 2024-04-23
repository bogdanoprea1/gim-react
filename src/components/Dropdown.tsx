import React, { useState } from "react";
import FullScreenGif from "./FullScreenGif";

function extractGifNameFromPath(path: string): string {
  const parts = path.split("/");
  const fileName = parts.pop() || "";
  return fileName.replace(/\.\w+$/, "");
}

const Dropdown: React.FC<IDropdownProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<IDropdownItem | null>(null);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = parseInt(event.target.value, 10);
    const item = items.find((item) => item.id === id) || null;
    setSelectedItem(item);
  };

  return (
    <div className="dropdown">
      <select
        className="form-select sticky-select"
        onChange={handleSelect}
        value={selectedItem?.id || ""}
      >
        <option value="">Select an item</option>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
      {selectedItem && (
        <div className="mt-3 scrollable-gifs">
          {selectedItem.gifs.map((gif, index) => (
            <figure key={index} className="figure-custom">
              <figcaption className="figure-caption figure-caption-centered">
                {extractGifNameFromPath(gif)}
              </figcaption>
              <FullScreenGif
                src={gif}
                alt={`GIF ${index}`}
                className="img-responsive img-thumbnail"
              />
            </figure>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
