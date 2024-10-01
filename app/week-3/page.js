import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Shopping List</h2>
      <ItemList />
    </main>
  );
};

export default Page;
