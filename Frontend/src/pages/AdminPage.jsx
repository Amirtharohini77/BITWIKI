// src/pages/AdminPage.jsx
import React, { useState } from "react";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    console.log("Uploading:", title, file);
    // You can use Axios here to send data to backend
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload Lecture Material</h2>
      <form onSubmit={handleUpload}>
        <input
          type="text"
          placeholder="Title"
          className="border p-2 mb-2 block"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          className="border p-2 mb-2 block"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="bg-purple-600 text-white px-4 py-2">
          Upload
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
