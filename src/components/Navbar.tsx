import { useState, useEffect } from 'react';

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if body already has the class (e.g. from a previous visit if we added local storage, or default)
    if (document.body.classList.contains('dark-theme')) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          MEYER
        </div>
        <div className="navbar-actions" onClick={toggleTheme} title="Toggle theme">
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="moon-icon">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lightbulb-icon">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.53.64 2.88 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;