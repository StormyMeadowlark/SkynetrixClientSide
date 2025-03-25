import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/themeProvider";
import useSEO from "../hooks/useSEO";
import DarkLogo from "../assets/LogoDarkBackground.png";
import LightLogo from "../assets/LogoLightBackground.png";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 for toggle

  useSEO({
    title: "Login",
    description:
      "Access your Skynetrix account to manage shop performance, follow-ups, and service retention.",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add auth logic
    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-light-primary-bg dark:bg-dark-primary-bg transition-all">
      <div className="bg-white dark:bg-dark-purple text-black dark:text-white p-8 rounded-3xl shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={theme === "dark" ? DarkLogo : LightLogo}
            alt="Skynetrix Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-orbitron font-bold text-center text-light-purple dark:text-light-teal mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Log in to access your dashboard
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Email Address</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-light-purple dark:focus:ring-light-teal outline-none"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Password</span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-2 pr-10 rounded-xl bg-light-primary-bg dark:bg-[#2A054A] text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-light-purple dark:focus:ring-light-teal outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </label>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-light-purple dark:bg-light-teal text-white dark:text-dark-primary-bg font-bold hover:shadow-neon-teal transition-all duration-300"
          >
            Log In
          </button>
        </form>

        {/* Footer Actions */}
        <div className="text-sm text-center mt-6">
          <p>
            Don&apos;t have an account?{" "}
            <a
              href="/founding-members-registration"
              className="text-light-purple dark:text-light-teal font-semibold underline hover:text-dark-purple"
            >
              Sign Up
            </a>
          </p>
          <p className="mt-2">
            <a
              href="/forgot-password"
              className="text-light-purple dark:text-light-teal underline hover:text-dark-purple"
            >
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
