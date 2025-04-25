// src/pages/LecturesPage.jsx
import React from "react";

const LecturesPage = () => {
  const materials = [
    { title: "Lecture 1 - React Basics", url: "/videos/lecture1.mp4" },
    { title: "Lecture Notes PDF", url: "/pdfs/notes1.pdf" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lecture Materials</h2>
      <ul>
        {materials.map((item, index) => (
          <li key={index} className="mb-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-purple-700 underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LecturesPage;
