import { Link } from 'react-router';
import { Heart, Bed, Bath, Maximize, MapPin, GitCompareArrows } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './PropertyCard.css';

export default function PropertyCard({ property }) {
  const { state, dispatch } = useApp();
  const isWishlisted = state.wishlist.includes(property.id);
  const isCompared = state.compareList.includes(property.id);

  const formatPrice = (price, status) => {
    if (status === 'For Rent') return `₹${price.toLocaleString('en-IN')}/mo`;
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(0)} L`;
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="property-card glass-card" id={`property-card-${property.id}`}>
      <div className="card-image-wrapper">
        <Link to={`/property/${property.id}`}>
          <img
            src={property.images[0]}
            alt={property.title}
            className="card-image"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)';
            }}
          />
        </Link>
        <div className="card-badges">
          <span className={`badge ${property.status === 'For Sale' ? 'badge-sale' : 'badge-rent'}`}>
            {property.status}
          </span>
          {property.featured && <span className="badge badge-featured">Featured</span>}
        </div>
        <div className="card-actions">
          <button
            className={`card-action-btn ${isWishlisted ? 'wishlisted' : ''}`}
            onClick={() => dispatch({ type: 'TOGGLE_WISHLIST', payload: property.id })}
            aria-label="Toggle wishlist"
            id={`wishlist-btn-${property.id}`}
          >
            <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button
            className={`card-action-btn ${isCompared ? 'compared' : ''}`}
            onClick={() => dispatch({ type: 'TOGGLE_COMPARE', payload: property.id })}
            aria-label="Toggle compare"
            id={`compare-btn-${property.id}`}
          >
            <GitCompareArrows size={18} />
          </button>
        </div>
        <div className="card-price-tag">
          {formatPrice(property.price, property.status)}
        </div>
      </div>

      <div className="card-body">
        <Link to={`/property/${property.id}`} className="card-title-link">
          <h3 className="card-title">{property.title}</h3>
        </Link>
        <div className="card-location">
          <MapPin size={14} />
          <span>{property.city}, {property.state}</span>
        </div>
        <div className="card-specs">
          <div className="spec">
            <Bed size={15} />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="spec">
            <Bath size={15} />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="spec">
            <Maximize size={15} />
            <span>{property.area.toLocaleString()} sqft</span>
          </div>
        </div>
        <div className="card-type">{property.type}</div>
      </div>
    </div>
  );
}
