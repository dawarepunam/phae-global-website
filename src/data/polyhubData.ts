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
    badge: "Flagship",
    shortDescription: "Engineered with aerodynamic natural ridge and side vents that ensure optimal air circulation without excessive power consumption.",
    fullDescription: "The Naturally Ventilated Polyhouse from PolyHub Agro Engineers is the gold standard for protected cultivation across India. Designed to withstand wind speeds of up to 130-150 km/h, this structure leverages natural thermal buoyancy principles through aerodynamic top ridge vents and continuous motorized or manual side curtain ventilation. It ensures uniform humidity and temperature dissipation without relying on heavy electrical power, making it the most cost-effective and dependable shelter for commercial horticulture.",
    bannerImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=85",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80"
    ],
    specifications: [
      { label: "Structural Framework", value: "Hot-Dip Galvanized Iron (GI) Pipes conforming to IS 1239 / IS 1161" },
      { label: "Wind Velocity Resistance", value: "Tested up to 130 - 150 km/h aerodynamic endurance" },
      { label: "Cladding Material", value: "200-micron multi-layered UV-stabilized anti-drip, anti-dust polyfilm" },
      { label: "Gutter Height", value: "4.0 to 4.5 meters from ground level" },
      { label: "Ridge Height", value: "6.0 to 6.5 meters with aerodynamic continuous ventilation opening" },
      { label: "Insect Exclusion", value: "40 / 50 Mesh virgin HDPE monofilament netting along all vents" },
      { label: "Foundation Standard", value: "Telescopic civil concrete footing grouted 750mm to 1000mm deep" },
      { label: "Corrosion Protection", value: "Minimum 275 - 350 GSM zinc galvanization coating" }
    ],
    features: [
      "Top-grade galvanized steel structure with 120-150 km/h wind resistance",
      "200-micron UV-stabilized anti-drip, anti-fog diffused polyethylene film",
      "Continuous aerodynamic top ridge ventilator with insect mesh protection",
      "Manual or motorized roll-up side ventilation curtain system with lock profiles"
    ],
    idealFor: "Capsicum, Cucumber, Tomato, Dutch Roses, Gerberas, and Commercial Nursery Raising",
    technicalHighlights: [
      "Natural chimney-effect airflow reducing ambient heat by 4-6°C",
      "Diffused light distribution preventing sunburn on tender blooms and fruits",
      "Heavy-duty profile wire and aluminum locking spring fasteners"
    ],
    advantages: [
      "Zero continuous electricity required for base ventilation",
      "Qualifies for up to 50% capital subsidy under NHM / MIDH guidelines",
      "15+ years structural design lifespan on GI framework"
    ]
  },
  {
    id: "fan-and-pad-polyhouse",
    slug: "fan-and-pad-polyhouse",
    title: "Fan and Pad Polyhouse (Climate Controlled)",
    category: "Polyhouses",
    badge: "Climate Controlled",
    shortDescription: "Fully automated, temperature and humidity controlled environment utilizing evaporative cellulose cooling pads and high-CFM extraction fans.",
    fullDescription: "The Fan and Pad Polyhouse represents the pinnacle of precision greenhouse engineering. Built for arid regions with scorching summers or growers cultivating hypersensitive exotic crops, this system actively cools and humidifies the interior through evaporative cellulose cooling pads installed along one wall and high-CFM exhaust fans on the opposing wall. Monitored by PLC microclimate automation, it maintains peak growing conditions regardless of extreme outdoor heat.",
    bannerImage: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1800&q=85",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=800&q=80"
    ],
    specifications: [
      { label: "Cooling Media", value: "Fluted cellulose paper pads (100mm / 150mm thickness) with anti-algae treatment" },
      { label: "Exhaust Fans", value: "50-inch industrial belt-driven fans with automatic centrifugal louvers" },
      { label: "Cooling Efficiency", value: "Temperature reduction of 8°C to 12°C relative to ambient outdoor heat" },
      { label: "Structural Frame", value: "Tubular galvanized steel truss framework with heavy gusset plates" },
      { label: "Automation System", value: "Integrated PLC digital thermostat & relative humidity sensor controller" },
      { label: "Water Distribution", value: "PVC header and gutter recycling loop with inline secondary filtration" },
      { label: "Covering Film", value: "5-layer thermal infrared retaining 200-micron polyfilm" }
    ],
    features: [
      "Heavy duty cellulose cooling pads with water distribution & filtration",
      "High CFM industrial exhaust fans with automated shutter control",
      "PLC-based temperature, humidity and microclimate monitoring",
      "Suitable for round-the-year cultivation in extreme weather zones"
    ],
    idealFor: "Exotic Floriculture, Carnations, Orchids, Anthuriums, Tissue Culture & Seed Production",
    technicalHighlights: [
      "Closed-loop evaporative cooling preventing insect ingress completely",
      "Automatic staged fan triggering to save electrical power during cool periods",
      "Thermal shading screen inside for additional heat insulation"
    ],
    advantages: [
      "Year-round predictable harvests regardless of 45°C ambient temperatures",
      "Superior petal size and export grade stem lengths",
      "Eligible for maximum NHB commercial project subsidies"
    ]
  },
  {
    id: "tunnel-type-polyhouse",
    slug: "tunnel-type-polyhouse",
    title: "Tunnel Type Polyhouse",
    category: "Polyhouses",
    badge: "Cost-Effective",
    shortDescription: "Economical arched structure designed for high-density vegetable production, season extension, and cold protection.",
    fullDescription: "PolyHub's Tunnel Type Polyhouse offers an agile and budget-conscious protected cultivation solution. Built with curved arch pipes that resist heavy rain, hail, and unseasonal frosts, it is exceptionally easy to erect and maintain. Ideal for small-to-medium farmers extending early-season harvest windows for strawberries, vegetables, and seedlings.",
    bannerImage: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=1800&q=85",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80"
    ],
    specifications: [
      { label: "Arch Geometry", value: "Semi-circular Gothic arch providing rapid water runoff and snow shed" },
      { label: "Pipe Standard", value: "Pre-galvanized circular hollow sections (32mm / 42mm OD)" },
      { label: "Span Width", value: "6.0 to 8.0 meters per single tunnel bay" },
      { label: "Peak Center Height", value: "3.2 to 3.8 meters" },
      { label: "Ground Anchoring", value: "Direct ground anchor foundation pipes or mini concrete footings" },
      { label: "Covering Film", value: "150 - 200 micron UV stabilized polyethylene film" }
    ],
    features: [
      "Sturdy hoop galvanized GI piping with ground anchoring system",
      "Quick assembly modular structure with low maintenance",
      "Diffused light transmission ensuring uniform canopy growth",
      "Excellent defense against hail, frost, and unseasonal heavy rain"
    ],
    idealFor: "Strawberries, Leafy Greens, Seedling Raising, Early Market Vegetables",
    technicalHighlights: [
      "Streamlined curved profile preventing wind buffeting",
      "Quick polyfilm tensioning using profile clamps and zig-zag wires"
    ],
    advantages: [
      "Lowest capital expenditure per square meter",
      "Can be relocated or expanded modularly as farm operations scale",
      "Harvest 3-4 weeks earlier than open-field competitors"
    ]
  },
  {
    id: "hydroponic-greenhouse",
    slug: "hydroponic-greenhouse",
    title: "Hydroponic Greenhouse System",
    category: "Precision Agri",
    badge: "Next-Gen Agri",
    shortDescription: "Complete soil-less farming installation leveraging NFT channels, Dutch Buckets, and automated nutrient dosing systems.",
    fullDescription: "PolyHub Hydroponic Greenhouse combines high-precision structural environmental control with cutting-edge soil-less fertigation. Utilizing Nutrient Film Technique (NFT) for leafy greens and Dutch Buckets for fruiting vegetables, this setup eliminates soil-borne pests, reduces water usage by up to 90%, and yields up to 4 times higher per unit area.",
    bannerImage: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1800&q=85",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
    ],
    specifications: [
      { label: "Cultivation Systems", value: "Food-grade UV stabilized UPVC NFT channels & Dutch Buckets with perlite/cocopeat" },
      { label: "Dosing Automation", value: "Automated EC & pH continuous monitoring and injection unit" },
      { label: "Water Savings", value: "90% reduction compared to furrow/field irrigation through recirculating loop" },
      { label: "Lighting Integration", value: "Optional supplementary horticultural LED grow bars" },
      { label: "Plumbing Media", value: "Class 6 commercial PVC piping with mechanical filtration" }
    ],
    features: [
      "Food-grade UV-resistant NFT gullies and Dutch bucket arrays",
      "Automated EC & pH monitoring dosing controllers",
      "90% water saving compared to conventional open-field farming",
      "Zero soil-borne pathogens and up to 4x crop cycle turnover"
    ],
    idealFor: "Lettuce, Exotic Herbs, Cherry Tomatoes, Bell Peppers, Strawberries",
    technicalHighlights: [
      "Precision closed loop recycling nutrient run-off",
      "Clean room harvesting standards appealing to high-end hospitality chains"
    ],
    advantages: [
      "Pesticide-free residue-free premium produce realization",
      "Scalable commercial production on barren or non-fertile land",
      "Year-round stable contract farming supply"
    ]
  },
  {
    id: "shade-net-house-dome",
    slug: "shade-net-house-dome",
    title: "Shade Net House (Dome & Flat Models)",
    category: "Shade Nets",
    badge: "Horticulture",
    shortDescription: "Durable shading solutions engineered to block excess solar radiation, reduce heat stress, and protect crops from harsh UV.",
    fullDescription: "PolyHub Shade Net Houses (available in both Curved Dome and Flat Truss variants) are engineered to protect crops from intense solar insolation, thermal shock, torrential hail, and pest infestations. Fabricated using hot-dip galvanized steel members and virgin HDPE mono-tape shade nets (35% to 75% shade factor), these structures create an optimum light-diffusion microenvironment.",
    bannerImage: "https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=1800&q=85",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
    ],
    specifications: [
      { label: "Structural Frame", value: "GI tubular columns with top truss bracing" },
      { label: "Netting Material", value: "Virgin HDPE monofilament & tape combination with 5-year UV warranty" },
      { label: "Shade Percentages", value: "35%, 50%, 75%, and 90% in Green/Green, Black, or White" },
      { label: "Height Clearance", value: "3.5 to 4.5 meters allowing internal tractor maneuvering" },
      { label: "Wind Defense", value: "Aerodynamic mesh porosity reducing wind impact load" }
    ],
    features: [
      "Custom shade percentages (35%, 50%, 75%, 90%) HDPE monofilament netting",
      "Dome and flat truss structural frameworks with corrosion protection",
      "Significant reduction in evapotranspiration and water demand",
      "Hail and bird protection for high-value fruit and vegetable crops"
    ],
    idealFor: "Horticulture nurseries, Foliage plants, Ginger, Turmeric, Betel Vine, Anthuriums",
    technicalHighlights: [
      "Reduces internal canopy temperature by 3°C to 5°C during summer peaks",
      "Fast drainage top dome avoiding water pooling during monsoons"
    ],
    advantages: [
      "Subsidized up to 50% under National Horticulture Mission",
      "Low capital cost with 10+ year frame life"
    ]
  },
  {
    id: "wire-rope-shade-net",
    slug: "wire-rope-shade-net",
    title: "Wire Rope Shade Net House",
    category: "Shade Nets",
    badge: "Commercial Acreage",
    shortDescription: "High-tensile wire rope suspension architecture for covering vast agricultural expanses with minimal foundation footprint.",
    fullDescription: "When covering multi-acre orchards or expansive commercial vegetable farms, traditional pipe columns can be costly and obstruct machinery. The PolyHub Wire Rope Shade Net House utilizes high-tensile multi-strand galvanized aircraft cables suspended between heavy-duty perimeter anchor masts, providing immense structural expanse with minimal internal column clutter.",
    bannerImage: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1800&q=85",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=900&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
    ],
    specifications: [
      { label: "Cable Standard", value: "Hot-dip galvanized high-tensile multi-strand steel aircraft rope" },
      { label: "Perimeter Anchors", value: "Heavy RCC deadman ground anchor blocks engineered for dynamic wind shear" },
      { label: "Column Spacing", value: "Generous 8m x 8m or 10m x 10m grid enabling full tractor pass-through" },
      { label: "Fastening Hardware", value: "Forged turnbuckles, wire rope clamps, and thimbles with anti-loosening locks" }
    ],
    features: [
      "Galvanized multi-strand aircraft-grade cable network",
      "Optimized column spacing allowing tractor and machinery access",
      "High wind shock absorption and tensile endurance",
      "Cost-optimized for large commercial orchards and vegetable belts"
    ],
    idealFor: "Pomegranate, Papaya, Banana, Dragon Fruit, and Commercial Open-Field Vegetables",
    technicalHighlights: [
      "Dynamic tension dampening resisting sudden storm wind gusts",
      "Substantially reduced structural weight compared to rigid truss assemblies"
    ],
    advantages: [
      "Most economical shading structure for projects above 2 acres",
      "Prevents sun-scalding on export fruit yields by over 40%"
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "construction-and-installation",
    slug: "construction-and-installation",
    title: "Construction & Installation",
    shortDescription: "Professional construction and installation services for all types of polyhouses and greenhouses.",
    fullDescription: "PolyHub Agro Engineers delivers rigorous, end-to-end civil and mechanical execution. From topographical soil compaction audits and RCC foundation anchor casting to precision GI truss erection and automated polyfilm locking, our certified agricultural civil engineers ensure each structure conforms to national IS engineering standards.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80",
    icon: "Hammer",
    deliverables: [
      "Site topography & soil-bearing capacity audit",
      "Telescopic civil concrete footing grouting",
      "Galvanized GI truss fabrication & bolt assembly",
      "200-micron polyfilm locking & insect netting installation",
      "Micro-irrigation & fogger pipeline integration",
      "Final structural stability certification"
    ],
    processSteps: [
      { step: "01", title: "Topographical Survey", description: "GPS and level measurement to optimize greenhouse orientation against sun and wind directions." },
      { step: "02", title: "Foundation Casting", description: "Excavation and civil casting of telescopic anchor columns with standard concrete mix." },
      { step: "03", title: "Truss Assembly", description: "Precision erection of hot-dip galvanized columns, purlins, and gutter channels with high-grade bolts." },
      { step: "04", title: "Cladding & Commissioning", description: "Uniform tensioning of UV polyfilm and integration of drip and microclimate controls." }
    ],
    features: [
      "Executed by specialized agricultural structural crews",
      "Full adherence to NHB and MIDH structural technical specifications",
      "All-weather structural durability with multi-year warranty"
    ]
  },
  {
    id: "maintenance-and-support",
    slug: "maintenance-and-support",
    title: "Maintenance & Support",
    shortDescription: "Regular maintenance, retrofitting, and technical support to ensure long-term performance.",
    fullDescription: "Greenhouse longevity and crop profitability depend on preventative structural audits and rapid technical assistance. PolyHub provides comprehensive service contracts, emergency storm-damage repair, polyfilm re-tensioning, cooling pad descaling, and automation upgrades to keep your farm operating at peak efficiency.",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=900&q=80",
    icon: "Wrench",
    deliverables: [
      "Polyfilm tear repair, patching, and seasonal re-tensioning",
      "Evaporative cooling pad chemical descaling and fan motor servicing",
      "Drip irrigation flush, acid treatment, and filter backwash audits",
      "IoT climate sensor re-calibration and PLC firmware upgrades",
      "Emergency post-storm structural reinforcement"
    ],
    processSteps: [
      { step: "01", title: "Structural Audit", description: "Comprehensive check of cable tension, bolt tightness, and film elasticity." },
      { step: "02", title: "Component Servicing", description: "Descaling cooling pads, flushing irrigation lines, and checking exhaust shutter alignment." },
      { step: "03", title: "Preventative Upgrades", description: "Installing replacement parts or retrofitting automated sensors." }
    ],
    features: [
      "Rapid response technical team across Punjab, Maharashtra & neighboring states",
      "Genuine replacement parts conforming to original specifications",
      "Comprehensive Annual Maintenance Contracts (AMC) available"
    ]
  },
  {
    id: "custom-polyhouse-design",
    slug: "custom-polyhouse-design",
    title: "Custom Polyhouse Design",
    shortDescription: "Tailor-made designs as per your land area, crop, and business needs.",
    fullDescription: "No two agricultural tracts are identical. PolyHub's in-house engineering team crafts bespoke polyhouse CAD blueprints customized to your land topography, local wind history, water quality, and targeted crop varieties. We balance structural integrity with optimal light distribution and economic viability.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80",
    icon: "DraftingCompass",
    deliverables: [
      "Site-specific CAD blueprints and civil structural drawings",
      "Wind dynamic and shadow simulation models",
      "Detailed Bill of Materials (BOM) and technical rate analysis",
      "Bankable Detailed Project Report (DPR) for subsidy and loan sanctioning"
    ],
    processSteps: [
      { step: "01", title: "Requirement Gathering", description: "Evaluating crop choices, farm acreage, budget targets, and local climatic variables." },
      { step: "02", title: "Engineering Blueprinting", description: "CAD designing structural layouts, ventilation ratios, and irrigation zoning." },
      { step: "03", title: "DPR Finalization", description: "Preparing comprehensive project reports conforming to bank and government subsidy formats." }
    ],
    features: [
      "Custom gutter slopes ensuring flawless monsoon water discharge",
      "Engineered to qualify for maximum government capital subsidies",
      "Scalable layouts allowing phased commercial expansion"
    ]
  }
];

export const CROPS_ECONOMICS_LIST: CropEconomicsItem[] = [
  {
    id: "orchid",
    slug: "orchid",
    name: "Orchid",
    type: "Flower",
    variety: "Dendrobium, Phalaenopsis, Cymbidium",
    shortSummary: "High-value crop with excellent market demand.",
    overview: "Orchids are among the highest-revenue commercial floriculture crops in the international and domestic luxury gift markets. Cultivated in climate-controlled fan & pad or shaded structures, orchids require high relative humidity (60-80%) and filtered light. Because of their long flower vase life (up to 3-4 weeks), they command exceptional prices throughout wedding and holiday seasons.",
    climateSuitability: "Climate-Controlled Fan & Pad Polyhouse / 75% Shade Net",
    yieldAdvantage: "Continuous harvesting across 4-6 years from a single planting, yielding premium stem returns.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    keyBenefits: [
      "High market value & luxury gifting appeal",
      "Year-round controlled production window",
      "Low water requirement with drip misting",
      "Excellent export potential to Middle-East & European flower auctions"
    ],
    economicsMetrics: [
      { label: "Target Plant Density", value: "35,000 - 40,000 plants per acre" },
      { label: "Harvest Cycle", value: "Starts from month 9-10; commercial harvest for 4+ years" },
      { label: "Expected Yield", value: "6 - 8 cut spikes per plant per year" },
      { label: "Market Price Realization", value: "₹25 - ₹45 per spike (premium festive spikes up to ₹60+)" }
    ],
    cultivationGuidelines: [
      "Substrate: Coconut husk chips, charcoal, and brick pieces (soil-less)",
      "Humidity: 65% to 80% maintained through automated micro-foggers",
      "Nutrient Management: Foliar feeding with balanced NPK micronutrients twice weekly"
    ]
  },
  {
    id: "anthurium",
    slug: "anthurium",
    name: "Anthurium",
    type: "Flower",
    variety: "Tropical Red, Fire, Sensazione, Pistache",
    shortSummary: "Long vase life cut flower with constant commercial returns.",
    overview: "Anthuriums are tropical evergreen perennials prized for their distinctive heart-shaped spathes. Cultivated in 70-75% shade net houses or naturally ventilated polyhouses with micro-fogging, anthuriums produce consistent weekly stems year-round. Their resilience during cold storage and long transit makes them a favorite for corporate floristry.",
    climateSuitability: "75% Shade Net House / Humidity Managed Polyhouse",
    yieldAdvantage: "Continuous production with 6-8 blooms per plant annually and minimal seasonal price fluctuation.",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=800&q=80",
    keyBenefits: [
      "Shade-loving crop yielding for 4-5 consecutive years",
      "Requires 75% shade net house infrastructure",
      "Premium rates in corporate and hotel floristry",
      "Minimal pesticide requirement in protected houses"
    ],
    economicsMetrics: [
      { label: "Plant Density", value: "28,000 - 32,000 plants per acre" },
      { label: "First Harvest", value: "6 - 8 months after planting" },
      { label: "Annual Stem Output", value: "1.8 - 2.2 Lakh export quality cut flowers per acre" },
      { label: "Average Realization", value: "₹20 - ₹40 per stem" }
    ],
    cultivationGuidelines: [
      "Bed Preparation: Raised beds with cocopeat, composted pine bark, and gravel",
      "Temperature Range: 18°C to 28°C; sensitive to temperatures below 14°C",
      "Irrigation: Drip with overhead micro-sprinklers for relative humidity balancing"
    ]
  },
  {
    id: "chrysanthemum",
    slug: "chrysanthemum",
    name: "Chrysanthemum",
    type: "Flower",
    variety: "Standard and Spray types (Yellow, White, Purple)",
    shortSummary: "Massive festive and event consumption across India.",
    overview: "Chrysanthemums enjoy year-round commercial demand across Indian religious, wedding, and event markets. Cultivating chrysanthemums in naturally ventilated polyhouses allows precise photoperiod management (blackout curtains for day-length manipulation), resulting in off-season flowering when open-field prices skyrocket.",
    climateSuitability: "Naturally Ventilated Polyhouse with Photoperiod Blackout System",
    yieldAdvantage: "Up to 3 crop cycles per year with predictable maturity windows timed with major festivals.",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
    keyBenefits: [
      "Quick harvest cycles with staggered plantings",
      "High stem density per square meter",
      "Consistent mandi absorption throughout winter and festive months",
      "Low seedling mortality rate in protected polyhouses"
    ],
    economicsMetrics: [
      { label: "Plant Population", value: "80,000 - 100,000 stems per acre per cycle" },
      { label: "Crop Duration", value: "90 - 110 days per cycle (2-3 cycles annually)" },
      { label: "Annual Revenue Cycle", value: "High turnover with rapid capital recovery within 12 months" }
    ],
    cultivationGuidelines: [
      "Soil Requirement: Rich well-drained loamy soil, pH 6.0 - 6.8",
      "Support Netting: 2-3 tiers of horizontal nylon flower support netting as stems grow",
      "Light Manipulation: Night break lighting or black-out curtains for scheduled bud initiation"
    ]
  },
  {
    id: "gerbera",
    slug: "gerbera",
    name: "Gerbera",
    type: "Flower",
    variety: "Rosalin, Dune, Intense, Balance, Goliath",
    shortSummary: "Year-round flowering with uniform head size and vibrant colors.",
    overview: "Gerbera is the backbone of the commercial Indian cut-flower industry. In climate-controlled or well-ventilated polyhouses, each plant yields 35 to 45 pristine stems annually for over 30 to 36 months. Protected structures eliminate rain-splash soil contamination, which is the primary cause of crown rot in open fields.",
    climateSuitability: "Naturally Ventilated Polyhouse / Climate Controlled",
    yieldAdvantage: "Daily harvest rhythm with 3x higher premium grade stems compared to open fields.",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
    keyBenefits: [
      "Daily harvest yield for up to 3 years",
      "30-40 blooms per plant per year in fan & pad setups",
      "High demand across Indian wedding and corporate industries",
      "Up to 50% subsidy applicable under state horticulture missions"
    ],
    economicsMetrics: [
      { label: "Plant Density", value: "24,000 - 28,000 tissue-cultured plants per acre" },
      { label: "Harvest Window", value: "Starts at 10-12 weeks; continuous daily harvest for 3 years" },
      { label: "Annual Yield", value: "8 - 10 Lakh cut blooms per acre per year" },
      { label: "Average Price", value: "₹3.50 to ₹7.00 per bloom (festive surges up to ₹12-15)" }
    ],
    cultivationGuidelines: [
      "Bed Height: 45cm raised beds with sand, soil, and well-rotted FYM",
      "pH Range: 5.5 to 6.5 with EC under 1.0 mS/cm",
      "Irrigation: Drip fertigation delivering precise potassium-to-nitrogen ratios"
    ]
  },
  {
    id: "carnation",
    slug: "carnation",
    name: "Carnation",
    type: "Flower",
    variety: "Standard Carnation (Master, Farida, Baltico, Kiro)",
    shortSummary: "World's most demanded bouquet flower with premium stem pricing.",
    overview: "Carnations demand cool night temperatures and low relative humidity, making them prime candidates for protected cultivation in hilly zones or fan & pad polyhouses in the plains. With high planting density and pinch-pruning techniques, growers achieve multiple flushes of long, sturdy stems suitable for export.",
    climateSuitability: "Fan & Pad Evaporative Polyhouse / High-Elevation Polyhouse",
    yieldAdvantage: "Dense canopy yields up to 200 stems per square meter annually with long post-harvest vase life.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    keyBenefits: [
      "Cold tolerant under naturally ventilated polyhouses",
      "Very long shelf-life during transit and cold storage",
      "High density planting (up to 25-30 plants/sqm)",
      "Contract farming purchase buybacks available"
    ],
    economicsMetrics: [
      { label: "Plant Density", value: "80,000 - 100,000 rooted cuttings per acre" },
      { label: "Harvest Duration", value: "Two distinct seasonal flushes over 2 years" },
      { label: "Expected Revenue", value: "High export margin with steady domestic luxury demand" }
    ],
    cultivationGuidelines: [
      "Temperature: Day 20-22°C, Night 12-15°C",
      "Pinching: Single or pinch-and-a-half method to stimulate multi-lateral stems",
      "Ventilation: Vigorous air circulation to prevent Botrytis flower blight"
    ]
  },
  {
    id: "colored-capsicum",
    slug: "colored-capsicum",
    name: "Colored Capsicum (Yellow & Red Bell Peppers)",
    type: "Vegetable",
    variety: "Bachata, Inspiration, Orobelle, Pasarella",
    shortSummary: "Yellow & Red Bell Peppers offering 4x higher margins than green capsicum.",
    overview: "Cultivating sweet bell peppers (colored capsicum) under naturally ventilated polyhouses is one of India's most commercially lucrative horticulture ventures. Sheltered from excessive UV, sucking pests (thrips and mites), and monsoon blight, polyhouse capsicum plants grow up to 10-12 feet tall on trellises, producing glossy, four-lobed fruits with thick, crunchy pericarp walls.",
    climateSuitability: "Naturally Ventilated Polyhouse",
    yieldAdvantage: "35 to 45 tons per acre under polyhouse vs 8 to 10 tons in open fields.",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    keyBenefits: [
      "Yields up to 35-40 tons per acre inside polyhouse",
      "Direct procurement from supermarket chains, hotels, and food aggregators",
      "8-9 months extended harvesting season",
      "Thick glossy walls reducing transit loss and increasing shelf life"
    ],
    economicsMetrics: [
      { label: "Plant Population", value: "12,000 - 14,000 plants per acre (two-stem training system)" },
      { label: "Harvest Window", value: "Starts at 65-75 days; harvested weekly for 8-9 months" },
      { label: "Average Production", value: "35,000 - 45,000 kg per acre" },
      { label: "Price Realization", value: "₹40 - ₹80 per kg depending on season and quality" }
    ],
    cultivationGuidelines: [
      "Trellising: Overhead GI support wires with vertical nylon twine clips",
      "Pruning: Strict two-leader stem training, removing all side sucker branches",
      "Fertigation: Regular calcium and potassium dosing to avoid blossom end rot"
    ]
  },
  {
    id: "cucumber",
    slug: "cucumber",
    name: "English Parthenocarpic Cucumber",
    type: "Vegetable",
    variety: "Hilton, Kian, Multistar, Satis",
    shortSummary: "Seedless, crisp fruit harvestable in 30-35 days with rapid turnovers.",
    overview: "Parthenocarpic (self-pollinating seedless) cucumbers are bred specifically for protected greenhouse cultivation without insect pollination. They grow rapidly, producing crisp, dark-green fruits at every node. Because of the rapid 30-day turnaround, farmers can produce 3 to 4 successive crop cycles per year.",
    climateSuitability: "Naturally Ventilated Polyhouse / Low Tunnel",
    yieldAdvantage: "Continuous fruit setting at every leaf axil with 4x higher productivity than field cucumbers.",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    keyBenefits: [
      "Harvest starts within 30-35 days of transplanting",
      "Seedless and uniform fruit size favored by modern retail",
      "3 to 4 crop cycles possible in a single year",
      "High daily cash flow generation"
    ],
    economicsMetrics: [
      { label: "Plant Density", value: "10,000 - 12,000 plants per acre" },
      { label: "Cycle Duration", value: "90 - 100 days per crop cycle" },
      { label: "Expected Yield", value: "25 - 30 tons per acre per cycle" }
    ],
    cultivationGuidelines: [
      "Trellising: Single vertical string training system",
      "Pollination: Self-pollinating; insect-proof netting prevents unwanted insect cross-pollination",
      "Harvesting: Morning harvest at tender 180-220g fruit weight"
    ]
  },
  {
    id: "betel-vine",
    slug: "betel-vine",
    name: "Betel Vine (Paan Cultivation)",
    type: "Vegetable",
    variety: "Meetha Paan, Magahi, Desi Varieties",
    shortSummary: "Traditional high-value crop protected from scorching sun and dry winds.",
    overview: "Betel vine (Paan) cultivation requires sheltered humidity, moderate warmth, and filtered sunlight. PolyHub's 75% shade net houses provide the ideal microclimate, shielding tender climbing vines from summer scorching and dry winds, while reducing irrigation demand and preventing leaf spot diseases.",
    climateSuitability: "75% Shade Net House",
    yieldAdvantage: "Higher leaf luster, uniform sizing, and continuous plucking throughout the year.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    keyBenefits: [
      "Consistent humidity retention",
      "Protection from destructive winds and hail",
      "Higher market price for tender, unblemished leaves",
      "Continuous plucking for several consecutive years"
    ],
    economicsMetrics: [
      { label: "Canopy Management", value: "Vertical bamboo / GI trellis climbing arrays" },
      { label: "Harvest Frequency", value: "Weekly leaf harvesting year-round" },
      { label: "Commercial Viability", value: "High local mandi demand with zero cold storage reliance" }
    ],
    cultivationGuidelines: [
      "Shading: 70% to 75% monofilament shade netting",
      "Soil moisture: Constant moist root zone through low-pressure drippers",
      "Protection: Enclosed insect net borders preventing chewing insects"
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
