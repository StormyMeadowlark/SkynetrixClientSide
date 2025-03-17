import { Link } from 'react-router-dom';

const NavLinks = ({ onClick }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Login', path: '/login'}
    // Add more links here as needed
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            className="text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent transition"
            onClick={onClick} // Optional: Handles click for mobile menus
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
