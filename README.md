# Property Finder

A real estate portal built with React JS where users can browse properties, save favorites, compare listings, and calculate mortgage costs.

## Features

- Property listings with search and filters (city, type, price, bedrooms)
- Detailed property pages with image gallery and map view
- Wishlist to save favorite properties
- Compare up to 3 properties side-by-side
- Mortgage/EMI calculator
- Agent contact form and messaging system
- OTP verification
- Responsive design

## Tech Stack

- React 19
- React Router v7
- Vite
- Lucide React (icons)
- CSS

## Pages

1. **Home** (`/`) — Hero section, featured properties, stats
2. **Listings** (`/listings`) — All properties with filters
3. **Property Detail** (`/property/:id`) — Full property info, gallery, map, contact
4. **Wishlist** (`/wishlist`) — Saved properties
5. **Compare** (`/compare`) — Side-by-side comparison
6. **Calculator** (`/calculator`) — Mortgage calculator

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/    # Reusable UI components (Navbar, PropertyCard, etc.)
├── context/       # Global state management (AppContext)
├── data/          # Property data
├── pages/         # Page components
├── App.jsx        # Root component with routes
└── main.jsx       # Entry point
```
