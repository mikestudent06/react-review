import React from "react";
import Todo from "./components/Todo";
import Array from "./components/Array";
import ArrayAPI from "./components/ArrayAPI";
import Layout from "./components/Layout";
import ImageUploadForm from "./components/ImageUploadForm";
// import Form from "./components/form-review/Form";
import Hooks from "./components/topics/react-hooks/Hooks";
import StopWatchApp from "./components/topics/react-hooks/StopWatchApp";
import TypingTracker from "./components/topics/react-hooks/TypingTracker";
import PrimeNumberChecker from "./components/topics/react-hooks/PrimeNumberChecker";

const App = () => {
  return (
    <div>
      {/* <Todo/> */}
      {/* <ArrayAPI/> */}
      {/* <Layout /> */}
      {/* <ImageUploadForm /> */}
      {/* <StopWatchApp/> */}
      {/* <Hooks/> */}
      {/* <TypingTracker /> */}
      <PrimeNumberChecker />
    </div>
  );
};

export default App;
