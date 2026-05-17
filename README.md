# Property Finder - https://propertyfinder12.vercel.app/property/5

Property Finder is a modern and responsive real estate web application built with React JS that allows users to explore, compare, and save properties with an intuitive and user-friendly interface. The platform is designed to simulate a real-world property marketplace where users can browse listings, view detailed property information, calculate mortgage costs, and connect with property agents.

The project focuses on delivering a seamless user experience through dynamic filtering, responsive layouts, reusable components, and interactive features such as wishlist management, property comparison, OTP verification, and mortgage calculation.

---

#  Features

##  Advanced Property Search & Filters
Users can search and filter properties based on:
- City/location
- Property type
- Budget/price range
- Number of bedrooms
- Property availability

The filtering system updates listings dynamically to provide a smooth browsing experience.

---

## Detailed Property Pages
Each property includes:
- High-quality image gallery
- Property specifications
- Pricing details
- Amenities
- Location map
- Agent information
- Contact options

This helps users make informed decisions while exploring listings.

---

## Wishlist Management
Users can save their favorite properties to a wishlist for quick access later.

Features include:
- Add/remove properties instantly
- Persistent saved state
- Easy navigation to saved listings

---

##  Property Comparison
The compare feature allows users to compare up to 3 properties side-by-side.

Comparison includes:
- Price
- Area
- Bedrooms
- Bathrooms
- Property type
- Amenities

This simplifies decision-making for users.

---

## Mortgage / EMI Calculator
The application includes an EMI calculator that helps users estimate:
- Monthly EMI
- Total interest
- Total payment amount

Users can adjust:
- Loan amount
- Interest rate
- Loan duration

---

##  Agent Contact & Messaging
Users can directly contact property agents through:
- Contact forms
- Inquiry messages
- Property-specific requests

---

## OTP Verification
OTP verification is implemented to enhance authentication and user security.

---

##  Fully Responsive Design
The application is optimized for:
- Desktop
- Tablet
- Mobile devices

Responsive layouts ensure a consistent experience across all screen sizes.

---

#  Tech Stack

| Technology | Purpose |
|------------|----------|
| React 19 | Frontend framework |
| React Router v7 | Client-side routing |
| Vite | Fast development & build tool |
| CSS | Styling and responsive UI |
| Lucide React | Icons |
| Context API | Global state management |

---

#  Project Structure

bash
src/
├── components/        # Reusable UI components
├── context/           # Global application state
├── data/              # Property data & mock APIs
├── pages/             # Main application pages
├── App.jsx            # Main routing component
└── main.jsx           # Application entry point

## Application Pages
## Home Page (/)

The landing page includes:

Hero section
Featured properties
Platform statistics
Quick navigation
Listings Page (/listings)

Displays all available properties with:

Search functionality
Dynamic filters
Sorting options
Property Detail Page (/property/:id)

Provides complete property information including:

Image gallery
Property details
Location map
Contact form
 Wishlist Page (/wishlist)

Displays all saved properties in one place.

Compare Page (/compare)

Allows side-by-side comparison of selected properties.

Calculator Page (/calculator)

Contains the mortgage and EMI calculator.

## Future Enhancements

Planned improvements include:

Backend API integration
Authentication system
Database connectivity
Real-time chat system
Dark mode support
Property sorting
Advanced analytics
Admin dashboard
Payment integration
Property booking functionality

## Learning Outcomes

This project helped in understanding:

React component architecture
State management using Context API
Dynamic routing with React Router
Responsive UI development
Reusable component design
Real-world application structure
Form handling and validation

## The application can be deployed using:

Vercel

## Author

Developed by - Ved Patil , Shivam Yadav and Maasar Khatik
