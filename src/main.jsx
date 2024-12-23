import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import "./index.css";
import App from "./pages/App.jsx";
import LogIn from "./pages/LogIn.jsx";
import Register from "./pages/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HelloTor from "./pages/HelloTor.jsx";

const RootForTheme = () => {
  useEffect(() => {
    const currentTheme =
      (typeof window !== "undefined" && localStorage.getItem("theme")) ||
      "dark";

    document.documentElement.style.setProperty(
      "--theme-bg",
      currentTheme === "dark" ? "#2c2c2c" : "#646464"
    );
    document.documentElement.style.setProperty(
      "--theme-text",
      currentTheme === "dark" ? "#ffffff" : "#000000"
    );
    document.documentElement.style.setProperty(
      "--theme-contrast",
      currentTheme === "dark" ? "#e28553" : "aqua"
    );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tor" element={<HelloTor />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<RootForTheme />);
