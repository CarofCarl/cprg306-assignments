"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

const Page = () => {
  // Initialize state with items from JSON
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Event handler to add new items
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // Event handler for item selection
  const handleItemSelect = (item) => {
    // Clean up the item name by:
    // 1. Splitting on ',' and taking the first part
    // 2. Removing quantities and emojis
    // 3. Trimming whitespace
    const cleanName = item.name
      .split(",")[0]
      .replace(/[0-9]/g, "")
      .replace(
        /[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g,
        ""
      )
      .trim();

    setSelectedItemName(cleanName);
  };

  return (
    <main className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Shopping List</h2>
      <div className="flex gap-8">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
};

export default Page;
