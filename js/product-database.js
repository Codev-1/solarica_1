const productDatabase = {
    "led-solar-street-light-30w": {
        name: "LED Solar Street Light 30W",
        category: "Solar Street Lighting Systems",
        company: "Solarica Energy India Pvt. Ltd.",
        description: "High-efficiency LED solar street light with motion sensor technology. Perfect for residential areas, pathways, and small roads.",
        features: ["Motion Sensor Technology", "High Efficiency LED", "Weather Resistant IP65", "Auto Dusk-to-Dawn"],
        specs: { "Power": "30W LED", "Luminous Flux": "3000-3500 lm", "Color Temp": "6000K", "Solar Panel": "60W Mono", "Battery": "12V 30Ah Lithium", "IP Rating": "IP65" },
        image: "products/solor street lights/LED-Solar-Street-Light-30W.png",
        basePrice: "₹12,500", installation: "₹2,000", warranty: "3 Years"
    },
    // PASTE THE REST OF YOUR MASSIVE DATABASE ARRAY HERE EXACTLY AS IT IS IN YOUR REACT CODE!
    "smart-solar-street-light-50w": {
    name: "Smart Solar Street Light 50W",
    category: "Solar Street Lighting Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Advanced smart solar street light with remote monitoring capabilities and app control. Ideal for commercial areas and main roads.",
    features: ["Remote Monitoring", "App Control", "Intelligent Dimming", "Die-cast Aluminum Body"],
    specs: { "Power": "50W Smart LED", "Luminous Flux": "5500 lm", "Color Temp": "6500K", "Solar Panel": "100W Mono", "Battery": "12V 50Ah Li-ion", "IP Rating": "IP66", "Control": "App/Remote" },
    image: "products/solor street lights/Smart-Solar-Street-Light-50W.jpg",
    basePrice: "₹18,500", installation: "₹3,000", warranty: "5 Years"
  },

   "all-in-one-solar-light-40w": {
    name: "All-in-One Solar Light 40W",
    category: "Solar Street Lighting Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Compact all-in-one solar street light solution with integrated design and PIR sensor technology. No cabling required, easy plug-and-play installation.",
    features: ["Cable-free Installation", "Integrated Design", "PIR Motion Sensor", "Maintenance Free"],
    specs: { "Power": "40W LED", "Design": "All-in-One", "Sensor": "PIR Motion", "Battery": "LiFePO4", "Luminous Flux": "4500 lm", "IP Rating": "IP65" },
    image: "products/solor street lights/all-in-one-solar-light-40w.jpg",
    basePrice: "₹16,000", installation: "₹1,500", warranty: "3 Years"
  },

   "motion-sensor-solar-light-25w": {
    name: "Motion Sensor Solar Light 25W",
    category: "Solar Street Lighting Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Wall-mounted solar light with advanced motion detection technology perfect for security applications, perimeter lighting, and garden walls.",
    features: ["Wall Mountable", "Security Light", "High Sensitivity Sensor", "Energy Saving Mode"],
    specs: { "Power": "25W LED", "Sensor": "PIR Motion", "Mount": "Wall", "Battery": "Li-ion", "Range": "6-8 meters", "IP Rating": "IP65" },
    image: "products/solor street lights/motion-sensor-solar-light-25w.png",
    basePrice: "₹9,500", installation: "₹800", warranty: "2 Years"
  },

   "high-power-solar-light-80w": {
    name: "High Power Solar Light 80W",
    category: "Solar Street Lighting Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "High-power solar street light designed for main roads, highways, and large industrial compounds with maximum brightness output and extended autonomy.",
    features: ["Maximum Brightness", "Highway Grade", "Extended Battery Life", "Heavy Duty Structure"],
    specs: { "Power": "80W LED", "Brightness": "High Output", "IP Rating": "IP67", "Battery": "Lithium Pack", "Luminous Flux": "9000 lm" },
    image: "products/solor street lights/high-power-solar-light-80w.png",
    basePrice: "₹28,000", installation: "₹3,000", warranty: "5 Years"
  },

   // 2. SOLAR WATER PUMPING SYSTEMS
  "solar-submersible-pump-3hp": {
    name: "Solar Submersible Pump 3HP",
    category: "Solar Water Pumping Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "High-efficiency solar submersible pump for agricultural irrigation with MPPT controller. Operates directly on solar power without batteries.",
    features: ["High Efficiency", "MPPT Controller", "Submersible Design", "Agricultural Use"],
    specs: { "Power": "3HP Motor", "Type": "Submersible", "Head": "100 meters", "Flow Rate": "5000 LPH", "Controller": "MPPT" },
    image: "products/solor water pumps/solar-submersible-pump-3hp.png",
    basePrice: "₹85,000", installation: "₹8,000", warranty: "5 Years"
  },
  "solar-surface-pump-5hp": {
    name: "Solar Surface Pump 5HP",
    category: "Solar Water Pumping Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Reliable surface monoblock pump for domestic water supply and canal irrigation needs with easy maintenance.",
    features: ["Reliable Performance", "Easy Maintenance", "Domestic Supply", "Cast Iron Body"],
    specs: { "Power": "5HP Motor", "Type": "Surface Mount", "Head": "80 meters", "Flow Rate": "8000 LPH", "Material": "Cast Iron" },
    image: "products/solor water pumps/solar-surface-pump-5hp.png",
    basePrice: "₹95,000", installation: "₹9,500", warranty: "5 Years"
  },
  "solar-borewell-pump-7hp": {
    name: "Solar Borewell Pump 7HP",
    category: "Solar Water Pumping Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Heavy-duty borewell pump for industrial applications and deep-water extraction with robust stainless steel construction.",
    features: ["Heavy Duty", "Industrial Grade", "Robust Construction", "Deep Extraction"],
    specs: { "Power": "7HP Motor", "Type": "Borewell", "Head": "150 meters", "Flow Rate": "12000 LPH", "Grade": "Industrial" },
    image: "products/solor water pumps/solar-borewell-pump-7hp.png",
    basePrice: "₹1,25,000", installation: "₹12,500", warranty: "5 Years"
  },
  "solar-centrifugal-pump-2hp": {
    name: "Solar Centrifugal Pump 2HP",
    category: "Solar Water Pumping Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Compact centrifugal pump for residential water transfer and small farm irrigation.",
    features: ["Compact Design", "Energy Efficient", "Residential Use", "Low Noise"],
    specs: { "Power": "2HP Motor", "Type": "Centrifugal", "Head": "40 meters", "Flow Rate": "4000 LPH", "Design": "Compact" },
    image: "products/solor water pumps/solar-centrifugal-pump-2hp.png",
    basePrice: "₹55,000", installation: "₹5,500", warranty: "5 Years"
  },
  "solar-deep-well-pump-10hp": {
    name: "Solar Deep Well Pump 10HP",
    category: "Solar Water Pumping Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "High-power deep well pump for large-scale irrigation and commercial water supply.",
    features: ["High Power", "Commercial Grade", "Deep Well", "Max Flow"],
    specs: { "Power": "10HP Motor", "Type": "Deep Well", "Head": "200 meters", "Flow Rate": "15000 LPH", "Grade": "Commercial" },
    image: "products/solor water pumps/solar-deep-well-pump-10hp.png",
    basePrice: "₹1,75,000", installation: "₹17,500", warranty: "5 Years"
  },
  "solar-pool-pump-1hp": {
    name: "Solar Pool Pump 1HP",
    category: "Solar Water Pumping Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Specialized silent pool pump for filtration and circulation. Runs 100% on solar.",
    features: ["Pool Filtration", "Water Circulation", "Silent Operation", "Corrosion Free"],
    specs: { "Power": "1HP Motor", "Type": "Pool Pump", "Flow Rate": "2000 LPH", "Application": "Pool", "Features": "Filtration" },
    image: "products/solor water pumps/solar-pool-pump-1hp.png",
    basePrice: "₹45,000", installation: "₹4,500", warranty: "3 Years"
  },

  // 3. SOLAR WATER HEATING SOLUTIONS
  "solar-water-heater-200l": {
    name: "Solar Water Heater 200L",
    category: "Solar Water Heating Solutions",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "High-efficiency solar water heater for residential use with flat plate collector technology. Provides hot water even on cloudy days.",
    features: ["Flat Plate Technology", "High Efficiency", "Stainless Steel Tank", "Weather Resistant"],
    specs: { "Capacity": "200 Liters", "Collector": "Flat Plate", "Install": "Rooftop", "Material": "Stainless Steel", "Efficiency": "High" },
    image: "products/solor water heaters/solar-water-heater-200l.jpg",
    basePrice: "₹35,000", installation: "₹3,500", warranty: "5 Years"
  },
  "solar-water-heater-300l": {
    name: "Solar Water Heater 300L",
    category: "Solar Water Heating Solutions",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Premium evacuated tube solar water heater for large families with superior heat retention and PUF insulation.",
    features: ["Evacuated Tube", "PUF Insulation", "Superior Retention", "Large Capacity"],
    specs: { "Capacity": "300 Liters", "Collector": "Evacuated Tube", "Tubes": "24 tubes", "Insulation": "PUF", "Efficiency": "Premium" },
    image: "products/solor water heaters/solar-water-heater-300l.jpg",
    basePrice: "₹48,000", installation: "₹4,800", warranty: "5 Years"
  },
  "solar-water-heater-500l": {
    name: "Solar Water Heater 500L",
    category: "Solar Water Heating Solutions",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Commercial grade solar water heater designed for hotels, hostels, and institutions. Heavy-duty ground mount installation included.",
    features: ["Commercial Grade", "Ground Mount", "High Capacity", "Heavy Duty"],
    specs: { "Capacity": "500 Liters", "Collector": "Flat Plate", "Grade": "Commercial", "Mount": "Ground Mount", "Material": "Heavy Duty" },
    image: "products/solor water heaters/solar-water-heater-500l.jpg",
    basePrice: "₹75,000", installation: "₹7,500", warranty: "5 Years"
  },
  "compact-solar-heater-150l": {
    name: "Compact Solar Heater 150L",
    category: "Solar Water Heating Solutions",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Compact thermosiphon solar water heater for small homes with wall mount installation.",
    features: ["Thermosiphon", "Compact Design", "Wall Mountable", "Space Saving"],
    specs: { "Capacity": "150 Liters", "Type": "Thermosiphon", "Install": "Wall Mount", "Design": "Compact", "Size": "Space Saving" },
    image: "products/solor water heaters/compact-solar-heater-150l.jpg",
    basePrice: "₹28,000", installation: "₹2,800", warranty: "3 Years"
  },
  "solar-water-heater-400l": {
    name: "Solar Water Heater 400L",
    category: "Solar Water Heating Solutions",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "High-performance evacuated tube heater for medium-sized buildings. Features 30 tubes for excellent heating efficiency.",
    features: ["High Performance", "30 Tubes", "Evacuated Tube", "Excellent Efficiency"],
    specs: { "Capacity": "400 Liters", "Collector": "Evacuated Tube", "Tubes": "30 tubes", "Performance": "High", "Efficiency": "Excellent" },
    image: "products/solor water heaters/solar-water-heater-400l.jpg",
    basePrice: "₹62,000", installation: "₹6,200", warranty: "5 Years"
  },
  "solar-water-heater-100l": {
    name: "Solar Water Heater 100L",
    category: "Solar Water Heating Solutions",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Budget-friendly solar water heater for small families with reliable flat plate technology.",
    features: ["Budget Friendly", "Reliable Quality", "Simple Installation", "Flat Plate"],
    specs: { "Capacity": "100 Liters", "Collector": "Flat Plate", "Quality": "Reliable", "Category": "Budget", "Installation": "Simple" },
    image: "products/solor water heaters/solar-water-heater-100l.jpg",
    basePrice: "₹22,000", installation: "₹2,200", warranty: "3 Years"
  },

  // 4. SOLAR GARDEN & DECORATIVE LIGHTS
  "solar-garden-light-fire": {
    name: "Solar Garden Light (Fire)",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Beautiful pathway lighting for gardens and walkways with warm white LED fire flame effect and automatic on/off control.",
    features: ["96 LEDs Fire Effect", "Dusk to Dawn Sensor", "Auto Mode Enabled", "IP65 Waterproof"],
    specs: { "LED": "96 nos", "Battery": "2000mAh Li-ion", "Panel": "1.3W Poly", "Backup": "Up to 8 Hours", "Material": "Fiber/ABS" },
    image: "products/solor garden lights/solar-garden-light-fire.png",
    basePrice: "₹1,150", installation: "N/A", warranty: "1 Year"
  },
  "garden-light-rgb": {
    name: "Decorative Garden Light RGB",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Decorative solar light with color changing features and remote control for beautiful garden ambiance.",
    features: ["Color Changing (RGB)", "Remote Control", "Decorative Ambiance", "Auto Sensor"],
    specs: { "Panel": "2V 50mA Poly", "Battery": "600mAh Ni-MH", "        Size": "5.5 x 37 cm", "Color": "RGB/Yellow", "Charging": "4-6 Hours" },
    image: "products/solor garden lights/garden-light-rgb.png",
    basePrice: "₹349", installation: "N/A", warranty: "N/A"
  },
  "solar-bollard-light-premium": {
    name: "Solar Garden Light (Premium Bollard)",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Modern bollard design solar light for driveways and garden borders with high brightness LED and robust stand.",
    features: ["Modern Bollard Design", "High Brightness", "Dusk to Dawn Sensor", "Heavy Duty Stand"],
    specs: { "LED": "96 nos", "Battery": "2000mAh Li-ion", "Panel": "1.3W Poly", "Height": "780mm", "Material": "MS Pipe/Fiber" },
    image: "products/solor garden lights/solar-bollard-light-premium.png",
    basePrice: "₹7,500", installation: "N/A", warranty: "1 Year"
  },
  "adjustable-spike-garden-light": {
    name: "Adjustable Spike Garden Light",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Adjustable spike light for highlighting plants and garden features with focused beam lighting.",
    features: ["Adjustable Angle", "Focused Beam", "Easy Spike Mount", "Dawn to Dusk Sensor"],
    specs: { "Panel": "0.35W Poly", "Battery": "600mAh Ni-MH", "Size": "8.5 x 36 cm", "Color": "Cool White", "Lighting": "6-8 Hours" },
    image: "products/solor garden lights/adjustable-spike-garden-light.png",
    basePrice: "₹349", installation: "N/A", warranty: "N/A"
  },
  "traditional-solar-lantern": {
    name: "Traditional Solar Lantern Light",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Traditional lantern style solar light with vintage design perfect for creating classic garden ambiance with motion sensor.",
    features: ["Vintage Lantern Design", "Motion Sensor", "High Power 120W", "Wide Beam Angle"],
    specs: { "LED": "240 nos", "Power": "120W", "Panel": "18W Poly", "Battery": "18Ah LiPO4", "Install Height": "3-5m" },
    image: "products/solor garden lights/traditional-solar-lantern.png",
    basePrice: "₹5,049", installation: "N/A", warranty: "N/A"
  },
  "solar-decorative-string-light": {
    name: "Solar Decorative String Light",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Decorative string lights with multiple LED bulbs perfect for parties and outdoor celebrations.",
    features: ["Decorative String", "Warm Yellow Glow", "Party Light", "Auto On/Off"],
    specs: { "Panel": "0.35W Poly", "Battery": "600mAh Ni-MH", "Length": "10 Meters", "Color": "Warm Yellow", "Backup": "6-8 Hours" },
    image: "products/solor garden lights/solar-decorative-string-light.png",
    basePrice: "₹349", installation: "N/A", warranty: "N/A"
  },
  
  // 5. SOLAR DECORATIVE LIGHTS
  "solar-string-lights-10m": {
    name: "Solar String Light 10M",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Beautiful string lights with warm white LEDs perfect for creating magical outdoor ambiance.",
    features: ["50 Fairy Lights", "8 Flash Modes", "IP65 Waterproof", "Auto On/Off"],
    specs: { "Power": "12W LED", "Length": "10 meters", "LEDs": "50", "Color": "Warm White", "Modes": "8 Flash modes" },
    image: "products/solor-decorative-lights/solar-string-lights-10m.jpg",
    basePrice: "₹3,500", installation: "₹400", warranty: "2 Years"
  },
  "solar-fairy-lights-20m": {
    name: "Solar Fairy Light 20M",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Elegant curtain-style decorative lights perfect for backdrop decoration and outdoor events.",
    features: ["Curtain Pattern", "Remote Control", "200 LEDs", "Backdrop Decor"],
    specs: { "Power": "8W LED", "Size": "3m x 3m", "LEDs": "200", "Pattern": "Curtain style", "Control": "Remote control" },
    image: "products/solor-decorative-lights/solar-fairy-lights-20m.jpg",
    basePrice: "₹4,800", installation: "₹600", warranty: "2 Years"
  },
  "solar-curtain-lights": {
    name: "Solar Curtain Light 15W",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Curtain-style decorative lights perfect for covering large areas with uniform lighting distribution.",
    features: ["Uniform Lighting", "300 LEDs", "Mesh Pattern", "Waterproof"],
    specs: { "Power": "15W LED", "Size": "2m x 1.5m", "LEDs": "300", "Pattern": "Curtain mesh", "IP Rating": "Waterproof" },
    image: "products/solor-decorative-lights/solar-curtain-lights.jpg",
    basePrice: "₹3,200", installation: "₹400", warranty: "2 Years"
  },
  "solar-net-lights": {
    name: "Solar Net Light 22W",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Net-style hanging lights perfect for roof edges and creating winter wonderland effects.",
    features: ["Icicle Drops", "Hanging Style", "Cool White", "Winter Effect"],
    specs: { "Power": "10W LED", "Length": "5 meters", "Drops": "20 Drops", "Color": "Cool White" },
    image: "products/solor-decorative-lights/solar-net-lights.jpg",
    basePrice: "₹4,200", installation: "₹500", warranty: "2 Years"
  },
  "solar-icicle-lights": {
    name: "Solar ICICLE Light 18W",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Colorful butterfly-shaped decorative lights that add whimsical charm to any garden space.",
    features: ["Butterfly Shapes", "Color Changing", "Multi-Color", "Whimsical Charm"],
    specs: { "Power": "18W LED", "Design": "Butterfly", "Quantity": "12", "Colors": "Multi-Color" },
    image: "products/solor-decorative-lights/solar-icicle-lights.jpg",
    basePrice: "₹2,800", installation: "₹300", warranty: "2 Years"
  },
  "solar-motif-lights": {
    name: "Solar Motif Lights 25W",
    category: "Solar Garden & Decorative Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Beautiful flower-shaped lights that bloom with color, perfect for garden and patio decoration.",
    features: ["Flower Shape", "Blooming Effect", "RGB Colors", "Patio Decor"],
    specs: { "Power": "25W LED", "Design": "Motif", "Quantity": "8 Flowers", "Colors": "RGB" },
    image: "products/solor-decorative-lights/solar-motif-lights.jpg",
    basePrice: "₹3,800", installation: "₹400", warranty: "2 Years"
  },

  // 6. SOLAR FLOOD & SECURITY LIGHTS
  "solar-flood-light-50w": {
    name: "Solar Flood Light 50W",
    category: "Solar Flood & Security Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "High-power solar flood light perfect for large area illumination with motion sensor technology.",
    features: ["High Power LED", "Motion Sensor", "Large Area Coverage", "IP66 Waterproof"],
    specs: { "Power": "50W LED", "Lumens": "5000", "Sensor": "Motion", "Battery": "Lithium 20Ah" },
    image: "products/solor flood lights/solar-flood-light-50w.jpeg",
    basePrice: "₹8,500", installation: "₹800", warranty: "3 Years"
  },
  "solar-security-flood-light-100w": {
    name: "Solar Security Flood Light 100W",
    category: "Solar Flood & Security Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Security flood light with motion detection and high-power LED for maximum coverage.",
    features: ["Security Light", "Motion Detection", "Max Coverage", "Dusk to Dawn"],
    specs: { "Power": "100W LED", "Lumens": "10000", "Sensor": "Motion", "Operation": "Dusk to Dawn" },
    image: "products/solor flood lights/solar-security-flood-light-100w.jpeg",
    basePrice: "₹12,500", installation: "₹1,200", warranty: "3 Years"
  },
  "solar-stadium-light-200w": {
    name: "Solar Stadium Light 200W",
    category: "Solar Flood & Security Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Professional stadium lighting for sports facilities with wide beam coverage.",
    features: ["Professional Grade", "Stadium Lighting", "Wide Beam", "Pole Mount"],
    specs: { "Power": "200W LED", "Lumens": "20000", "Grade": "Professional", "Beam": "Wide" },
    image: "products/solor flood lights/solar-stadium-light-200w.jpg",
    basePrice: "₹25,000", installation: "₹2,500", warranty: "5 Years"
  },
  "solar-rgb-flood-light-75w": {
    name: "Solar RGB Flood Light 75W",
    category: "Solar Flood & Security Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "RGB color changing flood light with smartphone control for decorative lighting.",
    features: ["Color Changing", "Smartphone Control", "Decorative", "IP65 Rated"],
    specs: { "Power": "75W RGB", "Colors": "16 Million", "Control": "App", "Features": "Color Changing" },
    image: "products/solor flood lights/solar-rgb-flood-light-75w.jpg",
    basePrice: "₹15,000", installation: "₹1,500", warranty: "3 Years"
  },
  "solar-emergency-flood-light-30w": {
    name: "Solar Emergency Flood Light 30W",
    category: "Solar Flood & Security Lights",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Portable emergency flood light with backup power and USB charging capability.",
    features: ["Portable Design", "Backup Power", "USB Charging", "Emergency Light"],
    specs: { "Power": "30W LED", "Design": "Portable", "Backup": "Emergency", "Charging": "USB" },
    image: "products/solor flood lights/solar-emergency-flood-light-30w.jpg",
    basePrice: "₹8,000", installation: "₹0", warranty: "2 Years"
  },

  // 7. SOLAR INVERTER SYSTEMS
  "solar-string-inverter-5kw": {
    name: "Solar String Inverter 5KW",
    category: "Solar Inverter Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "High-efficiency string inverter for residential solar installations with MPPT technology.",
    features: ["High Efficiency", "MPPT Technology", "Residential Use", "LCD Display"],
    specs: { "Power": "5KW", "Type": "String", "Efficiency": "97.5%", "MPPT": "2 Trackers" },
    image: "products/solor inverters/solar-string-inverter-5kw.png",
    basePrice: "₹45,000", installation: "₹4,500", warranty: "5 Years"
  },
  "solar-hybrid-inverter-10kw": {
    name: "Solar Hybrid Inverter 10KW",
    category: "Solar Inverter Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Advanced hybrid inverter with battery backup capability for commercial applications.",
    features: ["Advanced Hybrid", "Battery Backup", "Commercial Use", "WiFi Monitoring"],
    specs: { "Power": "10KW", "Type": "Hybrid", "Battery": "Compatible", "Efficiency": "98%" },
    image: "products/solor inverters/solar-hybrid-inverter-10kw.png",
    basePrice: "₹85,000", installation: "₹8,500", warranty: "5 Years"
  },
  "solar-micro-inverter-300w": {
    name: "Solar Micro Inverter 300W",
    category: "Solar Inverter Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Panel-level micro inverter for maximum energy harvest with individual panel optimization.",
    features: ["Panel Optimization", "Max Harvest", "Individual Monitor", "High Efficiency"],
    specs: { "Power": "300W", "Type": "Micro", "Level": "Panel Level", "Efficiency": "96%" },
    image: "products/solor inverters/solar-micro-inverter-300w.png",
    basePrice: "₹8,500", installation: "₹850", warranty: "10 Years"
  },
  "solar-string-inverter-20kw": {
    name: "Solar String Inverter 20KW",
    category: "Solar Inverter Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Industrial grade string inverter for large-scale installations with three-phase output.",
    features: ["Industrial Grade", "Large Scale", "Three Phase", "Heavy Duty"],
    specs: { "Power": "20KW", "Type": "String", "Phase": "Three Phase", "Grade": "Industrial", "Output": "Heavy Duty" },
    image: "products/solor inverters/solar-string-inverter-20kw.png",
    basePrice: "₹125,000", installation: "₹12,500", warranty: "5 Years"
  },
  "solar-hybrid-inverter-3kw": {
    name: "Solar Hybrid Inverter 3KW",
    category: "Solar Inverter Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Compact hybrid inverter with advanced MPPT technology for small residential systems.",
    features: ["Compact Design", "Advanced MPPT", "Small Residential", "Smart Control"],
    specs: { "Power": "3KW", "Type": "Hybrid", "Technology": "MPPT", "Control": "Smart" },
    image: "products/solor inverters/solar-hybrid-inverter-3kw.png",
    basePrice: "₹35,000", installation: "₹3,500", warranty: "5 Years"
  },
  "solar-string-inverter-50kw": {
    name: "Solar String Inverter 50KW",
    category: "Solar Inverter Systems",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "High-power string inverter for commercial solar projects with monitoring capabilities.",
    features: ["High Power", "Commercial Project", "Advanced Monitor", "High Voltage"],
    specs: { "Power": "50KW", "Type": "String", "Grade": "Commercial", "Monitoring": "Advanced" },
    image: "products/solor inverters/solar-string-inverter-50kw.png",
    basePrice: "₹285,000", installation: "₹28,500", warranty: "5 Years"
  },

  // 8. SOLAR PHOTOVOLTAIC MODULES
  "monocrystalline-solar-panel-400w": {
    name: "Monocrystalline Solar Panel 400W",
    category: "Solar Photovoltaic Modules",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "High-efficiency monocrystalline solar panel with 22% efficiency for residential installations.",
    features: ["High Efficiency", "Residential Use", "22% Efficiency", "25 Year Warranty"],
    specs: { "Power": "400W", "Technology": "Monocrystalline", "Efficiency": "22%", "Cells": "72" },
    image: "products/solor panel/monocrystalline-solar-panel-400w.png",
    basePrice: "₹18,000", installation: "₹1,800", warranty: "25 Years"
  },
  "polycrystalline-solar-panel-320w": {
    name: "Polycrystalline Solar Panel 320W",
    category: "Solar Photovoltaic Modules",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Cost-effective polycrystalline solar panel for commercial applications with reliable performance.",
    features: ["Cost Effective", "Commercial Use", "Reliable Perf.", "Aluminum Frame"],
    specs: { "Power": "320W", "Technology": "Polycrystalline", "Efficiency": "19%", "Cells": "72" },
    image: "products/solor panel/polycrystalline-solar-panel-320w.webp",
    basePrice: "₹14,000", installation: "₹1,400", warranty: "25 Years"
  },
  "bifacial-solar-panel-500w": {
    name: "Bifacial Solar Panel 500W",
    category: "Solar Photovoltaic Modules",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Advanced bifacial solar panel for utility-scale installations with dual-sided energy generation.",
    features: ["Advanced Bifacial", "Dual Sided Gen", "Utility Scale", "24% Efficiency"],
    specs: { "Power": "500W", "Technology": "Bifacial", "Efficiency": "24%", "Sides": "Dual" },
    image: "products/solor panel/bifacial-solar-panel-500w.jpg",
    basePrice: "₹22,000", installation: "₹2,200", warranty: "25 Years"
  },
  "monocrystalline-solar-panel-300w": {
    name: "Monocrystalline Solar Panel 300W",
    category: "Solar Photovoltaic Modules",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Compact monocrystalline panel perfect for small rooftops with excellent efficiency.",
    features: ["Compact Design", "Small Rooftops", "Excellent Eff.", "Residential Grade"],
    specs: { "Power": "300W", "Technology": "Monocrystalline", "Size": "Compact", "Efficiency": "20%" },
    image: "products/solor panel/monocrystalline-solar-panel-300w.jpg",
    basePrice: "₹13,500", installation: "₹1,350", warranty: "25 Years"
  },
  "high-efficiency-solar-panel-600w": {
    name: "High Efficiency Solar Panel 600W",
    category: "Solar Photovoltaic Modules",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "High-power solar panel for large commercial installations with maximum energy output.",
    features: ["High Power", "Large Commercial", "Max Output", "23% Efficiency"],
    specs: { "Power": "600W", "Technology": "Monocrystalline", "Efficiency": "23%", "Output": "High" },
    image: "products/solor panel/high-efficiency-solar-panel-600w.jpg",
    basePrice: "₹26,000", installation: "₹2,600", warranty: "25 Years"
  },
  "flexible-solar-panel-200w": {
    name: "Flexible Solar Panel 200W",
    category: "Solar Photovoltaic Modules",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Flexible solar panel for curved surfaces and mobile applications with lightweight design.",
    features: ["Flexible Design", "Curved Surface", "Mobile App", "Lightweight"],
    specs: { "Power": "200W", "Design": "Flexible", "Weight": "Lightweight", "Application": "Mobile" },
    image: "products/solor panel/flexible-solar-panel-200w.jpg",
    basePrice: "₹15,000", installation: "₹1,500", warranty: "10 Years"
  },

  // 9. COMMERCIAL & RESIDENTIAL LIGHTING
  "led-bulb-9w": {
    name: "LED Bulb 9W",
    category: "Commercial & Residential Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Energy-efficient LED bulb for home and office use with cool white light and long lifespan.",
    features: ["Energy Efficient", "Cool White", "Long Lifespan", "Home & Office"],
    specs: { "Power": "9W LED", "Color": "Cool White", "Lumens": "900", "Base": "B22" },
    image: "products/ac-lights/led-bulb-9w.png",
    basePrice: "₹150", installation: "₹50", warranty: "2 Years"
  },
  "cfl-bulb-20w": {
    name: "CFL Bulb 20W",
    category: "Commercial & Residential Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Compact fluorescent lamp with warm white light, perfect for general home lighting applications.",
    features: ["Compact Design", "Warm White", "General Lighting", "Standard Base"],
    specs: { "Power": "20W CFL", "Color": "Warm White", "Lumens": "1200", "Base": "B22" },
    image: "products/ac-lights/cfl-bulb-20w.png",
    basePrice: "₹120", installation: "₹50", warranty: "1 Year"
  },
  "led-tube-light-18w": {
    name: "LED Tube Light 18W",
    category: "Commercial & Residential Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "LED tube light for commercial and industrial applications with flicker-free operation.",
    features: ["Flicker Free", "Commercial Use", "Industrial Use", "Cool White"],
    specs: { "Power": "18W LED Tube", "Length": "4 Feet", "Grade": "Commercial", "Color": "Cool White" },
    image: "products/ac-lights/led-tube-light-18w.png",
    basePrice: "₹350", installation: "₹100", warranty: "2 Years"
  },
  "outdoor-led-light-30w": {
    name: "Outdoor LED Light 30W",
    category: "Commercial & Residential Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Waterproof LED light for outdoor applications with motion sensor and weather resistance.",
    features: ["Waterproof", "Motion Sensor", "Outdoor Use", "Weather Resistant"],
    specs: { "Power": "30W LED", "Rating": "Waterproof", "Sensor": "Motion", "Use": "Outdoor" },
    image: "products/ac-lights/outdoor-led-light-30w.png",
    basePrice: "₹1,200", installation: "₹200", warranty: "2 Years"
  },
  "smart-led-bulb-12w": {
    name: "Smart LED Bulb 12W",
    category: "Commercial & Residential Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Smart LED bulb with WiFi control and color changing capabilities for modern homes.",
    features: ["Smart Control", "WiFi Enabled", "Color Changing", "App Support"],
    specs: { "Power": "12W Smart", "Control": "WiFi", "Colors": "RGB", "App": "Smartphone" },
    image: "products/ac-lights/smart-led-bulb-12w.png",
    basePrice: "₹800", installation: "₹100", warranty: "2 Years"
  },
  "high-bay-led-50w": {
    name: "High Bay LED 50W",
    category: "Commercial & Residential Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "High bay LED light for warehouses and factories with high brightness and heat resistance.",
    features: ["High Bay", "Industrial Use", "High Brightness", "Heat Resistant"],
    specs: { "Power": "50W High Bay", "Grade": "Industrial", "Brightness": "High", "Use": "Warehouse" },
    image: "products/ac-lights/high-bay-led-50w.png",
    basePrice: "₹2,500", installation: "₹400", warranty: "3 Years"
  },

  // 10. INTERIOR & DECORATIVE LIGHTING
  "led-ceiling-light-24w": {
    name: "LED Ceiling Light 24W",
    category: "Interior & Decorative Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Modern LED ceiling light perfect for living rooms with dimmable warm white illumination.",
    features: ["Modern Design", "Dimmable", "Warm White", "Ceiling Mount"],
    specs: { "Power": "24W LED", "Type": "Ceiling", "Color": "Warm White", "Dimming": "Dimmable" },
    image: "products/home-lights/led-ceiling-light-24w.png",
    basePrice: "₹2,500", installation: "₹300", warranty: "3 Years"
  },
  "pendant-light-15w": {
    name: "Pendant Light 15W",
    category: "Interior & Decorative Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Stylish pendant light ideal for kitchen islands with adjustable height and modern design.",
    features: ["Stylish Design", "Adjustable Height", "Kitchen Ideal", "Modern Style"],
    specs: { "Power": "15W LED", "Type": "Pendant", "Height": "Adjustable", "Style": "Modern" },
    image: "products/home-lights/pendant-light-15w.png",
    basePrice: "₹3,200", installation: "₹400", warranty: "3 Years"
  },
  "wall-sconce-12w": {
    name: "Wall Sconce 12W",
    category: "Interior & Decorative Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Elegant wall sconce for bedroom ambient lighting with soft light and touch control.",
    features: ["Elegant Design", "Ambient Light", "Soft Light", "Touch Control"],
    specs: { "Power": "12W LED", "Type": "Wall", "Light": "Soft", "Control": "Touch" },
    image: "products/home-lights/wall-sconce-12w.png",
    basePrice: "₹2,800", installation: "₹350", warranty: "3 Years"
  },
  "table-lamp-8w": {
    name: "Table Lamp 8W",
    category: "Interior & Decorative Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Portable LED table lamp with USB charging capability for study and work areas.",
    features: ["Portable", "USB Charging", "Study Lamp", "Work Light"],
    specs: { "Power": "8W LED", "Type": "Table", "Feature": "Portable", "Charging": "USB" },
    image: "products/home-lights/table-lamp-8w.png",
    basePrice: "₹1,800", installation: "₹0", warranty: "2 Years"
  },
  "bathroom-light-18w": {
    name: "Bathroom Light 18W",
    category: "Interior & Decorative Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Waterproof ceiling light designed for bathrooms with IP65 rating and cool white light.",
    features: ["Waterproof", "IP65 Rated", "Bathroom Use", "Cool White"],
    specs: { "Power": "18W LED", "Rating": "IP65", "Type": "Ceiling", "Color": "Cool White" },
    image: "products/home-lights/bathroom-light-18w.png",
    basePrice: "₹2,200", installation: "₹300", warranty: "3 Years"
  },
  "chandelier-36w": {
    name: "Chandelier 36W",
    category: "Interior & Decorative Lighting",
    company: "Solarica Energy India Pvt. Ltd.",
    description: "Luxury LED chandelier for elegant living spaces with crystal design and remote control.",
    features: ["Luxury Design", "Crystal Style", "Remote Control", "Elegant Living"],
    specs: { "Power": "36W LED", "Type": "Chandelier", "Design": "Crystal", "Control": "Remote" },
    image: "products/home-lights/chandelier-36w.png",
    basePrice: "₹8,500", installation: "₹850", warranty: "3 Years"
  },

  // ==================================================
  // --- SOLARICA FABTECH PVT. LTD. (Structures & poles) ---
  // ==================================================

  // 11. LIGHTING ACCESSORIES & HARDWARE
  "high-mast-accessories-set": {
    name: "High Mast Accessories Set",
    category: "Lighting Accessories & Hardware",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Complete high mast accessory set designed for secure installation and long-term stability of high mast lighting systems.",
    features: ["Heavy Duty", "Corrosion Resistant", "Complete Kit", "High Stability"],
    specs: { "Components": "Bolts, Clamps", "Material": "Galvanized Steel", "Finish": "Corrosion Resistant", "Load": "Heavy Duty" },
    image: "products/light-accessories/high-mast-accessories-set.jpeg",
    basePrice: "On Request", installation: "Site Based", warranty: "5 Years"
  },
  "solar-light-accessories-kit": {
    name: "Solar light-accessories Kit",
    category: "Lighting Accessories & Hardware",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Complete accessory kit for solar street lights, including connectors, cable glands, mounting fittings, and protection components.",
    features: ["All-in-One Kit", "IP65 Rated", "UV Stabilized", "Easy Install"],
    specs: { "Components": "Glands, Connectors", "Material": "UV-Plastic", "IP Rating": "IP65", "Temp": "-10°C to 60°C" },
    image: "products/light-accessories/solar-light-accessories-kit.jpeg",
    basePrice: "On Request", installation: "Included", warranty: "2 Years"
  },
  "outdoor-battery-box-for-solar-lights": {
    name: "Outdoor Battery Box for Solar Lights",
    category: "Lighting Accessories & Hardware",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Weatherproof battery enclosure designed to safely house solar batteries for street lights, protecting them from rain, dust, and heat.",
    features: ["Weatherproof", "Secure Lock", "Ventilated", "Pole Mount"],
    specs: { "Type": "Battery Box", "Material": "Powder Coated GI", "IP Rating": "IP65", "Lock": "Key System" },
    image: "products/light-accessories/outdoor-battery-box-for-solar-lights.jpeg",
    basePrice: "On Request", installation: "Pole Mount", warranty: "2 Years"
  },
  "solar-light-assembly-unit": {
    name: "Solar Light Assembly Unit",
    category: "Lighting Accessories & Hardware",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Complete solar light assembly unit designed for quick and reliable installation of solar street and garden lights.",
    features: ["Pre-Wired", "Quick Install", "Durable", "Universal Fit"],
    specs: { "Type": "Assembly Unit", "Material": "Aluminum/GI", "Wiring": "Pre-Wired", "IP Rating": "IP65" },
    image: "products/light-accessories/solar-light-assembly-unit.png",
    basePrice: "On Request", installation: "Pole Mount", warranty: "2 Years"
  },
  "single-arm-bracket": {
    name: "Single Arm Bracket",
    category: "Lighting Accessories & Hardware",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Single arm mounting bracket designed for secure installation of street lights on poles. Built with high-strength GI steel.",
    features: ["High Strength", "Rust Proof", "Secure Fit", "Easy Mount"],
    specs: { "Length": "450 mm", "Material": "Hot Dip Galvanized", "Thickness": "3 mm", "Mount": "Clamp / Weld" },
    image: "products/light-accessories/single-arm-bracket.png",
    basePrice: "On Request", installation: "Not Required", warranty: "5 Years"
  },
  "double-arm-bracket": {
    name: "Double Arm Bracket",
    category: "Lighting Accessories & Hardware",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Heavy-duty double arm bracket for mounting two luminaires on wide roads and highways.",
    features: ["Dual Mount", "Heavy Duty", "Balanced Design", "Highway Grade"],
    specs: { "Length": "2 x 450 mm", "Material": "Mild Steel", "Thickness": "4 mm", "Mount": "Weld / Clamp" },
    image: "products/light-accessories/double-arm-bracket.png",
    basePrice: "On Request", installation: "Not Required", warranty: "5 Years"
  },
  "pole-base-plate": {
    name: "Pole Base Plate",
    category: "Lighting Accessories & Hardware",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Laser-cut heavy-duty base plate used for fixing poles on concrete foundations.",
    features: ["Laser Cut", "High Precision", "Heavy Load", "Zinc Coated"],
    specs: { "Size": "300 x 300 mm", "Thickness": "12 mm", "Holes": "4 Nos", "Finish": "Zinc Coated" },
    image: "products/light-accessories/pole-base-plate.png",
    basePrice: "On Request", installation: "Not Required", warranty: "3 Years"
  },

  // 12. STREET LIGHT poles & MASTS
  "decorative-street-light-pole--6m": {
    name: "6 Meter Decorative Street Pole",
    category: "Street Light Poles & Masts",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Elegant decorative pole for city beautification projects, gardens, and promenades.",
    features: ["Elegant Design", "City Beautification", "Durable Finish", "Foundation Mounted"],
    specs: { "Height": "6 Meter", "Material": "Mild Steel", "Thickness": "4 mm", "Finish": "Black Powder Coat" },
    image: "products/poles/decorative-street-light-pole-6m.png",
    basePrice: "On Request", installation: "As per site", warranty: "8 Years"
  },
  "solar-street-light-pole--9m": {
    name: "9 Meter Octagonal Street Light Pole",
    category: "Street Light Poles & Masts",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "9 meter octagonal pole designed for residential streets and main roads.",
    features: ["Octagonal Shape", "High Strength", "Galvanized", "Wind Resistant"],
    specs: { "Height": "9 Meter", "Material": "Hot Dip Galvanized", "Thickness": "3 mm", "Finish": "Zinc Coated" },
    image: "products/poles/solar-street-light-pole-9m.png",
    basePrice: "On Request", installation: "As per site", warranty: "10 Years"
  },
  "double-arm-street-light-pole--8m": {
    name: "8 Meter Double Arm Street Light Solar Pole",
    category: "Street Light Poles & Masts",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "8 meter solar street light pole with solar panel mounting arm. Suitable for highways.",
    features: ["Solar Mounting", "Double Arm", "Highway Grade", "Robust Design"],
    specs: { "Height": "8 Meter", "Material": "Hot Dip Galvanized", "Thickness": "3.5 mm", "Finish": "Powder Coated" },
    image: "products/poles/double-arm-street-light-pole-8m.png",
    basePrice: "On Request", installation: "As per site", warranty: "12 Years"
  },
  "high-mast-pole--12m": {
    name: "12 Meter High Mast Pole",
    category: "Street Light Poles & Masts",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Heavy-duty high mast pole for large open areas and industrial lighting requirements.",
    features: ["High Mast", "Heavy Duty", "Large Area", "Industrial Use"],
    specs: { "Height": "12 Meter", "Material": "Hot Dip Galvanized", "Thickness": "5 mm", "Finish": "Zinc + Powder" },
    image: "products/poles/high-mast-pole-12m.png",
    basePrice: "On Request", installation: "As per site", warranty: "15 Years"
  },
  "aluminum-garden-light-pole--3m": {
    name: "3 Meter Garden Light Pole",
    category: "Street Light Poles & Masts",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Compact garden light pole ideal for pathways, landscapes, and residential gardens.",
    features: ["Compact Size", "Garden Use", "Pathway Light", "Matte Finish"],
    specs: { "Height": "3 Meter", "Material": "Powder Coated MS", "Thickness": "2.5 mm", "Finish": "Black Matte" },
    image: "products/poles/aluminum-garden-light-pole-3m.webp",
    basePrice: "On Request", installation: "As per site", warranty: "5 Years"
  },

  // 13. control-panels & AUTOMATION
  "solar-street-light-control-panel": {
    name: "Solar Street Light Control Panel",
    category: "Control Panels & Automation",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Automatic control panel for solar street light systems with smart charging and protection.",
    features: ["Auto ON/OFF", "Overcharge Protection", "Weatherproof", "PWM Based"],
    specs: { "Type": "Controller", "Material": "GI Steel", "Usage": "Street Lighting", "Protection": "Overcharge" },
    image: "products/control-panels/solar-street-light-control-panel.png",
    basePrice: "On Request", installation: "Panel Mounted", warranty: "2 Years"
  },
  "hybrid-solar-controller-panel": {
    name: "Hybrid Solar Controller Panel",
    category: "Control Panels & Automation",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Hybrid controller panel for solar and grid power with intelligent battery management.",
    features: ["Hybrid Mode", "Battery Management", "LCD Display", "Solar + Grid"],
    specs: { "Type": "Hybrid Controller", "Material": "Mild Steel", "Display": "LCD", "Usage": "Industrial" },
    image: "products/control-panels/hybrid-solar-controller-panel.jpg",
    basePrice: "On Request", installation: "Wall Mounted", warranty: "2 Years"
  },
  "pwm-solar-charge-controller-box": {
    name: "PWM Solar Charge Controller Box",
    category: "Control Panels & Automation",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Compact PWM charge controller box for garden and small solar lighting systems.",
    features: ["PWM Charging", "Compact Size", "IP65 Rated", "Garden Use"],
    specs: { "Type": "PWM Controller", "Material": "Aluminum", "Size": "Compact", "Mounting": "Wall / Pole" },
    image: "products/control-panels/pwm-solar-charge-controller-box.jpeg",
    basePrice: "On Request", installation: "Wall / Pole", warranty: "1 Year"
  },
  "mppt-solar-control-panel": {
    name: "MPPT Solar Control Panel",
    category: "Control Panels & Automation",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "High-efficiency MPPT based solar control panel for professional street light projects.",
    features: ["MPPT Tech", "High Efficiency", "Digital Display", "Surge Protection"],
    specs: { "Type": "MPPT Controller", "Material": "Mild Steel", "Efficiency": "High", "Display": "Digital" },
    image: "products/control-panels/mppt-solar-control-panel.jpeg",
    basePrice: "On Request", installation: "Pole / Wall", warranty: "3 Years"
  },
  "all-in-one-solar-controller-unit": {
    name: "All-in-One Solar Controller Unit",
    category: "Control Panels & Automation",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Integrated solar controller unit with battery management and dusk-to-dawn automation.",
    features: ["Integrated BMS", "Auto Dusk-Dawn", "Plug & Play", "Automatic"],
    specs: { "Type": "All-in-One", "Material": "Aluminum", "Usage": "Street & Garden", "Mounting": "Inside Pole" },
    image: "products/control-panels/all-in-one-solar-controller-unit.jpeg",
    basePrice: "On Request", installation: "Inside Pole", warranty: "2 Years"
  },
  "industrial-lighting-control-panel": {
    name: "Industrial Lighting Control Panel",
    category: "Control Panels & Automation",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Heavy-duty industrial control panel for large outdoor and infrastructure lighting systems.",
    features: ["Heavy Duty", "Surge Protection", "Industrial Grade", "MCB Protection"],
    specs: { "Type": "Industrial Panel", "Material": "Heavy Duty Steel", "Usage": "Infrastructure", "Mounting": "Floor / Wall" },
    image: "products/control-panels/industrial-lighting-control-panel.jpeg",
    basePrice: "On Request", installation: "Floor / Wall", warranty: "3 Years"
  },

  // 14. SOLAR HOME & PORTABLE PRODUCTS
  "solar-home-lighting-kit": {
    name: "Solar Home Lighting Kit",
    category: "Solar Home & Portable Products",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Complete solar home lighting kit with panel, battery, controller, and LED lamps for basic home illumination.",
    features: ["Off-Grid Kit", "4 LED Lamps", "USB Charging", "6-8 Hours Backup"],
    specs: { "Panel": "40W Poly", "Battery": "12V 20Ah", "Controller": "PWM", "Output": "4 LED + USB" },
    image: "products/Solor Home Products/solar-home-lighting-kit.jpg",
    basePrice: "On Request", installation: "Wall Mounted", warranty: "1 Year"
  },
  "solar-inverter-for-home": {
    name: "Solar Inverter for Home",
    category: "Solar Home & Portable Products",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "High-efficiency solar inverter for home backup and off-grid solar applications.",
    features: ["Pure Sine Wave", "Solar & Grid", "High Efficiency", "Overload Protect"],
    specs: { "Capacity": "850 VA", "Input": "12V DC", "Output": "230V AC", "Efficiency": "90%" },
    image: "products/Solor Home Products/solar-inverter-for-home.jpeg",
    basePrice: "On Request", installation: "Wall Mounted", warranty: "2 Years"
  },
  "solar-power-pack-for-homes": {
    name: "Solar Power Pack for Homes",
    category: "Solar Home & Portable Products",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Compact solar power pack with built-in battery and inverter for home energy needs.",
    features: ["All-in-One", "Portable", "Lithium Battery", "Digital Display"],
    specs: { "Capacity": "500 Wh", "Battery": "Lithium", "Ports": "AC+DC+USB", "Type": "Portable" },
    image: "products/Solor Home Products/solar-power-pack-for-homes.webp",
    basePrice: "On Request", installation: "Plug & Play", warranty: "1 Year"
  },
  "rooftop-solar-panel--150w": {
    name: "Rooftop Solar Panel – 150W",
    category: "Solar Home & Portable Products",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "High-efficiency 150W rooftop solar panel for residential power generation.",
    features: ["High Efficiency", "Residential Use", "Tempered Glass", "Anodized Frame"],
    specs: { "Power": "150W", "Type": "Polycrystalline", "Voltage": "18-20V", "Mounting": "Rooftop" },
    image: "products/Solor Home Products/rooftop-solar-panel--150w.jpeg",
    basePrice: "On Request", installation: "Rooftop", warranty: "25 Years"
  },
  "solar-fan-system": {
    name: "Solar Fan System",
    category: "Solar Home & Portable Products",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Energy-efficient solar fan system for ventilation and cooling in off-grid areas.",
    features: ["DC Solar Fan", "3 Speed Control", "Low Noise", "Direct Solar"],
    specs: { "Power": "25W", "Size": "16 Inch", "Operation": "Solar/Battery", "Mount": "Ceiling/Wall" },
    image: "products/Solor Home Products/solar-fan-system.png",
    basePrice: "On Request", installation: "Ceiling/Wall", warranty: "1 Year"
  },
  "solar-mobile-charging-station": {
    name: "Solar Mobile Charging Station",
    category: "Solar Home & Portable Products",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Compact solar charging station for mobile phones and small electronic devices.",
    features: ["Solar Charging", "4 USB Ports", "Portable", "Built-in Battery"],
    specs: { "Panel": "10W", "Output": "4 x USB", "Battery": "Built-in", "Type": "Portable" },
    image: "products/Solor Home Products/solar-mobile-charging-station.webp",
    basePrice: "On Request", installation: "Tabletop", warranty: "1 Year"
  },

  // 15. SOLAR MOUNTING STRUCTURES
  "rooftop-solar-structure--residential": {
    name: "Rooftop Solar Structure – Residential",
    category: "Solar Mounting Structures",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Compact rooftop solar mounting structure designed for residential installations with high wind resistance.",
    features: ["High Wind Load", "Galvanized Steel", "Tilted Design", "Long Life"],
    specs: { "Type": "Rooftop", "Material": "GI Steel", "Wind Load": "150 km/h", "Life Span": "25 Years" },
    image: "products/solar-structures/rooftop-solar-structure--residential.png",
    basePrice: "On Request", installation: "Site Based", warranty: "10 Years"
  },
  "rooftop-solar-structure--commercial": {
    name: "Rooftop Solar Structure – Commercial",
    category: "Solar Mounting Structures",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Lightweight aluminum rooftop mounting structure ideal for commercial buildings and large rooftops.",
    features: ["Lightweight", "Aluminum Body", "Corrosion Free", "Low Load"],
    specs: { "Type": "Commercial", "Material": "Aluminum", "Wind Load": "140 km/h", "Life Span": "25 Years" },
    image: "products/solar-structures/rooftop-solar-structure-commercial.png",
    basePrice: "On Request", installation: "Site Based", warranty: "12 Years"
  },
  "long-railing-structure": {
    name: "Long Railing Structure",
    category: "Solar Mounting Structures",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Heavy-duty long railing structure designed for industrial sites, solar plants, and boundary protection.",
    features: ["Heavy Duty", "Modular Design", "High Strength", "Hot Dip Galvanized"],
    specs: { "Type": "Railing", "Material": "GI / Mild Steel", "Height": "900-1500mm", "Wind Load": "150 km/h" },
    image: "products/solar-structures/long-railing-structure.png",
    basePrice: "On Request", installation: "Site Based", warranty: "10 Years"
  },
  "short-mono-rail-structure": {
    name: "Short Mono Rail Structure",
    category: "Solar Mounting Structures",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Compact mono rail structure designed for short-span solar installations on rooftops.",
    features: ["Compact Rail", "Precise Align", "Anodized", "Easy Mount"],
    specs: { "Type": "Mono Rail", "Material": "Aluminum/GI", "Length": "600-1200mm", "Wind Load": "140 km/h" },
    image: "products/solar-structures/short-mono-rail-structure.png",
    basePrice: "On Request", installation: "Site Based", warranty: "8 Years"
  },
  "solar-carport-structure": {
    name: "Solar Carport Structure",
    category: "Solar Mounting Structures",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Solar carport structure providing parking shade while generating clean solar energy.",
    features: ["Dual Use", "Parking Shade", "Power Gen", "Rainwater Channel"],
    specs: { "Type": "Carport", "Material": "GI Steel", "Capacity": "2-20 Cars", "Wind Load": "150 km/h" },
    image: "products/solar-structures/solar-carport-structure.png",
    basePrice: "On Request", installation: "Site Based", warranty: "12 Years"
  },
  "commercial-solar-shed-structure": {
    name: "Commercial Solar Shed Structure",
    category: "Solar Mounting Structures",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Large-span Commercial solar shed structure for factories and warehouses with high load capacity.",
    features: ["Large Span", "Heavy Load", "Industrial Use", "High Durability"],
    specs: { "Type": "Commercial Shed", "Material": "GI Steel", "Wind Load": "180 km/h", "Life Span": "30 Years" },
    image: "products/solar-structures/commercial-solar-shed-structure.jpg",
    basePrice: "On Request", installation: "Site Based", warranty: "15 Years"
  },

  // 16. INDUSTRIAL FABRICATION & WORKS
  "industrial-fabrication-work": {
    name: "Industrial Fabrication Work",
    category: "Industrial Fabrication & Works",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Custom industrial fabrication services for heavy-duty and large-scale applications.",
    features: ["Custom Engineering", "Heavy Duty", "High Precision", "Welding & Cutting"],
    specs: { "Type": "Fabrication", "Material": "Mild Steel", "Precision": "High", "Life Span": "20+ Years" },
    image: "products/industrial-works/industrial-fabrication-work.webp",
    basePrice: "On Request", installation: "Project Based", warranty: "Project Based"
  },
  "warehouse-shed-structure": {
    name: "Warehouse Shed Structure",
    category: "Industrial Fabrication & Works",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Pre-engineered shed structures for warehouses and factories with long life and wide span.",
    features: ["Pre-Engineered", "Wide Span", "Long Life", "Hot Dip Galvanized"],
    specs: { "Type": "Shed", "Material": "GI Steel", "Wind Load": "160 km/h", "Roof": "Metal Sheet" },
    image: "products/industrial-works/warehouse-shed-structure.jpg",
    basePrice: "On Request", installation: "Site Based", warranty: "15 Years"
  },
  "solar-plant-installation-work": {
    name: "Solar Plant Installation Work",
    category: "Industrial Fabrication & Works",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Complete turnkey solar plant installation with expert team and fast execution.",
    features: ["Turnkey Project", "Expert Team", "Fast Execution", "Safety Standards"],
    specs: { "Type": "Installation", "Scale": "Small to Large", "Mounting": "Rooftop/Ground", "Support": "End-to-End" },
    image: "products/industrial-works/solar-plant-installation-work.webp",
    basePrice: "On Request", installation: "Included", warranty: "Project Based"
  },
  "industrial-pipe-fabrication": {
    name: "Industrial Pipe Fabrication",
    category: "Industrial Fabrication & Works",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Precision pipe fabrication for industrial and utility projects with high pressure tolerance.",
    features: ["Precision Bending", "High Pressure", "Welding", "Utility Grade"],
    specs: { "Type": "Pipe Fab", "Material": "Mild Steel", "Accuracy": "High", "Life Span": "20 Years" },
    image: "products/industrial-works/industrial-pipe-fabrication.jpg",
    basePrice: "On Request", installation: "Scope Based", warranty: "Project Based"
  },
  "metal-roofing-structure": {
    name: "Metal Roofing Structure",
    category: "Industrial Fabrication & Works",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Industrial roofing and metal structure solutions with lightweight and weatherproof design.",
    features: ["Lightweight", "Weatherproof", "Custom Layout", "Protective Finish"],
    specs: { "Type": "Roofing", "Material": "Aluminum", "Design": "Custom", "Life Span": "25 Years" },
    image: "products/industrial-works/metal-roofing-structure.jpeg",
    basePrice: "On Request", installation: "Site Based", warranty: "12 Years"
  },
  "electrical-panel-installation": {
    name: "Electrical Panel Installation",
    category: "Industrial Fabrication & Works",
    company: "Solarica Fabtech Pvt. Ltd.",
    description: "Professional electrical panel and system installation with certified industrial standards.",
    features: ["Certified Install", "Industrial Grade", "Safety Compliant", "Surge Protection"],
    specs: { "Type": "Electrical", "Wiring": "Safe", "Compliance": "IS Standards", "Mounting": "Wall/Floor" },
    image: "products/industrial-works/electrical-panel-installation.jpeg",
    basePrice: "On Request", installation: "Included", warranty: "Service Warranty"
  },

  // ==================================================
  // --- SOLARICA GREENWHEELS PVT. LTD. (EV & Batteries) ---
  // ==================================================

  // 17. ELECTRIC VEHICLE CHARGERS
  "home-ev-charger--3.3kw": {
    name: "Home EV Charger – 3.3kW",
    category: "Electric Vehicle Chargers",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Compact AC home charger designed for daily EV charging with built-in safety protection and smart monitoring.",
    features: ["Compact Design", "Built-in Safety", "Smart Protection", "Residential Use"],
    specs: { "Power Output": "3.3 kW", "Input Voltage": "230V AC", "Protection": "Over Voltage", "IP Rating": "IP54", "Connector": "Type 2" },
    image: "products/ev-chargers/home-ev-charger-3.3kw.jpeg",
    basePrice: "On Request", installation: "Optional", warranty: "2 Years"
  },
  "smart-ev-charger--7.4kw": {
    name: "Home EV Charger – 7.4kW",
    category: "Electric Vehicle Chargers",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "High-speed smart wallbox charger with WiFi connectivity and OCPP support for modern homes and apartments.",
    features: ["WiFi Enabled", "OCPP Support", "High Speed", "Smart Monitoring"],
    specs: { "Power Output": "7 kW", "Connectivity": "WiFi / OCPP", "Connector": "Type 2", "Safety": "RCD, Surge", "IP Rating": "IP55" },
    image: "products/ev-chargers/smart-ev-charger-7.4kw.webp",
    basePrice: "On Request", installation: "As per site", warranty: "3 Years"
  },
  "portable-ev-charger--3kw": {
    name: "Portable EV Charger – 3kW",
    category: "Electric Vehicle Chargers",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Lightweight portable EV charger for emergency and travel charging needs with plug-and-play operation.",
    features: ["Plug & Play", "Lightweight", "Travel Friendly", "Emergency Use"],
    specs: { "Power Output": "3 kW", "Connector": "Type 2", "Cable Length": "5 Meter", "Protection": "Overheat", "IP Rating": "IP44" },
    image: "products/ev-chargers/portable-ev-charger-3kw.jpeg",
    basePrice: "On Request", installation: "Not Required", warranty: "1 Year"
  },
  "smart-socket-ev-charger": {
    name: "Smart Socket EV Charger",
    category: "Electric Vehicle Chargers",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Smart 15A socket for EV charging with App control and energy monitoring.",
    features: ["15A Socket", "App Control", "Energy Monitoring", "Easy Install"],
    specs: { "Power Output": "3 kW", "Connector": "Universal", "Control": "Mobile App", "Monitoring": "Live Stats" },
    image: "products/ev-chargers/smart-socket-ev-charger.webp",
    basePrice: "On Request", installation: "Not Required", warranty: "1 Year"
  },
  "wallbox-ev-charger--11kw": {
    name: "Wallbox EV Charger – 11kW",
    category: "Electric Vehicle Chargers",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Compact wallbox charger for fast home charging with LED indicators.",
    features: ["11kW Output", "Compact Design", "LED Indicator", "Weatherproof"],
    specs: { "Power Output": "11 kW", "Connector": "Type 2", "IP Rating": "IP54", "Mounting": "Wall" },
    image: "products/ev-chargers/wallbox-ev-charger-11kw.jpg",
    basePrice: "On Request", installation: "Site Based", warranty: "2 Years"
  },
  "type-2-charging-cable": {
    name: "Type-2 Charging Cable",
    category: "Electric Vehicle Chargers",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "High-quality Type-2 to Type-2 charging cable for universal EV compatibility.",
    features: ["Type 2 to Type 2", "5 Meter Length", "Carry Bag", "Heavy Duty"],
    specs: { "Cable Length": "5 Meter", "Connector": "Type 2", "Rating": "32A", "IP Rating": "IP55" },
    image: "products/ev-chargers/type-2-charging-cable.jpeg",
    basePrice: "On Request", installation: "Not Required", warranty: "1 Year"
  },

  // 18. EV charging-station
  "commercial-ac-charger--22kw": {
    name: "Commercial AC Charger – 22kW",
    category: "Charging Stations",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "High-capacity AC charger for offices, malls, and parking complexes with RFID access control.",
    features: ["RFID Access", "Dual Gun Option", "Commercial Grade", "OCPP Compatible"],
    specs: { "Power Output": "22 kW", "Input Voltage": "415V AC", "Auth": "RFID", "Mounting": "Wall/Pole", "IP Rating": "IP55" },
    image: "products/charging-station/commercial-ac-charger-22kw.jpeg",
    basePrice: "On Request", installation: "Commercial Setup", warranty: "3 Years"
  },
  "dc-fast-charger--30kw": {
    name: "DC Fast Charger – 30kW",
    category: "Charging Stations",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Public DC fast charger for highways and charging-station with rapid charging capability and touchscreen interface.",
    features: ["Rapid Charging", "Touch Screen", "Highway Use", "Forced Air Cooling"],
    specs: { "Power Output": "30 kW", "Connectors": "CCS / CHAdeMO", "Efficiency": "≥95%", "Display": "Touch Screen", "IP Rating": "IP54" },
    image: "products/charging-station/dc-fast-charger-30kw.jpeg",
    basePrice: "On Request", installation: "Site Based", warranty: "3 Years"
  },
  "ultra-fast-ev-charger--60kw": {
    name: "Ultra Fast EV Charger – 60kW",
    category: "Charging Stations",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Ultra-fast DC charger for fleet operators and public charging hubs with dual gun and high throughput.",
    features: ["Ultra Fast", "Dual Gun", "Fleet Ready", "Liquid/Air Cooling"],
    specs: { "Power Output": "60 kW", "Connectors": "CCS Dual", "Communication": "OCPP 1.6", "Display": "7-inch Touch", "Warranty": "5 Years" },
    image: "products/charging-station/ultra-fast-ev-charger-60kw.jpg",
    basePrice: "On Request", installation: "Turnkey", warranty: "5 Years"
  },
  "public-ev-charging-station--dual-gun": {
    name: "Public EV Charging Station – Dual Gun",
    category: "Charging Stations",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Public dual-gun EV charging station with integrated billing and payment systems.",
    features: ["Dual Gun", "Bill Payment", "Touch Screen", "Commercial Grade"],
    specs: { "Power Output": "Varies", "Connectors": "Dual Type 2", "Payment": "RFID/App", "Display": "Touch" },
    image: "products/charging-station/public-ev-charging-station-dual-gun.webp",
    basePrice: "On Request", installation: "Commercial Setup", warranty: "3 Years"
  },
  "solar-ev-charging-station": {
    name: "Solar EV Charging Station",
    category: "Charging Stations",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "100% green solar-powered EV charging station with integrated battery storage.",
    features: ["Solar Powered", "Off-Grid", "Integrated Battery", "Eco-Friendly"],
    specs: { "Power Output": "Custom", "Source": "Solar PV", "Storage": "Lithium BMS", "Grid": "Off-Grid/Hybrid" },
    image: "products/charging-station/solar-ev-charging-station.webp",
    basePrice: "On Request", installation: "Turnkey", warranty: "5 Years"
  },
  "bus-truck-heavy-duty-charger": {
    name: "Bus & Truck Heavy Duty Charger",
    category: "Charging Stations",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Heavy-duty 120kW+ DC charger designed specifically for electric buses and heavy vehicles.",
    features: ["120kW DC", "Heavy Vehicle", "Liquid Cooled", "Ultra Fast"],
    specs: { "Power Output": "120kW+", "Vehicle": "Bus/Truck", "Cooling": "Liquid", "Connectors": "CCS Dual" },
    image: "products/charging-station/bus-truck-heavy-duty-charger.webp",
    basePrice: "On Request", installation: "Turnkey", warranty: "5 Years"
  },

  // 19. ELECTRIC VEHICLE BATTERIES
  "lithium-ev-battery--48v-50ah": {
    name: "Lithium EV Battery – 48V 50Ah",
    category: "Electric Vehicle Battery Systems",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Compact and lightweight lithium battery designed for electric two-wheelers with fast charging and long cycle life.",
    features: ["Fast Charging", "Long Cycle Life", "Smart BMS", "Lightweight"],
    specs: { "Voltage": "48V", "Capacity": "50Ah", "Chemistry": "LiFePO4", "Cycle Life": "2000+", "Warranty": "3 Years" },
    image: "products/ev-batteries/lithium-ev-battery-48v-50ah.webp",
    basePrice: "On Request", installation: "Plug & Play", warranty: "3 Years"
  },
  "lithium-ev-battery--60v-60ah": {
    name: "Lithium EV Battery – 60V 60Ah",
    category: "Electric Vehicle Battery Systems",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "High-capacity 60V lithium battery for electric scooters and light commercial EVs with enhanced safety features.",
    features: ["High Capacity", "Enhanced Safety", "Advanced Protection", "Vehicle Integrated"],
    specs: { "Voltage": "60V", "Capacity": "60Ah", "Chemistry": "Lithium Ion", "Cycle Life": "2500+", "Charging": "4-5 Hours" },
    image: "products/ev-batteries/lithium-ev-battery-60v-60ah.jpeg",
    basePrice: "On Request", installation: "Vehicle Fitment", warranty: "3 Years"
  },
  "ev-battery-pack--72v-80ah": {
    name: "EV Battery Pack – 72V 80Ah",
    category: "Electric Vehicle Battery Systems",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "High-power EV battery pack for performance vehicles with thermal protection and long range support.",
    features: ["High Power", "Thermal Protection", "Long Range", "Smart BMS"],
    specs: { "Voltage": "72V", "Capacity": "80Ah", "Range": "Up to 120 km", "Cycle Life": "3000+", "Warranty": "4 Years" },
    image: "products/ev-batteries/ev-battery-pack-72v-80ah.jpeg",
    basePrice: "On Request", installation: "Custom Fitment", warranty: "4 Years"
  },
  "commercial-ev-battery--96v": {
    name: "Commercial EV Battery – 96V",
    category: "Electric Vehicle Battery Systems",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Industrial-grade 96V battery for e-rickshaws and cargo EVs with heavy-duty performance and multi-level protection.",
    features: ["Industrial Grade", "Heavy Duty", "Multi-Level Protection", "High Current"],
    specs: { "Voltage": "96V", "Capacity": "100Ah", "Chemistry": "Lithium Ion", "Cooling": "Industrial", "Warranty": "5 Years" },
    image: "products/ev-batteries/commercial-ev-battery-96v.webp",
    basePrice: "On Request", installation: "Vehicle Integration", warranty: "5 Years"
  },
  "home-energy-storage-battery--5kwh": {
    name: "Home Energy Storage Battery – 5kWh",
    category: "Electric Vehicle Battery Systems",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Wall-mounted home battery for solar systems and backup power with silent operation and mobile app monitoring.",
    features: ["Wall Mounted", "Silent Operation", "App Monitoring", "Hybrid Support"],
    specs: { "Capacity": "5 kWh", "Voltage": "48V", "Chemistry": "LiFePO4", "Cycle Life": "6000+", "Warranty": "5 Years" },
    image: "products/ev-batteries/home-energy-storage-battery-5kwh.webp",
    basePrice: "On Request", installation: "Wall Mount", warranty: "5 Years"
  },
  "portable-power-battery--1kwh": {
    name: "Portable Power Battery – 1kWh",
    category: "Electric Vehicle Battery Systems",
    company: "Solarica Greenwheels Pvt. Ltd.",
    description: "Compact portable solar power station for outdoor use, emergency backup, and travel.",
    features: ["Compact Portable", "AC/DC Output", "Solar Charging", "Digital LCD"],
    specs: { "Capacity": "1 kWh", "Outputs": "AC + USB + DC", "Cycle Life": "2000+", "Weight": "Portable", "Usage": "Indoor/Outdoor" },
    image: "products/ev-batteries/portable-power-battery-1kwh.jpeg",
    basePrice: "On Request", installation: "Plug & Play", warranty: "2 Years"
  },

  // ==================================================
  // --- SOLARICA SYSTEMS PVT. LTD. (Services & AMC) ---
  // ==================================================

  // 20. ANNUAL MAINTENANCE CONTRACTS
  "solar-rooftop-amc--basic": {
    name: "Solar Rooftop AMC – Basic",
    category: "Annual Maintenance Contracts",
    company: "Solarica Systems Pvt. Ltd.",
    description: "Basic annual maintenance contract for residential solar rooftop systems, ensuring clean panels and stable performance.",
    features: ["Panel Cleaning", "Inverter Check", "Performance Review", "Business Hours Support"],
    specs: { "Visit Frequency": "1 Time / Year", "Response Time": "72 Hours", "System Size": "Up to 5 kW", "Spare Parts": "Chargeable" },
    image: "products/amc-services/solar-rooftop-amc--basic.jpeg",
    basePrice: "On Request", installation: "Included", warranty: "1 Year"
  },
  "solar-rooftop-amc--premium": {
    name: "Solar Rooftop AMC – Premium",
    category: "Annual Maintenance Contracts",
    company: "Solarica Systems Pvt. Ltd.",
    description: "Premium AMC with proactive maintenance, inverter service, and detailed performance reporting for larger systems.",
    features: ["Proactive Maint.", "Detailed Report", "Remote Monitor", "Emergency Visit"],
    specs: { "Visit Frequency": "Quarterly", "Response Time": "24 Hours", "System Size": "Up to 20 kW", "Spare Parts": "Discounted" },
    image: "products/amc-services/solar-rooftop-amc--premium.jpg",
    basePrice: "On Request", installation: "Included", warranty: "1 Year"
  },
  "ev-charger-amc--standard": {
    name: "EV Charger AMC – Standard",
    category: "Annual Maintenance Contracts",
    company: "Solarica Systems Pvt. Ltd.",
    description: "Standard maintenance plan for home and commercial ev-chargers with safety testing and firmware updates.",
    features: ["Safety Testing", "Firmware Updates", "Connector Check", "Remote Support"],
    specs: { "Visit Frequency": "Bi-Annual", "Response Time": "48 Hours", "Charger Type": "AC / DC", "Remote Support": "Included" },
    image: "products/amc-services/ev-charger-amc--standard.jpeg",
    basePrice: "On Request", installation: "Included", warranty: "1 Year"
  },
  "ev-charging-station-amc--premium": {
    name: "EV Charging Station AMC – Premium",
    category: "Annual Maintenance Contracts",
    company: "Solarica Systems Pvt. Ltd.",
    description: "Premium AMC for public EV charging-station with 24x7 support and remote monitoring ensuring high uptime.",
    features: ["24x7 Support", "Remote Monitoring", "Quarterly Visits", "Software Updates"],
    specs: { "Uptime SLA": "99%", "Response Time": "12 Hours", "Station Size": "Multi-Gun", "Emergency": "Included" },
    image: "products/amc-services/ev-charging-station-amc--premium.jpeg",
    basePrice: "On Request", installation: "Included", warranty: "1 Year"
  },
  "industrial-electrical-amc": {
    name: "Industrial Electrical AMC",
    category: "Annual Maintenance Contracts",
    company: "Solarica Systems Pvt. Ltd.",
    description: "Annual maintenance for industrial electrical systems and control-panels ensuring safety, compliance, and uptime.",
    features: ["Panel Maintenance", "Thermal Scanning", "Safety Audit", "IS Standards"],
    specs: { "Visit Frequency": "Quarterly", "Response Time": "24 Hours", "System Type": "LT / HT Panels", "On-Site Support": "Included" },
    image: "products/amc-services/industrial-electrical-amc.jpg",
    basePrice: "On Request", installation: "Included", warranty: "1 Year"
  },
  "solar-plant-om-contract": {
    name: "Solar Plant O&M Contract",
    category: "Annual Maintenance Contracts",
    company: "Solarica Systems Pvt. Ltd.",
    description: "Complete operation and maintenance service for solar power plants with performance optimization and SCADA monitoring.",
    features: ["24x7 SCADA", "Monthly Cleaning", "Perf. Ratio Track", "Preventive Maint."],
    specs: { "Plant Size": "100 kW - MW", "Fault Response": "8 Hours", "Reporting": "Monthly", "Spare Parts": "As Per Use" },
    image: "products/amc-services/solar-plant-om-contract.jpg",
    basePrice: "On Request", installation: "Optional Team", warranty: "1 Year"
  }

};
