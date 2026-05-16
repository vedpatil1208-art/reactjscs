import { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const initialState = {
  wishlist: JSON.parse(localStorage.getItem('pf_wishlist') || '[]'),
  compareList: JSON.parse(localStorage.getItem('pf_compare') || '[]'),
  filters: {
    search: '',
    type: 'All',
    status: 'All',
    bedrooms: 'Any',
    city: 'All Cities',
    priceRange: { label: 'Any Price', min: 0, max: Infinity },
    sortBy: 'newest'
  }
};

function appReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_WISHLIST': {
      const exists = state.wishlist.includes(action.payload);
      const wishlist = exists
        ? state.wishlist.filter(id => id !== action.payload)
        : [...state.wishlist, action.payload];
      return { ...state, wishlist };
    }
    case 'TOGGLE_COMPARE': {
      const exists = state.compareList.includes(action.payload);
      if (exists) {
        return { ...state, compareList: state.compareList.filter(id => id !== action.payload) };
      }
      if (state.compareList.length >= 3) return state;
      return { ...state, compareList: [...state.compareList, action.payload] };
    }
    case 'REMOVE_COMPARE': {
      return { ...state, compareList: state.compareList.filter(id => id !== action.payload) };
    }
    case 'CLEAR_COMPARE': {
      return { ...state, compareList: [] };
    }
    case 'SET_FILTERS': {
      return { ...state, filters: { ...state.filters, ...action.payload } };
    }
    case 'RESET_FILTERS': {
      return { ...state, filters: initialState.filters };
    }
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem('pf_wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  useEffect(() => {
    localStorage.setItem('pf_compare', JSON.stringify(state.compareList));
  }, [state.compareList]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
