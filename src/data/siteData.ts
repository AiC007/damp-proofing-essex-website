export const siteData = {
  business: {
    name: "Essex Damp Solutions",
    tagline: "Expert Damp Proofing Services in Essex",
    phone: "020 XXXX XXXX",
    email: "info@essexdampsolutions.co.uk",
    address: {
      street: "Seven Kings",
      locality: "Seven Kings",
      region: "Essex",
      postalCode: "IG3",
      country: "GB",
    },
    geo: {
      latitude: 51.5635,
      longitude: 0.0968,
    },
    openingHours: "Mo-Su 08:00-20:00",
    priceRange: "££",
    foundedYear: 2010,
    yearsInBusiness: new Date().getFullYear() - 2010,
  },

  serviceArea: {
    radius: "15 miles",
    center: "Seven Kings",
    locations: [
      { name: "Seven Kings", slug: "seven-kings", postcode: "IG3" },
      { name: "Ilford", slug: "ilford", postcode: "IG1" },
      { name: "Barking", slug: "barking", postcode: "IG11" },
      { name: "Dagenham", slug: "dagenham", postcode: "RM8" },
      { name: "Romford", slug: "romford", postcode: "RM1" },
      { name: "Chadwell Heath", slug: "chadwell-heath", postcode: "RM6" },
      { name: "Goodmayes", slug: "goodmayes", postcode: "IG3" },
      { name: "Newbury Park", slug: "newbury-park", postcode: "IG2" },
      { name: "Redbridge", slug: "redbridge", postcode: "IG4" },
      { name: "Gants Hill", slug: "gants-hill", postcode: "IG2" },
      { name: "Woodford", slug: "woodford", postcode: "IG8" },
      { name: "Walthamstow", slug: "walthamstow", postcode: "E17" },
      { name: "Stratford", slug: "stratford", postcode: "E15" },
    ],
    postcodes: ["IG1", "IG2", "IG3", "IG4", "IG5", "IG6", "IG7", "IG8", "IG11", "RM1", "RM2", "RM3", "RM4", "RM5", "RM6", "RM7", "RM8", "RM9", "RM10", "E15", "E17"],
  },

  services: [
    {
      id: "rising-damp",
      name: "Rising Damp Treatment",
      slug: "rising-damp",
      shortDescription: "Professional diagnosis and treatment of rising damp in walls and floors.",
      description: "Rising damp occurs when groundwater travels upward through porous building materials. Our expert team provides comprehensive diagnosis and long-lasting treatment solutions.",
      icon: "rising-damp",
      priceRange: "£1,500 - £3,500",
      duration: "1-3 days",
      featured: true,
    },
    {
      id: "penetrating-damp",
      name: "Penetrating Damp Solutions",
      slug: "penetrating-damp",
      shortDescription: "Expert solutions for water ingress through walls and roofs.",
      description: "Penetrating damp enters through external walls, usually due to defects in the building fabric. We identify the source and provide effective, lasting repairs.",
      icon: "penetrating-damp",
      priceRange: "£800 - £2,500",
      duration: "1-2 days",
      featured: true,
    },
    {
      id: "condensation",
      name: "Condensation Remediation",
      slug: "condensation",
      shortDescription: "Eliminate condensation problems and improve indoor air quality.",
      description: "Condensation is the most common form of dampness in UK homes. We provide ventilation solutions and lifestyle advice to eliminate condensation for good.",
      icon: "condensation",
      priceRange: "£500 - £2,000",
      duration: "1 day",
      featured: true,
    },
    {
      id: "basement-damp",
      name: "Basement Damp Proofing",
      slug: "basement-damp",
      shortDescription: "Specialist waterproofing for basements and cellars.",
      description: "Transform your damp basement into usable living space with our professional tanking and waterproofing systems.",
      icon: "basement",
      priceRange: "£3,000 - £8,000",
      duration: "3-7 days",
      featured: false,
    },
    {
      id: "damp-survey",
      name: "Damp Surveys & Assessments",
      slug: "damp-survey",
      shortDescription: "Comprehensive damp surveys with detailed reports.",
      description: "Our thorough damp surveys identify the type, cause, and extent of dampness using professional moisture meters and thermal imaging where required.",
      icon: "survey",
      priceRange: "£150 - £350",
      duration: "2-3 hours",
      featured: true,
    },
    {
      id: "damp-proof-course",
      name: "Damp Proof Course Installation",
      slug: "damp-proof-course",
      shortDescription: "DPC installation, repair, and replacement services.",
      description: "Whether you need a new damp proof course or repairs to an existing one, our specialists deliver reliable solutions using modern injection techniques.",
      icon: "dpc",
      priceRange: "£1,200 - £3,000",
      duration: "1-2 days",
      featured: false,
    },
    {
      id: "mould-removal",
      name: "Mould Removal & Treatment",
      slug: "mould-removal",
      shortDescription: "Safe, professional mould removal and prevention.",
      description: "We safely remove mould growth and treat the underlying cause to prevent recurrence, improving air quality and protecting your health.",
      icon: "mould",
      priceRange: "£300 - £1,500",
      duration: "1 day",
      featured: false,
    },
  ],

  trustSignals: [
    { id: "years", label: "Years Experience", value: "15+" },
    { id: "projects", label: "Projects Completed", value: "2,500+" },
    { id: "guarantee", label: "Year Guarantee", value: "20" },
    { id: "response", label: "Hour Response", value: "24" },
  ],

  certifications: [
    { name: "Property Care Association", abbrev: "PCA" },
    { name: "Trust Mark Approved", abbrev: "TrustMark" },
    { name: "Which? Trusted Trader", abbrev: "Which?" },
    { name: "Trading Standards Approved", abbrev: "TSA" },
  ],

  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/rising-damp", hasDropdown: true },
      { label: "Areas We Serve", href: "/rising-damp/locations/seven-kings", hasDropdown: true },
      { label: "Cost Guide", href: "/cost-guide" },
      { label: "Blog", href: "/blog/rising-damp-vs-condensation", hasDropdown: true },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Rising Damp Treatment", href: "/rising-damp" },
      { label: "Penetrating Damp", href: "/penetrating-damp" },
      { label: "Condensation", href: "/condensation" },
      { label: "Basement Waterproofing", href: "/basement-damp" },
      { label: "Damp Surveys", href: "/damp-survey" },
      { label: "DPC Installation", href: "/damp-proof-course" },
      { label: "Mould Removal", href: "/mould-removal" },
    ],
    locations: [
      { label: "Seven Kings", href: "/rising-damp/locations/seven-kings" },
      { label: "Ilford", href: "/rising-damp/locations/ilford" },
      { label: "Barking", href: "/rising-damp/locations/barking" },
      { label: "Dagenham", href: "/rising-damp/locations/dagenham" },
      { label: "Romford", href: "/rising-damp/locations/romford" },
    ],
    blog: [
      { label: "Rising Damp vs Condensation", href: "/blog/rising-damp-vs-condensation" },
      { label: "Foggy Windows & Damp", href: "/blog/foggy-windows-damp" },
      { label: "Landlord's Guide to Damp", href: "/blog/landlord-damp-obligations" },
    ],
  },

  seo: {
    siteName: "Essex Damp Solutions",
    siteUrl: "https://essexdampsolutions.co.uk",
    defaultTitle: "Damp Proofing Essex | Rising Damp Treatment Seven Kings | Essex Damp Solutions",
    defaultDescription: "Expert damp proofing services in Essex. Specialists in rising damp treatment, condensation, and basement waterproofing. Free surveys in Seven Kings, Ilford, Barking & surrounding areas. Call today!",
    defaultKeywords: [
      "damp proofing Essex",
      "rising damp treatment",
      "damp proofing Seven Kings",
      "damp survey Ilford",
      "condensation treatment",
      "basement waterproofing",
      "mould removal Essex",
      "damp proof course",
    ],
  },
};

export const pricingData = {
  survey: {
    standard: { min: 150, max: 300 },
    comprehensive: { min: 250, max: 450 },
    commercial: { min: 350, max: 600 },
  },
  risingDamp: {
    singleWall: { min: 800, max: 1500 },
    multipleWalls: { min: 1500, max: 3500 },
    wholeHouse: { min: 3000, max: 6000 },
  },
  penetratingDamp: {
    minor: { min: 300, max: 800 },
    moderate: { min: 800, max: 2000 },
    major: { min: 2000, max: 4000 },
  },
  condensation: {
    ventilation: { min: 300, max: 800 },
    extraction: { min: 500, max: 1200 },
    wholehouse: { min: 1500, max: 3000 },
  },
  basement: {
    small: { min: 3000, max: 5000 },
    medium: { min: 5000, max: 10000 },
    large: { min: 10000, max: 20000 },
  },
  dpc: {
    injection: { min: 80, max: 120, unit: "per metre" },
    physical: { min: 150, max: 250, unit: "per metre" },
  },
  mould: {
    small: { min: 200, max: 500 },
    medium: { min: 500, max: 1000 },
    large: { min: 1000, max: 2000 },
  },
};

export const faqData = {
  general: [
    {
      question: "How do I know if I have rising damp?",
      answer: "Rising damp typically shows as a tide mark on walls up to about 1.2 metres high, with visible salt deposits (white crystalline patches), peeling wallpaper or paint, and a musty smell. The affected area feels cold and damp to touch. If you notice these signs, particularly on ground floor walls, you likely have rising damp."
    },
    {
      question: "What's the difference between rising damp and condensation?",
      answer: "Rising damp comes from groundwater travelling up through walls, creating a tide mark up to about 1.2m high with salt deposits. Condensation is caused by moisture in the air settling on cold surfaces, typically appearing on windows, in corners, and on external walls. Condensation often leads to black mould growth, while rising damp causes salt staining and plaster decay."
    },
    {
      question: "How much does damp proofing cost?",
      answer: "Damp proofing costs vary depending on the type and extent of the problem. A damp survey costs £150-£350. Rising damp treatment ranges from £1,500-£3,500 for an average property. Condensation solutions range from £500-£2,000. Basement waterproofing typically costs £3,000-£8,000. We provide detailed quotes after our survey."
    },
    {
      question: "How long does damp proofing take?",
      answer: "Treatment time depends on the scope of work. A damp proof course injection takes 1-2 days for most properties. Penetrating damp repairs typically take 1-2 days. Basement tanking can take 3-7 days. After treatment, walls need 6-12 months to dry out before redecorating."
    },
    {
      question: "Do you offer a guarantee on your work?",
      answer: "Yes, we provide a comprehensive 20-year guarantee on all damp proof course installations and rising damp treatments. This guarantee is insurance-backed and transferable to new owners if you sell your property. Condensation solutions and mould treatments come with a 5-year guarantee."
    },
  ],
  risingDamp: [
    {
      question: "What causes rising damp?",
      answer: "Rising damp occurs when groundwater travels upward through porous building materials like brick and morite via capillary action. This happens when the damp proof course (DPC) is missing, damaged, or has been bridged by raised ground levels or internal plastering."
    },
    {
      question: "Can rising damp be fixed permanently?",
      answer: "Yes, rising damp can be permanently fixed by installing a new chemical damp proof course. Modern silicone-based DPC injections create an effective barrier that stops moisture rising. Combined with appropriate replastering using salt-resistant materials, this provides a permanent solution with our 20-year guarantee."
    },
    {
      question: "How high does rising damp reach?",
      answer: "Rising damp rarely rises above 1.2 metres (about 4 feet) from ground level. This is due to the natural limits of capillary action. If dampness extends higher than this, it's likely caused by penetrating damp, condensation, or another source rather than true rising damp."
    },
    {
      question: "Will I need to redecorate after rising damp treatment?",
      answer: "Yes, redecoration is typically needed after rising damp treatment. The contaminated plaster must be removed and replaced with salt-resistant renovating plaster. Walls need 6-12 months to dry out before final decoration. We can provide plastering and decoration services or just the damp proofing treatment."
    },
  ],
  survey: [
    {
      question: "What does a damp survey involve?",
      answer: "Our damp survey includes a thorough visual inspection of all affected areas, moisture readings using professional-grade meters, assessment of the building's construction and DPC status, identification of the damp type and source, and a detailed written report with photographs and treatment recommendations."
    },
    {
      question: "How long does a damp survey take?",
      answer: "A typical residential damp survey takes 1.5-2.5 hours depending on property size and the extent of the problem. We take our time to thoroughly investigate all potential damp sources and provide accurate diagnosis."
    },
    {
      question: "Do you charge for damp surveys?",
      answer: "We offer free initial assessments for straightforward cases. For comprehensive surveys with detailed reports, our fees range from £150-£350 depending on property size. The survey fee is deducted from any subsequent treatment costs if you proceed with us."
    },
  ],
};

export const locationData = {
  "seven-kings": {
    name: "Seven Kings",
    county: "Essex",
    postcode: "IG3",
    postcodesCovered: ["IG3"],
    landmarks: ["Seven Kings Station", "Green Lane", "High Road Seven Kings", "Seven Kings Park"],
    propertyTypes: "Seven Kings features a mix of 1930s semi-detached houses, Victorian terraces, and post-war properties. Many homes have suspended timber floors and solid walls, making them susceptible to rising damp without proper damp proof courses.",
    commonIssues: "Common damp issues in Seven Kings include rising damp in older Victorian and Edwardian properties, condensation in post-war flats, and penetrating damp from ageing roofing and guttering. The clay-heavy London soil can exacerbate rising damp problems.",
    intro: "We provide expert damp proofing services throughout Seven Kings and the surrounding IG3 postcode area. As local specialists, we understand the unique challenges that Seven Kings properties face and deliver lasting solutions.",
  },
  "ilford": {
    name: "Ilford",
    county: "Essex",
    postcode: "IG1",
    postcodesCovered: ["IG1", "IG2", "IG6"],
    landmarks: ["Ilford Station", "Exchange Ilford", "Kenneth More Theatre", "Valentines Park"],
    propertyTypes: "Ilford has diverse housing stock including Victorian terraces near the town centre, 1930s semis in residential areas, and modern apartment developments. Many period properties have inadequate or failed damp proof courses.",
    commonIssues: "Ilford properties commonly suffer from rising damp in period terraces, condensation in converted flats, and basement damp in older buildings. The mix of property ages means we encounter all types of damp problems.",
    intro: "Our damp proofing experts serve the whole of Ilford, from the town centre to surrounding residential areas. We offer fast response times and expert local knowledge to resolve your damp problems effectively.",
  },
  "barking": {
    name: "Barking",
    county: "Essex",
    postcode: "IG11",
    postcodesCovered: ["IG11"],
    landmarks: ["Barking Station", "Barking Abbey", "Eastbury Manor House", "Barking Town Centre"],
    propertyTypes: "Barking features substantial council-built estates, Victorian workers' cottages, and new riverside developments. Older properties often have solid walls and original failed DPCs, while newer flats can suffer from condensation issues.",
    commonIssues: "Rising damp is prevalent in Barking's older housing stock, particularly Victorian terraces and early 20th century properties. Condensation is common in social housing and converted buildings. Proximity to the River Roding can increase groundwater levels.",
    intro: "We provide comprehensive damp proofing services across Barking, from period properties to modern developments. Our local team delivers rapid response and effective, long-lasting damp solutions.",
  },
  "dagenham": {
    name: "Dagenham",
    county: "Essex",
    postcode: "RM8",
    postcodesCovered: ["RM8", "RM9", "RM10"],
    landmarks: ["Dagenham Heathway Station", "Dagenham East Station", "Parsloes Park", "The Mall Heathway"],
    propertyTypes: "Dagenham is known for its extensive 1920s-1930s Becontree estate housing, plus Victorian properties and modern developments. The estate houses often have cavity walls but may lack effective DPCs.",
    commonIssues: "Common issues in Dagenham include failed or bridged DPCs in estate housing, penetrating damp from deteriorating pointing and rendering, and condensation in flats. Many properties need their original DPCs replaced or supplemented.",
    intro: "Serving all of Dagenham including the Becontree estate and surrounding areas, we specialise in treating the damp problems common to the area's distinctive housing stock.",
  },
  "romford": {
    name: "Romford",
    county: "Essex",
    postcode: "RM1",
    postcodesCovered: ["RM1", "RM2", "RM3", "RM7"],
    landmarks: ["Romford Station", "The Liberty Shopping Centre", "Romford Market", "Raphael Park"],
    propertyTypes: "Romford has a wide variety of properties from Georgian and Victorian townhouses in the centre, to 1930s suburbs and modern developments. This mix presents varied damp challenges requiring different treatment approaches.",
    commonIssues: "Romford properties experience rising damp in period buildings, condensation in modern insulated homes, and penetrating damp from external defects. Older commercial buildings in the town centre often have significant damp issues.",
    intro: "Our Romford damp proofing service covers the town centre and all surrounding areas. We have extensive experience with the diverse property types found across the RM postcode areas.",
  },
};

export type LocationKey = keyof typeof locationData;
