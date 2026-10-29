export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  category: "Polyhouses" | "Shade Nets" | "Precision Agri";
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  bannerImage: string;
  image: string;
  galleryImages: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  idealFor: string;
  technicalHighlights: string[];
  advantages: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  deliverables: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  features: string[];
}

export interface CropEconomicsItem {
  id: string;
  slug: string;
  name: string;
  type: "Flower" | "Vegetable";
  variety: string;
  shortSummary: string;
  overview: string;
  climateSuitability: string;
  yieldAdvantage: string;
  keyBenefits: string[];
  image: string;
  economicsMetrics: {
    label: string;
    value: string;
  }[];
  cultivationGuidelines: string[];
  costEconomics?: {
    area: string;
    structureType: string;
    capitalInvestment: {
      particular: string;
      cost: string;
    }[];
    totalInvestment: string;
    annualOperationalCost: {
      particular: string;
      cost: string;
    }[];
    totalOperationalCost: string;
    returnsAndProfitability: {
      yieldBenchmark: string;
      sellingPrice: string;
      grossRevenue: string;
      netReturnPerYear: string;
    };
  };
}

export const COMPANY_INFO = {
  name: "PolyHub Agro Engineers",
  legalName: "Poly Hub Agro Engineers",
  tagline: "Pioneering Modern Agricultural Technology & Greenhouse Engineering",
  established: "2014",
  stats: [
    { label: "Years of Excellence", value: "10+" },
    { label: "Projects Completed", value: "300+" },
    { label: "Protected Area Built", value: "9M+ Sq. Meters" },
    { label: "Pan-India Coverage", value: "18+ States" },
  ],
  contacts: {
    phone: "+91 7814910934",
    phoneDisplay: "+91 78149 10934",
    email: "contact@polyhubagro.com",
    corporateOffice: "SCO-63, First Floor, D.A.C., Near Mini-Secretariat, Patiala, Punjab - 147001",
    salesOffice: "104 Niche Facade, New Airport Road, Viman Nagar, Pune, Maharashtra - 411014",
    whatsapp: "917814910934"
  }
};

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "naturally-ventilated-polyhouse",
    slug: "naturally-ventilated-polyhouse",
    title: "Naturally Ventilated Polyhouse",
    category: "Polyhouses",
    badge: "Flagship Model",
    shortDescription: "Harnessing Nature's Breath: Ingenious design relying on natural convective airflow, side and roof ridge vents for optimal crop growth without high electricity costs.",
    fullDescription: "A naturally ventilated polyhouse is a type of greenhouse structure that relies on natural airflow to regulate the internal environment, rather than using mechanical ventilation systems. It is designed to create an optimal growing environment for various crops by utilizing natural ventilation methods such as side and roof vents. This type of polyhouse helps maintain appropriate temperature, humidity, and carbon dioxide levels, which are crucial for healthy plant growth.",
    bannerImage: "https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-07-30-at-12.30.39-PM-1024x768.jpeg",
    image: "https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-07-30-at-12.30.39-PM-1024x768.jpeg",
    galleryImages: [
      "https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-07-30-at-12.30.39-PM-1024x768.jpeg",
      "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_9cb01ebd-1.jpg",
      "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.00_2ba3d33c.jpg"
    ],
    specifications: [
      { label: "Structural Frame", value: "Hot-Dip Galvanized steel tubular pipes providing strength and corrosion resistance conforming to IS norms" },
      { label: "Covering Material", value: "200-micron multi-layered UV-stabilized anti-drip, anti-dust polyethylene film" },
      { label: "Side Vents", value: "Continuous roll-up or drop-down vents located along both sides with insect netting" },
      { label: "Roof Ridge Vents", value: "Continuous aerodynamic ridge vents facilitating natural hot air convection" },
      { label: "End Gable Vents", value: "Gable end ventilation flaps for enhanced cross-ventilation" },
      { label: "Wind Endurance", value: "Engineered to withstand wind velocities of 120 - 140 km/h" },
      { label: "Insect Protection", value: "40 / 50 Mesh virgin HDPE monofilament insect netting on all vent openings" }
    ],
    features: [
      "Natural Convective Airflow: Roof ridge and side vents dissipate excess heat without electrical power",
      "UV-Stabilized Cladding: Diffused light transmission protecting crops from sunburn and leaf scorching",
      "Corrosion-Resistant GI Frame: Heavy-duty galvanized tubular pipes ensuring 15+ years structural durability",
      "Insect & Pest Protection: Fully enclosed with 40/50 mesh insect nets preventing sucking pest ingress",
      "Integrated Micro-Irrigation: Compatible with automated drip fertigation and micro-fogging humidity controls"
    ],
    idealFor: "Capsicum, Cucumber, Tomato, Dutch Roses, Gerberas, Orchids, Carnations, and Vegetable Nurseries",
    technicalHighlights: [
      "Chimney effect ventilation reducing internal temperature by 4-6°C",
      "Diffused light distribution enhancing uniform photosynthesis across the canopy",
      "Cost-effective capital and operational model qualifying for 50% NHB/MIDH government subsidies"
    ],
    advantages: [
      "Zero continuous electricity required for ventilation cooling",
      "Significantly higher commercial yield compared to open field farming",
      "Extended 9-10 month continuous harvesting cycles"
    ]
  },
  {
    id: "tunnel-type-polyhouse",
    slug: "tunnel-type-polyhouse",
    title: "Poly Tunnel (Tunnel Type Polyhouse)",
    category: "Polyhouses",
    badge: "Cost-Effective",
    shortDescription: "Tunnel Power: Boosting agriculture with efficiency and sustainability through versatile arched hoop structures ideal for high-density vegetable crops.",
    fullDescription: "In the realm of modern agriculture, tunnel-type polyhouses (also known as shadehouses) emerge as versatile structures designed to optimize growing conditions for crops. Combining the benefits of greenhouse technology with simplicity and cost-effectiveness, these arched hoop polyhouses provide a controlled microclimate that promotes crop growth while offering reliable protection from adverse weather conditions.",
    bannerImage: "https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-08-10-at-12.58.02_58346514.jpg",
    image: "https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-08-10-at-12.58.02_58346514.jpg",
    galleryImages: [
      "https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-08-10-at-12.58.02_58346514.jpg",
      "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_bc92a838-1.jpg"
    ],
    specifications: [
      { label: "Structure & Design", value: "Arched or hoop-shaped frames constructed from high-strength galvanized steel pipes" },
      { label: "Covering Material", value: "UV-stabilized polyethylene or shade netting tailored to specific crop requirements" },
      { label: "Natural Ventilation", value: "Designed with open ends or adjustable side vents for adequate air circulation" },
      { label: "Cost-Effectiveness", value: "Affordable to construct, maintain, and expand compared to heavy rigid greenhouses" },
      { label: "Span & Height", value: "6.0 to 8.0 meters span width with 3.2 to 3.8 meters center clearance" }
    ],
    features: [
      "Sturdy hoop galvanized GI piping with direct ground anchoring",
      "Adjustable natural ventilation reducing humidity buildup",
      "UV-stabilized light management optimizing photosynthesis",
      "Quick assembly modular structure with low initial investment",
      "Protection from unseasonal rains, hail, and extreme morning frosts"
    ],
    idealFor: "Strawberries, Leafy Vegetables, Capsicum, Cucumber, Early Nursery Seedlings",
    technicalHighlights: [
      "Streamlined curved aerodynamic profile preventing wind damage",
      "Modular scalability allowing easy phased acreage enlargement"
    ],
    advantages: [
      "Lowest capital expenditure per square meter",
      "Harvesting starts 3 to 4 weeks earlier than open-field competitors",
      "Low maintenance with simple polyfilm replacement"
    ]
  },
  {
    id: "polycarbonate-greenhouses",
    slug: "polycarbonate-greenhouses",
    title: "Polycarbonate Greenhouse",
    category: "Polyhouses",
    badge: "Ultra-Durable",
    shortDescription: "Strength Meets Sustainability: Exceptional insulation, extreme impact resistance, and durability through multi-wall polycarbonate panels.",
    fullDescription: "Polycarbonate greenhouses represent a fusion of strength, durability, and energy efficiency in modern protected cultivation. Utilizing multi-wall polycarbonate sheets, these greenhouses provide outstanding thermal insulation, high light transmission, and unmatched impact resistance against severe hailstorms, winds, and debris.",
    bannerImage: "https://polyhubagro.com/wp-content/uploads/2020/04/polycarbonate-greenhouses-1024x576.jpg",
    image: "https://polyhubagro.com/wp-content/uploads/2020/04/polycarbonate-greenhouses-1024x576.jpg",
    galleryImages: [
      "https://polyhubagro.com/wp-content/uploads/2020/04/polycarbonate-greenhouses-1024x576.jpg",
      "https://polyhubagro.com/wp-content/uploads/2020/04/Hydroponic-Green-House-1-1024x576.jpg"
    ],
    specifications: [
      { label: "Panel Material", value: "Multi-wall (twin-wall or triple-wall) UV-coated polycarbonate sheets" },
      { label: "Impact Resistance", value: "Up to 200 times stronger than glass, highly resistant to hail and flying stones" },
      { label: "Thermal Insulation", value: "Multi-wall air chambers retaining heat efficiently in cold climate zones" },
      { label: "Light Transmission", value: "80% - 85% diffused light eliminating hot spots and leaf burn" },
      { label: "Frame Architecture", value: "Heavy-gauge extruded aluminum and galvanized structural steel trusses" }
    ],
    features: [
      "Extreme durability and hail resistance with 10+ year panel warranty",
      "Superior thermal insulation significantly reducing winter heating costs",
      "Diffused light scattering ensuring uniform growth across all canopy tiers",
      "UV protection layer blocking harmful radiation while allowing photosynthetically active radiation (PAR)",
      "Modern aesthetic appearance suitable for commercial agri-tourism and institutional research"
    ],
    idealFor: "Exotic Floriculture, Institutional Research Farms, High-Elevation Regions, Tissue Culture Laboratories",
    technicalHighlights: [
      "Multi-wall cellular insulation maintaining stable indoor temperatures",
      "Virtually unbreakable glazing ensuring zero crop loss from broken panels"
    ],
    advantages: [
      "30-40% lower heating and cooling energy expenditure compared to glass",
      "Decades of reliable service life with minimal maintenance overhead",
      "Ideal for extreme weather zones with heavy snow or frequent hail"
    ]
  },
  {
    id: "shade-net-house-dome",
    slug: "shade-net-house-dome",
    title: "Shade Net House Model – Dome",
    category: "Shade Nets",
    badge: "Horticulture",
    shortDescription: "Optimal Protection, Maximum Yield: Innovative dome-shaped shade net structure providing superior climate tempering, UV filtering, and pest defense.",
    fullDescription: "Discover the ultimate solution for protecting your plants and crops with our innovative Shade Net House Model – Dome. Designed for optimal performance and durability, this dome-shaped structure provides the perfect microclimate for a variety of horticultural and floricultural needs, combining high structural strength with uniform shading.",
    bannerImage: "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-1-1024x768.jpg",
    image: "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-1-1024x768.jpg",
    galleryImages: [
      "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-1-1024x768.jpg",
      "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_9cb01ebd-1.jpg"
    ],
    specifications: [
      { label: "Dome Geometry", value: "Curved aerodynamic multi-dome arch framework shedding rain smoothly" },
      { label: "Structural Frame", value: "Galvanized tubular steel poles with anti-corrosion zinc galvanization" },
      { label: "Netting Options", value: "35%, 50%, 75% shade factor virgin HDPE UV-stabilized monofilament net" },
      { label: "Pest Exclusion", value: "Optional 40/50 mesh side netting preventing insect and bird entry" },
      { label: "Clearance Height", value: "3.5 to 4.5 meters center height enabling machinery access" }
    ],
    features: [
      "Multi-dome aerodynamic roof resisting strong wind turbulence",
      "Customizable shade factor (35% to 75%) tailored to shade-loving crops",
      "Significant reduction in crop evapotranspiration and irrigation water demand",
      "Shields crops from intense direct sun scorch, torrential rains, and bird damage",
      "Cost-effective alternative to full polyhouses for tropical climate zones"
    ],
    idealFor: "Orchids, Anthuriums, Betel Vine (Paan), Foliage Nurseries, Spices, Hardening Facilities",
    technicalHighlights: [
      "Continuous air circulation preventing stagnant fungal humidity",
      "Fast rainwater runoff along curved domes avoiding water pockets"
    ],
    advantages: [
      "Subsidized up to 50% under National Horticulture Mission (MIDH)",
      "Economical installation with long 8-10 year netting life",
      "Reduces internal canopy temperature by 3°C to 6°C during peak summer"
    ]
  },
  {
    id: "ground-mounted-flat-shade-house",
    slug: "ground-mounted-flat-shade-house",
    title: "Ground Mounted Flat Shade Net House",
    category: "Shade Nets",
    badge: "Commercial Acreage",
    shortDescription: "Flat Type Shade House Model: Cost-effective, robust horizontal shading architecture engineered for expansive commercial open-field acreage.",
    fullDescription: "Welcome to our Flat Type Shade House Model section. Designed for agricultural environments requiring reliable shading, climate tempering, and pest mitigation over large land areas, our flat type shade house structures offer immense stability, straightforward construction, and exceptional value for progressive growers.",
    bannerImage: "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-1-1024x768.jpg",
    image: "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-1-1024x768.jpg",
    galleryImages: [
      "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-1-1024x768.jpg"
    ],
    specifications: [
      { label: "Frame Grid", value: "Galvanized GI column grid with high-tensile wire rope top cross-bracing" },
      { label: "Netting Material", value: "HDPE monofilament tape cloth with UV stabilization inhibitors" },
      { label: "Foundation Footing", value: "Concrete grouted column anchors resistant to dynamic wind lift" },
      { label: "Internal Spacing", value: "Wide tractor-friendly column layout for mechanized intercultural operations" }
    ],
    features: [
      "Robust flat horizontal roof framework covering large acreage at minimal cost",
      "Adjustable shade netting density protecting fruit orchards and vegetable belts",
      "Provides uniform shade coverage without shadows or hot spots",
      "Significant reduction in sunburn and skin blemishes on commercial produce",
      "Low structural steel requirement compared to curved truss assemblies"
    ],
    idealFor: "Pomegranate, Papaya, Citrus Orchards, Commercial Open-field Vegetables, Hardening Plants",
    technicalHighlights: [
      "High-tensile wire rope support system maintaining taut net tension",
      "Low maintenance architecture with simple seasonal net deployment"
    ],
    advantages: [
      "Most economical shading structure for projects above 1 to 5 acres",
      "Increases export grade fruit pack-out percentage by 30-40%",
      "Eligible for government capital subsidies under MIDH guidelines"
    ]
  },
  {
    id: "hydroponic-greenhouse",
    slug: "hydroponic-greenhouse",
    title: "Hydroponic Greenhouse System",
    category: "Precision Agri",
    badge: "Next-Gen Agri",
    shortDescription: "Redefining Sustainable Agriculture: Advanced soil-less cultivation integrating NFT gullies, Dutch Buckets, and automated nutrient dosing systems.",
    fullDescription: "The Hydrophonic Greenhouse is designed for advanced hydroponic farming, offering optimal conditions for plant growth without soil. This high-tech greenhouse integrates a hydroponic system with a controlled environment to maximize yield, operational efficiency, and crop quality year-round.",
    bannerImage: "https://polyhubagro.com/wp-content/uploads/2020/04/Hydroponic-Green-House-1-1024x576.jpg",
    image: "https://polyhubagro.com/wp-content/uploads/2020/04/Hydroponic-Green-House-1-1024x576.jpg",
    galleryImages: [
      "https://polyhubagro.com/wp-content/uploads/2020/04/Hydroponic-Green-House-1-1024x576.jpg",
      "https://polyhubagro.com/wp-content/uploads/2020/04/polycarbonate-greenhouses-1024x576.jpg"
    ],
    specifications: [
      { label: "Hydroponic Systems", value: "Nutrient Film Technique (NFT), Deep Water Culture (DWC), and Dutch Bucket setups" },
      { label: "Automated Fertigation", value: "Precision EC & pH continuous monitoring and automated nutrient dosing controllers" },
      { label: "Microclimate Control", value: "Temperature, humidity, and ventilation controls creating ideal growing conditions" },
      { label: "Light Management", value: "Natural diffused sunlight with optional supplementary LED horticultural lighting" },
      { label: "Growth Medium", value: "Soil-less options: Rockwool, Coconut Coir, Perlite, and LECA clay pebbles" }
    ],
    features: [
      "Integrated soil-less cultivation eliminating soil-borne diseases and nematodes",
      "Up to 90% water saving through continuous recirculating closed-loop fertigation",
      "Automated sensor-driven nutrient delivery maximizing nutrient uptake efficiency",
      "High-density vertical and horizontal cultivation yielding 3x to 5x higher output",
      "Clean room growing conditions producing residue-free, pesticide-safe produce"
    ],
    idealFor: "Exotic Lettuces, Baby Spinach, Basil, Parsley, Cherry Tomatoes, European Cucumbers, Strawberries",
    technicalHighlights: [
      "Precision computerized nutrient dosing maintaining exact EC/pH ratios",
      "Closed loop plumbing preventing environmental fertilizer runoff"
    ],
    advantages: [
      "Premium pricing realization with direct supermarket and hotel procurement",
      "Can be established on rocky, barren, or non-fertile land",
      "Rapid turnaround cycles with steady daily cash flows"
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "construction-and-installation",
    slug: "construction-and-installation",
    title: "Construction and Installation",
    shortDescription: "End-to-end site preparation, custom planning, durable GI framing, and precision polyhouse erection built to the highest engineering standards.",
    fullDescription: "At Polyhub, we pride ourselves on delivering top-quality construction and installation services for your polyhouse projects. Our team of experienced professionals ensures that your polyhouse is built to the highest standards, providing a robust and efficient environment for your crops.",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_9cb01ebd-1.jpg",
    icon: "Hammer",
    deliverables: [
      "Site Evaluation: Comprehensive assessment of the site to determine suitability for polyhouse construction",
      "Soil Testing: Analysis of soil quality to ensure it meets the requirements for your intended crops",
      "Land Clearing and Leveling: Preparing the site by clearing debris and leveling the ground for a stable foundation",
      "Tailored Designs: Creating customized polyhouse designs to meet your specific agricultural needs and climatic conditions",
      "Detailed Blueprints: Providing detailed construction plans and blueprints for clear visualization and approval",
      "Budget Planning: Developing cost-effective plans that align with your budget without compromising on quality",
      "Durable Frames: Using galvanized steel or aluminum frames for long-lasting strength and resistance to corrosion",
      "UV-Stabilized Coverings: Installing high-quality polyethylene films that provide optimal light transmission and protection",
      "Advanced Ventilation Systems: Incorporating state-of-the-art natural ventilation systems to ensure efficient airflow",
      "Experienced Construction Team: Skilled construction crew with expertise in building polyhouses to exact specifications",
      "Timely Execution: Adhering strictly to project timelines to ensure timely completion of your polyhouse",
      "Strict Safety Standards: Following stringent safety protocols to protect workers and ensure a secure construction environment",
      "Ventilation & Shading Installation: Installing and calibrating natural ventilation systems and shading nets for optimal climate control",
      "Irrigation Systems: Setting up efficient drip irrigation and micro-sprinklers to ensure crops receive precise hydration",
      "Environmental Controls: Integrating environmental control systems to monitor and adjust temperature, humidity, and light levels",
      "Quality Inspection & Testing: Thorough inspection and full operational testing of all systems before handover",
      "Handover & Documentation: Comprehensive documentation, structural blueprints, and a walkthrough of your new polyhouse",
      "Operational Training & Support: Hands-on training for your team on operating polyhouse systems with continuous ongoing support",
      "Warranty & Aftercare Services: Complete warranty on materials and construction with regular check-ins and maintenance"
    ],
    processSteps: [
      { step: "01", title: "Site Assessment & Preparation", description: "Comprehensive site evaluation, soil testing, and ground clearing/leveling for a stable foundation." },
      { step: "02", title: "Custom Design & Planning", description: "Formulating tailored polyhouse blueprints, 3D visualizations, and budget plans conforming to government norms." },
      { step: "03", title: "High-Quality Material Selection", description: "Deploying corrosion-resistant hot-dip galvanized steel frames and UV-stabilized 200-micron polyethylene coverings." },
      { step: "04", title: "Professional Construction Execution", description: "Skilled agricultural civil and mechanical erection conforming to stringent safety protocols and strict timelines." },
      { step: "05", title: "Installation of Systems", description: "Precision calibration of motorized/manual vents, shade nets, drip irrigation, foggers, and environmental sensors." },
      { step: "06", title: "Post-Construction Review & Handover", description: "Rigorous quality inspection, operational dry-runs, handover documentation, and farmer walkthrough." },
      { step: "07", title: "Operational Training & Support", description: "Hands-on agronomy and mechanical training for farm staff with continuous technical backstopping." },
      { step: "08", title: "Warranty & Aftercare Services", description: "Full structural warranty coverage and scheduled proactive visits to maximize polyhouse longevity." }
    ],
    features: [
      "Hot-dip galvanized GI pipe structure conforming to IS standards",
      "Turnkey execution from soil assessment to trial harvest",
      "Full compliance with NHB and MIDH 50% subsidy guidelines"
    ]
  },
  {
    id: "maintenance-and-support",
    slug: "maintenance-and-support",
    title: "Maintenance and Support",
    shortDescription: "Routine structural inspections, emergency storm repairs, covering replacements, and agronomic support to keep your polyhouse in top condition.",
    fullDescription: "At Polyhub, we are committed to ensuring the longevity and optimal performance of your polyhouse structures. Our comprehensive maintenance and support services are designed to keep your polyhouse in top condition, ensuring your crops thrive under the best possible conditions.",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.00_2ba3d33c.jpg",
    icon: "Wrench",
    deliverables: [
      "Structural Integrity Checks: Regular inspection of the frame and covering material to identify and address any wear and tear",
      "Ventilation System Review: Ensuring vents operate smoothly and efficiently, checking for any obstructions or mechanical damage",
      "Climate Control Monitoring: Verifying the effectiveness of natural ventilation and making adjustments to maintain optimal conditions",
      "Covering Material Replacement: Timely replacement of polyethylene films degraded by UV exposure, hailstorms, or physical wear",
      "Structural Repairs: Part replacement, anti-corrosion rust treatment, welding, and structural column reinforcement",
      "Ventilation Maintenance: Servicing or replacing motorized/manual vent gears and side-curtain winches for seamless airflow",
      "Emergency Support & Assistance: Immediate support for urgent structural or electrical issues impacting crop health",
      "Rapid Response Team: On-call engineers ready to provide rapid troubleshooting, emergency repairs, and storm restoration",
      "Expert Consultation: Access to certified agronomists and greenhouse engineers for optimizing microclimate parameters",
      "Technical Troubleshooting: Diagnosing and resolving irrigation blockages, fogger pressure drops, or sensor calibration issues",
      "System Upgrades & Customization: Installing modern automation, IoT climate controls, and tailored retrofits for changing crop needs",
      "User Training & Education: Hands-on operational refresher sessions for farm staff on preventative maintenance best practices",
      "Scheduled Maintenance Plans: Flexible, customizable AMC schedules tailored to specific crop cycles and seasonal transitions",
      "Proactive Preventative Visits: Scheduled visits to detect and fix minor vulnerabilities before they impact commercial operations"
    ],
    processSteps: [
      { step: "01", title: "Routine Structural Inspections", description: "Checking GI frame integrity, cable tensions, vent mechanics, and covering material elasticity." },
      { step: "02", title: "Repairs & Covering Replacements", description: "Patching UV films, rust removal, weld reinforcement, and servicing jammed ventilation gears." },
      { step: "03", title: "Emergency Support & Rapid Response", description: "Immediate dispatch of repair crews for urgent storm damages, torn films, or irrigation breakdowns." },
      { step: "04", title: "Technical Consultation & Agronomy", description: "Access to greenhouse engineers and agronomists to diagnose microclimate imbalances." },
      { step: "05", title: "System Upgrades & Automation", description: "Upgrading legacy manual polyhouses to automated fogging, motorized vents, and smart fertigation." },
      { step: "06", title: "Scheduled Maintenance Plans (AMC)", description: "Proactive seasonal audits and pre-monsoon inspections to prevent operational interruptions." }
    ],
    features: [
      "Pan-India on-call emergency response team",
      "Genuine BIS-certified replacement components and UV films",
      "Customizable Annual Maintenance Contracts (AMC) for commercial growers"
    ]
  },
  {
    id: "custom-polyhouse-design",
    slug: "custom-polyhouse-design",
    title: "Custom Polyhouse Design",
    shortDescription: "Tailored polyhouse design solutions optimized for your specific crop, local climate, land topography, and commercial expansion goals.",
    fullDescription: "At Polyhub, we understand that each agricultural project is unique, requiring a tailored approach to meet specific needs and objectives. Our custom polyhouse design services ensure that your polyhouse is optimized for your crops, climate, and operational goals.",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_bc92a838-1.jpg",
    icon: "DraftingCompass",
    deliverables: [
      "Initial Consultation: In-depth discussion of your specific requirements, business goals, budget, and commercial crop choices",
      "Site Visit & Topography Audit: Detailed site inspection to evaluate wind vectors, ground slope, sunlight trajectory, and soil type",
      "Needs Assessment: Evaluating production targets, market supply timelines, and crop spacing for custom structural geometry",
      "Custom Blueprints & 3D Models: Creating high-precision CAD blueprints and 3D architectural renders for clear visualization",
      "Tailored Structural Engineering: Designing custom gutter heights, bay widths, and truss configurations for specific crops",
      "Advanced Technology Integration: Incorporating modern fertigation units, motorized climate curtains, and automated sensors",
      "Local Climate Adaptation: Customizing roof pitch and vent ratios for extreme local heat, monsoon downpours, or heavy winds",
      "Ventilation & Cooling Optimization: Calculating aerodynamic buoyancy and convection airflow for energy-efficient climate control",
      "Light Optimization & Shading: Designing structures to maximize diffuse natural PAR light with automated retractable shading",
      "Premium Material Selection: Selecting certified galvanized steel tubing and multi-layer UV polyethylene suited to local climate",
      "Energy Efficiency & Water Conservation: Designing low-energy passive cooling layouts with rainwater harvesting and recycling",
      "Modular & Scalable Design: Creating phased blueprint modularity allowing seamless acreage expansion as your business grows",
      "Seamless System Integration: Ensuring full compatibility with drip manifolds, pack houses, and central automation controllers",
      "Comprehensive Project Management: End-to-end guidance from architectural CAD sign-off to bankable DPR subsidy sanctioning",
      "Ongoing Post-Design Support: Continuous technical consultation and future expansion planning for the lifetime of your farm"
    ],
    processSteps: [
      { step: "01", title: "Personalized Consultation & Site Visit", description: "Evaluating land topography, water quality, local wind velocity, crop objectives, and capital budgets." },
      { step: "02", title: "Bespoke CAD Blueprinting & 3D Modeling", description: "Drafting precision structural blueprints with custom bay widths, gutter heights, and structural load calculations." },
      { step: "03", title: "Climate-Specific Thermal Engineering", description: "Adapting ventilation geometry, shadow-free orientations, and natural convection cooling to local weather." },
      { step: "04", title: "Material & Durability Selection", description: "Specifying heavy-duty GI tubular profiles, anti-drip UV films, and insect nets conforming to BIS standards." },
      { step: "05", title: "Efficiency, Water & Energy Planning", description: "Integrating high-efficiency drip networks, precision foggers, and low-power passive ventilation channels." },
      { step: "06", title: "Modular & Scalable Architecture", description: "Formulating expandable layouts that allow easy phased acreage enlargement without redesigning existing units." },
      { step: "07", title: "Detailed Execution & Bankable DPR", description: "Compiling comprehensive technical project reports formatted to achieve swift NHB/MIDH subsidy approval." }
    ],
    features: [
      "Bespoke CAD drawings tailored to your exact land dimensions",
      "Maximized qualification for NHB and State Horticulture 50% subsidies",
      "Modular layouts designed for smooth phased commercial expansion"
    ]
  }
];

export const CROPS_ECONOMICS_LIST: CropEconomicsItem[] = [
  {
    id: "anthurium",
    slug: "anthurium",
    name: "Anthurium",
    type: "Flower",
    variety: "Tropical Red, Fire, Sensazione, Pistache",
    shortSummary: "High-value export flower yielding ₹21.65 Lakh net annual return under 4000 sq.m naturally ventilated polyhouse.",
    overview: "Anthuriums are tropical evergreen perennials prized for their distinctive heart-shaped spathes and long vase life. Based on PolyHub's real project economics for a 4000 sq. meter (1 Acre) Naturally Ventilated Polyhouse under MIDH norms, anthurium cultivation provides outstanding recurring annual income with steady corporate and export market demand.",
    climateSuitability: "Naturally Ventilated Polyhouse / 75% Shade Net House with Micro-fogging",
    yieldAdvantage: "Continuous commercial production with up to 7 export-grade flowers per plant annually and minimal seasonal price fluctuation.",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/ANTHURIUM-poly.jpg",
    keyBenefits: [
      "Indicative Net Return: ₹21,65,000 per year on 4,000 Sq. Mtr (1.0 Acre)",
      "High plant density: 10 plants/Sq.Mtr (40,000 tissue culture plants)",
      "Long commercial lifespan of 6-7 consecutive years",
      "Qualifies for up to 50% capital subsidy under NHB & MIDH norms"
    ],
    economicsMetrics: [
      { label: "Polyhouse Area", value: "4,000 Sq. Mtr (1.0 Acre)" },
      { label: "Plant Density & Count", value: "10 plants/sq.m (40,000 Plants)" },
      { label: "Total Capital Investment", value: "₹99,76,000 (Incl. Structure & Plants)" },
      { label: "Annual Operational Cost", value: "₹17,50,000 / Year" },
      { label: "Gross Annual Returns", value: "₹39,15,000 / Year (@ ₹14.5/flower)" },
      { label: "Net Annual Return", value: "₹21,65,000 / Year" }
    ],
    cultivationGuidelines: [
      "Polyhouse Structure: Naturally Ventilated Polyhouse with 30% black shade net ceiling and micro-fogging",
      "Growing System: Table stand with wire ropes (₹7 Lakh) and Coco shell bed preparation (₹4 Lakh)",
      "Irrigation & Fertigation: Drip irrigation with automatic fertigation and water filtration (₹4 Lakh)",
      "Climatic Management: 18°C - 28°C with 65-80% relative humidity, sheltered from direct harsh sunlight"
    ],
    costEconomics: {
      area: "4,000 Sq. Mtr. (1.0 Acre)",
      structureType: "Naturally Ventilated Polyhouse (MIDH Norms)",
      capitalInvestment: [
        { particular: "Polyhouse Construction (GI Pipe + 200µ UV Film @ ₹844/sq.m)", cost: "₹33,76,000" },
        { particular: "30% Black Shade Net", cost: "₹1,00,000" },
        { particular: "Drip Irrigation, Fogging, Fertigation & Filtration System", cost: "₹4,00,000" },
        { particular: "Growing System (Table Stand with Wire Ropes & Coco Shells)", cost: "₹11,00,000" },
        { particular: "Tissue Culture Plants (40,000 Nos. @ ₹125/plant)", cost: "₹50,00,000" }
      ],
      totalInvestment: "₹99,76,000",
      annualOperationalCost: [
        { particular: "Water, Misting & Spraying", cost: "₹30,000" },
        { particular: "Electricity & Generator Operation", cost: "₹7,00,000" },
        { particular: "Fertilizers & Nutrients", cost: "₹1,20,000" },
        { particular: "Labor Costs (2-4 persons/day)", cost: "₹3,36,000" },
        { particular: "Crop Protection & Fungicides", cost: "₹60,000" },
        { particular: "Packing, Transport & Mandi Commission", cost: "₹5,40,000" },
        { particular: "Farm Supervision & Management", cost: "₹1,44,000" },
        { particular: "Miscellaneous Farm Maintenance", cost: "₹4,50,000" }
      ],
      totalOperationalCost: "₹17,50,000 / Year",
      returnsAndProfitability: {
        yieldBenchmark: "6 - 7 Flowers / Plant / Year (Average 2,70,000 blooms/yr)",
        sellingPrice: "₹14.50 Avg. Realization per Bloom",
        grossRevenue: "₹39,15,000 / Year",
        netReturnPerYear: "₹21,65,000 / Year"
      }
    }
  },
  {
    id: "orchid",
    slug: "orchid",
    name: "Orchid (Dendrobium)",
    type: "Flower",
    variety: "Dendrobium, Phalaenopsis, Cymbidium",
    shortSummary: "High-value luxury cut flower yielding ₹24.20 Lakh net annual profit under 4,000 sq.m naturally ventilated polyhouse.",
    overview: "Orchids are among the highest-revenue commercial floriculture crops in the international and domestic luxury gift markets. Cultivated in naturally ventilated polyhouses with 30% extra black shade net and micro-fogging, orchids yield continuously for 6 to 7 years with a plant density of 11.25 plants/sq.m (45,000 plants total).",
    climateSuitability: "Naturally Ventilated Polyhouse with 30% Black Shade Net & Micro-fogging",
    yieldAdvantage: "Continuous harvesting across 7 years with an average yield of 6 spikes/plant/year (up to 8 spikes in peak years).",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/cultivation-of-orchid-flowers-in-poly-houses.jpg",
    keyBenefits: [
      "Indicative Net Return: ₹24,20,000 per year on 4,000 Sq. Mtr (1.0 Acre)",
      "High plant density: 11.25 plants/sq.m (45,000 tissue culture plants)",
      "Long commercial lifespan of 7 consecutive years",
      "Qualifies for up to 50% capital subsidy under NHB & MIDH norms"
    ],
    economicsMetrics: [
      { label: "Polyhouse Area", value: "4,000 Sq. Mtr (1.0 Acre)" },
      { label: "Plant Density & Count", value: "11.25 plants/sq.m (45,000 Plants)" },
      { label: "Total Capital Investment", value: "₹71,76,000 (Structure & Plants)" },
      { label: "Annual Operational Cost", value: "₹13,60,000 / Year" },
      { label: "Gross Annual Returns", value: "₹37,80,000 / Year (@ ₹14/flower)" },
      { label: "Net Annual Return", value: "₹24,20,000 / Year" }
    ],
    cultivationGuidelines: [
      "Substrate Bed: Table stand with wire ropes (₹7 Lakh), Concrete blocks (₹6 Lakh), Coco shells (₹2 Lakh)",
      "Irrigation & Microclimate: Drip irrigation, fogging for temperature & humidity control, fertigation & filtration",
      "Water Requirement: 0.7 litre/plant/day + misting + spraying",
      "Planting Material: Tissue culture plants (45,000 Nos. @ ₹40/plant)"
    ],
    costEconomics: {
      area: "4,000 Sq. Mtr. (1.0 Acre)",
      structureType: "Naturally Ventilated Polyhouse (MIDH Norms)",
      capitalInvestment: [
        { particular: "Polyhouse Construction (GI Pipe + Polyethylene @ ₹844/sq.m)", cost: "₹33,76,000" },
        { particular: "30% Extra Black Shade Net for shading", cost: "₹1,00,000" },
        { particular: "Drip Irrigation, Fogging, Fertigation & Water Filtration Unit", cost: "₹4,00,000" },
        { particular: "Growing System (Table Stand with Wire Ropes, Concrete Blocks & Coco Shells)", cost: "₹15,00,000" },
        { particular: "Tissue Culture Plants (45,000 Nos. @ ₹40/plant)", cost: "₹18,00,000" }
      ],
      totalInvestment: "₹71,76,000",
      annualOperationalCost: [
        { particular: "Water, Misting & Spraying (0.7L/plant/day)", cost: "₹20,000" },
        { particular: "Electricity & Generator (3.0 units/day)", cost: "₹70,000" },
        { particular: "Water Soluble Fertilizers", cost: "₹1,20,000" },
        { particular: "Labor Costs (2-4 persons/day)", cost: "₹3,36,000" },
        { particular: "Crop Protection & Spraying", cost: "₹60,000" },
        { particular: "Packing Material, Transport & Sales Commission", cost: "₹5,40,000" },
        { particular: "Farm Supervision (₹12,000/month)", cost: "₹1,44,000" },
        { particular: "Miscellaneous (Maintenance & Depreciation)", cost: "₹70,000" }
      ],
      totalOperationalCost: "₹13,60,000 / Year",
      returnsAndProfitability: {
        yieldBenchmark: "6 Flowers / Plant / Year (2,70,000 cut blooms/yr)",
        sellingPrice: "₹14.00 Avg. Realization per Bloom",
        grossRevenue: "₹37,80,000 / Year",
        netReturnPerYear: "₹24,20,000 / Year"
      }
    }
  },
  {
    id: "gerbera",
    slug: "gerbera",
    name: "Gerbera",
    type: "Flower",
    variety: "Rosalin, Dune, Intense, Balance, Goliath",
    shortSummary: "Year-round daily harvest cut flower yielding ₹9.52 Lakh net annual profit under 4,000 sq.m naturally ventilated polyhouse.",
    overview: "Gerbera is the backbone of the commercial Indian cut-flower industry. In naturally ventilated polyhouses with raised beds (45-60 cm high) prepared with Red Soil, FYM, Rice Husk and Sand, each plant yields 45 blooms annually over a continuous multi-year lifespan.",
    climateSuitability: "Naturally Ventilated Polyhouse / Climate Controlled",
    yieldAdvantage: "Continuous daily harvest rhythm yielding 45 flowers per plant per year (10.80 Lakh flowers/acre).",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/gerbera-cultivation-in-polyhouse-1365450.jpg",
    keyBenefits: [
      "Indicative Net Return: ₹9,52,000 per year on 4,000 Sq. Mtr (1.0 Acre)",
      "High annual yield: 45 flowers/plant (10,80,000 blooms/year)",
      "Plant population: 6 plants/sq.m (24,000 tissue culture plants)",
      "Eligible for 50% capital subsidy under NHB & MIDH"
    ],
    economicsMetrics: [
      { label: "Polyhouse Area", value: "4,000 Sq. Mtr (1.0 Acre)" },
      { label: "Plant Density & Count", value: "6 plants/sq.m (24,000 Plants)" },
      { label: "Total Capital Investment", value: "₹49,36,000 (Structure & Plants)" },
      { label: "Annual Operational Cost", value: "₹12,08,000 / Year" },
      { label: "Gross Annual Returns", value: "₹21,60,000 / Year (@ ₹2.00/flower)" },
      { label: "Net Annual Return", value: "₹9,52,000 / Year" }
    ],
    cultivationGuidelines: [
      "Bed Height: 45-60 cm high & 60-70 cm wide raised bed with Red Soil, FYM, Rice Husk & Sand",
      "Irrigation & Fogging: Drip irrigation, foggers for temperature/humidity control, fertigation & filtration unit",
      "Water Requirement: 0.7 litre/plant/day + misting + spraying",
      "Planting Material: Tissue culture plants (24,000 Nos. @ ₹30/plant)"
    ],
    costEconomics: {
      area: "4,000 Sq. Mtr. (1.0 Acre)",
      structureType: "Naturally Ventilated Polyhouse (MIDH Norms)",
      capitalInvestment: [
        { particular: "Polyhouse Construction (GI Pipe + Polyethylene @ ₹844/sq.m)", cost: "₹33,76,000" },
        { particular: "Drip Irrigation, Fogging, Fertigation & Water Filtration Unit", cost: "₹4,00,000" },
        { particular: "Growing System (45-60cm Raised Bed with Red Soil, FYM, Rice Husk, Sand)", cost: "₹4,40,000" },
        { particular: "Tissue Culture Plants (24,000 Nos. @ ₹30/plant)", cost: "₹7,20,000" }
      ],
      totalInvestment: "₹49,36,000",
      annualOperationalCost: [
        { particular: "Water, Misting & Spraying (0.7L/plant/day)", cost: "₹20,000" },
        { particular: "Electricity & Generator (3.0 units/day)", cost: "₹50,000" },
        { particular: "Water Soluble Fertilizers", cost: "₹1,20,000" },
        { particular: "Labor Costs (3-4 persons/day)", cost: "₹3,60,000" },
        { particular: "Crop Protection & Spraying", cost: "₹1,20,000" },
        { particular: "Packing Material, Transport & Sales Commission", cost: "₹3,24,000" },
        { particular: "Farm Supervision (₹12,000/month)", cost: "₹1,44,000" },
        { particular: "Miscellaneous (Maintenance & Depreciation)", cost: "₹70,000" }
      ],
      totalOperationalCost: "₹12,08,000 / Year",
      returnsAndProfitability: {
        yieldBenchmark: "45 Flowers / Plant / Year (10,80,000 cut blooms/yr)",
        sellingPrice: "₹2.00 Avg. Realization per Bloom",
        grossRevenue: "₹21,60,000 / Year",
        netReturnPerYear: "₹9,52,000 / Year"
      }
    }
  },
  {
    id: "carnation",
    slug: "carnation",
    name: "Carnation",
    type: "Flower",
    variety: "Standard Carnation (Master, Farida, Baltico, Kiro)",
    shortSummary: "World's most demanded bouquet flower yielding ₹18.94 Lakh net annual profit under 4,000 sq.m naturally ventilated polyhouse.",
    overview: "Carnations demand cool night temperatures and low relative humidity. Cultivated in naturally ventilated polyhouses with 4-row high density plantation (20 plants/sq.m = 80,000 plants) and GI wire mesh support, carnations deliver 9,60,000 cut stems per year over a 5-year life cycle.",
    climateSuitability: "Naturally Ventilated Polyhouse / High-Elevation Polyhouse",
    yieldAdvantage: "Dense canopy yielding 12 flowers per plant per year (9,60,000 flowers/acre) with long vase life.",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/carnation-plantation-in-polyhouse-1024x575.jpg",
    keyBenefits: [
      "Indicative Net Return: ₹18,94,000 per year on 4,000 Sq. Mtr (1.0 Acre)",
      "High density: 20 plants/sq.m (80,000 rooted cuttings)",
      "Total life cycle: 5 continuous years",
      "Qualifies for up to 50% capital subsidy under NHB & MIDH"
    ],
    economicsMetrics: [
      { label: "Polyhouse Area", value: "4,000 Sq. Mtr (1.0 Acre)" },
      { label: "Plant Density & Count", value: "20 plants/sq.m (80,000 Plants)" },
      { label: "Total Capital Investment", value: "₹56,16,000 (Structure & Plants)" },
      { label: "Annual Operational Cost", value: "₹14,66,000 / Year" },
      { label: "Gross Annual Returns", value: "₹33,60,000 / Year (@ ₹3.50/flower)" },
      { label: "Net Annual Return", value: "₹18,94,000 / Year" }
    ],
    cultivationGuidelines: [
      "Bed Height: 20-25 cm high & 80 cm wide raised bed with Red Soil, FYM, Rice Husk & Sand",
      "Crop Support: GI wire mesh support system for vertical plant guidance (₹2.4 Lakh)",
      "Irrigation & Fogging: Drip irrigation, fogging system, fertigation & filtration head unit",
      "Planting Material: Rooted cutting plants (80,000 Nos. @ ₹14/plant)"
    ],
    costEconomics: {
      area: "4,000 Sq. Mtr. (1.0 Acre)",
      structureType: "Naturally Ventilated Polyhouse (MIDH Norms)",
      capitalInvestment: [
        { particular: "Polyhouse Construction (GI Pipe + Polyethylene @ ₹844/sq.m)", cost: "₹33,76,000" },
        { particular: "Drip Irrigation, Fogging, Fertigation & Water Filtration Unit", cost: "₹4,00,000" },
        { particular: "Growing System (20-25cm Raised Bed with Red Soil, FYM, Sand)", cost: "₹4,80,000" },
        { particular: "Rooted Cutting Plants (80,000 Nos. @ ₹14/plant)", cost: "₹11,20,000" },
        { particular: "Crop Support System (GI Wire Mesh Support System)", cost: "₹2,40,000" }
      ],
      totalInvestment: "₹56,16,000",
      annualOperationalCost: [
        { particular: "Water, Misting & Spraying (0.25L/plant/day)", cost: "₹20,000" },
        { particular: "Electricity & Generator (3.0 units/day)", cost: "₹50,000" },
        { particular: "Water Soluble Fertilizers", cost: "₹1,60,000" },
        { particular: "Labor Costs (8-10 persons/day)", cost: "₹6,40,000" },
        { particular: "Crop Protection & Spraying", cost: "₹1,40,000" },
        { particular: "Packing Material, Transport & Sales Commission", cost: "₹1,92,000" },
        { particular: "Farm Supervision (₹12,000/month)", cost: "₹1,44,000" },
        { particular: "Miscellaneous (Maintenance & Depreciation)", cost: "₹1,20,000" }
      ],
      totalOperationalCost: "₹14,66,000 / Year",
      returnsAndProfitability: {
        yieldBenchmark: "12 Flowers / Plant / Year (9,60,000 cut blooms/yr)",
        sellingPrice: "₹3.50 Avg. Realization per Bloom",
        grossRevenue: "₹33,60,000 / Year",
        netReturnPerYear: "₹18,94,000 / Year"
      }
    }
  },
  {
    id: "dutch-rose",
    slug: "dutch-rose",
    name: "Dutch Rose",
    type: "Flower",
    variety: "Top Secret, Taj Mahal, Gold Strike, Avalanche",
    shortSummary: "Export-grade long stem cut rose yielding ₹7.57 Lakh net annual profit under 4,000 sq.m naturally ventilated polyhouse.",
    overview: "Dutch roses are the quintessential high-value commercial floriculture crop grown under naturally ventilated polyhouses with misting systems. Protected conditions produce sturdy 60-90 cm stems with vibrant petal color and extended vase life, producing 6,00,000 cut flowers per year from 30,000 top-grafted plants.",
    climateSuitability: "Naturally Ventilated Polyhouse with Top Mist Fogging",
    yieldAdvantage: "Over 20 flowers per plant per year (6,00,000 cut stems/acre) with peak Valentine's rates.",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/dutch-rose-1024x576.jpg",
    keyBenefits: [
      "Indicative Net Return: ₹7,57,000 per year on 4,000 Sq. Mtr (1.0 Acre)",
      "Plant population: 7.5 plants/sq.m (30,000 top-grafted plants)",
      "High yield: 20 flowers/plant (6,00,000 stems/year)",
      "Qualifies for up to 50% capital subsidy under NHB & MIDH"
    ],
    economicsMetrics: [
      { label: "Polyhouse Area", value: "4,000 Sq. Mtr (1.0 Acre)" },
      { label: "Plant Density & Count", value: "7.5 plants/sq.m (30,000 Plants)" },
      { label: "Total Capital Investment", value: "₹44,76,000 (Structure & Plants)" },
      { label: "Annual Operational Cost", value: "₹10,43,000 / Year" },
      { label: "Gross Annual Returns", value: "₹18,00,000 / Year (@ ₹3.00/flower)" },
      { label: "Net Annual Return", value: "₹7,57,000 / Year" }
    ],
    cultivationGuidelines: [
      "Bed Height: 45 cm high & 90 cm wide raised bed with Red Soil, FYM, Rice Husk & Sand",
      "Irrigation & Microclimate: Drip irrigation, misting system for temperature & humidity control, fertigation & filtration unit",
      "Water Requirement: 0.9 litre/plant/day + misting + spraying",
      "Planting Material: Top grafted plants (30,000 Nos. @ ₹10/plant)"
    ],
    costEconomics: {
      area: "4,000 Sq. Mtr. (1.0 Acre)",
      structureType: "Naturally Ventilated Polyhouse (MIDH Norms)",
      capitalInvestment: [
        { particular: "Polyhouse Construction (GI Pipe + Polyethylene @ ₹825/sq.m)", cost: "₹33,76,000" },
        { particular: "Drip Irrigation, Misting System, Fertigation & Filtration Unit", cost: "₹4,00,000" },
        { particular: "Growing System (45cm Raised Bed with Red Soil, FYM, Rice Husk, Sand)", cost: "₹4,00,000" },
        { particular: "Top Grafted Plants (30,000 Nos. @ ₹10/plant)", cost: "₹3,00,000" }
      ],
      totalInvestment: "₹44,76,000",
      annualOperationalCost: [
        { particular: "Water, Misting & Spraying (0.9L/plant/day)", cost: "₹27,000" },
        { particular: "Electricity & Generator (3.0 units/day)", cost: "₹50,000" },
        { particular: "Water Soluble Fertilizers", cost: "₹80,000" },
        { particular: "Labor Costs (3-4 persons/day)", cost: "₹4,32,000" },
        { particular: "Crop Protection & Spraying", cost: "₹60,000" },
        { particular: "Packing Material, Transport & Sales Commission", cost: "₹1,80,000" },
        { particular: "Farm Supervision (₹12,000/month)", cost: "₹1,44,000" },
        { particular: "Miscellaneous (Maintenance & Depreciation)", cost: "₹70,000" }
      ],
      totalOperationalCost: "₹10,43,000 / Year",
      returnsAndProfitability: {
        yieldBenchmark: "20 Flowers / Plant / Year (6,00,000 cut blooms/yr)",
        sellingPrice: "₹3.00 Avg. Realization per Bloom",
        grossRevenue: "₹18,00,000 / Year",
        netReturnPerYear: "₹7,57,000 / Year"
      }
    }
  },
  {
    id: "colored-capsicum",
    slug: "colored-capsicum",
    name: "Colored Capsicum (Yellow & Red Bell Peppers)",
    type: "Vegetable",
    variety: "Bachata, Inspiration, Orobelle, Pasarella",
    shortSummary: "Premium sweet bell peppers yielding ₹6.60 Lakh net annual profit under 4,000 sq.m naturally ventilated polyhouse.",
    overview: "Cultivating sweet bell peppers (colored capsicum) under naturally ventilated polyhouses is one of India's most commercially lucrative vegetable ventures. Sheltered from excessive UV, sucking pests (thrips and mites), and monsoon blight, polyhouse capsicum produces 25,000 kg per year with direct supermarket and hotel procurement.",
    climateSuitability: "Naturally Ventilated Polyhouse",
    yieldAdvantage: "25,000 kg harvest per acre under polyhouse at premium market rates of ₹60/kg.",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/vecteezy_plants-in-greenhouse_12692792-1-1024x685.jpg",
    keyBenefits: [
      "Indicative Net Return: ₹6,60,400 per year on 4,000 Sq. Mtr (1.0 Acre)",
      "High price realization: ₹60/kg average mandi & retail procurement",
      "Total production: 25,000 kg per year (2.5 kg/plant)",
      "Eligible for 50% capital subsidy under NHB & MIDH"
    ],
    economicsMetrics: [
      { label: "Polyhouse Area", value: "4,000 Sq. Mtr (1.0 Acre)" },
      { label: "Plant Density & Count", value: "3.0 plants/sq.m (10,000 Plants)" },
      { label: "Total Capital Investment", value: "₹43,36,000 (Structure & Seedlings)" },
      { label: "Annual Operational Cost", value: "₹8,40,000 / Year" },
      { label: "Gross Annual Returns", value: "₹15,00,000 / Year (@ ₹60/kg)" },
      { label: "Net Annual Return", value: "₹6,60,400 / Year" }
    ],
    cultivationGuidelines: [
      "Bed Height: 40 cm high & 90 cm wide raised bed with Red Soil, FYM, Rice Husk & Sand",
      "Irrigation & Microclimate: Drip irrigation, fogging system, fertigation & filtration head unit",
      "Water Requirement: 1.0 litre/plant/day + misting + spraying",
      "Planting Material: Nursery hybrid seedlings (10,000 Nos. @ ₹10/plant)"
    ],
    costEconomics: {
      area: "4,000 Sq. Mtr. (1.0 Acre)",
      structureType: "Naturally Ventilated Polyhouse (MIDH Norms)",
      capitalInvestment: [
        { particular: "Polyhouse Construction (GI Pipe + Polyethylene @ ₹844/sq.m)", cost: "₹33,76,000" },
        { particular: "Drip Irrigation, Fogging, Fertigation & Water Filtration Unit", cost: "₹4,00,000" },
        { particular: "Growing System (40cm Raised Bed with Red Soil, FYM, Rice Husk, Sand)", cost: "₹4,60,000" },
        { particular: "Nursery Seedling Plants (10,000 Nos. @ ₹10/plant)", cost: "₹1,00,000" }
      ],
      totalInvestment: "₹43,36,000",
      annualOperationalCost: [
        { particular: "Water, Misting & Spraying (1.0L/plant/day)", cost: "₹20,000" },
        { particular: "Electricity & Generator (3.0 units/day)", cost: "₹50,000" },
        { particular: "Water Soluble Fertilizers", cost: "₹1,20,000" },
        { particular: "Labor Costs (3-4 persons/day)", cost: "₹3,00,000" },
        { particular: "Crop Protection & Spraying", cost: "₹50,000" },
        { particular: "Packing Material, Transport & Sales Commission", cost: "₹1,20,000" },
        { particular: "Farm Supervision (₹10,000/month)", cost: "₹1,00,000" },
        { particular: "Miscellaneous (Maintenance & Depreciation)", cost: "₹80,000" }
      ],
      totalOperationalCost: "₹8,40,000 / Year",
      returnsAndProfitability: {
        yieldBenchmark: "2.5 Kg / Plant / Year (25,000 Kg Total Production)",
        sellingPrice: "₹60.00 Avg. Realization per Kg",
        grossRevenue: "₹15,00,000 / Year",
        netReturnPerYear: "₹6,60,400 / Year"
      }
    }
  },
  {
    id: "cucumber",
    slug: "cucumber",
    name: "English Parthenocarpic Cucumber",
    type: "Vegetable",
    variety: "Hilton, Kian, Multistar, Satis",
    shortSummary: "Rapid 30-day turnaround cash crop yielding ₹6.68 Lakh net annual profit with 2 crop cycles under 4,000 sq.m naturally ventilated polyhouse.",
    overview: "Parthenocarpic (self-pollinating seedless) cucumbers produce crisp, seedless, dark-green fruits at every node without insect pollination. With 2 successive crop cycles per year (10,000 plants per cycle = 20,000 plants/year), it delivers 1,00,000 kg total annual yield with fast cash generation.",
    climateSuitability: "Naturally Ventilated Polyhouse / Low Tunnel",
    yieldAdvantage: "1,00,000 kg fruit yield across 2 cycles per year with rapid 30-day harvest initiation.",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/fresh-cucumber-gathered-into-plastic-box-from-greenhouse-plants-1024x683.jpg",
    keyBenefits: [
      "Indicative Net Return: ₹6,68,000 per year on 4,000 Sq. Mtr (1.0 Acre)",
      "Rapid harvest: First cut begins within 30-35 days of transplanting",
      "2 crop cycles per year yielding 1,00,000 kg total fruit",
      "Eligible for 50% capital subsidy under NHB & MIDH"
    ],
    economicsMetrics: [
      { label: "Polyhouse Area", value: "4,000 Sq. Mtr (1.0 Acre)" },
      { label: "Plant Density & Cycles", value: "3 plants/sq.m (10,000 plants × 2 cycles = 20,000/yr)" },
      { label: "Total Capital Investment", value: "₹43,12,000 (Structure & Seedlings)" },
      { label: "Annual Operational Cost", value: "₹8,32,000 / Year" },
      { label: "Gross Annual Returns", value: "₹15,00,000 / Year (@ ₹15/kg)" },
      { label: "Net Annual Return", value: "₹6,68,000 / Year" }
    ],
    cultivationGuidelines: [
      "Bed Height: 40 cm high & 90 cm wide raised bed with Red Soil, FYM, Rice Husk & Sand",
      "Irrigation & Microclimate: Drip irrigation, fogging system, fertigation & filtration head unit",
      "Water Requirement: 1.0 litre/plant/day + misting + spraying",
      "Planting Material: Nursery hybrid seedlings (20,000 Nos./yr @ ₹8/plant)"
    ],
    costEconomics: {
      area: "4,000 Sq. Mtr. (1.0 Acre)",
      structureType: "Naturally Ventilated Polyhouse (MIDH Norms)",
      capitalInvestment: [
        { particular: "Polyhouse Construction (GI Pipe + Polyethylene @ ₹844/sq.m)", cost: "₹33,76,000" },
        { particular: "Drip Irrigation, Fogging, Fertigation & Water Filtration Unit", cost: "₹4,00,000" },
        { particular: "Growing System (40cm Raised Bed with Red Soil, FYM, Rice Husk, Sand)", cost: "₹4,00,000" },
        { particular: "Nursery Seedling Plants (20,000 Nos. in 2 Cycles @ ₹8/plant)", cost: "₹1,60,000" }
      ],
      totalInvestment: "₹43,12,000",
      annualOperationalCost: [
        { particular: "Water, Misting & Spraying (1.0L/plant/day)", cost: "₹20,000" },
        { particular: "Electricity & Generator (3.0 units/day)", cost: "₹50,000" },
        { particular: "Water Soluble Fertilizers", cost: "₹1,12,000" },
        { particular: "Labor Costs (2-3 persons/day)", cost: "₹2,00,000" },
        { particular: "Crop Protection & Spraying", cost: "₹60,000" },
        { particular: "Fruit Packing, Transport & Sales Commission", cost: "₹1,20,000" },
        { particular: "Farm Supervision (₹10,000/month)", cost: "₹1,00,000" },
        { particular: "Miscellaneous (Maintenance & Depreciation)", cost: "₹70,000" }
      ],
      totalOperationalCost: "₹8,32,000 / Year",
      returnsAndProfitability: {
        yieldBenchmark: "5.0 Kg / Plant / Year in 2 Cycles (1,00,000 Kg Total Yield)",
        sellingPrice: "₹15.00 Avg. Realization per Kg",
        grossRevenue: "₹15,00,000 / Year",
        netReturnPerYear: "₹6,68,000 / Year"
      }
    }
  },
  {
    id: "chrysanthemum",
    slug: "chrysanthemum",
    name: "Chrysanthemum",
    type: "Flower",
    variety: "Standard and Spray types (Yellow, White, Purple)",
    shortSummary: "Massive festive cut flower with rapid turnover and high volume commercial demand across India.",
    overview: "Chrysanthemums enjoy year-round commercial demand across Indian religious, wedding, and event markets. Cultivating chrysanthemums in naturally ventilated polyhouses allows precise photoperiod management resulting in off-season flowering with multiple staggered cycles per year.",
    climateSuitability: "Naturally Ventilated Polyhouse with Photoperiod System",
    yieldAdvantage: "Up to 3 crop cycles per year with predictable maturity windows timed with major festivals.",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
    keyBenefits: [
      "Quick harvest cycles with staggered plantings (90-110 days per cycle)",
      "High stem density per square meter (80,000 - 1,00,000 stems/acre)",
      "Consistent mandi absorption throughout winter and festive months",
      "Qualifies for up to 50% capital subsidy under NHB & MIDH"
    ],
    economicsMetrics: [
      { label: "Polyhouse Area", value: "4,000 Sq. Mtr (1.0 Acre)" },
      { label: "Plant Population", value: "80,000 - 1,00,000 stems per acre per cycle" },
      { label: "Crop Duration", value: "90 - 110 days per cycle (2-3 cycles annually)" },
      { label: "Mandi Realization", value: "₹4.00 - ₹8.00 per stem (festive surges up to ₹15)" }
    ],
    cultivationGuidelines: [
      "Soil Requirement: Rich well-drained loamy soil, pH 6.0 - 6.8",
      "Support Netting: 2-3 tiers of horizontal nylon flower support netting as stems grow",
      "Light Manipulation: Night break lighting or black-out curtains for scheduled bud initiation"
    ]
  }
];

export const SUBSIDY_INFO = {
  title: "Government Subsidies & Financial Assistance",
  tagline: "Up to 50% - 75% Capital Support for Protected Cultivation Structures",
  description: "PolyHub Agro Engineers assists progressive farmers, FPOs, and agricultural entrepreneurs in securing financial subsidies under Central and State Government horticultural development missions.",
  authorities: [
    {
      name: "National Horticulture Board (NHB)",
      scope: "Commercial Horticulture Schemes",
      details: "Provides credit-linked back-ended capital investment subsidies for commercial polyhouse, greenhouse, and shade net installations on projects typically exceeding 2,500 sq. meters.",
      eligibleComponents: [
        "Polyhouse and Shade Net structural fabrication",
        "Micro-irrigation, drip, and high-pressure fogging systems",
        "Bed preparation, cocopeat, and soil conditioning",
        "Planting material costs (tissue-cultured flowers / hybrid vegetable seedlings)",
        "Pack house, sorting-grading sheds, and solar pump integration"
      ],
      subsidyRate: "Up to 50% of the prescribed project cost ceiling"
    },
    {
      name: "Mission for Integrated Development of Horticulture (MIDH / NHM)",
      scope: "State Horticulture Departments",
      details: "Administered through District Horticulture Offices (DHO) across Punjab, Maharashtra, Haryana, Rajasthan, Gujarat, and other states. Subsidies are disbursed according to established cost norms per square meter.",
      eligibleComponents: [
        "Naturally Ventilated Polyhouse (Tubular Structure)",
        "Fan & Pad Evaporative Polyhouses",
        "Shade Net Houses (Dome & Flat types)",
        "Anti-insect netting and plastic mulch films"
      ],
      subsidyRate: "50% base subsidy + additional top-up grants in designated states"
    }
  ],
  supportProvided: [
    "Preparation of Bankable Detailed Project Report (DPR) by certified agri-engineers",
    "Supply of structural materials conforming strictly to Bureau of Indian Standards (BIS / ISI)",
    "Site inspection coordination with state horticulture department verification teams",
    "Subsidy file documentation, quotation stamping, and follow-up until disbursement"
  ]
};

export const GALLERY_ITEMS = [
  {
    "title": "Polyhouses Field Execution Project #1",
    "category": "Polyhouses",
    "location": "Patiala, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_9cb01ebd-1.jpg"
  },
  {
    "title": "Greenhouse Field Execution Project #2",
    "category": "Greenhouse",
    "location": "Pune, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.00_2ba3d33c.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #3",
    "category": "Shade Net House",
    "location": "Nashik Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.03_3c367041.jpg"
  },
  {
    "title": "Construction Field Execution Project #4",
    "category": "Construction",
    "location": "Bathinda, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.03_1923c74f.jpg"
  },
  {
    "title": "Farming Field Execution Project #5",
    "category": "Farming",
    "location": "Solapur, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.04_b0e4b2fc.jpg"
  },
  {
    "title": "Polyhouses Field Execution Project #6",
    "category": "Polyhouses",
    "location": "Ludhiana, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.04_b82e64ab.jpg"
  },
  {
    "title": "Greenhouse Field Execution Project #7",
    "category": "Greenhouse",
    "location": "Patiala, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.05_4f7ce404.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #8",
    "category": "Shade Net House",
    "location": "Pune, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.05_31de74a4.jpg"
  },
  {
    "title": "Construction Field Execution Project #9",
    "category": "Construction",
    "location": "Nashik Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.06_6ef49eb7-1.jpg"
  },
  {
    "title": "Farming Field Execution Project #10",
    "category": "Farming",
    "location": "Bathinda, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.06_f97fa1a2.jpg"
  },
  {
    "title": "Polyhouses Field Execution Project #11",
    "category": "Polyhouses",
    "location": "Solapur, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.08_ba1ca66c.jpg"
  },
  {
    "title": "Greenhouse Field Execution Project #12",
    "category": "Greenhouse",
    "location": "Ludhiana, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.09_07bbdc72.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #13",
    "category": "Shade Net House",
    "location": "Patiala, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.13_75d6f947.jpg"
  },
  {
    "title": "Construction Field Execution Project #14",
    "category": "Construction",
    "location": "Pune, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.14_a765bb27.jpg"
  },
  {
    "title": "Farming Field Execution Project #15",
    "category": "Farming",
    "location": "Nashik Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-16.10.17_a800466e.jpg"
  },
  {
    "title": "Polyhouses Field Execution Project #16",
    "category": "Polyhouses",
    "location": "Bathinda, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-16.10.18_52fe5d3f.jpg"
  },
  {
    "title": "Greenhouse Field Execution Project #17",
    "category": "Greenhouse",
    "location": "Solapur, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-16.10.20_3a4ce083.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #18",
    "category": "Shade Net House",
    "location": "Ludhiana, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-16.10.20_5ab4b084.jpg"
  },
  {
    "title": "Construction Field Execution Project #19",
    "category": "Construction",
    "location": "Patiala, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-16.10.20_d02ca9d7.jpg"
  },
  {
    "title": "Farming Field Execution Project #20",
    "category": "Farming",
    "location": "Pune, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-16.10.21_6e2efce7.jpg"
  },
  {
    "title": "Polyhouses Field Execution Project #21",
    "category": "Polyhouses",
    "location": "Nashik Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-16.10.22_a553d75c.jpg"
  },
  {
    "title": "Greenhouse Field Execution Project #22",
    "category": "Greenhouse",
    "location": "Bathinda, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-16.10.24_f5411a05.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #23",
    "category": "Shade Net House",
    "location": "Solapur, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-16.10.25_d4d36c04.jpg"
  },
  {
    "title": "Construction Field Execution Project #24",
    "category": "Construction",
    "location": "Ludhiana, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-16.10.25_dd33c058.jpg"
  },
  {
    "title": "Farming Field Execution Project #25",
    "category": "Farming",
    "location": "Patiala, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-16.10.26_cbb3739b.jpg"
  },
  {
    "title": "Polyhouses Field Execution Project #26",
    "category": "Polyhouses",
    "location": "Pune, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-15.09.35_4009e6f5-2.jpg"
  },
  {
    "title": "Greenhouse Field Execution Project #27",
    "category": "Greenhouse",
    "location": "Nashik Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-12.32.47_3cef84cf.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #28",
    "category": "Shade Net House",
    "location": "Bathinda, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-12.32.47_ac084101.jpg"
  },
  {
    "title": "Construction Field Execution Project #29",
    "category": "Construction",
    "location": "Solapur, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-12.32.48_0e05fde7.jpg"
  },
  {
    "title": "Farming Field Execution Project #30",
    "category": "Farming",
    "location": "Ludhiana, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-12.32.48_8ca299a4.jpg"
  },
  {
    "title": "Polyhouses Field Execution Project #31",
    "category": "Polyhouses",
    "location": "Patiala, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-12.32.48_3588f28b.jpg"
  },
  {
    "title": "Greenhouse Field Execution Project #32",
    "category": "Greenhouse",
    "location": "Pune, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-15.09.35_4009e6f5-1.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #33",
    "category": "Shade Net House",
    "location": "Nashik Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-15.09.36_5c314673.jpg"
  },
  {
    "title": "Climate-Controlled Fan & Pad Greenhouse 34",
    "category": "Greenhouse",
    "location": "Maharashtra Project",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Fan-and-pad-1.jpg"
  },
  {
    "title": "Climate-Controlled Fan & Pad Greenhouse 35",
    "category": "Greenhouse",
    "location": "Maharashtra Project",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Fan-and-pad-2.jpg"
  },
  {
    "title": "Commercial Hydroponic Setup 36",
    "category": "Greenhouse",
    "location": "Precision Agri Site",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Hydroponic-Green-House-1.jpg"
  },
  {
    "title": "Commercial Hydroponic Setup 37",
    "category": "Greenhouse",
    "location": "Precision Agri Site",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Hydroponic-Green-House-2.jpg"
  },
  {
    "title": "Commercial Hydroponic Setup 38",
    "category": "Greenhouse",
    "location": "Precision Agri Site",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Hydroponic-Green-House-3.jpg"
  },
  {
    "title": "Commercial Hydroponic Setup 39",
    "category": "Greenhouse",
    "location": "Precision Agri Site",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Hydroponic-Green-House-4.jpg"
  },
  {
    "title": "Naturally Ventilated Commercial Polyhouse 40",
    "category": "Polyhouses",
    "location": "Punjab State Project",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Naturally-Ventilated-Polyhouse-outer-1.jpg"
  },
  {
    "title": "Multi-Dome Shade Net Structure 41",
    "category": "Shade Net House",
    "location": "Horticulture Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Shade-net-house-flat-1.jpg"
  },
  {
    "title": "High-Roof Arched Tunnel Polyhouse 42",
    "category": "Polyhouses",
    "location": "Protected Cultivation Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Tunnel-type-Polyhouse-1.jpeg"
  },
  {
    "title": "Shade Net House Field Execution Project #43",
    "category": "Shade Net House",
    "location": "Patiala, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0067.jpg"
  },
  {
    "title": "Construction Field Execution Project #44",
    "category": "Construction",
    "location": "Pune, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0068.jpg"
  },
  {
    "title": "Farming Field Execution Project #45",
    "category": "Farming",
    "location": "Nashik Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0069.jpg"
  },
  {
    "title": "Polyhouses Field Execution Project #46",
    "category": "Polyhouses",
    "location": "Bathinda, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0070.jpg"
  },
  {
    "title": "Greenhouse Field Execution Project #47",
    "category": "Greenhouse",
    "location": "Solapur, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0071.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #48",
    "category": "Shade Net House",
    "location": "Ludhiana, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0072.jpg"
  },
  {
    "title": "Construction Field Execution Project #49",
    "category": "Construction",
    "location": "Patiala, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0073.jpg"
  },
  {
    "title": "Farming Field Execution Project #50",
    "category": "Farming",
    "location": "Pune, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0074.jpg"
  },
  {
    "title": "Polyhouses Field Execution Project #51",
    "category": "Polyhouses",
    "location": "Nashik Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0075.jpg"
  },
  {
    "title": "Greenhouse Field Execution Project #52",
    "category": "Greenhouse",
    "location": "Bathinda, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0076.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #53",
    "category": "Shade Net House",
    "location": "Solapur, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0077.jpg"
  },
  {
    "title": "Construction Field Execution Project #54",
    "category": "Construction",
    "location": "Ludhiana, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0078.jpg"
  },
  {
    "title": "Farming Field Execution Project #55",
    "category": "Farming",
    "location": "Patiala, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0079.jpg"
  },
  {
    "title": "Polyhouses Field Execution Project #56",
    "category": "Polyhouses",
    "location": "Pune, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0080.jpg"
  },
  {
    "title": "Greenhouse Field Execution Project #57",
    "category": "Greenhouse",
    "location": "Nashik Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0081.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #58",
    "category": "Shade Net House",
    "location": "Bathinda, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0082.jpg"
  },
  {
    "title": "Construction Field Execution Project #59",
    "category": "Construction",
    "location": "Solapur, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0083.jpg"
  },
  {
    "title": "Farming Field Execution Project #60",
    "category": "Farming",
    "location": "Ludhiana, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0084.jpg"
  },
  {
    "title": "Polyhouses Field Execution Project #61",
    "category": "Polyhouses",
    "location": "Patiala, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0085.jpg"
  },
  {
    "title": "Greenhouse Field Execution Project #62",
    "category": "Greenhouse",
    "location": "Pune, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0086.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #63",
    "category": "Shade Net House",
    "location": "Nashik Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0087.jpg"
  },
  {
    "title": "Construction Field Execution Project #64",
    "category": "Construction",
    "location": "Bathinda, Punjab",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/IMG-20240806-WA0088.jpg"
  },
  {
    "title": "Multi-Dome Shade Net Structure 65",
    "category": "Shade Net House",
    "location": "Horticulture Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-1-1.jpg"
  },
  {
    "title": "Multi-Dome Shade Net Structure 66",
    "category": "Shade Net House",
    "location": "Horticulture Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-2-1.jpg"
  },
  {
    "title": "Multi-Dome Shade Net Structure 67",
    "category": "Shade Net House",
    "location": "Horticulture Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-3-1.jpg"
  },
  {
    "title": "Shade Net House Field Execution Project #68",
    "category": "Shade Net House",
    "location": "Pune, Maharashtra",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-06-at-21.32.28_048b29ee.jpg"
  },
  {
    "title": "Construction Field Execution Project #69",
    "category": "Construction",
    "location": "Nashik Cluster",
    "image": "https://polyhubagro.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-06-at-21.32.28_5380298c.jpg"
  }
];
