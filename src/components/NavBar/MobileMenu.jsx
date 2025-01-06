import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-light-background dark:bg-dark-background transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-50 shadow-lg`}
    >
      <div className="flex flex-col items-center space-y-6 py-8">
        {/* Navigation Links */}
        <NavLinks onClick={toggleMenu} />
        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-light-primary dark:text-dark-primary focus:outline-none"
        onClick={toggleMenu}
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
  );
};

export default MobileMenu;
