"use client";
import React, { useState, useMemo } from "react";
import Item from "./item.js";

function ItemList({ items = [] }) {
  // Provide default empty array for items prop
  const [sortBy, setSortBy] = useState("name");
  const [isGrouped, setIsGrouped] = useState(false);

  const processedItems = useMemo(() => {
    if (isGrouped) {
      // Create a new grouped object without mutating the original items
      const grouped = items.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category] = [...acc[item.category], item];
        return acc;
      }, {});

      // Sort items within each category
      Object.keys(grouped).forEach((category) => {
        grouped[category] = [...grouped[category]].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      });

      return Object.entries(grouped).sort(([catA], [catB]) =>
        catA.localeCompare(catB)
      );
    } else {
      // Create a new sorted array without mutating the original items
      return [...items].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else {
          return a.category.localeCompare(b.category);
        }
      });
    }
  }, [items, sortBy, isGrouped]);

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => {
            setSortBy("name");
            setIsGrouped(false);
          }}
          className={`px-4 py-2 rounded ${
            sortBy === "name" && !isGrouped
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => {
            setSortBy("category");
            setIsGrouped(false);
          }}
          className={`px-4 py-2 rounded ${
            sortBy === "category" && !isGrouped
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setIsGrouped(true)}
          className={`px-4 py-2 rounded ${
            isGrouped ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Group by Category
        </button>
      </div>
      <ul className="space-y-4">
        {isGrouped
          ? processedItems.map(([category, categoryItems]) => (
              <li key={category} className="mb-6">
                <h2 className="text-xl font-bold capitalize mb-2">
                  {category}
                </h2>
                <ul className="space-y-2 pl-4">
                  {categoryItems.map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </ul>
              </li>
            ))
          : processedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
      </ul>
    </div>
  );
}

export default ItemList;
