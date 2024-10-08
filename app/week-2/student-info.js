import React from "react";
import Link from "next/link";

const StudentInfo = () => {
  const name = "Chenghao Wu";
  const githubUrl = "https://github.com/CarofCarl/cprg306-assignments";

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow text-white">
      <h2 className="text-2xl font-bold mb-4">Student Information</h2>
      <p className="mb-2">
        <span className="font-semibold">Name: </span>
        {name}
      </p>
      <p>
        <span className="font-semibold">GitHub: </span>
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-100 underline"
        >
          {githubUrl}
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
