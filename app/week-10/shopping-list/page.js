"use client";
import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";

const Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]); // Initialize with empty array
  const [selectedItemName, setSelectedItemName] = useState("");

  // Create async function to fetch shopping list items
  const loadItems = async () => {
    try {
      const items = await getItems(user.uid);
      setItems(items);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  // Use useEffect to fetch data when component mounts
  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]); // Reload when user changes

  // Update handleAddItem function to use Firestore
  const handleAddItem = async (item) => {
    try {
      const docId = await addItem(user.uid, item);
      setItems((prevItems) => [...prevItems, { ...item, id: docId }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
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

  // If user is not logged in, show prompt message
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

  // If user is logged in, show shopping list
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
