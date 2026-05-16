import { Search, RotateCcw } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { propertyTypes, priceRanges, bedroomOptions, statusOptions, cities } from '../data/properties';
import './SearchFilters.css';

export default function SearchFilters({ compact = false }) {
  const { state, dispatch } = useApp();
  const { filters } = state;

  const update = (payload) => dispatch({ type: 'SET_FILTERS', payload });
  const reset = () => dispatch({ type: 'RESET_FILTERS' });

  return (
    <div className={`search-filters glass-card ${compact ? 'compact' : ''}`} id="search-filters">
      <div className="filter-search-row">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="input-field search-input"
            placeholder="Search by title, city, or address..."
            value={filters.search}
            onChange={(e) => update({ search: e.target.value })}
            id="filter-search"
          />
        </div>
        {!compact && (
          <button className="btn btn-secondary btn-sm" onClick={reset} id="filter-reset">
            <RotateCcw size={15} />
            Reset
          </button>
        )}
      </div>

      <div className="filter-grid">
        <div className="filter-group">
          <label className="filter-label">Type</label>
          <select
            className="select-field"
            value={filters.type}
            onChange={(e) => update({ type: e.target.value })}
            id="filter-type"
          >
            {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Status</label>
          <select
            className="select-field"
            value={filters.status}
            onChange={(e) => update({ status: e.target.value })}
            id="filter-status"
          >
            {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Bedrooms</label>
          <select
            className="select-field"
            value={filters.bedrooms}
            onChange={(e) => update({ bedrooms: e.target.value })}
            id="filter-bedrooms"
          >
            {bedroomOptions.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">City</label>
          <select
            className="select-field"
            value={filters.city}
            onChange={(e) => update({ city: e.target.value })}
            id="filter-city"
          >
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Price Range</label>
          <select
            className="select-field"
            value={filters.priceRange.label}
            onChange={(e) => {
              const range = priceRanges.find((r) => r.label === e.target.value);
              update({ priceRange: range });
            }}
            id="filter-price"
          >
            {priceRanges.map((r) => <option key={r.label} value={r.label}>{r.label}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Sort By</label>
          <select
            className="select-field"
            value={filters.sortBy}
            onChange={(e) => update({ sortBy: e.target.value })}
            id="filter-sort"
          >
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="area">Largest Area</option>
          </select>
        </div>
      </div>

      {compact && (
        <button className="btn btn-secondary btn-sm reset-compact" onClick={reset}>
          <RotateCcw size={15} /> Reset Filters
        </button>
      )}
    </div>
  );
}
