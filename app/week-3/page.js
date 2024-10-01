import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">购物清单</h1>
      <ItemList />
    </main>
  );
};

export default Page;
