import { useState } from "react";
import useSEO from "../hooks/useSEO";
import { useTheme } from "../context/themeProvider";
import DarkLogo from "../assets/LogoDarkBackground.png";
import LightLogo from "../assets/LogoLightBackground.png";

const ContactPage = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useSEO({
    title: "Contact Us",
    description:
      "Have questions about Skynetrix? Reach out and let's talk shop.",
    keywords: "Skynetrix contact, automotive SaaS, shop marketing support",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      // Placeholder for backend connection
      console.log("Contact form submitted:", formData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(
        "There was a problem sending your message. Please try again later."
      );
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-16 px-4 text-light-text dark:text-dark-text">
        <h2 className="text-3xl font-bold text-light-purple dark:text-light-teal mb-4">
          Message Sent!
        </h2>
        <p className="text-lg">
          Thanks for reaching out. We’ll get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-light-primary-bg dark:bg-dark-primary-bg transition-all">
      <div className="bg-white dark:bg-dark-purple text-black dark:text-white p-8 rounded-3xl shadow-lg w-full max-w-2xl">
        <div className="flex justify-center mb-6">
          <img
            src={theme === "dark" ? DarkLogo : LightLogo}
            alt="Skynetrix Logo"
            className="h-12 w-auto"
          />
        </div>

        <h1 className="text-3xl font-orbitron font-bold text-center text-light-purple dark:text-light-teal mb-2">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Questions? Feedback? We’d love to hear from you.
        </p>

        {error && (
          <div className="text-red-600 text-sm text-center mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-light-purple dark:bg-light-teal text-white font-bold hover:shadow-neon-teal transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
