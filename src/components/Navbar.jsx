import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Home, Building2, Calculator, Heart, GitCompareArrows, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Navbar.css';

export default function Navbar() {
  const { state } = useApp();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: <Home size={18} /> },
    { to: '/listings', label: 'Listings', icon: <Building2 size={18} /> },
    { to: '/calculator', label: 'Calculator', icon: <Calculator size={18} /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar" id="main-nav">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand" id="nav-logo">
          <div className="brand-icon">
            <Building2 size={22} />
          </div>
          <span className="brand-text">Property<span className="brand-accent">Finder</span></span>
        </Link>

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${isActive(link.to) ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          <div className="nav-divider" />
          <Link
            to="/wishlist"
            className={`nav-link nav-icon-link ${isActive('/wishlist') ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
            id="nav-wishlist"
          >
            <Heart size={18} />
            <span className="nav-link-label">Wishlist</span>
            {state.wishlist.length > 0 && (
              <span className="nav-badge">{state.wishlist.length}</span>
            )}
          </Link>
          <Link
            to="/compare"
            className={`nav-link nav-icon-link ${isActive('/compare') ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
            id="nav-compare"
          >
            <GitCompareArrows size={18} />
            <span className="nav-link-label">Compare</span>
            {state.compareList.length > 0 && (
              <span className="nav-badge">{state.compareList.length}</span>
            )}
          </Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          id="nav-toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
