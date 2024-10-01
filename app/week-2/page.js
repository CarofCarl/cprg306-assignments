import React from "react";
import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Week 2 Assignment</h1>
      <h2 className="text-3xl font-bold mb-6">Shopping List</h2>
      <StudentInfo />
    </main>
  );
}