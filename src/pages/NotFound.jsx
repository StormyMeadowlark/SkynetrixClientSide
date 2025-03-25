import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider";

const NotFound = () => {
  const { theme } = useTheme();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-light-primary-bg dark:bg-dark-primary-bg text-black dark:text-white px-6 text-center">
      <h1 className="text-6xl font-bold text-light-purple dark:text-light-teal">
        404
      </h1>
      <p className="text-xl mt-4 mb-8">
        Oops! Looks like you took a wrong turn. This page doesn’t exist.
      </p>

      {/* Optional Image */}
      <img
        src={`/assets/${theme === "dark" ? "404-dark.png" : "404-light.png"}`}
        alt="Page Not Found"
        className="w-96 max-w-full mb-8"
        loading="lazy"
      />

      <Link
        to="/"
        className="px-8 py-4 font-bold text-lg rounded-full bg-light-purple dark:bg-light-teal text-white dark:text-dark-primary-bg hover:shadow-neon-teal transition duration-300"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
