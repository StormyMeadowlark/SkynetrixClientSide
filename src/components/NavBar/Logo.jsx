import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkBackgroundlogo from "../../assets/LogoDarkBackground.png"; // Dark mode logo
import LightBackgroundlogo from "../../assets/LogoLightBackground.png"; // Light mode logo

const Logo = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Link to="/" className="flex items-center">
      <img
        src={theme === "dark" ? DarkBackgroundlogo : LightBackgroundlogo}
        alt="Skynetrix Logo"
        className="h-12 w-auto transition-all duration-300"
      />
    </Link>
  );
};

export default Logo;
