import { useState } from "react";
import { useTheme } from "../context/themeProvider";
import useSEO from "../hooks/useSEO";
import { useNavigate } from "react-router-dom";
import DarkLogo from "../assets/LogoDarkBackground.png";
import LightLogo from "../assets/LogoLightBackground.png";
import { Eye, EyeOff } from "lucide-react";

const GeneralSignUp = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [form, setForm] = useState({
    businessName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    marketing: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  useSEO({
    title: "Sign Up",
    description:
      "Create your Skynetrix account and gain access to powerful tools for shop growth, automation, and retention.",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setForm((prev) => ({ ...prev, [name]: fieldValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !form.businessName ||
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // TODO: Replace with actual API call
      // await axios.post("/api/register", form);
      console.log("Form submitted:", form);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("There was an issue submitting the form. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-light-primary-bg dark:bg-dark-primary-bg transition-all">
      <div className="bg-white dark:bg-dark-purple text-black dark:text-white p-8 rounded-3xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img
            src={theme === "dark" ? DarkLogo : LightLogo}
            alt="Skynetrix Logo"
            className="h-12 w-auto"
          />
        </div>

        <h1 className="text-3xl font-orbitron font-bold text-center text-light-purple dark:text-light-teal mb-2">
          Create Your Account
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Start managing your shop with powerful automation tools.
        </p>

        {error && (
          <div className="text-red-600 text-sm text-center mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Business Name</label>
            <input
              name="businessName"
              type="text"
              required
              value={form.businessName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600"
            />
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block text-sm font-medium">First Name</label>
              <input
                name="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">Last Name</label>
              <input
                name="lastName"
                type="text"
                required
                value={form.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Create Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 pr-10 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Retype Password</label>
            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 pr-10 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="marketing"
              name="marketing"
              checked={form.marketing}
              onChange={handleChange}
              className="accent-light-purple dark:accent-light-teal"
            />
            <label htmlFor="marketing" className="text-sm">
              I want to receive marketing emails from Skynetrix.
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-light-purple dark:bg-light-teal text-white dark:text-dark-primary-bg font-bold hover:shadow-neon-teal transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-light-purple dark:text-light-teal font-semibold underline hover:text-dark-purple"
          >
            Log In
          </a>
        </p>
      </div>
    </main>
  );
};

export default GeneralSignUp;
