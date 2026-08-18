export interface ServicePillar {
	id: string;
	number: string;
	title: string;
	shortDesc: string;
	tag: string;
	href: string;
	details: string[];
	highlights: { label: string; value: string }[];
}

export interface OQPlatform {
	id: string;
	name: string;
	focus: string;
	pricing?: string;
	keyFeatures: string[];
	strengths: string[];
	badge: string;
}

export interface EquipmentCategory {
	name: string;
	category: string;
	description: string;
	types: string[];
}

export interface OfficeLocation {
	city: string;
	state: string;
	type: 'Main Office' | 'Satellite Office';
	address?: string;
	phone: string;
	email: string;
	note?: string;
}

export const COMPANY_INFO = {
	name: 'Safe Hands Safety',
	legalName: 'Safe Hand EHS Consulting, Inc.',
	motto: {
		advice: 'ADVICE. You can rely on',
		strategies: 'STRATEGIES. That work',
		experts: "EXPERTS. Who've been there"
	},
	serviceArea: "Serving all Basins — Oil & Gas, MSHA, OSHA, Pipeline",
	mainContact: {
		name: 'Joyce Sanchez',
		phone: '432-231-2207',
		email: 'Joyce.Sanchez@SafeHandsSafety.com'
	},
	billingContact: {
		name: 'AR/AP Department',
		phone: '361-342-7767',
		email: 'AR@SafeHandsSafety.com'
	},
	hours: {
		regular: 'Mon – Fri: 08:00 – 16:00',
		extended: 'Weekends & After-Hours available by appointment'
	}
};

export const SERVICE_PILLARS: ServicePillar[] = [
	{
		id: 'oq-phmsa',
		number: '01',
		title: 'DOT (OQ) PHMSA Compliance',
		shortDesc: 'End-to-end Operator Qualification under 49 CFR Parts 192 & 195 with multi-platform testing, proctoring, and digital audit trails.',
		tag: 'DOT 49 CFR 192/195',
		href: '/services/oq-phmsa',
		details: [
			'Administering evaluations and qualification processes on the pipeline operator’s behalf',
			'Complete contractor compliance qualification and verified documentation',
			'Maintenance of auditable digital qualification records and expiration tracking',
			'Multi-platform coverage across 6 industry-leading OQ systems'
		],
		highlights: [
			{ label: 'Regulatory Scope', value: '49 CFR 192 / 195' },
			{ label: 'Platforms Supported', value: '6 Top Providers' },
			{ label: 'Delivery', value: 'On-site & Field Testing' }
		]
	},
	{
		id: 'workforce-equipment',
		number: '02',
		title: 'Workforce & Equipment Certification',
		shortDesc: 'Accredited training and practical hands-on evaluations for heavy machinery, mobile cranes, rigging, MEWP, and forklifts.',
		tag: 'NCCER & OSHA Accredited',
		href: '/services/workforce-equipment',
		details: [
			'Crane & Rigger Certifications (Boom Truck, Lattice, Telescopic, Overhead ANAB)',
			'MEWP (Scissor, Boom, Vertical Mast, Spider, Trailer-Mounted lifts)',
			'Comprehensive Forklift Operator Training (Counterbalance, Reach, Rough Terrain, Heavy Duty)',
			'NCCER Journey Level Assessments across 25+ construction crafts'
		],
		highlights: [
			{ label: 'Machinery Types', value: '15+ Equipment Classes' },
			{ label: 'Certification Validity', value: 'Up to 5 Years' },
			{ label: 'Standards', value: 'ANSI / OSHA / NCCER' }
		]
	},
	{
		id: 'safety-training',
		number: '03',
		title: 'OSHA, MSHA & Basin Safety',
		shortDesc: 'Certified training programs meeting strict regional energy basin requirements and federal general/construction standards.',
		tag: 'OSHA / MSHA / Basin United',
		href: '/services/safety-training',
		details: [
			'OSHA 10-Hour and OSHA 30-Hour General Industry & Construction programs',
			'Basin United 2-Day Fundamental Safety & Leadership Orientation',
			'Veriforce / PEC SafeLand 7.0 & Core Compliance (40+ HSE topics)',
			'MSHA New Miner Training for Colorado & regional mining operations',
			'HASC Safety Essentials & Site-Specific orientations (Houston & Corpus Christi)'
		],
		highlights: [
			{ label: 'Basin United', value: 'Fundamental & Leadership' },
			{ label: 'Languages', value: 'Bilingual (EN / ES)' },
			{ label: 'First Aid / CPR', value: 'AHA Certified' }
		]
	},
	{
		id: 'health-medical',
		number: '04',
		title: 'Medical & Occupational Health',
		shortDesc: 'DOT FMCSA compliant testing, industrial hygiene screening, and certified workforce onboarding diagnostics.',
		tag: 'DOT FMCSA & Industrial Hygiene',
		href: '/services/health-medical',
		details: [
			'Drug & Alcohol Testing (DOT & Non-DOT rapid and lab-confirmed)',
			'Certified Audiometric Testing and baseline hearing conservation tracking',
			'Comprehensive Pre-Employment and Annual Background Checks',
			'Industrial hygiene consultation and health compliance documentation'
		],
		highlights: [
			{ label: 'Turnaround', value: 'Rapid & Same-Day' },
			{ label: 'Protocols', value: 'DOT FMCSA Compliant' },
			{ label: 'Testing Facilities', value: 'Field & Clinic' }
		]
	},
	{
		id: 'midstream-inspectors',
		number: '05',
		title: 'Midstream Safety Inspectors',
		shortDesc: 'Qualified safety inspectors deployed for pipeline construction, storage terminals, maintenance shutdowns, and regulatory audits.',
		tag: 'PHMSA & Field Compliance',
		href: '/services/midstream-inspectors',
		details: [
			'On-site monitoring and enforcement of federal, state, and client safety standards',
			'Pipeline integrity, leak detection, and pressure monitoring safety oversight',
			'Incident investigation, root-cause analysis, and corrective action reporting',
			'Pre-maintenance risk assessments and environmental containment audits'
		],
		highlights: [
			{ label: 'Credentials', value: 'OSHA 30 / API 570' },
			{ label: 'Coverage', value: 'Field & Terminal Hubs' },
			{ label: 'Reporting', value: 'Digital Audit-Ready' }
		]
	}
];

export const OQ_PLATFORMS: OQPlatform[] = [
	{
		id: 'nccer',
		name: 'NCCER Pipeline Qualification',
		focus: 'Portable, industry-recognized credentials that follow employees across contractors.',
		pricing: '$125 / task for skills assessment',
		badge: 'National Portability',
		keyFeatures: [
			'QR code-based digital verification for immediate field checks',
			'Cross-organization credential portability',
			'Comprehensive coverage across pipeline crafts and maintenance tasks',
			'Standardized performance profile documentation'
		],
		strengths: [
			'Follows employees wherever they work',
			'Eliminates duplicate training costs',
			'Accredited standard in industrial construction'
		]
	},
	{
		id: 'veriforce',
		name: 'Veriforce OQ & PEC',
		focus: 'Skills assessment and task evaluations for organizations within the Veriforce ecosystem.',
		pricing: '$100 / task for skills assessment',
		badge: 'Top Energy Ecosystem',
		keyFeatures: [
			'Seamless integration with Veriforce operator networks',
			'PEC SafeLand and Core Compliance integration',
			'Standardized task-based hands-on evaluation protocols',
			'Comprehensive training tracking and compliance dashboards'
		],
		strengths: [
			'Ideal for operators already subscribed to Veriforce',
			'Recognized across major upstream & midstream operators',
			'Broad catalog of covered pipeline tasks'
		]
	},
	{
		id: 'energy-worldnet',
		name: 'Energy Worldnet (EWN)',
		focus: 'Unified OQ compliance management for operators, contractors, and municipalities.',
		badge: 'Audit-Ready Reporting',
		keyFeatures: [
			'Mobile app for offline access, field qualification checks, and evaluations',
			'Real-time qualification visibility and automated audit reports',
			'Data integration with internal contractor systems',
			'Flexible training content customization with SME review'
		],
		strengths: [
			'Outstanding customer support and rapid record verification',
			'Intuitive user interface for field evaluators',
			'Tailored solutions for municipal and private pipeline systems'
		]
	},
	{
		id: 'its',
		name: 'ITS Platform',
		focus: 'End-to-end paperless OQ compliance management for gas utilities and pipeline operators.',
		badge: '35+ Years Defensibility',
		keyFeatures: [
			'100% paperless program with a single authoritative system of record',
			'Field management mobile applications with expiration alerts',
			'Digital audit trail and evaluator/proctor certification tracking',
			'Real-time compliance dashboards and canned/custom audit reports'
		],
		strengths: [
			'35+ year legacy in defensible OQ program administration',
			'Strict alignment with 49 CFR 192/195 federal mandates',
			'Deep integration with daily utility field operations'
		]
	},
	{
		id: 'oqsg',
		name: 'OQSG (5Keys Engage)',
		focus: 'Web-based system supporting 600+ covered tasks compliant with DOT CFR 192/195 & API RP 1161.',
		badge: '600+ Covered Tasks',
		keyFeatures: [
			'Online training modules for topside and underwater pipeline operations',
			'Computerized assessments combined with practical hands-on evaluations',
			'Direct integration into company LMS or standalone cloud portal',
			'Certified proctor network to administer evaluations'
		],
		strengths: [
			'Covers specialized underwater and offshore pipeline tasks',
			'Rigorous alignment with ASME B31Q and API standards',
			'Instant verification during PHMSA or DOT audits'
		]
	},
	{
		id: 'mea',
		name: 'MEA OQS System',
		focus: 'Structured 3-part qualification (Training + Knowledge Test + Practical Evaluation).',
		badge: 'EnergyU Integration',
		keyFeatures: [
			'EnergyU LMS integration with scannable field digital badges',
			'Remote evaluation guidance and large-scale automated tracking',
			'Standardized Performance Evaluation Forms (PEF)',
			'Seamless data synchronization with ISNetworld'
		],
		strengths: [
			'Proven framework minimizing human error risk',
			'Comprehensive covered task requalification workflows',
			'Trusted by major regional gas distribution utilities'
		]
	}
];

export const EQUIPMENT_CATALOG: EquipmentCategory[] = [
	{
		category: 'Mobile Cranes & Rigging',
		name: 'Crane & Rigging Certifications',
		description: 'Comprehensive operator and signal ground crew qualifications meeting OSHA 1926.1400 requirements.',
		types: [
			'Boom Truck (Hydraulic Crane)',
			'Industrial / Carry Deck Cranes',
			'Lattice Boom Cranes',
			'Telescopic Boom Cranes',
			'Service Truck Mounted Cranes',
			'Articulating Boom Cranes',
			'Overhead Crane (ANAB Accredited)',
			'Basic, Intermediate & Advanced Rigging',
			'Qualified Signal Person (5-Year Card)'
		]
	},
	{
		category: 'MEWP (Mobile Elevating Work Platforms)',
		name: 'Manlift & Aerial Work Platforms',
		description: 'ANSI A92.22 / A92.24 compliant operator training for all aerial lift classes.',
		types: [
			'Scissor Lifts (Indoor & Rough Terrain)',
			'Boom Lifts / Cherry Pickers (Articulated & Straight)',
			'Vertical Mast Lifts (Narrow Aisle & Warehouse)',
			'Trailer-Mounted Towable Lifts',
			'Spider Lifts (Articulated Outrigger Lifts)',
			'Telescopic Boom High-Reach Lifts'
		]
	},
	{
		category: 'Powered Industrial Trucks',
		name: 'Industrial Forklift Certifications',
		description: 'OSHA 1910.178 compliant theoretical and practical hands-on equipment evaluations.',
		types: [
			'Counterbalance Forklifts (Electric & IC)',
			'Reach Trucks (High-Reach Narrow Aisle)',
			'Order Pickers (Operator-Up Platform)',
			'Side Loader Forklifts (Long Materials & Pipes)',
			'Manual & Electric Pallet Jacks',
			'Walkie Stackers',
			'Telehandlers / Telescopic Handlers',
			'Rough Terrain Heavy Construction Forklifts',
			'Heavy-Duty / High-Capacity Port & Yard Lifts'
		]
	},
	{
		category: 'NCCER Craft Assessment',
		name: 'Journey Level Assessments',
		description: 'Standardized craft evaluations certifying skills across 25+ industrial construction trades.',
		types: [
			'Pipefitting & Plumbing',
			'Electrical & Industrial Maintenance E&I',
			'Instrumentation & Industrial Mechanic',
			'Ironworking & Reinforcing Ironwork',
			'Scaffolding & Heavy Equipment Operations',
			'Concrete Construction & Masonry',
			'Millwright & Boilermaking',
			'Powerline Worker & Substation Distribution'
		]
	}
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
	{
		city: 'Midland',
		state: 'TX',
		type: 'Main Office',
		address: '5301 Cholla Rd, Midland, TX 79706',
		phone: '432-231-2207',
		email: 'Joyce.Sanchez@SafeHandsSafety.com',
		note: 'Primary Permian Basin training center & proctoring facility.'
	},
	{
		city: 'Houston',
		state: 'TX',
		type: 'Satellite Office',
		phone: '432-231-2207',
		email: 'Joyce.Sanchez@SafeHandsSafety.com',
		note: 'Gulf Coast hub: HASC Safety Essentials & site-specific orientations.'
	},
	{
		city: 'Corpus Christi',
		state: 'TX',
		type: 'Satellite Office',
		phone: '432-231-2207',
		email: 'Joyce.Sanchez@SafeHandsSafety.com',
		note: 'Port and refining contractor safety & industrial hygiene.'
	},
	{
		city: 'Dallas / Fort Worth',
		state: 'TX',
		type: 'Satellite Office',
		phone: '432-231-2207',
		email: 'Joyce.Sanchez@SafeHandsSafety.com',
		note: 'North Texas regional contractor compliance and testing.'
	},
	{
		city: 'Durango',
		state: 'CO',
		type: 'Satellite Office',
		phone: '432-231-2207',
		email: 'Joyce.Sanchez@SafeHandsSafety.com',
		note: 'Colorado branch: MSHA New Miner & Four Corners OQ services.'
	},
	{
		city: 'Farmington',
		state: 'NM',
		type: 'Satellite Office',
		phone: '432-231-2207',
		email: 'Joyce.Sanchez@SafeHandsSafety.com',
		note: 'San Juan Basin oil, gas & mining safety operations.'
	}
];
