"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

const Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // 如果用户未登录,显示提示信息
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-xl mb-4">Please log in to view the shopping list.</p>
        <Link
          href="/week-9"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Login Page
        </Link>
      </div>
    );
  }

  // Event handler to add new items
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // Event handler for item selection
  const handleItemSelect = (item) => {
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

  // 如果用户已登录,显示购物清单
  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Shopping List</h2>
        <div className="flex items-center gap-4">
          <p className="text-sm">Welcome, {user.displayName}</p>
          <Link href="/week-9" className="text-blue-500 hover:text-blue-700">
            Back to Home
          </Link>
        </div>
      </div>

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
