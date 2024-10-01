import React from "react";
import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Shopping List</h2>
      <StudentInfo />
    </main>
  );
}
