import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { useTheme } from "../context/themeProvider";

const PricingPage = () => {
  const { theme } = useTheme();

  useSEO({
    title: "Skynetrix Pricing Tiers",
    description:
      "Explore Skynetrix early access tiers including Founder's, Apex, and Full Throttle levels before general access begins.",
    image: "/images/og-pricing.jpg",
    url: "https://skynetrix.tech/pricing",
    type: "website",
  });

  const tiers = [
    {
      name: "Founder's Access",
      range: "1–10",
      color:
        "bg-light-purple dark:bg-light-teal dark:text-purple dark:hover:bg-teal dark:hover:text-gray animate-hoverGlow hover:animate hover:animate-pulse dark:hover:animate-none",
      perks: [
        "Lifetime discount on all microservices",
        "Direct roadmap input",
        "Exclusive community access",
        "Priority onboarding & support",
      ],
    },
    {
      name: "Apex Access",
      range: "11–25",
      color:
        "bg-dark-purple dark:bg-light-teal dark:text-purple dark:hover:bg-teal dark:hover:text-gray hover:animate hover:animate-pulse dark:hover:animate-none",
      perks: [
        "Discounted pricing for 12 months",
        "Early feature testing",
        "Community invites",
      ],
    },
    {
      name: "Full Throttle Access",
      range: "26–50",
      color:
        "bg-purple dark:bg-light-teal dark:text-purple dark:hover:bg-teal dark:hover:text-gray hover:animate hover:animate-pulse dark:hover:animate-none",
      perks: [
        "6 months discounted pricing",
        "First look at new features",
        "Eligible for public case studies",
      ],
    },
  ];

  return (
    <main className="bg-light-primary-bg dark:bg-dark-primary-bg text-black dark:text-white pt-16 px-4">
      <section className="max-w-6xl mx-auto text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-light-purple dark:text-light-teal mb-6">
          Early Access Pricing Tiers
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Be one of the first 50 shops to get lifetime advantages. After that,
          all pricing is usage-based with no added perks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl text-white shadow-lg p-6 ${tier.color}`}
            >
              <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
              <p className="mb-4 text-sm">Spots {tier.range} of 50</p>
              <ul className="space-y-2 text-sm">
                {tier.perks.map((perk, i) => (
                  <li key={i}>✔️ {perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-light-purple dark:text-light-teal mb-4">
            General Access (Post-50)
          </h2>
          <p className="text-md text-dark-purple dark:text-light-purple mb-6">
            Once 50 businesses join, Skynetrix access will shift to pay-per-use
            pricing based on microservice selection. No legacy perks will be
            available after this point.
          </p>
          <Link
            to="/founders-access"
            className="mt-6 px-10 py-4 font-bold text-lg rounded-full bg-white dark:bg-purple animate-pulse hover:animate-hoverGlow hover:shadow-neon-teal transition duration-300"
          >
            Reserve Your Spot
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
