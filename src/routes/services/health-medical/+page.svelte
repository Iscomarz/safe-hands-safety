<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
	import SEO from '$lib/components/SEO.svelte';

	const testingServices = [
		{
			title: 'DOT & Non-DOT Drug and Alcohol Testing',
			reg: 'DOT FMCSA, PHMSA & Corporate Protocols',
			desc: 'Fast, certified urine and breath alcohol screenings with rapid on-site options and MRO-reviewed laboratory confirmations for pre-employment, random, post-incident, and return-to-duty compliance.'
		},
		{
			title: 'Audiometric Baseline & Annual Testing',
			reg: 'OSHA 1910.95 Hearing Conservation Standard',
			desc: 'Accredited hearing evaluations with Standard Threshold Shift (STS) calculation, audiological review, and automated compliance records to satisfy OSHA industrial hygiene mandates.'
		},
		{
			title: 'Comprehensive Background Checks & MVR',
			reg: 'Fair Credit Reporting Act (FCRA) Compliant',
			desc: 'Thorough pre-placement background screening, Motor Vehicle Records (MVR), social security verification, and national registry checks for streamlined crew onboarding.'
		}
	];

	let openServiceIndex = $state<number | null>(null);

	function toggleService(idx: number) {
		openServiceIndex = openServiceIndex === idx ? null : idx;
	}
</script>

<SEO
	title="Medical & Industrial Health Services | Safe Hands Safety"
	description="DOT FMCSA Drug & Alcohol Testing, OSHA Audiometric Hearing Conservation testing, and fast contractor background checks."
/>

<!-- Page Hero Header -->
<section class="bg-black text-white pt-36 sm:pt-40 lg:pt-48 pb-16 lg:pb-24 border-b border-neutral-800 relative overflow-hidden">
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="max-w-4xl space-y-6">
			<div class="flex items-center gap-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]"></span>
				<span class="text-xs font-mono uppercase tracking-widest text-neutral-400">
					04 / DOT FMCSA & INDUSTRIAL HYGIENE
				</span>
			</div>

			<h1
				style="font-family: var(--font-elms);"
				class="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight"
			>
				Medical & Industrial <br />
				<span class="text-[#D22F25]">Health Services</span>
			</h1>

			<p class="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light max-w-3xl">
				Fast, reliable occupational health screening and testing services designed to keep your workforce medically cleared, compliant with DOT FMCSA rules, and ready to mobilize.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Testing Services Grid -->
<section class="py-20 lg:py-28 bg-white text-black border-b border-neutral-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Mobile Accordion (md:hidden) -->
		<div class="md:hidden space-y-3 mb-10">
			{#each testingServices as s, idx}
				{@const isOpen = openServiceIndex === idx}
				<div class="bg-white border border-neutral-200 border-l-4 border-l-[#D22F25] overflow-hidden transition-all {isOpen ? 'border-black shadow-sm' : ''}">
					<button
						type="button"
						onclick={() => toggleService(idx)}
						aria-expanded={isOpen}
						class="w-full p-4 text-left flex items-center justify-between gap-3 bg-neutral-50/60 hover:bg-neutral-100 transition-colors cursor-pointer"
					>
						<div>
							<span class="text-[10px] font-mono uppercase text-neutral-500 block mb-1 font-bold">
								{s.reg}
							</span>
							<h3
								style="font-family: var(--font-elms);"
								class="text-lg font-light text-black"
							>
								{s.title}
							</h3>
						</div>
						<div class="w-7 h-7 flex items-center justify-center border border-neutral-300 bg-white text-black shrink-0 transition-transform duration-200 {isOpen ? 'rotate-180 bg-black text-white' : ''}">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</div>
					</button>

					{#if isOpen}
						<div class="p-4 pt-2 border-t border-neutral-200 space-y-3 animate-fade-in">
							<p class="text-sm text-neutral-700 font-light leading-relaxed">{s.desc}</p>
							<div class="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-mono">
								<span class="text-emerald-600 font-bold">Fast Turnaround</span>
								<span class="text-neutral-500">Walk-Ins Welcome</span>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Desktop Grid (hidden md:grid) -->
		<div class="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
			{#each testingServices as s, idx}
				<ScrollReveal delay={idx * 100} class="bg-white p-6 sm:p-8 border border-neutral-200 border-t-4 border-t-[#D22F25] flex flex-col justify-between hover:border-black transition-all">
					<div>
						<span class="text-[11px] font-mono uppercase text-neutral-500 block mb-2 font-bold">
							{s.reg}
						</span>
						<h3
							style="font-family: var(--font-elms);"
							class="text-2xl font-light text-black mb-3"
						>
							{s.title}
						</h3>
						<p class="text-sm text-neutral-700 font-light leading-relaxed">{s.desc}</p>
					</div>

					<div class="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono">
						<span class="text-emerald-600 font-bold">Fast Turnaround</span>
						<span class="text-neutral-500">Walk-Ins Welcome</span>
					</div>
				</ScrollReveal>
			{/each}
		</div>

		<!-- Protocol Guarantee Strip -->
		<div class="bg-neutral-900 text-white p-8 sm:p-10 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
			<div class="space-y-2 text-center md:text-left">
				<h4
					style="font-family: var(--font-elms);"
					class="text-xl sm:text-2xl font-light text-white"
				>
					Need On-Site Mobile Testing for Crew Turnarounds?
				</h4>
				<p class="text-sm text-neutral-300 font-light max-w-2xl leading-relaxed">
					We dispatch certified collectors and technicians directly to client field sites across Texas, Colorado, and New Mexico.
				</p>
			</div>
			<a
				href="#quote"
				class="inline-flex items-center justify-center h-12 px-7 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-ring shrink-0"
			>
				Schedule Mobile Testing
			</a>
		</div>
	</div>
</section>

<!-- Quote Section -->
<QuoteSection />
