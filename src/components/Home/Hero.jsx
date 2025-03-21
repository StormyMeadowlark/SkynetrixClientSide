import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeProvider";
import DarkLogo from "../../assets/LogoDarkBackground.png";
import LightLogo from "../../assets/LogoLightBackground.png";

const HeroSection = () => {
  const { theme } = useTheme(); // Get theme state from context

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Logo that switches based on theme */}
      <img
        src={theme === "dark" ? DarkLogo : LightLogo}
        alt="Skynetrix Logo"
        className="w-64 md:w-96 mb-6 transition-all duration-300"
        loading="lazy"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-light-purple dark:text-light-teal">
        Shift Gears into the Future with AI-Driven Auto Solutions
      </h1>
      <p className="text-lg md:text-2xl max-w-3xl mx-auto mt-4">
        Skynetrix helps independent auto shops <strong>retain customers, track
        service history, and boost revenue.</strong>
      </p>

      <Link
        to="/founders-access"
        className="mt-6 px-10 py-4 font-bold text-lg rounded-full animate-pulse hover:animate-hoverGlow hover:shadow-neon-teal transition duration-300"
      >
        Join the Founder&apos;s Club
      </Link>
    </section>
  );
};

export default HeroSection;
