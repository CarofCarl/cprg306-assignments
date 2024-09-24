import React from "react";
import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
    </main>
  );
}

export default function Week2Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Week 2 Assignment</h1>
      <StudentInfo />
    </div>
  );
}