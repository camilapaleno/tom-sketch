import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="/drawings/tm.png" alt="TM Logo" className="header-logo" />
      <h1 className="header-title">sketches by tom milkowski</h1>
      <a
        href="https://instagram.com/tommilk"
        target="_blank"
        rel="noopener noreferrer"
        className="header-instagram"
      >
        ig: @tommilkowski
      </a>
    </header>
  );
}

export default Header;
