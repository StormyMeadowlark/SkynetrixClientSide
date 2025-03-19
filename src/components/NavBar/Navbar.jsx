import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "../Footer/ThemeToggle";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white dark:bg-purple shadow-md dark:shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-dark-purple dark:text-light-teal focus:outline-none transition-transform transform hover:scale-105"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          role="button"
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
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />}
    </nav>
  );
};

export default Navbar;
