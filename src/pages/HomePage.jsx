import HeroSection from "../components/Home/Hero";
import AboutSection from "../components/Home/About";
import FeaturesSection from "../components/Home/Features";
import ShowcaseSection from "../components/Home/Showcase";
import CallToAction from "../components/Home/CallToAction";
import useSEO from "../hooks/useSEO";

const HomePage = () => {
  useSEO({
    title: "AI Tools for Auto Shops",
    description:
      "Skynetrix helps independent auto shops retain customers, track service history, and boost revenue with AI-driven tools.",
    keywords: "auto repair CRM, AI for shops, customer retention software, auto shop automation",
    image: "/images/og-homepage.jpg", // <-- Update with actual path
    url: "https://skynetrix.tech/",
    type: "website"
  });

  return (
    <main className="homepage bg-light-primary-bg dark:bg-dark-primary-bg text-black dark:text-white">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ShowcaseSection />
      <CallToAction />
    </main>
  );
};

export default HomePage;

