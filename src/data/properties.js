const properties = [
  {
    id: 1, title: "Luxury Sea-View Penthouse", type: "Apartment", status: "For Sale",
    price: 85000000, pricePerSqft: 42500, bedrooms: 4, bathrooms: 3, area: 2800,
    yearBuilt: 2022, parking: 2,
    description: "Stunning penthouse apartment in South Mumbai featuring floor-to-ceiling windows with breathtaking Arabian Sea views. Premium Italian marble flooring, modular chef's kitchen with imported appliances, and a private terrace.",
    address: "42 Marine Drive, Churchgate, Mumbai 400020", city: "Mumbai", state: "Maharashtra",
    coordinates: [18.9438, 72.8234],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Swimming Pool", "Gym", "Concierge", "Rooftop Terrace", "Smart Home", "Club House"],
    neighborhood: { walkScore: 92, transitScore: 95, bikeScore: 65, schools: ["Cathedral & John Connon School", "Bombay Scottish School"], nearbyPlaces: ["Marine Drive - 0.1 km", "Wankhede Stadium - 0.5 km"], crimeRate: "Low", medianIncome: "₹18,00,000" },
    agent: { name: "Priya Sharma", phone: "+91 98201 45678", email: "priya.s@propertyfinder.in" },
    featured: true, dateAdded: "2026-04-15",
    details: { plotNo: "42", flatNo: "PH-01", floor: "28th (Top Floor)", totalFloors: 28, carpetArea: 2520, superBuiltUp: 2800, reraNo: "P51900028721", facing: "West (Sea-Facing)", furnishing: "Semi-Furnished", possession: "Ready to Move", ownershipType: "Freehold", waterSupply: "24/7 Corporation + Borewell", powerBackup: "Full Backup - DG Set", propertyTax: "₹1,20,000/year", maintenanceCharge: "₹18,000/month", flooringType: "Italian Marble", ageOfProperty: "4 Years", gatedSecurity: "Yes - 3-tier Security", balconies: 3, totalUnits: 45, availableFrom: "Immediate" }
  },
  {
    id: 2, title: "Modern Villa in Whitefield", type: "Villa", status: "For Sale",
    price: 45000000, pricePerSqft: 12500, bedrooms: 5, bathrooms: 4, area: 4200,
    yearBuilt: 2021, parking: 3,
    description: "Exquisite independent villa in Whitefield with a private garden and infinity pool. Open-concept living area with double-height ceilings and a gourmet modular kitchen.",
    address: "Villa 18, Prestige Oasis, Whitefield, Bengaluru 560066", city: "Bengaluru", state: "Karnataka",
    coordinates: [12.9698, 77.7500],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Infinity Pool", "Home Theater", "Smart Home", "Landscaped Garden", "Club House", "Gym"],
    neighborhood: { walkScore: 68, transitScore: 55, bikeScore: 60, schools: ["Inventure Academy", "Greenwood High"], nearbyPlaces: ["Phoenix Marketcity - 2 km", "ITPL Tech Park - 3 km"], crimeRate: "Low", medianIncome: "₹14,00,000" },
    agent: { name: "Rahul Verma", phone: "+91 98450 67890", email: "rahul.v@propertyfinder.in" },
    featured: true, dateAdded: "2026-04-20",
    details: { plotNo: "Villa-18", flatNo: "N/A", floor: "Ground + 1st", totalFloors: 2, carpetArea: 3780, superBuiltUp: 4200, reraNo: "PRM/KA/RERA/1251/310/PR/180524/003015", facing: "East", furnishing: "Fully Furnished", possession: "Ready to Move", ownershipType: "Freehold", waterSupply: "24/7 Borewell + Cauvery", powerBackup: "Full Backup - DG + Inverter", propertyTax: "₹85,000/year", maintenanceCharge: "₹12,000/month", flooringType: "Vitrified Tiles + Wooden", ageOfProperty: "5 Years", gatedSecurity: "Yes - Gated Community", balconies: 4, totalUnits: 32, availableFrom: "Immediate", plotArea: "2400 sqft" }
  },
  {
    id: 3, title: "Heritage Kothi in Civil Lines", type: "Townhouse", status: "For Sale",
    price: 32000000, pricePerSqft: 18000, bedrooms: 3, bathrooms: 2, area: 2100,
    yearBuilt: 1935, parking: 1,
    description: "Beautifully restored heritage kothi blending colonial-era charm with modern luxury. Original teak wood flooring, ornate cornices, and a private courtyard garden.",
    address: "15 Rajpur Road, Civil Lines, New Delhi 110054", city: "Delhi", state: "Delhi",
    coordinates: [28.6814, 77.2226],
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Courtyard Garden", "Fireplace", "Teak Wood Flooring", "Renovated Kitchen", "Terrace"],
    neighborhood: { walkScore: 88, transitScore: 90, bikeScore: 72, schools: ["St. Stephen's School", "Modern School"], nearbyPlaces: ["Delhi University - 0.5 km", "Old Delhi Station - 2 km"], crimeRate: "Low", medianIncome: "₹16,00,000" },
    agent: { name: "Anita Kapoor", phone: "+91 98110 23456", email: "anita.k@propertyfinder.in" },
    featured: true, dateAdded: "2026-03-28",
    details: { plotNo: "15", flatNo: "N/A", floor: "Ground + 1st", totalFloors: 2, carpetArea: 1890, superBuiltUp: 2100, reraNo: "DLRERA2022A0042", facing: "North", furnishing: "Semi-Furnished", possession: "Ready to Move", ownershipType: "Freehold", waterSupply: "Corporation + Tanker", powerBackup: "Inverter", propertyTax: "₹65,000/year", maintenanceCharge: "N/A (Independent)", flooringType: "Original Teak Wood", ageOfProperty: "91 Years (Restored 2020)", gatedSecurity: "Yes - Private", balconies: 2, totalUnits: 1, availableFrom: "Immediate", plotArea: "3200 sqft" }
  },
  {
    id: 4, title: "Trendy Studio in Koramangala", type: "Apartment", status: "For Rent",
    price: 45000, pricePerSqft: 55, bedrooms: 1, bathrooms: 1, area: 750,
    yearBuilt: 2020, parking: 1,
    description: "Ultra-modern studio apartment in the heart of Koramangala, Bengaluru's startup hub. Open-plan living, designer kitchen, and floor-to-ceiling windows.",
    address: "Block 5, Koramangala 4th Block, Bengaluru 560034", city: "Bengaluru", state: "Karnataka",
    coordinates: [12.9352, 77.6245],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Rooftop Lounge", "Fitness Center", "Co-working Space", "Concierge", "Pet Friendly"],
    neighborhood: { walkScore: 95, transitScore: 82, bikeScore: 78, schools: ["National Public School", "Bishop Cotton"], nearbyPlaces: ["Forum Mall - 0.5 km", "BDA Complex - 0.2 km"], crimeRate: "Low", medianIncome: "₹12,00,000" },
    agent: { name: "Deepak Nair", phone: "+91 99020 34567", email: "deepak.n@propertyfinder.in" },
    featured: false, dateAdded: "2026-05-01",
    details: { plotNo: "Block 5", flatNo: "504", floor: "5th Floor", totalFloors: 12, carpetArea: 675, superBuiltUp: 750, reraNo: "PRM/KA/RERA/1251/310/PR/200918/003421", facing: "South-East", furnishing: "Fully Furnished", possession: "Ready to Move", ownershipType: "Leasehold (99 Years)", waterSupply: "24/7 Corporation", powerBackup: "Full Backup - DG Set", propertyTax: "₹15,000/year", maintenanceCharge: "₹5,500/month", flooringType: "Vitrified Tiles", ageOfProperty: "6 Years", gatedSecurity: "Yes - Biometric Access", balconies: 1, totalUnits: 120, availableFrom: "Immediate" }
  },
  {
    id: 5, title: "Spacious Family Home in Noida", type: "House", status: "For Sale",
    price: 22000000, pricePerSqft: 8800, bedrooms: 5, bathrooms: 3, area: 3500,
    yearBuilt: 2018, parking: 2,
    description: "Spacious independent house in a premium sector of Noida with lush green surroundings. Grand double-height foyer, formal dining room, and modular kitchen.",
    address: "H-42, Sector 44, Noida, UP 201303", city: "Noida", state: "Uttar Pradesh",
    coordinates: [28.5700, 77.3200],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Pool", "Modular Kitchen", "Home Office", "Play Area", "Garden", "Smart Home"],
    neighborhood: { walkScore: 62, transitScore: 70, bikeScore: 55, schools: ["Amity International", "DPS Noida"], nearbyPlaces: ["DLF Mall of India - 3 km", "Sector 18 Metro - 2 km"], crimeRate: "Low", medianIncome: "₹10,00,000" },
    agent: { name: "Sneha Gupta", phone: "+91 98100 56789", email: "sneha.g@propertyfinder.in" },
    featured: true, dateAdded: "2026-04-10",
    details: { plotNo: "H-42", flatNo: "N/A", floor: "Ground + 2 Floors", totalFloors: 3, carpetArea: 3150, superBuiltUp: 3500, reraNo: "UPRERAPRJ442876", facing: "North-East", furnishing: "Semi-Furnished", possession: "Ready to Move", ownershipType: "Freehold", waterSupply: "Boring + Authority Supply", powerBackup: "Full Backup - DG + Inverter", propertyTax: "₹42,000/year", maintenanceCharge: "N/A (Independent)", flooringType: "Marble + Vitrified Tiles", ageOfProperty: "8 Years", gatedSecurity: "Yes - Sector Security", balconies: 5, totalUnits: 1, availableFrom: "Immediate", plotArea: "2800 sqft" }
  },
  {
    id: 6, title: "Compact 1BHK near Powai Lake", type: "Apartment", status: "For Rent",
    price: 35000, pricePerSqft: 50, bedrooms: 1, bathrooms: 1, area: 650,
    yearBuilt: 2019, parking: 0,
    description: "Stylish 1BHK apartment near Powai Lake with modern kitchen, large windows with partial lake views. Society has fitness center, pool, and 24-hour security.",
    address: "A-704, Hiranandani Heritage, Powai, Mumbai 400076", city: "Mumbai", state: "Maharashtra",
    coordinates: [19.1196, 72.9051],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Swimming Pool", "Fitness Center", "24/7 Security", "Power Backup", "Intercom"],
    neighborhood: { walkScore: 85, transitScore: 78, bikeScore: 60, schools: ["Hiranandani Foundation School"], nearbyPlaces: ["Powai Lake - 0.3 km", "IIT Bombay - 1 km"], crimeRate: "Very Low", medianIncome: "₹15,00,000" },
    agent: { name: "Vikram Joshi", phone: "+91 98670 12345", email: "vikram.j@propertyfinder.in" },
    featured: false, dateAdded: "2026-05-03",
    details: { plotNo: "A Tower", flatNo: "704", floor: "7th Floor", totalFloors: 18, carpetArea: 585, superBuiltUp: 650, reraNo: "P51800018965", facing: "North (Lake View)", furnishing: "Semi-Furnished", possession: "Ready to Move", ownershipType: "Leasehold (99 Years)", waterSupply: "24/7 Corporation", powerBackup: "Full Backup - DG Set", propertyTax: "₹12,000/year", maintenanceCharge: "₹7,500/month", flooringType: "Vitrified Tiles", ageOfProperty: "7 Years", gatedSecurity: "Yes - CCTV + Guards", balconies: 1, totalUnits: 200, availableFrom: "1st June 2026" }
  },
  {
    id: 7, title: "Mediterranean Villa in Lonavala", type: "Villa", status: "For Sale",
    price: 38000000, pricePerSqft: 15000, bedrooms: 4, bathrooms: 3, area: 3200,
    yearBuilt: 2016, parking: 2,
    description: "Stunning Mediterranean-style villa in the Sahyadri hills. Great room with vaulted ceilings, infinity pool, and panoramic valley views.",
    address: "Plot 12, Tungarli Lake Road, Lonavala 410401", city: "Lonavala", state: "Maharashtra",
    coordinates: [18.7546, 73.4062],
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Infinity Pool", "Valley Views", "Spa Bathroom", "Granite Countertops", "Smart Home"],
    neighborhood: { walkScore: 35, transitScore: 20, bikeScore: 30, schools: ["RKS International School"], nearbyPlaces: ["Tungarli Lake - 0.5 km", "Tiger's Leap - 5 km"], crimeRate: "Very Low", medianIncome: "₹8,00,000" },
    agent: { name: "Anil Deshmukh", phone: "+91 98220 78901", email: "anil.d@propertyfinder.in" },
    featured: false, dateAdded: "2026-04-25",
    details: { plotNo: "12", flatNo: "N/A", floor: "Ground + 1st", totalFloors: 2, carpetArea: 2880, superBuiltUp: 3200, reraNo: "P52100045678", facing: "West (Valley Facing)", furnishing: "Fully Furnished", possession: "Ready to Move", ownershipType: "Freehold", waterSupply: "Borewell + Tanker", powerBackup: "Full Backup - DG + Solar", propertyTax: "₹35,000/year", maintenanceCharge: "N/A (Independent)", flooringType: "Wooden + Natural Stone", ageOfProperty: "10 Years", gatedSecurity: "Yes - Private Compound", balconies: 3, totalUnits: 1, availableFrom: "Immediate", plotArea: "5000 sqft" }
  },
  {
    id: 8, title: "Elegant Apartment in Salt Lake", type: "Apartment", status: "For Sale",
    price: 12000000, pricePerSqft: 7500, bedrooms: 3, bathrooms: 2, area: 1800,
    yearBuilt: 2020, parking: 1,
    description: "Elegant 3BHK in Salt Lake Sector V, Kolkata's IT hub. Spacious rooms with cross-ventilation, modular kitchen, and large balcony.",
    address: "Tower B, Merlin Verve, Salt Lake Sector V, Kolkata 700091", city: "Kolkata", state: "West Bengal",
    coordinates: [22.5726, 88.4340],
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Garden", "Community Hall", "Children's Play Area", "Power Backup", "Modular Kitchen"],
    neighborhood: { walkScore: 80, transitScore: 85, bikeScore: 70, schools: ["DPS Ruby Park", "South Point High"], nearbyPlaces: ["City Centre - 1 km", "Nicco Park - 2 km"], crimeRate: "Low", medianIncome: "₹9,00,000" },
    agent: { name: "Priya Sharma", phone: "+91 98201 45678", email: "priya.s@propertyfinder.in" },
    featured: false, dateAdded: "2026-03-15",
    details: { plotNo: "Tower B", flatNo: "1204", floor: "12th Floor", totalFloors: 22, carpetArea: 1620, superBuiltUp: 1800, reraNo: "HIRA/P/NOR/2020/000456", facing: "South (Garden View)", furnishing: "Semi-Furnished", possession: "Ready to Move", ownershipType: "Freehold", waterSupply: "Corporation + Underground Tank", powerBackup: "Full Backup - DG Set", propertyTax: "₹18,000/year", maintenanceCharge: "₹4,500/month", flooringType: "Vitrified Tiles", ageOfProperty: "6 Years", gatedSecurity: "Yes - CCTV + Guards", balconies: 2, totalUnits: 180, availableFrom: "Immediate" }
  },
  {
    id: 9, title: "Luxury High-Rise in Bandra West", type: "Condo", status: "For Sale",
    price: 65000000, pricePerSqft: 55000, bedrooms: 3, bathrooms: 2, area: 1600,
    yearBuilt: 2023, parking: 1,
    description: "Brand new luxury apartment in Bandra West with Bosch kitchen, Italian marble, and Sea Link views. Resort-style amenities including rooftop pool.",
    address: "2803, The Bandra Icon, Bandra West, Mumbai 400050", city: "Mumbai", state: "Maharashtra",
    coordinates: [19.0596, 72.8295],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Infinity Pool", "Spa", "Concierge", "Sea-Link View", "Business Center", "Valet Parking"],
    neighborhood: { walkScore: 90, transitScore: 88, bikeScore: 55, schools: ["Jamnabai Narsee School"], nearbyPlaces: ["Bandstand - 0.5 km", "Linking Road - 0.3 km"], crimeRate: "Low", medianIncome: "₹20,00,000" },
    agent: { name: "Rahul Verma", phone: "+91 98450 67890", email: "rahul.v@propertyfinder.in" },
    featured: false, dateAdded: "2026-04-05",
    details: { plotNo: "Tower A", flatNo: "2803", floor: "28th Floor", totalFloors: 42, carpetArea: 1440, superBuiltUp: 1600, reraNo: "P51900046732", facing: "West (Sea-Link View)", furnishing: "Fully Furnished", possession: "Ready to Move", ownershipType: "Freehold", waterSupply: "24/7 Corporation + RO", powerBackup: "Full Backup - DG Set", propertyTax: "₹1,50,000/year", maintenanceCharge: "₹25,000/month", flooringType: "Italian Marble", ageOfProperty: "3 Years", gatedSecurity: "Yes - 4-tier Security + Valet", balconies: 2, totalUnits: 84, availableFrom: "Immediate" }
  },
  {
    id: 10, title: "Hill Station Retreat in Manali", type: "House", status: "For Sale",
    price: 18000000, pricePerSqft: 9000, bedrooms: 3, bathrooms: 2, area: 2200,
    yearBuilt: 2017, parking: 1,
    description: "Beautiful wooden cottage in Manali with Himalayan views. Stone fireplace, wrap-around deck, and apple orchards.",
    address: "Near Club House, Old Manali, HP 175131", city: "Manali", state: "Himachal Pradesh",
    coordinates: [32.2432, 77.1892],
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Fireplace", "Wrap-around Deck", "Mountain Views", "Apple Orchard", "Hiking Trails"],
    neighborhood: { walkScore: 40, transitScore: 15, bikeScore: 35, schools: ["DAV Public School Manali"], nearbyPlaces: ["Mall Road - 1.5 km", "Hadimba Temple - 2 km"], crimeRate: "Very Low", medianIncome: "₹5,00,000" },
    agent: { name: "Ranjit Thakur", phone: "+91 94180 45678", email: "ranjit.t@propertyfinder.in" },
    featured: false, dateAdded: "2026-03-20",
    details: { plotNo: "Survey 142", flatNo: "N/A", floor: "Ground + Attic", totalFloors: 2, carpetArea: 1980, superBuiltUp: 2200, reraNo: "N/A (Independent House)", facing: "South (Mountain View)", furnishing: "Fully Furnished", possession: "Ready to Move", ownershipType: "Freehold", waterSupply: "Natural Spring + Boring", powerBackup: "Inverter + Solar Panels", propertyTax: "₹8,000/year", maintenanceCharge: "N/A (Independent)", flooringType: "Pine Wood", ageOfProperty: "9 Years", gatedSecurity: "No - Private Property", balconies: 2, totalUnits: 1, availableFrom: "Immediate", plotArea: "21,780 sqft (0.5 acre)" }
  },
  {
    id: 11, title: "Smart 2BHK in Hinjewadi IT Park", type: "Apartment", status: "For Rent",
    price: 28000, pricePerSqft: 35, bedrooms: 2, bathrooms: 2, area: 1100,
    yearBuilt: 2021, parking: 1,
    description: "Modern 2BHK near Hinjewadi IT Park, Pune. Vitrified tile flooring, modular kitchen, clubhouse, swimming pool.",
    address: "C-502, Blue Ridge Township, Hinjewadi, Pune 411057", city: "Pune", state: "Maharashtra",
    coordinates: [18.5912, 73.7389],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Clubhouse", "Swimming Pool", "Jogging Track", "Garden", "Power Backup", "Intercom"],
    neighborhood: { walkScore: 65, transitScore: 60, bikeScore: 58, schools: ["VIBGYOR High", "Orchid International"], nearbyPlaces: ["Hinjewadi IT Park - 2 km", "Xion Mall - 3 km"], crimeRate: "Low", medianIncome: "₹11,00,000" },
    agent: { name: "Meena Kulkarni", phone: "+91 98500 23456", email: "meena.k@propertyfinder.in" },
    featured: false, dateAdded: "2026-04-28",
    details: { plotNo: "C Building", flatNo: "502", floor: "5th Floor", totalFloors: 14, carpetArea: 990, superBuiltUp: 1100, reraNo: "P52100032567", facing: "East (Open View)", furnishing: "Semi-Furnished", possession: "Ready to Move", ownershipType: "Freehold", waterSupply: "24/7 Corporation + Tank", powerBackup: "Full Backup - DG Set", propertyTax: "₹8,500/year", maintenanceCharge: "₹3,800/month", flooringType: "Vitrified Tiles", ageOfProperty: "5 Years", gatedSecurity: "Yes - CCTV + Guards", balconies: 2, totalUnits: 350, availableFrom: "1st July 2026" }
  },
  {
    id: 12, title: "Beachfront Bungalow in ECR", type: "House", status: "For Sale",
    price: 55000000, pricePerSqft: 22000, bedrooms: 4, bathrooms: 3, area: 3000,
    yearBuilt: 2020, parking: 2,
    description: "Beachfront bungalow on East Coast Road, Chennai with direct beach access and Bay of Bengal views. Wraparound verandah and premium kitchen.",
    address: "78 East Coast Road, Injambakkam, Chennai 600115", city: "Chennai", state: "Tamil Nadu",
    coordinates: [12.9165, 80.2563],
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Beach Access", "Ocean Views", "Wraparound Verandah", "Outdoor Shower", "Bonfire Pit"],
    neighborhood: { walkScore: 30, transitScore: 25, bikeScore: 40, schools: ["SBOA School", "PSBB"], nearbyPlaces: ["Mahabalipuram - 15 km", "VGP Golden Beach - 3 km"], crimeRate: "Very Low", medianIncome: "₹12,00,000" },
    agent: { name: "Deepak Nair", phone: "+91 99020 34567", email: "deepak.n@propertyfinder.in" },
    featured: true, dateAdded: "2026-05-05",
    details: { plotNo: "78", flatNo: "N/A", floor: "Ground + 1st", totalFloors: 2, carpetArea: 2700, superBuiltUp: 3000, reraNo: "TN/01/Building/0234/2020", facing: "East (Beach Facing)", furnishing: "Fully Furnished", possession: "Ready to Move", ownershipType: "Freehold", waterSupply: "Borewell + Corporation", powerBackup: "Full Backup - DG + Solar", propertyTax: "₹55,000/year", maintenanceCharge: "N/A (Independent)", flooringType: "Natural Stone + Wood", ageOfProperty: "6 Years", gatedSecurity: "Yes - Private + CCTV", balconies: 4, totalUnits: 1, availableFrom: "Immediate", plotArea: "4500 sqft" }
  }
];

export default properties;
export const propertyTypes = ["All", "House", "Apartment", "Villa", "Townhouse", "Condo"];
export const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under ₹50L", min: 0, max: 5000000 },
  { label: "₹50L - ₹1Cr", min: 5000000, max: 10000000 },
  { label: "₹1Cr - ₹3Cr", min: 10000000, max: 30000000 },
  { label: "₹3Cr - ₹5Cr", min: 30000000, max: 50000000 },
  { label: "₹5Cr+", min: 50000000, max: Infinity },
  { label: "Under ₹30K/mo", min: 0, max: 30000 },
  { label: "₹30K - ₹50K/mo", min: 30000, max: 50000 }
];
export const bedroomOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];
export const statusOptions = ["All", "For Sale", "For Rent"];
export const cities = ["All Cities", "Mumbai", "Bengaluru", "Delhi", "Noida", "Kolkata", "Pune", "Chennai", "Lonavala", "Manali"];
