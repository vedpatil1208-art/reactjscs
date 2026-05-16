import { MapPin, GraduationCap, ShieldCheck, DollarSign, Footprints, Bus, Bike } from 'lucide-react';
import './NeighborhoodInfo.css';

export default function NeighborhoodInfo({ neighborhood }) {
  if (!neighborhood) return null;

  const scores = [
    { label: 'Walk Score', value: neighborhood.walkScore, icon: <Footprints size={16} />, color: '#3b82f6' },
    { label: 'Transit Score', value: neighborhood.transitScore, icon: <Bus size={16} />, color: '#8b5cf6' },
    { label: 'Bike Score', value: neighborhood.bikeScore, icon: <Bike size={16} />, color: '#22c55e' },
  ];

  const getScoreLabel = (v) => {
    if (v >= 90) return "Walker's Paradise";
    if (v >= 70) return 'Very Walkable';
    if (v >= 50) return 'Somewhat Walkable';
    return 'Car-Dependent';
  };

  return (
    <div className="neighborhood glass-card" id="neighborhood-info">
      <h3 className="neighborhood-title">
        <MapPin size={18} />
        Neighborhood Info
      </h3>

      <div className="scores-grid">
        {scores.map((s) => (
          <div key={s.label} className="score-card">
            <div className="score-ring">
              <svg viewBox="0 0 80 80" className="score-svg">
                <circle cx="40" cy="40" r="34" fill="none" stroke="var(--border-color)" strokeWidth="6" />
                <circle cx="40" cy="40" r="34" fill="none" stroke={s.color} strokeWidth="6"
                  strokeDasharray={`${s.value * 2.136} 213.6`}
                  strokeDashoffset="0" strokeLinecap="round"
                  transform="rotate(-90 40 40)"
                  style={{ transition: 'stroke-dasharray 1s ease' }}
                />
              </svg>
              <span className="score-number">{s.value}</span>
            </div>
            <div className="score-info">
              <span className="score-label">{s.label}</span>
              <span className="score-desc">{getScoreLabel(s.value)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="neighborhood-sections">
        <div className="nb-section">
          <h4 className="nb-section-title">
            <GraduationCap size={16} />
            Nearby Schools
          </h4>
          <ul className="nb-list">
            {neighborhood.schools.map((school) => (
              <li key={school} className="nb-list-item">{school}</li>
            ))}
          </ul>
        </div>

        <div className="nb-section">
          <h4 className="nb-section-title">
            <MapPin size={16} />
            Nearby Places
          </h4>
          <ul className="nb-list">
            {neighborhood.nearbyPlaces.map((place) => (
              <li key={place} className="nb-list-item">{place}</li>
            ))}
          </ul>
        </div>

        <div className="nb-stats">
          <div className="nb-stat">
            <ShieldCheck size={16} />
            <div>
              <span className="nb-stat-label">Crime Rate</span>
              <span className="nb-stat-value">{neighborhood.crimeRate}</span>
            </div>
          </div>
          <div className="nb-stat">
            <DollarSign size={16} />
            <div>
              <span className="nb-stat-label">Median Income</span>
              <span className="nb-stat-value">{neighborhood.medianIncome}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
