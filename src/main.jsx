import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import LogIn from "./pages/LogIn.jsx";
import Register from "./pages/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HelloTor from "./pages/HelloTor.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tor" element={<HelloTor />} />
    </Routes>
  </BrowserRouter>
);
