import { GitCompareArrows, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import CompareTable from '../components/CompareTable';
import './ComparePage.css';

export default function ComparePage() {
  const { state, dispatch } = useApp();

  return (
    <div className="compare-page container" id="compare-page">
      <div className="compare-header animate-fade-in-up">
        <div>
          <h1 className="section-title">
            <GitCompareArrows size={28} style={{ display: 'inline', verticalAlign: 'middle' }} /> Compare Properties
          </h1>
          <p className="section-subtitle">
            {state.compareList.length} of 3 properties selected
          </p>
        </div>
        {state.compareList.length > 0 && (
          <button className="btn btn-secondary btn-sm" onClick={() => dispatch({ type: 'CLEAR_COMPARE' })} id="clear-compare">
            <Trash2 size={15} /> Clear All
          </button>
        )}
      </div>

      <div className="animate-fade-in-up">
        <CompareTable />
      </div>
    </div>
  );
}
