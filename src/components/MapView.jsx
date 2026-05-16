import { useState } from 'react';
import { MapPin, Navigation, ZoomIn, ZoomOut, Layers, ExternalLink } from 'lucide-react';
import './MapView.css';

export default function MapView({ coordinates, title, properties = [] }) {
  const [mapStyle, setMapStyle] = useState('standard');
  const [hoveredProperty, setHoveredProperty] = useState(null);

  const styles = {
    standard: { label: 'Standard', tile: 'mapnik' },
    cycle: { label: 'Terrain', tile: 'CyclOSM' },
    hot: { label: 'Humanitarian', tile: 'HOT' },
  };

  const getMapUrl = () => {
    const layer = styles[mapStyle].tile === 'mapnik' ? 'mapnik' : styles[mapStyle].tile;
    if (coordinates) {
      const [lat, lng] = coordinates;
      return `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.015},${lat - 0.01},${lng + 0.015},${lat + 0.01}&layer=${layer}&marker=${lat},${lng}`;
    }
    // Default to India view
    return `https://www.openstreetmap.org/export/embed.html?bbox=68.0,6.0,97.0,37.0&layer=${layer}`;
  };

  const getFullMapUrl = () => {
    if (coordinates) {
      return `https://www.openstreetmap.org/?mlat=${coordinates[0]}&mlon=${coordinates[1]}#map=16/${coordinates[0]}/${coordinates[1]}`;
    }
    return 'https://www.openstreetmap.org/#map=5/20.5/78.9';
  };

  return (
    <div className="map-container glass-card" id="map-view">
      {/* Map Header */}
      <div className="map-header">
        <div className="map-header-left">
          <div className="map-icon-wrapper">
            <MapPin size={18} />
          </div>
          <div>
            <h3 className="map-title">Location</h3>
            {title && <span className="map-subtitle">{title}</span>}
          </div>
        </div>
        <div className="map-controls">
          {Object.entries(styles).map(([key, val]) => (
            <button
              key={key}
              className={`map-style-btn ${mapStyle === key ? 'active' : ''}`}
              onClick={() => setMapStyle(key)}
            >
              {val.label}
            </button>
          ))}
        </div>
      </div>

      {/* Property Markers Bar (for multi-property view) */}
      {properties.length > 0 && (
        <div className="map-markers-bar">
          {properties.slice(0, 6).map((p) => (
            <div
              key={p.id}
              className={`map-marker-chip ${hoveredProperty === p.id ? 'active' : ''}`}
              onMouseEnter={() => setHoveredProperty(p.id)}
              onMouseLeave={() => setHoveredProperty(null)}
            >
              <MapPin size={12} />
              <span>{p.city}</span>
              <span className="marker-price">
                {p.status === 'For Rent'
                  ? `₹${p.price.toLocaleString('en-IN')}/mo`
                  : `₹${(p.price / 10000000).toFixed(1)}Cr`}
              </span>
            </div>
          ))}
          {properties.length > 6 && (
            <div className="map-marker-chip more">+{properties.length - 6} more</div>
          )}
        </div>
      )}

      {/* Map Element */}
      <div className="map-element-wrapper">
        <iframe
          src={getMapUrl()}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Property location map"
          className="map-iframe"
        />
        <div className="map-overlay-gradient" />

        {/* Floating Actions */}
        <div className="map-floating-actions">
          <a href={getFullMapUrl()} target="_blank" rel="noopener noreferrer" className="map-fab" title="Open full map">
            <ExternalLink size={16} />
          </a>
          <button className="map-fab" title="Navigate">
            <Navigation size={16} />
          </button>
        </div>

        {/* Coordinates Badge */}
        {coordinates && (
          <div className="map-coords-badge">
            <Navigation size={12} />
            <span>{coordinates[0].toFixed(4)}°N, {coordinates[1].toFixed(4)}°E</span>
          </div>
        )}
      </div>
    </div>
  );
}
