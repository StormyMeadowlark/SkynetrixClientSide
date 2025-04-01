import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider";
import useSEO from "../hooks/useSEO";
import DarkLogo from "../assets/LogoDarkBackground.png";
import LightLogo from "../assets/LogoLightBackground.png";
// import ApexDemo from "../assets/apex-demo.mp4";
// import ApexImage from "../assets/apex-perks.png";

const ApexAccess = () => {
  const { theme } = useTheme();

  useSEO({
    title: "Apex Access",
    description:
      "Apex Access is for the elite—automotive innovators ready to go beyond templates. Exclusive customization, insight, and control await.",
    image: "/og-apex-access.png",
  });

  return (
    <main className="min-h-screen bg-light-primary-bg dark:bg-dark-primary-bg text-black dark:text-white px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero */}
        <section className="text-center">
          <img
            src={theme === "dark" ? DarkLogo : LightLogo}
            alt="Skynetrix Logo"
            className="w-40 mx-auto mb-6"
            loading="lazy"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-light-purple dark:text-light-teal">
            Apex Access: The Ultimate Tier
          </h1>
          <p className="my-8 text-lg md:text-2xl max-w-3xl mx-auto">
            For shops and dealerships seeking **unmatched customization**,
            **dedicated partnerships**, and **elite-level insights**, Apex
            Access is the path to the top of the industry.
          </p>
          <Link
            to="/apex-registration"
            className="mt-6 px-10 py-4 font-bold text-lg rounded-full bg-white dark:bg-purple animate-pulse hover:animate-hoverGlow hover:shadow-neon-teal transition duration-300"
          >
            Apply for Apex Access
          </Link>
        </section>

        {/* Video (optional) */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-light-purple dark:text-light-teal mb-4">
            What Apex Unlocks
          </h2>
          <video
            controls
            className="w-full rounded-2xl shadow-lg"
            poster="/apex-thumbnail.jpg"
          >
            <source src="#" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-3xl font-bold text-center text-light-purple dark:text-light-teal mb-6">
            Apex Access Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="text-lg space-y-4 list-disc pl-6">
              <li>
                <strong>Custom dashboards</strong> designed around your shop
              </li>
              <li>
                <strong>Private API tier</strong> with advanced endpoints
              </li>
              <li>
                <strong>Strategy sessions</strong> with Stormy Meadowlark
              </li>
              <li>
                Access to <strong>exclusive tools</strong> not in base Skynetrix
              </li>
              <li>
                <strong>VIP support</strong> and direct development feedback
              </li>
              <li>
                Monthly reporting with <strong>growth insights</strong>
              </li>
            </ul>
            <img
              src="#"
              alt="Apex Perks"
              className="rounded-2xl shadow-md"
              loading="lazy"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8">
            This isn’t for everyone — and that’s the point.
          </h2>
          <Link
            to="/apex-registration"
            className="mt-6 px-10 py-4 font-bold text-lg rounded-full bg-white dark:bg-purple animate-pulse hover:animate-hoverGlow hover:shadow-neon-teal transition duration-300"
          >
            Join the Apex Tier
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ApexAccess;
