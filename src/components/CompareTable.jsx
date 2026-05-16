import { Link } from 'react-router';
import { X, Bed, Bath, Maximize, Calendar, Car, DollarSign, Check, Minus } from 'lucide-react';
import { useApp } from '../context/AppContext';
import properties from '../data/properties';
import './CompareTable.css';

export default function CompareTable() {
  const { state, dispatch } = useApp();
  const compareProperties = state.compareList
    .map((id) => properties.find((p) => p.id === id))
    .filter(Boolean);

  if (compareProperties.length < 2) {
    return (
      <div className="compare-empty glass-card">
        <h3>Select at least 2 properties to compare</h3>
        <p>Add properties from the listings page using the compare button.</p>
        <Link to="/listings" className="btn btn-primary">Browse Listings</Link>
      </div>
    );
  }

  const formatPrice = (p) => p.status === 'For Rent' ? `₹${p.price.toLocaleString('en-IN')}/mo` : `₹${p.price.toLocaleString('en-IN')}`;

  const rows = [
    { label: 'Price', icon: <DollarSign size={15} />, render: (p) => formatPrice(p) },
    { label: 'Type', render: (p) => p.type },
    { label: 'Status', render: (p) => p.status },
    { label: 'Bedrooms', icon: <Bed size={15} />, render: (p) => p.bedrooms },
    { label: 'Bathrooms', icon: <Bath size={15} />, render: (p) => p.bathrooms },
    { label: 'Area', icon: <Maximize size={15} />, render: (p) => `${p.area.toLocaleString()} sqft` },
    { label: 'Year Built', icon: <Calendar size={15} />, render: (p) => p.yearBuilt },
    { label: 'Parking', icon: <Car size={15} />, render: (p) => p.parking },
    { label: 'Price/sqft', render: (p) => `₹${p.pricePerSqft.toLocaleString('en-IN')}` },
    { label: 'City', render: (p) => `${p.city}, ${p.state}` },
  ];

  // Collect all unique amenities
  const allAmenities = [...new Set(compareProperties.flatMap((p) => p.amenities))].sort();

  return (
    <div className="compare-table" id="compare-table">
      <div className="compare-scroll">
        <table>
          <thead>
            <tr>
              <th className="compare-label-col">Property</th>
              {compareProperties.map((p) => (
                <th key={p.id} className="compare-prop-col">
                  <div className="compare-header-card">
                    <button className="compare-remove" onClick={() => dispatch({ type: 'REMOVE_COMPARE', payload: p.id })} aria-label="Remove">
                      <X size={16} />
                    </button>
                    <img src={p.images[0]} alt={p.title} className="compare-thumb" />
                    <Link to={`/property/${p.id}`} className="compare-prop-title">{p.title}</Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="compare-label">
                  <span className="compare-label-inner">
                    {row.icon} {row.label}
                  </span>
                </td>
                {compareProperties.map((p) => (
                  <td key={p.id} className="compare-value">{row.render(p)}</td>
                ))}
              </tr>
            ))}
            <tr className="amenity-header-row">
              <td className="compare-label"><strong>Amenities</strong></td>
              {compareProperties.map((p) => <td key={p.id} />)}
            </tr>
            {allAmenities.map((amenity) => (
              <tr key={amenity}>
                <td className="compare-label amenity-label">{amenity}</td>
                {compareProperties.map((p) => (
                  <td key={p.id} className="compare-value amenity-cell">
                    {p.amenities.includes(amenity)
                      ? <Check size={16} className="amenity-yes" />
                      : <Minus size={16} className="amenity-no" />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
