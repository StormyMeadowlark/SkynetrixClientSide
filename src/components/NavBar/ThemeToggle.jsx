import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light' // Check stored theme or default to 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme); // Save theme preference
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-light-accent text-white dark:bg-dark-accent transition"
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggle;
