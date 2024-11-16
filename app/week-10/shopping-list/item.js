import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <div
      className="p-4 bg-gray-800 rounded-lg shadow text-white cursor-pointer hover:bg-gray-700 transition-colors"
      onClick={() => onSelect(name)}
    >
      <p className="mb-1">
        <span className="font-semibold text-2xl">{name}</span>
      </p>
      <p className="mb-1">
        <span className="font-semibold">
          Buy {quantity} in {category}
        </span>
      </p>
    </div>
  );
};

export default Item;
