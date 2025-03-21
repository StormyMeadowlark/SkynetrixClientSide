import { useTheme } from "../../context/themeProvider"; // <-- this one

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="hover:font-bold text-black dark:text-white transition"
    >
      {theme === "light" ? "Activate Dark Mode" : "Activate Light Mode"}
    </button>
  );
};

export default ThemeToggle;
