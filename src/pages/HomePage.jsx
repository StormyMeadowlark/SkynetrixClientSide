import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkBackgroundlogo from "../assets/LogoDarkBackground.png"; // Dark mode logo
import LightBackgroundlogo from "../assets/LogoLightBackground.png"; // Light mode logo

const HomePage = () => {
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
    <div className="homepage bg-light-primary-bg dark:bg-dark-primary-bg text-black dark:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Logo that switches based on theme */}
        <img
          src={theme === "dark" ? DarkBackgroundlogo : LightBackgroundlogo}
          alt="Skynetrix Logo"
          className="w-64 md:w-96 mb-6 transition-all duration-300"
        />

        {/* Call to Action Button */}
        <Link
          to="/founders-access"
          className="homepage-button px-10 py-4 font-bold text-lg rounded-full hover:shadow-neon-teal transition duration-300 animate-pulse hover:animate-none"
        >
          Experience Founders Access
        </Link>
      </section>

      {/* About Skynetrix Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-light-purple dark:text-light-teal mb-6">
            What is Skynetrix?
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Skynetrix is a **customer engagement and service retention
            platform** designed for **independent auto shops and small
            dealerships**. It provides **AI-powered recommendations, automated
            follow-ups, and revenue insights** to keep your shop running at full
            speed.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-light-teal dark:bg-dark-purple text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">
            How Skynetrix Helps Your Shop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Automated Customer Follow-Ups",
                description:
                  "Send service reminders, follow-ups, and offers automatically to keep customers engaged.",
                icon: "/path-to-reminder-icon.png",
              },
              {
                title: "Service History & Recommendations",
                description:
                  "Let customers view past services and recommended maintenance right from their portal.",
                icon: "/path-to-history-icon.png",
              },
              {
                title: "Shop Insights & Performance Tracking",
                description:
                  "See revenue from completed jobs, track lost revenue from declined work, and find your most valuable customers.",
                icon: "/path-to-analytics-icon.png",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-light-primary-bg dark:bg-dark-primary-bg shadow-lg rounded-xl transition-transform transform hover:scale-105"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-light-purple dark:text-light-teal mb-4">
                  {feature.title}
                </h3>
                <p className="text-dark-purple dark:text-light-purple">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Showcase / Demo */}
      <section className="py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-light-purple dark:text-light-teal mb-6">
            See Skynetrix in Action
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Explore how Skynetrix enhances **shop management, customer
            retention, and service optimization**.
          </p>
          <img
            src="/path-to-dashboard-screenshot.png"
            alt="Skynetrix Dashboard"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <Link
          to="/founders-access"
          className="px-10 py-4 font-bold text-lg rounded-full bg-light-purple dark:bg-light-teal text-white hover:shadow-neon-teal transition duration-300"
        >
          Join the Founder's Club
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
