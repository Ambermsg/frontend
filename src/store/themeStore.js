import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme:
    (typeof window !== "undefined" && localStorage.getItem("theme")) || "dark",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
      document.documentElement.style.setProperty(
        "--theme-bg",
        newTheme === "dark" ? "#2c2c2c" : "#646464"
      );
      document.documentElement.style.setProperty(
        "--theme-text",
        newTheme === "dark" ? "#ffffff" : "#000000"
      );
      document.documentElement.style.setProperty(
        "--theme-contrast",
        newTheme === "dark" ? "#e28553" : "aqua"
      );
      return { theme: newTheme };
    }),
}));
