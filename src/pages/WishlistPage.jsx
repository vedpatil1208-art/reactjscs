import { Heart, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import PropertyCard from '../components/PropertyCard';
import properties from '../data/properties';
import './WishlistPage.css';

export default function WishlistPage() {
  const { state, dispatch } = useApp();
  const wishlistProperties = state.wishlist
    .map((id) => properties.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="wishlist-page container" id="wishlist-page">
      <div className="wishlist-header animate-fade-in-up">
        <div>
          <h1 className="section-title"><Heart size={28} style={{ display: 'inline', verticalAlign: 'middle' }} /> My Wishlist</h1>
          <p className="section-subtitle">
            {wishlistProperties.length} saved {wishlistProperties.length === 1 ? 'property' : 'properties'}
          </p>
        </div>
        {wishlistProperties.length > 0 && (
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => wishlistProperties.forEach((p) => dispatch({ type: 'TOGGLE_WISHLIST', payload: p.id }))}
            id="clear-wishlist"
          >
            <Trash2 size={15} /> Clear All
          </button>
        )}
      </div>

      {wishlistProperties.length === 0 ? (
        <div className="wishlist-empty glass-card animate-fade-in-up">
          <Heart size={56} />
          <h3>Your wishlist is empty</h3>
          <p>Save properties you love by clicking the heart icon on any listing.</p>
          <Link to="/listings" className="btn btn-primary">Browse Listings</Link>
        </div>
      ) : (
        <div className="wishlist-grid stagger-children">
          {wishlistProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </div>
  );
}
