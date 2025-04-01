import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider";
import useSEO from "../hooks/useSEO";
import DarkLogo from "../assets/LogoDarkBackground.png";
import LightLogo from "../assets/LogoLightBackground.png";

const FullThrottleAccess = () => {
  const { theme } = useTheme();

  useSEO({
    title: "Full Throttle Access",
    description:
      "Skynetrix Full Throttle Access gives serious shops everything—real-time performance tools, integrations, and elite visibility. Push your growth pedal to the floor.",
    image: "/og-full-throttle.png",
  });

  return (
    <main className="min-h-screen bg-light-primary-bg dark:bg-dark-primary-bg text-black dark:text-white px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <img
            src={theme === "dark" ? DarkLogo : LightLogo}
            alt="Skynetrix Logo"
            className="w-40 mx-auto mb-6"
            loading="lazy"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-light-purple dark:text-light-teal">
            Full Throttle Access
          </h1>
          <p className="my-8 text-lg md:text-2xl max-w-3xl mx-auto">
            For shops ready to max out their potential. Access every feature,
            every insight, and total control over your customer experience.
          </p>
          <Link
            to="/full-throttle-registration"
            className="mt-6 px-10 py-4 font-bold text-lg rounded-full bg-white dark:bg-purple animate-pulse hover:animate-hoverGlow hover:shadow-neon-teal transition duration-300"
          >
            Apply for Full Throttle Access
          </Link>
        </section>

        {/* Perks Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-light-purple dark:text-light-teal mb-6">
            What You Get with Full Throttle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="text-lg space-y-4 list-disc pl-6">
              <li>
                <strong>All Apex perks</strong> — plus more
              </li>
              <li>
                <strong>Dynamic branding packages</strong> powered by Stormy
                Meadowlark
              </li>
              <li>
                <strong>Dedicated growth strategist</strong> on your account
              </li>
              <li>
                <strong>Access to experimental features</strong> + AI roadmap
              </li>
              <li>
                <strong>Quarterly business audits</strong> and recommendations
              </li>
              <li>
                <strong>VIP launch support</strong> for all major marketing
                pushes
              </li>
            </ul>
            <img
              src="#"
              alt="Full Throttle Visual"
              className="rounded-2xl shadow-md"
              loading="lazy"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8">
            Want the most powerful version of Skynetrix? Let’s go full throttle.
          </h2>
          <Link
            to="/full-throttle-registration"
            className="mt-6 px-10 py-4 font-bold text-lg rounded-full bg-white dark:bg-purple animate-pulse hover:animate-hoverGlow hover:shadow-neon-teal transition duration-300"
          >
            Start Full Throttle Access
          </Link>
        </section>
      </div>
    </main>
  );
};

export default FullThrottleAccess;
