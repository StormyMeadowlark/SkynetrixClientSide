import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultTheme = storedTheme || (prefersDark ? "dark" : "light");

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <button
      onClick={toggleTheme}
      className="text-black dark:text-white transition duration-300 hover:font-black"
    >
      {theme === "light" ? "Activate Dark Mode" : "Activate Light Mode"}
    </button>
  );
};

export default ThemeToggle;
