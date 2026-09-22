<script lang="ts">
	let openIndex = $state<number | null>(0);

	const faqs = [
		{
			q: 'Which DOT (OQ) pipeline compliance platforms do you evaluate and proctor?',
			a: 'Safe Hands Safety conducts certified operator qualification evaluations across all six major OQ platforms: NCCER, Veriforce, Energy Worldnet (EWN), Industrial Training Services (ITS), OQSG 5Keys, and MEA EnergyU. We evaluate over 600+ covered tasks under DOT 49 CFR 192 (natural gas) and 195 (hazardous liquids) with full audit defensibility.'
		},
		{
			q: 'How quickly can Safe Hands Safety deploy evaluators and inspectors across the Permian Basin?',
			a: 'From our Midland HQ facility at 5301 Cholla Rd and regional satellites across Texas, New Mexico, and Colorado, our dispatch team can mobilize certified evaluators and safety personnel to drilling pads, compressor stations, pipeline rights-of-way, or contractor yards within 24 to 48 hours.'
		},
		{
			q: 'What heavy equipment operator and crane certifications are provided?',
			a: 'We offer NCCER accredited practical exams and written assessments for mobile crane operators, rigging and signalperson personnel, mobile elevating work platforms (MEWPs / boom and scissor lifts), and rough terrain industrial forklifts. All testing satisfies OSHA 1926 Subpart CC and ASME standards.'
		},
		{
			q: 'What are the standards for Basin United and SafeLand 7.0 safety orientations?',
			a: 'We deliver official Basin United 2-Day orientations and Veriforce/PEC SafeLand 7.0 upstream orientations required by major Permian and Delaware Basin operators. Worker credentials are uploaded to digital operator clearinghouses immediately upon passing to prevent gate and site-access delays.'
		},
		{
			q: 'Do you offer on-site DOT FMCSA drug testing and medical compliance screening?',
			a: 'Yes. Our occupational health specialists conduct DOT FMCSA compliant rapid urine drug screening, breath alcohol testing (BAT), baseline and annual audiometric surveillance, and respirator fit testing. We coordinate with Medical Review Officers (MRO) and manage compliant consortium testing programs.'
		}
	];

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: f.a
			}
		}))
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
</svelte:head>

<section id="faq" class="py-20 bg-neutral-50 text-black border-b border-neutral-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="mb-12">
			<div class="flex items-center gap-3 mb-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]" aria-hidden="true"></span>
				<span class="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
					03 / COMPLIANCE INTELLIGENCE
				</span>
			</div>
			<h2
				style="font-family: var(--font-elms);"
				class="text-3xl sm:text-5xl font-light text-black tracking-tight leading-tight max-w-3xl"
			>
				Frequently Asked Questions & Standards
			</h2>
			<p class="mt-3 text-neutral-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
				Key regulatory and operational details regarding DOT 49 CFR compliance, operator qualification proctoring, equipment certifications, and occupational health screening across Texas and New Mexico.
			</p>
		</div>

		<!-- Accordion List -->
		<div class="divide-y divide-neutral-200 border-y border-neutral-200 bg-white">
			{#each faqs as faq, i}
				<div class="transition-colors hover:bg-neutral-50/70">
					<button
						type="button"
						onclick={() => toggle(i)}
						class="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D22F25]"
						aria-expanded={openIndex === i}
						aria-controls={`faq-answer-${i}`}
					>
						<h3 class="text-base sm:text-lg font-medium text-black pr-6 tracking-tight">
							{faq.q}
						</h3>
						<span
							class="shrink-0 w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center font-mono text-sm text-neutral-600 transition-transform duration-200 {openIndex === i ? 'rotate-45 bg-black text-white border-black' : ''}"
							aria-hidden="true"
						>
							+
						</span>
					</button>

					{#if openIndex === i}
						<div
							id={`faq-answer-${i}`}
							role="region"
							class="px-6 sm:px-8 pb-6 text-neutral-700 text-sm sm:text-base leading-relaxed border-t border-neutral-100/80 pt-4"
						>
							<p>{faq.a}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>

	</div>
</section>
