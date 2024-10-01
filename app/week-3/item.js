import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border border-gray-300 p-4 mb-2 rounded-lg shadow-sm bg-white">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-sm text-gray-600">Qty: {quantity}</span>
      </div>
      <div className="text-sm text-gray-500 mt-1">{category}</div>
    </li>
  );
};

export default Item;
