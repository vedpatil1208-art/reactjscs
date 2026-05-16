import { useMemo, useState } from 'react';
import { Building2, Map, LayoutGrid } from 'lucide-react';
import { useApp } from '../context/AppContext';
import SearchFilters from '../components/SearchFilters';
import PropertyCard from '../components/PropertyCard';
import MapView from '../components/MapView';
import properties from '../data/properties';
import './ListingsPage.css';

export default function ListingsPage() {
  const { state } = useApp();
  const { filters } = state;
  const [viewMode, setViewMode] = useState('grid');

  const filtered = useMemo(() => {
    let result = [...properties];

    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q)
      );
    }
    if (filters.type !== 'All') result = result.filter((p) => p.type === filters.type);
    if (filters.status !== 'All') result = result.filter((p) => p.status === filters.status);
    if (filters.city !== 'All Cities') result = result.filter((p) => p.city === filters.city);
    if (filters.bedrooms !== 'Any') {
      const min = parseInt(filters.bedrooms);
      result = result.filter((p) => p.bedrooms >= min);
    }
    if (filters.priceRange.label !== 'Any Price') {
      result = result.filter((p) => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max);
    }

    switch (filters.sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'area': result.sort((a, b) => b.area - a.area); break;
      case 'newest':
      default: result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); break;
    }

    return result;
  }, [filters]);

  return (
    <div className="listings-page container" id="listings-page">
      <div className="listings-header animate-fade-in-up">
        <div>
          <h1 className="section-title"><Building2 size={28} style={{ display: 'inline', verticalAlign: 'middle' }} /> Property Listings</h1>
          <p className="section-subtitle">{filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found</p>
        </div>
        <div className="view-toggle">
          <button className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')} id="view-grid">
            <LayoutGrid size={18} />
          </button>
          <button className={`toggle-btn ${viewMode === 'map' ? 'active' : ''}`} onClick={() => setViewMode('map')} id="view-map">
            <Map size={18} />
          </button>
        </div>
      </div>

      <SearchFilters />

      {viewMode === 'map' ? (
        <div className="animate-fade-in">
          <MapView properties={filtered} zoom={4} />
        </div>
      ) : (
        <>
          {filtered.length === 0 ? (
            <div className="no-results glass-card">
              <Building2 size={48} />
              <h3>No properties found</h3>
              <p>Try adjusting your filters to see more results.</p>
            </div>
          ) : (
            <div className="listings-grid stagger-children">
              {filtered.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
