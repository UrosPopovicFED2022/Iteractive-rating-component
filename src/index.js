import React from "react";
import ReactDOM from "react-dom/client";
import Apps from "./Apps";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return <Apps />;
};

root.render(<App />);
