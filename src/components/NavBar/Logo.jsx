import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'; // Replace with the correct path to your logo file

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="Skynetrix Logo"
        className="h-12 w-auto" // Adjust height for your logo
      />
    </Link>
  );
};

export default Logo;
