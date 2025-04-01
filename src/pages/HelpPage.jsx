import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { useTheme } from "../context/themeProvider";
import DarkLogo from "../assets/LogoDarkBackground.png";
import LightLogo from "../assets/LogoLightBackground.png";

const HelpPage = () => {
  const { theme } = useTheme();

  useSEO({
    title: "Help & Support",
    description:
      "Get answers to your questions about Skynetrix. Find contact options, FAQs, and more.",
  });

  return (
    <main className="min-h-screen bg-light-primary-bg dark:bg-dark-primary-bg px-4 py-12 text-light-text dark:text-dark-text">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <img
            src={theme === "dark" ? DarkLogo : LightLogo}
            alt="Skynetrix Logo"
            className="h-12 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-light-purple dark:text-light-teal mb-2">
            Need Help? We’ve Got You.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Whether you’re setting up, troubleshooting, or just curious — we're
            here for you.
          </p>
        </div>

        {/* Help Sections */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">📬 Contact Support</h2>
            <p className="mb-2">
              Have a question or need help with your account? Reach out:
            </p>
            <ul className="list-disc pl-6 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@skynetrix.tech"
                  className="underline text-light-purple dark:text-light-teal"
                >
                  support@skynetrix.tech
                </a>
              </li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 Common Questions</h2>
            <ul className="space-y-2">
              <li>
                <strong>How do I reset my password?</strong>
                <br />
                Visit{" "}
                <Link
                  to="/forgot-password"
                  className="underline text-light-purple dark:text-light-teal"
                >
                  Forgot Password
                </Link>{" "}
                and follow the instructions.
              </li>
              <li>
                <strong>Where can I view my shop's insights?</strong>
                <br />
                Log in and head to your{" "}
                <Link
                  to="/dashboard"
                  className="underline text-light-purple dark:text-light-teal"
                >
                  dashboard
                </Link>
                .
              </li>
              <li>
                <strong>How do I add a new user?</strong>
                <br />
                If you're a tenant admin, go to{" "}
                <Link
                  to="/dashboard/users"
                  className="underline text-light-purple dark:text-light-teal"
                >
                  User Management
                </Link>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📚 Resources & Docs</h2>
            <ul className="list-disc pl-6 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="underline text-light-purple dark:text-light-teal"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="underline text-light-purple dark:text-light-teal"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="/api/docs"
                  className="underline text-light-purple dark:text-light-teal"
                >
                  API Documentation
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HelpPage;
