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
        "Free Transferrable Lifetime access to all microservices",
        "Direct roadmap input",
        "Exclusive community access",
        "Priority onboarding & support",
      ],
    },
    {
      name: "High Octane",
      range: "11–25",
      color:
        "bg-dark-purple dark:bg-light-teal dark:text-purple dark:hover:bg-teal dark:hover:text-gray hover:animate hover:animate-pulse dark:hover:animate-none",
      perks: [
        "Non-transferable Lifetime Access to all microservices for only $3,000",
        "Exclusive community access",
        "Priority onboarding & support",
      ],
    },
    {
      name: "Full Throttle Access",
      range: "26–50",
      color:
        "bg-purple dark:bg-light-teal dark:text-purple dark:hover:bg-teal dark:hover:text-gray hover:animate hover:animate-pulse dark:hover:animate-none",
      perks: [
        "Non-transferable Lifetime Access to all microservices for only $10,000",
        "Priority onboarding & support",
      ],
    },
  ];

  return (
    <main className="bg-light-primary-bg dark:bg-dark-primary-bg text-black dark:text-white pt-16 px-4">
<section className="max-w-5xl mx-auto text-center py-20 px-6">
  <h1 className="text-5xl font-bold mb-6 text-light-purple dark:text-light-teal">
    Built for the Shops. Shaped by the Shops.
  </h1>
  <p className="text-lg mb-8">
    From day one, Skynetrix has been designed around one simple belief: 
    the people using it should help shape it.
    Founder's Access isn’t an afterthought — it’s part of the foundation.
    Early adopters aren’t just customers; they’re partners helping to build 
    a smarter, more powerful platform for the future of automotive businesses.
    <br /><br />
    Founder's Access uses the same revolutionary pay-per-use pricing 
    — you only pay for what you use — 
    but with permanent advantages like capped costs, lifetime discounts, 
    early feature access, and a direct voice in shaping the platform.
  </p>
</section>
      
<section className="max-w-6xl mx-auto text-center py-20 px-6">
  <h2 className="text-4xl md:text-5xl font-bold text-light-purple dark:text-light-teal mb-6">
    Founder's Access: 50 Shops Will Shape the Future
  </h2>
  <p className="text-lg max-w-3xl mx-auto mb-12">
    Skynetrix was built with a different vision: a platform shaped by the people who use it.
    Founder's Access rewards the first 50 shops with lifetime advantages — 
    including transferable licenses, permanent discounts, free education resources, conference passes, and more.
    <br /><br />
    These aren't just discounts. They're permanent advantages built into your growth — with the same revolutionary pay-per-use model underneath.  
    Only the first 50 shops will ever receive these benefits.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
    {tiers.map((tier, index) => (
      <div
        key={index}
        className={`rounded-2xl text-white shadow-lg p-6 ${tier.color}`}
      >
        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
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
    <h2 className="text-3xl font-bold text-light-purple dark:text-light-teal mb-4">
      What Happens After 50 Shops Join?
    </h2>
    <p className="text-md text-dark-purple dark:text-light-purple mb-6">
      Once the 50 Founder's Access spots are filled, Skynetrix will shift entirely to 
      our pay-per-use pricing model — no lifetime perks, no caps, no special bonuses.
      <br /><br />
      High Octane and Full Throttle users will continue paying for what they use, 
      but with a total cost ceiling — ensuring you always have full control over your costs.
    </p>

    <Link
      to="/founders-access"
      className="mt-6 inline-block px-10 py-4 font-bold text-lg rounded-full bg-white dark:bg-purple animate-pulse hover:animate-hoverGlow hover:shadow-neon-teal transition duration-300"
    >
      Reserve Your Spot
    </Link>
  </div>
</section>
      <section className="max-w-5xl mx-auto text-center py-20 px-6">
  <h1 className="text-5xl font-bold mb-6 text-light-purple dark:text-light-teal">
    Only Pay for What You Actually Use
  </h1>
  <p className="text-lg mb-8">
    Skynetrix is built differently. Instead of expensive, rigid subscriptions,
    you purchase credits and only spend them when you take specific actions.
    No wasted seats, no bloated monthly fees, no sales demos needed.
    Simple, transparent, scalable.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
    <div className="space-y-4">
      <p>✅ Create a contact? Use a few credits.</p>
      <p>✅ Schedule a repair order? Use a few more.</p>
      <p>✅ Send SMS/email campaigns? Credits deducted as you grow.</p>
      <p>✅ Accept a payment? Credits cover it, with no hidden fees.</p>
    </div>
    <div className="space-y-4">
      <p>💰 1 Credit = <strong>$0.01</strong></p>
      <p>📈 Average shop (~$1M/year revenue) ≈ $250/month in usage.</p>
      <p>🚀 About half the cost of leading platforms like Shop-Ware.</p>
      <p>🌟 No mandatory demos. No sales reps. Just a smarter product.</p>
    </div>
  </div>
</section>
      <section className="max-w-4xl mx-auto text-center py-20 px-6">
  <h2 className="text-4xl font-bold mb-6 text-light-purple dark:text-light-teal">
    Estimate Your Credit Usage
  </h2>
  <p className="text-lg mb-8">
    Curious how much Skynetrix might cost your shop?  
    Use our calculator (coming soon) to project your monthly credits based on real shop activities.
  </p>
  <div className="border-2 border-dashed border-light-purple dark:border-light-teal p-10 rounded-2xl">
    <p className="text-md text-dark-purple dark:text-light-purple">
      🛠️ Estimator Coming Soon — Your shop could save 40–50% compared to traditional platforms.
    </p>
  </div>
</section>
    </main>
  );
};

export default PricingPage;
