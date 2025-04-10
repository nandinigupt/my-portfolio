import React, { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1>My Portfolio</h1>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <a onClick={() => setMenuOpen(false)} href="#about">About</a>
        <a onClick={() => setMenuOpen(false)} href="#projects">Projects</a>
        <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
      </nav>

      <button onClick={() => setDark(!dark)} className="theme-toggle">
        {dark ? "🌞" : "🌙"}
      </button>
    </header>
  );
};

export default Header;
