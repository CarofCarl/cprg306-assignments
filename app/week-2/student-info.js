import React from "react";
import Link from "next/link";

const StudentInfo = () => {
  const name = "Chenghao Wu";
  const githubUrl = "https://github.com/CarofCarl/cprg306-assignments";

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Student Information</h2>
      <p className="mb-2">
        <span className="font-semibold">Name:</span>
        {name}
      </p>
      <p>
        <span className="font-semibold">GitHub：</span>
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          {githubUrl}
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
