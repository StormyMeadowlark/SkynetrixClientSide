import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider";
import useSEO from "../hooks/useSEO";
import DarkLogo from "../assets/LogoDarkBackground.png";
import LightLogo from "../assets/LogoLightBackground.png";
//import FoundersPerksImage from "../assets/founders-perks.png"; // Replace with actual image
//import DemoVideo from "../assets/founders-demo.mp4"; // Replace with actual video

const FoundersAccess = () => {
  const { theme } = useTheme();

  useSEO({
    title: "Founder's Access",
    description:
      "Get early access to Skynetrix. Founding members unlock exclusive features, influence development, and receive lifetime perks.",
    image: "/og-founders-access.png",
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
            Welcome to Founder's Access
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto">
            Be the first to shape the future of automotive tech with Skynetrix.
            Founding members get early access, influence roadmap decisions, and
            receive exclusive lifetime perks.
          </p>
          <Link
            to="/founding-members-registration"
            className="mt-6 inline-block px-10 py-4 rounded-full text-white bg-light-purple dark:bg-light-teal font-bold hover:shadow-neon-teal transition duration-300"
          >
            Become a Founding Member
          </Link>
        </section>

        {/* Video Demo */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-light-purple dark:text-light-teal mb-4">
            Sneak Peek of Skynetrix
          </h2>
          <video
            controls
            className="w-full rounded-2xl shadow-lg"
            poster="/video-thumbnail.jpg"
          >
            <source src="#" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Perks Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-light-purple dark:text-light-teal mb-6">
            Founder's Level Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="text-lg space-y-4 list-disc pl-6">
              <li>
                <strong>Lifetime discount</strong> on all Skynetrix
                microservices
              </li>
              <li>
                <strong>Priority support</strong> and onboarding
              </li>
              <li>
                <strong>Beta access</strong> to new features before public
                release
              </li>
              <li>
                Influence over the <strong>product roadmap</strong>
              </li>
              <li>
                Exclusive <strong>community & mastermind</strong> invites
              </li>
              <li>
                <strong>Early API access</strong> + integration help
              </li>
            </ul>
            <img
              src="#"
              alt="Founders Perks"
              className="rounded-2xl shadow-md"
              loading="lazy"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-2">
            Don’t miss your chance to shape the future of shop software.
          </h2>
          <Link
            to="/founding-members-registration"
            className="mt-4 inline-block px-10 py-4 rounded-full text-white bg-light-purple dark:bg-light-teal font-bold hover:shadow-neon-teal transition duration-300"
          >
            Claim Your Founder's Access
          </Link>
        </section>
      </div>
    </main>
  );
};

export default FoundersAccess;
