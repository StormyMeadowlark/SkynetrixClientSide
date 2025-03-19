import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ onClick }) => {
  const location = useLocation(); // Get current route for active link styling

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            onClick={onClick} // Handles click for mobile menus
            className={`transition duration-300 ease-in-out text-teal dark:text-light-purple 
              hover:text-dark-purple dark:hover:text-light-teal 
              ${
                location.pathname === link.path
                  ? "font-black text-light-purple dark:text-light-teal"
                  : ""
              }`}
            aria-current={location.pathname === link.path ? "page" : undefined}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
