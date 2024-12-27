import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import "./index.css";
import App from "./pages/App.jsx";
import LogIn from "./pages/LogIn.jsx";
import Register from "./pages/Register.jsx";
import HelloTor from "./pages/HelloTor.jsx";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import RegisterSecond from "./pages/RegisterSecond.jsx";
import EmailConfirm from "./pages/EmailConfirm.jsx";
import AlmostDone from "./pages/AlmostDone.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const detectTorBrowser = () => {
  const userAgent = navigator.userAgent || "";

  // Check for Tor Browser User-Agent
  const isTorUserAgent = /tor browser/i.test(userAgent);

  // Check for WebRTC disabled
  const isWebRTCDisabled = !window.RTCPeerConnection;

  // Check for Canvas Fingerprinting Resistance
  const isCanvasBlocked = (() => {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.fillText("test", 10, 10);
      return canvas.toDataURL() === "data:,";
    } catch {
      return true;
    }
  })();

  // Return true if any detection methods indicate Tor usage
  return isTorUserAgent || isWebRTCDisabled || isCanvasBlocked;
};

const queryClient = new QueryClient();

const RootForTheme = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isTor = detectTorBrowser();
    if (isTor) {
      // Redirect to /tor page
      navigate("/tor");
    }

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
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/second" element={<RegisterSecond />} />
      <Route path="/register/almost" element={<AlmostDone />} />
      <Route path="/tor" element={<HelloTor />} />
      <Route path="/confirm-email" element={<EmailConfirm />} />
    </Routes>
  );
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <RootForTheme />
    </QueryClientProvider>
  </BrowserRouter>
);
