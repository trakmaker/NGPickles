import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";  // ✅ Ensure CSS is correctly imported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
