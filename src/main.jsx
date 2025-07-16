// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
import { BrowserRouter } from "react-router-dom";

// 🔁 若是從 404.html 轉導而來，回到原始路由
const redirectPath = sessionStorage.getItem("redirect-path");
if (redirectPath) {
  sessionStorage.removeItem("redirect-path");
  window.history.replaceState(null, "", redirectPath);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
