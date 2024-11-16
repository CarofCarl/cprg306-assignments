"use client";
import React, { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new item with random ID
    const newItem = {
      id: Math.random().toString(36).substr(2, 9), // Generate random ID
      name,
      quantity,
      category,
    };

    // Call the onAddItem prop with the new item
    onAddItem(newItem);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-800 rounded-lg shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item name"
            required
            className="w-full p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center">
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Category
            </option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex items-center">
          <div className="w-full inline-flex items-center justify-between p-2 bg-gray-700 rounded-lg">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-blue-300"
            >
              -
            </button>
            <span className="text-center text-white">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-blue-300"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItem;
