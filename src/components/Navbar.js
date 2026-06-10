import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="container navbar__inner" ref={navRef}>
        <NavLink to="/" className="navbar__logo">
          ARCHI-TECH
        </NavLink>

        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink end to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="navbar__cta">
          <NavLink to="/contact" className="btn btn-primary">
            Get Started
          </NavLink>
          <button
            type="button"
            className="navbar__hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((state) => !state)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
