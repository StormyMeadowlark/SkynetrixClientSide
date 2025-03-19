import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

// Import Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail(""); // Clear input after submission
  };

  return (
    <footer className="bg-light-primary-bg dark:bg-dark-primary-bg text-black dark:text-white pt-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-gray-300 dark:border-gray-700">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-light-purple dark:text-light-teal mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Login", path: "/login" },
                { name: "Founder's Club", path: "/founders-club" },
                { name: "Apex Membership", path: "/apex" },
                { name: "Octane Membership", path: "/octane" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-teal dark:text-light-purple hover:text-dark-purple dark:hover:text-teal transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Fixed Social Media Links ✅ */}
          <div>
            <h3 className="text-lg font-bold text-light-purple dark:text-light-teal mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal dark:text-light-purple hover:text-dark-purple dark:hover:text-teal transition"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal dark:text-light-purple hover:text-dark-purple dark:hover:text-teal transition"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal dark:text-light-purple hover:text-dark-purple dark:hover:text-teal transition"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal dark:text-light-purple hover:text-dark-purple dark:hover:text-teal transition"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Email Signup CTA */}
          <div>
            <h3 className="text-lg font-bold text-light-purple dark:text-light-teal mb-4">
              Stay in Touch
            </h3>
            <p className="text-sm mb-4">
              Subscribe to get the latest updates on Skynetrix!
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white w-full"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-light-purple dark:bg-light-teal text-white dark:text-dark-primary-bg hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Theme Toggle Section */}
        <div className="flex justify-center mt-6">
          <ThemeToggle />
        </div>

        {/* Subfooter */}
        <div className="text-center text-sm py-4 mt-4">
          <p className="text-gray-500 dark:text-gray-400">
            Website maintained by{" "}
            <a
              href="https://stormymeadowlark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal dark:text-light-purple hover:underline"
            >
              Stormy Meadowlark
            </a>
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
