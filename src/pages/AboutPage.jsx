import useSEO from "../hooks/useSEO";
import { useTheme } from "../context/themeProvider";

const AboutPage = () => {
  const { theme } = useTheme();

  useSEO({
    title: "About Skynetrix",
    description:
      "Learn how Skynetrix empowers independent auto shops with customer retention, automation, and shop insights.",
    keywords:
      "about Skynetrix, automotive SaaS, shop retention software, auto repair marketing tools",
    image: "/assets/about-preview.jpg",
  });

  return (
    <main className="bg-light-primary-bg dark:bg-dark-primary-bg text-black dark:text-white pt-16">
      <section className="container mx-auto text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-light-purple dark:text-light-teal mb-6 font">
          The Story Behind Skynetrix
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Skynetrix was born out of one mission: to help independent auto shops
          and small dealerships **grow, retain customers, and streamline operations**.
          What started as backend tools evolved into a full customer engagement
          platform built for the real-world needs of shop owners.
        </p>

        {/* Video Section */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg mb-16">
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            title="About Skynetrix"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {["skynetrix-1.jpg", "skynetrix-2.jpg", "skynetrix-3.jpg"].map(
            (img, idx) => (
              <img
                key={idx}
                src={`/assets/${img}`}
                alt={`Skynetrix showcase ${idx + 1}`}
                className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            )
          )}
        </div>

        {/* Core Values Section */}
        <div className="bg-light-teal dark:bg-dark-purple p-10 rounded-2xl shadow-xl text-white max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              "Customization over cookie-cutter.",
              "Automation with human understanding.",
              "Design that reflects your brand.",
              "Data-driven retention strategies.",
              "Tech that feels intuitive.",
              "Service that feels personal.",
            ].map((value, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-xl">🚗</span> {value}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
