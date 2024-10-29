"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

const Page = () => {
  // Initialize state with items from JSON
  const [items, setItems] = useState(itemsData);

  // Event handler to add new items
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <main className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Shopping List</h2>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
};

export default Page;
