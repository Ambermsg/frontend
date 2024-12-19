import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import Register from "./pages/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
