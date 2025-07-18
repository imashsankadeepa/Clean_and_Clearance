import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/Logo3.webp';
import './nav.css';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="nav-container">
          <Link to="/" className="logo1" aria-label="Oak Roots Home">
            <img
              src={logo}
              alt="Oak Roots Cleaning & Clearance Logo"
              className="logo-img"
              width="120"
              height="auto"
              loading="lazy"
            />
          </Link>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
