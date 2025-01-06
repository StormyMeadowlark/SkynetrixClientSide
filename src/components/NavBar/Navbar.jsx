import { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks.jsx';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-light-background dark:bg-dark-background shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:flex">
          <ThemeToggle />
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-light-primary dark:text-dark-primary focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
