import { useTheme } from "../context/themeProvider";
import useSEO from "../hooks/useSEO";
import DarkLogo from "../assets/LogoDarkBackground.png";
import LightLogo from "../assets/LogoLightBackground.png";
import { Link } from "react-router-dom";

const ApiOverviewPage = () => {
  const { theme } = useTheme();

  useSEO({
    title: "Skynetrix API",
    description:
      "Discover the Skynetrix API — the powerful backend that powers your shop’s data. Built for developers and partners who need full control and flexibility.",
  });

  return (
    <main className="min-h-screen bg-light-primary-bg dark:bg-dark-primary-bg text-light-text dark:text-dark-text px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Logo + Header */}
        <div className="text-center mb-12">
          <img
            src={theme === "dark" ? DarkLogo : LightLogo}
            alt="Skynetrix Logo"
            className="h-12 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-light-purple dark:text-light-teal mb-2">
            Skynetrix API Access
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Full flexibility. Endless potential. Built for teams ready to go
            deeper.
          </p>
        </div>

        {/* About the API */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold">
            📡 What is the Skynetrix API?
          </h2>
          <p>
            The Skynetrix API is the same backend technology that powers every
            templated dashboard in the platform — but with open access for
            developers and power users who want to build **custom dashboards,
            integrations, or automations.**
          </p>
          <p>
            Skynetrix (as you know it) comes bundled with ready-to-use
            interfaces for auto shops and dealerships. But the API unlocks
            access to **vehicle data, customer engagement metrics, shop
            performance, and more** — all delivered via REST endpoints.
          </p>
        </section>

        {/* Who it's for */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold">🛠 Who Should Use It?</h2>
          <p>
            If you want to go beyond templates and build your own experience —
            this is for you. That includes:
          </p>
          <ul className="list-disc pl-6">
            <li>Developers building unique shop dashboards</li>
            <li>Agencies looking to deeply integrate client data</li>
            <li>Fleet managers needing specific reporting views</li>
            <li>Product teams using shop data in external tools</li>
          </ul>
        </section>

        {/* Working with Stormy Meadowlark */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold">
            🤝 Working With Stormy Meadowlark
          </h2>
          <p>
            While the API is powerful, it’s **not beginner-friendly out of the
            box**. To fully utilize it, you’ll likely want to work with a
            designer, developer, or both. That's where our sister company{" "}
            <strong>Stormy Meadowlark</strong> comes in.
          </p>
          <p>
            We specialize in **custom dashboards and integrations** for shops
            that want to use the Skynetrix API without sacrificing time, design,
            or strategy. Think of it as white-glove access to the power under
            the hood.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-light-purple dark:bg-light-teal text-white font-semibold hover:shadow-neon-teal transition"
          >
            Connect with Stormy Meadowlark
          </Link>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Ready to Go Beyond the Template?
          </h2>
          <p className="mb-6">
            API documentation access is currently invite-only while we finalize
            endpoints. Contact us to request access.
          </p>
          <a
            href="mailto:api@skynetrix.tech"
            className="inline-block px-6 py-3 rounded-xl bg-light-purple dark:bg-light-teal text-white font-semibold hover:shadow-neon-teal transition"
          >
            Request API Access
          </a>
        </section>
      </div>
    </main>
  );
};

export default ApiOverviewPage;
