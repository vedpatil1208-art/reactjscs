import { useParams, Link } from 'react-router';
import { ArrowLeft, Heart, Bed, Bath, Maximize, Calendar, Car, DollarSign, Tag, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ImageGallery from '../components/ImageGallery';
import MapView from '../components/MapView';
import NeighborhoodInfo from '../components/NeighborhoodInfo';
import ContactForm from '../components/ContactForm';
import OtpSystem from '../components/OtpSystem';
import MessageSystem from '../components/MessageSystem';
import PropertyCard from '../components/PropertyCard';
import properties from '../data/properties';
import './PropertyDetailPage.css';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const { state, dispatch } = useApp();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="detail-not-found container">
        <h2>Property Not Found</h2>
        <p>The property you're looking for doesn't exist.</p>
        <Link to="/listings" className="btn btn-primary">Back to Listings</Link>
      </div>
    );
  }

  const isWishlisted = state.wishlist.includes(property.id);
  const formatPrice = property.status === 'For Rent'
    ? `₹${property.price.toLocaleString('en-IN')}/mo`
    : `₹${property.price.toLocaleString('en-IN')}`;

  const similar = properties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.city === property.city))
    .slice(0, 3);

  const specs = [
    { icon: <Bed size={18} />, label: 'Bedrooms', value: property.bedrooms },
    { icon: <Bath size={18} />, label: 'Bathrooms', value: property.bathrooms },
    { icon: <Maximize size={18} />, label: 'Area', value: `${property.area.toLocaleString()} sqft` },
    { icon: <Calendar size={18} />, label: 'Year Built', value: property.yearBuilt },
    { icon: <Car size={18} />, label: 'Parking', value: `${property.parking} spots` },
    { icon: <DollarSign size={18} />, label: 'Price/sqft', value: `₹${property.pricePerSqft.toLocaleString('en-IN')}` },
  ];

  return (
    <div className="detail-page" id="property-detail">
      <div className="detail-top container">
        <Link to="/listings" className="btn btn-secondary btn-sm back-link">
          <ArrowLeft size={16} /> Back to Listings
        </Link>
      </div>

      <div className="container">
        <div className="detail-gallery animate-fade-in">
          <ImageGallery images={property.images} title={property.title} />
        </div>

        <div className="detail-layout">
          <div className="detail-main">
            {/* Title & Price */}
            <div className="detail-title-section animate-fade-in-up">
              <div className="detail-badges">
                <span className={`badge ${property.status === 'For Sale' ? 'badge-sale' : 'badge-rent'}`}>
                  {property.status}
                </span>
                <span className="badge badge-featured"><Tag size={12} /> {property.type}</span>
              </div>
              <h1 className="detail-title">{property.title}</h1>
              <p className="detail-address">{property.address}</p>
              <div className="detail-price-row">
                <span className="detail-price">{formatPrice}</span>
                <button
                  className={`btn ${isWishlisted ? 'btn-accent' : 'btn-secondary'}`}
                  onClick={() => dispatch({ type: 'TOGGLE_WISHLIST', payload: property.id })}
                  id="detail-wishlist-btn"
                >
                  <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                  {isWishlisted ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>

            {/* Specs */}
            <div className="detail-specs glass-card animate-fade-in-up">
              {specs.map((s) => (
                <div key={s.label} className="detail-spec">
                  <div className="detail-spec-icon">{s.icon}</div>
                  <div>
                    <span className="detail-spec-value">{s.value}</span>
                    <span className="detail-spec-label">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="detail-description animate-fade-in-up">
              <h2 className="detail-section-title">About This Property</h2>
              <p className="detail-desc-text">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="detail-amenities animate-fade-in-up">
              <h2 className="detail-section-title">Amenities & Features</h2>
              <div className="amenities-grid">
                {property.amenities.map((a) => (
                  <div key={a} className="amenity-item">
                    <CheckCircle size={16} />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Property Information */}
            {property.details && (
              <div className="detail-info-section glass-card animate-fade-in-up">
                <h2 className="detail-section-title" style={{ padding: '20px 20px 0' }}>Property Details</h2>
                <div className="detail-info-grid">
                  <div className="detail-info-item">
                    <span className="info-label">Plot / Building No.</span>
                    <span className="info-value">{property.details.plotNo}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Flat / Unit No.</span>
                    <span className="info-value">{property.details.flatNo}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Floor</span>
                    <span className="info-value">{property.details.floor}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Total Floors</span>
                    <span className="info-value">{property.details.totalFloors}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Carpet Area</span>
                    <span className="info-value">{property.details.carpetArea.toLocaleString()} sqft</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Super Built-up Area</span>
                    <span className="info-value">{property.details.superBuiltUp.toLocaleString()} sqft</span>
                  </div>
                  {property.details.plotArea && (
                    <div className="detail-info-item">
                      <span className="info-label">Plot Area</span>
                      <span className="info-value">{property.details.plotArea}</span>
                    </div>
                  )}
                  <div className="detail-info-item">
                    <span className="info-label">RERA Registration</span>
                    <span className="info-value info-rera">{property.details.reraNo}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Facing</span>
                    <span className="info-value">{property.details.facing}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Furnishing Status</span>
                    <span className="info-value">{property.details.furnishing}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Possession</span>
                    <span className="info-value">{property.details.possession}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Available From</span>
                    <span className="info-value">{property.details.availableFrom}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Ownership Type</span>
                    <span className="info-value">{property.details.ownershipType}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Age of Property</span>
                    <span className="info-value">{property.details.ageOfProperty}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Flooring Type</span>
                    <span className="info-value">{property.details.flooringType}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Balconies</span>
                    <span className="info-value">{property.details.balconies}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Total Units in Project</span>
                    <span className="info-value">{property.details.totalUnits}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Water Supply</span>
                    <span className="info-value">{property.details.waterSupply}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Power Backup</span>
                    <span className="info-value">{property.details.powerBackup}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Gated Security</span>
                    <span className="info-value">{property.details.gatedSecurity}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Property Tax</span>
                    <span className="info-value">{property.details.propertyTax}</span>
                  </div>
                  <div className="detail-info-item">
                    <span className="info-label">Maintenance Charge</span>
                    <span className="info-value">{property.details.maintenanceCharge}</span>
                  </div>
                  <div className="detail-info-item full-address">
                    <span className="info-label">Full Address</span>
                    <span className="info-value">{property.address}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Map */}
            <div className="animate-fade-in-up">
              <MapView coordinates={property.coordinates} title={property.title} />
            </div>

            {/* Neighborhood */}
            <div className="animate-fade-in-up">
              <NeighborhoodInfo neighborhood={property.neighborhood} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="detail-sidebar">
            <div className="animate-fade-in-up" style={{ position: 'sticky', top: '84px' }}>
              <OtpSystem onVerified={() => {}} />
              <div style={{ marginTop: '20px' }}>
                <ContactForm agent={property.agent} />
              </div>
            </div>
          </div>

          {/* Floating Chat */}
          <MessageSystem agent={property.agent} propertyTitle={property.title} />
        </div>

        {/* Similar Properties */}
        {similar.length > 0 && (
          <div className="similar-section animate-fade-in-up">
            <h2 className="section-title">Similar Properties</h2>
            <p className="section-subtitle">You might also be interested in</p>
            <div className="similar-grid">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
