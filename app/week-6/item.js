import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow text-white">
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
