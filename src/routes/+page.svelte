<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
	import { SERVICE_PILLARS, COMPANY_INFO } from '$lib/data/content';
</script>

<svelte:head>
	<title>Safe Hands Safety | DOT (OQ) PHMSA, Workforce Certification & Industrial Health</title>
	<meta
		name="description"
		content="Leading safety implementation partner for pipeline operators and contractors. DOT 49 CFR 192/195 Operator Qualification, NCCER certifications, OSHA 10/30, Basin United, and DOT Drug Testing."
	/>
</svelte:head>

<!-- Hero Section with entrance animation -->
<Hero />

<!-- 5 Core Service Pillars Section with Scroll Reveal & Deep Links -->
<section id="services" class="py-16 lg:py-24 bg-white border-b border-slate-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<ScrollReveal class="max-w-3xl mb-12">
			<div class="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-sm mb-3">
				<span class="w-2 h-2 rounded-full bg-[#D22F25]" aria-hidden="true"></span>
				<span class="text-xs font-mono font-bold uppercase tracking-wider text-[#D22F25]">
					5 Core Pillars of Service
				</span>
			</div>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
				Comprehensive Safety & Compliance Solutions
			</h2>
			<p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
				Explore our specialized divisions designed to keep your workforce fully certified, compliant with federal mandates, and ready for work.
			</p>
		</ScrollReveal>

		<!-- Pillars Grid with Staggered Entrance Animations -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each SERVICE_PILLARS as pillar, idx}
				<ScrollReveal delay={idx * 80} class="h-full">
					<div class="bg-[#F8F9FA] border border-slate-200 rounded-sm p-6 flex flex-col justify-between h-full hover:border-[#D22F25]/50 hover:bg-white hover:shadow-md transition-all duration-300 group">
						
						<div>
							<div class="flex items-center justify-between gap-2 mb-4">
								<span class="text-xs font-mono font-bold px-2.5 py-1 bg-slate-900 text-white rounded-sm group-hover:bg-[#D22F25] transition-colors">
									{pillar.number}
								</span>
								<span class="text-[11px] font-mono px-2 py-0.5 bg-white text-slate-600 border border-slate-200 rounded-sm">
									{pillar.tag}
								</span>
							</div>

							<h3 class="text-xl font-bold text-slate-900 group-hover:text-[#D22F25] transition-colors mb-2">
								{pillar.title}
							</h3>

							<p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
								{pillar.shortDesc}
							</p>

							<!-- Key bullet points preview -->
							<ul class="space-y-1.5 pt-3 border-t border-slate-200/70">
								{#each pillar.details.slice(0, 2) as item}
									<li class="flex items-start gap-2 text-xs text-slate-700">
										<span class="text-[#D22F25] font-bold">›</span>
										<span>{item}</span>
									</li>
								{/each}
							</ul>
						</div>

						<!-- Action Link to Dedicated Subpage -->
						<div class="mt-6 pt-4 border-t border-slate-200">
							<a
								href={pillar.href}
								class="inline-flex items-center justify-between w-full min-h-[44px] px-4 py-2 bg-white group-hover:bg-slate-900 group-hover:text-white border border-slate-300 group-hover:border-slate-900 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 focus-ring"
							>
								<span>View Details & Specs</span>
								<svg class="w-4 h-4 text-[#D22F25] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</a>
						</div>

					</div>
				</ScrollReveal>
			{/each}

			<!-- Fast Contact & Consultation Card in Grid -->
			<ScrollReveal delay={400} class="h-full">
				<div class="bg-slate-900 text-white rounded-sm p-6 flex flex-col justify-between h-full border border-slate-800 shadow-md">
					<div>
						<div class="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-800 rounded-sm mb-3">
							<span class="w-2 h-2 rounded-full bg-emerald-400"></span>
							<span class="text-[11px] font-mono uppercase font-bold text-slate-200">Rapid Intake</span>
						</div>
						<h3 class="text-xl font-bold text-white mb-2">Need a Custom Contractor Solution?</h3>
						<p class="text-xs text-slate-300 leading-relaxed mb-4">
							We assemble multi-discipline safety, OQ, and medical screening packages tailored to operator master service agreements (MSAs).
						</p>
					</div>

					<div class="space-y-3 pt-4 border-t border-slate-800">
						<a
							href="/quote"
							class="w-full inline-flex items-center justify-center min-h-[44px] px-4 py-2 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all focus-ring"
						>
							Request Custom Proposal
						</a>
						<a
							href="tel:{COMPANY_INFO.mainContact.phone}"
							class="w-full inline-flex items-center justify-center min-h-[44px] px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-bold rounded-sm transition-all focus-ring"
						>
							Call {COMPANY_INFO.mainContact.phone}
						</a>
					</div>
				</div>
			</ScrollReveal>
		</div>

	</div>
</section>

<!-- Trust & Defensibility Metrics Banner -->
<section class="py-14 bg-[#F8F9FA] border-b border-slate-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="grid grid-cols-2 md:grid-cols-4 gap-6">
			<div class="bg-white p-5 rounded-sm border border-slate-200 text-center">
				<div class="text-3xl font-extrabold text-[#D22F25] font-mono">6 OQ</div>
				<div class="text-xs text-slate-600 font-semibold mt-1">Leading Platforms</div>
				<div class="text-[11px] text-slate-400 font-mono mt-0.5">NCCER, Veriforce, EWN, ITS, OQSG, MEA</div>
			</div>
			<div class="bg-white p-5 rounded-sm border border-slate-200 text-center">
				<div class="text-3xl font-extrabold text-slate-900 font-mono">100%</div>
				<div class="text-xs text-slate-600 font-semibold mt-1">Audit Defensible</div>
				<div class="text-[11px] text-slate-400 font-mono mt-0.5">49 CFR 192 / 195 Protocols</div>
			</div>
			<div class="bg-white p-5 rounded-sm border border-slate-200 text-center">
				<div class="text-3xl font-extrabold text-slate-900 font-mono">15+</div>
				<div class="text-xs text-slate-600 font-semibold mt-1">Equipment Classes</div>
				<div class="text-[11px] text-slate-400 font-mono mt-0.5">Cranes, MEWP & Forklifts</div>
			</div>
			<div class="bg-white p-5 rounded-sm border border-slate-200 text-center">
				<div class="text-3xl font-extrabold text-slate-900 font-mono">6 Hubs</div>
				<div class="text-xs text-slate-600 font-semibold mt-1">Midland HQ & Satellites</div>
				<div class="text-[11px] text-slate-400 font-mono mt-0.5">Texas, Colorado & New Mexico</div>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- Streamlined Quick Quote Container -->
<QuoteSection />
