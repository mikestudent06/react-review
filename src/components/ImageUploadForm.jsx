import React, { useRef, useState } from "react";

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFiles = (files) => {
    const file = files[0];
    console.log("file", file);
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("reader", reader);
        setPreview(reader.result);
        console.log("result", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload an image file");
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      console.log("Submit image:", image);
      // You can send the image to your server here
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 p-8 bg-white rounded-lg shadow-md"
    >
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-64 h-64 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer hover:border-blue-500"
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <p className="text-gray-400">Drag & Drop or Click to Upload</p>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          accept="image/*"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ImageUploadForm;
