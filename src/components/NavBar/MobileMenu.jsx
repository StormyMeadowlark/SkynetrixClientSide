import { useEffect } from "react";
import NavLinks from "./NavLinks";
import ThemeToggle from "../Footer/ThemeToggle";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  // Prevents scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } z-50`}
      role="dialog"
      aria-hidden={!isOpen}
    >
      {/* Menu Content */}
      <div
        className={`fixed top-0 left-0 w-4/5 h-full bg-light-primary-bg dark:bg-dark-primary-bg shadow-xl transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 scale-100" : "-translate-x-full scale-90"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-10">
          {/* Navigation Links */}
          <NavLinks onClick={toggleMenu} />

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-light-purple dark:text-light-teal focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
