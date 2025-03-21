import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/themeProvider"; // Import useTheme Hook
import DarkBackgroundLogo from "../../assets/LogoDarkBackground.png";
import LightBackgroundLogo from "../../assets/LogoLightBackground.png";

const Logo = () => {
  const { theme } = useTheme(); // Get theme from context
  const [logo, setLogo] = useState(theme === "dark" ? DarkBackgroundLogo : LightBackgroundLogo);

  // Update the logo dynamically when the theme changes
  useEffect(() => {
    setLogo(theme === "dark" ? DarkBackgroundLogo : LightBackgroundLogo);
  }, [theme]);

  return (
    <Link to="/" className="flex items-center">
      <img
        src={logo} // Uses state variable that updates when theme changes
        alt="Skynetrix Logo"
        className="h-12 w-auto transition-all duration-300"
      />
    </Link>
  );
};

export default Logo;


