import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">MySite</div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}

export default Header;
