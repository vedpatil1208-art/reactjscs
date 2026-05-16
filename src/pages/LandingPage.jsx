import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Search, Building2, Users, MapPin, ArrowRight, Shield, TrendingUp, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import PropertyCard from '../components/PropertyCard';
import properties from '../data/properties';
import './LandingPage.css';

export default function LandingPage() {
  const { dispatch } = useApp();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const featured = properties.filter((p) => p.featured).slice(0, 4);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_FILTERS', payload: { search: searchTerm } });
    navigate('/listings');
  };

  const stats = [
    { value: '12+', label: 'Properties Listed', icon: <Building2 size={24} /> },
    { value: '8', label: 'Cities Covered', icon: <MapPin size={24} /> },
    { value: '6', label: 'Expert Agents', icon: <Users size={24} /> },
    { value: '₹8.5Cr', label: 'Highest Value', icon: <TrendingUp size={24} /> },
  ];

  const steps = [
    { num: '01', title: 'Browse Listings', desc: 'Explore our curated collection of premium properties across multiple cities.' },
    { num: '02', title: 'Compare & Save', desc: 'Add favorites to your wishlist and compare properties side-by-side.' },
    { num: '03', title: 'Calculate Costs', desc: 'Use our mortgage calculator to plan your finances accurately.' },
    { num: '04', title: 'Contact Agent', desc: 'Reach out directly to listing agents for viewings and inquiries.' },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero-bg-orb hero-orb-1" />
        <div className="hero-bg-orb hero-orb-2" />
        <div className="hero-bg-orb hero-orb-3" />
        <div className="hero-content container">
          <div className="hero-badge animate-fade-in">
            <Sparkles size={14} />
            <span>Find Your Dream Property</span>
          </div>
          <h1 className="hero-title animate-fade-in-up">
            Discover Your Perfect <br />
            <span className="hero-gradient">Place to Call Home</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Browse premium listings, compare properties, and calculate mortgages — all in one place.
          </p>
          <form className="hero-search animate-fade-in-up" onSubmit={handleSearch} style={{ animationDelay: '0.2s' }}>
            <div className="hero-search-inner">
              <Search size={20} className="hero-search-icon" />
              <input
                type="text"
                className="hero-search-input"
                placeholder="Search by city, address, or property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                id="hero-search-input"
              />
              <button type="submit" className="btn btn-primary hero-search-btn" id="hero-search-btn">
                Search
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
          <div className="hero-quick-links animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="quick-label">Popular:</span>
            {['Mumbai', 'Bengaluru', 'Delhi', 'Pune'].map((city) => (
              <button key={city} className="quick-link" onClick={() => {
                dispatch({ type: 'SET_FILTERS', payload: { city } });
                navigate('/listings');
              }}>
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section container" id="stats-section">
        <div className="stats-grid stagger-children">
          {stats.map((s) => (
            <div key={s.label} className="stat-card glass-card">
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-section container" id="featured-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Featured Properties</h2>
            <p className="section-subtitle">Handpicked premium listings just for you</p>
          </div>
          <Link to="/listings" className="btn btn-outline">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="featured-grid stagger-children">
          {featured.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="steps-section container" id="steps-section">
        <h2 className="section-title" style={{ textAlign: 'center' }}>How It Works</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>Your journey to the perfect property in 4 simple steps</p>
        <div className="steps-grid stagger-children">
          {steps.map((step) => (
            <div key={step.num} className="step-card glass-card">
              <div className="step-num">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section container" id="cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <Shield size={32} className="cta-icon" />
            <h2 className="cta-title">Ready to Find Your Dream Home?</h2>
            <p className="cta-desc">Explore our full collection of properties, save your favorites, and compare them side by side.</p>
            <div className="cta-actions">
              <Link to="/listings" className="btn btn-primary">Browse All Listings <ArrowRight size={16} /></Link>
              <Link to="/calculator" className="btn btn-secondary">Mortgage Calculator</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
