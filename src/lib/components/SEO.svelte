<script lang="ts">
	import { page } from '$app/state';
	import { COMPANY_INFO } from '$lib/data/content';

	interface Props {
		title?: string;
		description?: string;
		canonical?: string;
		ogType?: 'website' | 'article';
		ogImage?: string;
		schema?: Record<string, unknown> | Record<string, unknown>[];
	}

	let {
		title = 'Safe Hands Safety | DOT (OQ) PHMSA, Workforce Certification & Industrial Health',
		description = 'Leading safety implementation partner for pipeline operators and contractors. DOT 49 CFR 192/195 Operator Qualification, NCCER certifications, OSHA 10/30, Basin United, and DOT Drug Testing.',
		canonical,
		ogType = 'website',
		ogImage = 'https://www.safehandssafety.com/og-image.jpg',
		schema
	}: Props = $props();

	const siteUrl = 'https://www.safehandssafety.com';
	let currentCanonical = $derived(canonical || `${siteUrl}${page.url.pathname === '/' ? '' : page.url.pathname}`);

	const defaultSchema = {
		'@context': 'https://schema.org',
		'@type': ['LocalBusiness', 'EducationalOrganization'],
		name: 'Safe Hands Safety',
		legalName: COMPANY_INFO.legalName,
		url: siteUrl,
		logo: `${siteUrl}/logo.png`,
		image: `${siteUrl}/og-image.jpg`,
		description: description,
		telephone: `+1-${COMPANY_INFO.mainContact.phone}`,
		email: COMPANY_INFO.mainContact.email,
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '5301 Cholla Rd',
			addressLocality: 'Midland',
			addressRegion: 'TX',
			postalCode: '79706',
			addressCountry: 'US'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 31.9567,
			longitude: -102.0461
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '08:00',
				closes: '16:00'
			}
		],
		areaServed: [
			{ '@type': 'AdministrativeArea', name: 'Texas' },
			{ '@type': 'AdministrativeArea', name: 'Colorado' },
			{ '@type': 'AdministrativeArea', name: 'New Mexico' },
			{ '@type': 'Place', name: 'Permian Basin' }
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Industrial Safety & Compliance Services',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'DOT (OQ) PHMSA Compliance',
						description: '49 CFR 192/195 Operator Qualification testing & proctoring across 6 major platforms.'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Workforce & Equipment Certification',
						description: 'NCCER accredited crane, rigging, aerial lifts, and industrial forklift operator assessments.'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'OSHA & Energy Basin Training',
						description: 'Basin United 2-Day orientation, Veriforce/PEC SafeLand 7.0, and OSHA 10/30-Hour cards.'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Medical & Industrial Health',
						description: 'DOT FMCSA compliant drug & alcohol screening, audiometric testing, and background vetting.'
					}
				}
			]
		}
	};

	let finalSchema = $derived(schema ? (Array.isArray(schema) ? [defaultSchema, ...schema] : [defaultSchema, schema]) : defaultSchema);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={currentCanonical} />

	<!-- Open Graph / Facebook / LinkedIn -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={currentCanonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="Safe Hands Safety" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Cards -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={currentCanonical} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Geo Meta Tags for Local Permian Basin SEO -->
	<meta name="geo.region" content="US-TX" />
	<meta name="geo.placename" content="Midland, Texas" />
	<meta name="geo.position" content="31.9567;-102.0461" />
	<meta name="ICBM" content="31.9567, -102.0461" />

	<!-- Structured Data (JSON-LD) -->
	{@html `<script type="application/ld+json">${JSON.stringify(finalSchema)}</script>`}
</svelte:head>