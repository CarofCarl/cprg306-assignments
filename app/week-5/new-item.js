"use client";

import React, { useState } from "react";

const NewItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="flex justify-center">
      <div className="inline-flex items-center space-x-2 p-2 bg-gray-800 rounded-lg shadow text-white">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-blue-300"
        >
          -
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-blue-300"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewItem;
