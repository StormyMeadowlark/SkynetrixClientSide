import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center text-light-text dark:text-dark-text">
      <h1 className="text-6xl font-orbitron text-light-primary dark:text-dark-primary mb-6">
        404
      </h1>
      <h2 className="text-3xl font-orbitron text-light-secondary dark:text-dark-secondary mb-4">
        Page Not Found
      </h2>
      <p className="mb-6 text-lg">
        The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-lg font-bold text-white bg-light-primary dark:bg-dark-primary rounded-xl shadow-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition duration-200"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
