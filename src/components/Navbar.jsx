// src/components/Navbar.jsx

// 1. IMPORT useState from React
import { useState } from 'react';

// 2. Accept the props (toggleTheme, theme)
const Navbar = ({ toggleTheme, theme }) => {
  
  // 3. ADD NEW STATE to track if the mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 4. Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 5. Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Aditya Alok</h1>
      </div>

      {/* --- 6. NEW HAMBURGER BUTTON --- */}
      {/* This will only be visible on mobile (due to CSS) */}
      <button className="hamburger-btn" onClick={toggleMobileMenu} aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* --- 7. UPDATED LINKS CONTAINER --- */}
      {/* The 'open' class will be added/removed based on our state */}
      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        
        {/* We add an "X" button to close the menu */}
        <button className="close-btn" onClick={toggleMobileMenu} aria-label="Close menu">
          &times;
        </button>

        <ul className="nav-links-lists">
          {/* We add onClick to each link to close the menu */}
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contacts" onClick={handleLinkClick}>Contacts</a></li>
        </ul>

        {/* The theme switch is now inside this container too */}
        <label className="theme-switch" htmlFor="theme-toggle">
          <input
            type="checkbox"
            id="theme-toggle"
            onChange={toggleTheme}
            checked={theme === 'light'}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;