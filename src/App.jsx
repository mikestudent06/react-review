import React from "react";
import Todo from "./components/Todo";
import Array from "./components/Array";
import ArrayAPI from "./components/ArrayAPI";
import Layout from "./components/Layout";
import ImageUploadForm from "./components/ImageUploadForm";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* <Todo/> */}
      {/* <ArrayAPI/> */}
      {/* <Layout /> */}
      <ImageUploadForm />
    </div>
  );
};

export default App;
