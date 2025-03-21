import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie"; // Using cookies instead of localStorage

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getStoredTheme = () => {
    const storedTheme = Cookies.get("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");

    // Store the theme in cookies for persistence
    Cookies.set("theme", theme, { expires: 30 });

    // Sync theme when system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e) => setTheme(e.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for easy access
export const useTheme = () => useContext(ThemeContext);
