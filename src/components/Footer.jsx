import { Link } from 'react-router';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-inner container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="brand-icon"><Building2 size={20} /></div>
              <span className="brand-text">Property<span className="brand-accent">Finder</span></span>
            </Link>
            <p className="footer-desc">
              Your trusted real estate portal for finding the perfect home. Browse thousands of listings, compare properties, and make informed decisions.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/listings" className="footer-link">All Listings</Link>
            <Link to="/calculator" className="footer-link">Mortgage Calculator</Link>
            <Link to="/wishlist" className="footer-link">My Wishlist</Link>
            <Link to="/compare" className="footer-link">Compare Properties</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Property Types</h4>
            <Link to="/listings" className="footer-link">Houses</Link>
            <Link to="/listings" className="footer-link">Apartments</Link>
            <Link to="/listings" className="footer-link">Condos</Link>
            <Link to="/listings" className="footer-link">Villas</Link>
            <Link to="/listings" className="footer-link">Townhouses</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <MapPin size={16} />
              <span>123 MG Road, Bandra West, Mumbai</span>
            </div>
            <div className="footer-contact">
              <Phone size={16} />
              <span>+91 98201 00000</span>
            </div>
            <div className="footer-contact">
              <Mail size={16} />
              <span>hello@propertyfinder.in</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PropertyFinder. All rights reserved.</p>
          <p className="footer-credit">Built with React + Vite</p>
        </div>
      </div>
    </footer>
  );
}
