<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';

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
</script>

<svelte:head>
	<title>Medical & Industrial Health Services | Safe Hands Safety</title>
	<meta
		name="description"
		content="DOT FMCSA Drug & Alcohol Testing, OSHA Audiometric Hearing Conservation testing, and fast contractor background checks."
	/>
</svelte:head>

<!-- Page Hero Header -->
<section class="bg-[#0B111E] text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
	<div class="absolute inset-0 bg-grid-dark opacity-35" aria-hidden="true"></div>
	<div class="absolute top-0 right-1/4 w-80 h-80 bg-[#D22F25]/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="max-w-3xl space-y-4">
			<div class="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 rounded-sm">
				<span class="w-2 h-2 rounded-full bg-[#D22F25]"></span>
				<span class="text-xs font-mono uppercase font-bold text-slate-300">
					DOT FMCSA & Industrial Hygiene
				</span>
			</div>

			<h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
				Medical & Industrial <br />
				<span class="text-[#D22F25]">Health Services</span>
			</h1>

			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				Fast, reliable occupational health screening and testing services designed to keep your workforce medically cleared, compliant with DOT FMCSA rules, and ready to mobilize.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Testing Services Grid -->
<section class="py-16 bg-[#F8F9FA] border-b border-slate-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
			{#each testingServices as s, idx}
				<ScrollReveal delay={idx * 100} class="bg-white p-6 sm:p-8 rounded-sm border border-slate-200 border-t-4 border-t-[#D22F25] shadow-xs flex flex-col justify-between">
					<div>
						<span class="text-[11px] font-mono font-bold uppercase text-slate-500 block mb-1">
							{s.reg}
						</span>
						<h3 class="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
						<p class="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
					</div>

					<div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
						<span class="text-emerald-600 font-bold">Fast Turnaround</span>
						<span class="text-slate-500">Walk-Ins Welcome</span>
					</div>
				</ScrollReveal>
			{/each}
		</div>

		<!-- Protocol Guarantee Strip -->
		<div class="bg-slate-900 text-white p-6 sm:p-8 rounded-sm border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
			<div class="space-y-1 text-center md:text-left">
				<h4 class="text-base sm:text-lg font-bold">Need On-Site Mobile Testing for Crew Turnarounds?</h4>
				<p class="text-xs sm:text-sm text-slate-300">
					We dispatch certified collectors and technicians directly to client field sites across Texas, Colorado, and New Mexico.
				</p>
			</div>
			<a
				href="#quote"
				class="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all focus-ring shrink-0"
			>
				Schedule Mobile Testing
			</a>
		</div>
	</div>
</section>

<!-- Quote Section -->
<QuoteSection />
