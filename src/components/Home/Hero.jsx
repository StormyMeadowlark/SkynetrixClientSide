import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeProvider";
import DarkLogo from "../../assets/LogoDarkBackground.png";
import LightLogo from "../../assets/LogoLightBackground.png";
import HeroBackground from "./HeroBackground";
// import AnimatedDashboard from "../../assets/dashboard-animation.webm"; // Add your video if available

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1B022F] to-[#2A054A] text-white">
      {/* Star field */}
      <HeroBackground />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[length:20px_20px] opacity-20" />
      </div>

      {/* Logo */}
      <img
        src={theme === "dark" ? DarkLogo : DarkLogo}
        alt="Skynetrix Logo"
        className="w-52 md:w-80 mb-4 z-10 transition-all duration-300"
        loading="lazy"
      />

      {/* Headline */}
      <h1 className="text-3xl md:text-5xl font-extrabold font-orbitron z-10 leading-tight">
        Built for {' '} 
        <span className="text-light-teal dark:text-light-purple">
          independent {' '} 
        </span>
        <span className="text-dark dark:text-white">
          shops that {' '} 
        </span>
        <br />
        <span className="text-light-teal dark:text-light-purple">
        do more {' '} 
        </span>
        <span className="text-dark dark:text-white">
        than just fix cars.
        </span>
        <br />
      </h1>

      {/* Subtext */}
      <p className="text-base md:text-xl max-w-2xl mx-auto my-2 z-10 font-exo2 text-gray-200 dark:text-gray-300">
        Skynetrix is the all-in-one platform powering automotive sales, service,
        and customer retention—with AI, automation, and complete customization
        built in.
      </p>

      {/* CTA */}
      <Link
        to="/founders-access"
        className="skynetrix-octagon z-10 mt-4"
      >
        Join Founder's Club
      </Link>

      {/* Optional video preview */}
      <div className="relative mt-10 w-full max-w-5xl aspect-video z-10 rounded-xl overflow-hidden shadow-xl border border-purple-800">
        <video
          src="#" // Replace this path
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
