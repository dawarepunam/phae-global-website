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
