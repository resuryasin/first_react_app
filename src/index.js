import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NotFound from "./features/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelloWorld from "./features/HelloWorld";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<HelloWorld />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
