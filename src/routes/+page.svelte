<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PartnerMarquee from '$lib/components/PartnerMarquee.svelte';
	import PillarsSection from '$lib/components/PillarsSection.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
	import { COMPANY_INFO } from '$lib/data/content';
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

<!-- Partner & Compliance Auto-Slide Marquee -->
<PartnerMarquee />

<!-- 5 Core Service Pillars Section with Interactive Navigation -->
<PillarsSection />

<!-- Trust & Defensibility Metrics Banner (Minimalist Architecture) -->
<section class="py-16 bg-white text-black border-b border-neutral-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
			<div class="py-4 md:py-0 md:px-8 first:pl-0 text-left">
				<div class="text-4xl font-extrabold text-[#D22F25] font-mono tracking-tight">6 OQ</div>
				<div class="text-sm text-black font-semibold mt-1">Leading Platforms</div>
				<div class="text-xs text-neutral-500 font-mono mt-0.5">NCCER, Veriforce, EWN, ITS, OQSG, MEA</div>
			</div>
			<div class="py-4 md:py-0 md:px-8 text-left">
				<div class="text-4xl font-extrabold text-black font-mono tracking-tight">100%</div>
				<div class="text-sm text-black font-semibold mt-1">Audit Defensible</div>
				<div class="text-xs text-neutral-500 font-mono mt-0.5">DOT 49 CFR 192 / 195 Protocols</div>
			</div>
			<div class="py-4 md:py-0 md:px-8 text-left">
				<div class="text-4xl font-extrabold text-black font-mono tracking-tight">15+</div>
				<div class="text-sm text-black font-semibold mt-1">Equipment Classes</div>
				<div class="text-xs text-neutral-500 font-mono mt-0.5">Cranes, Rigging, MEWP & Forklifts</div>
			</div>
			<div class="py-4 md:py-0 md:px-8 last:pr-0 text-left">
				<div class="text-4xl font-extrabold text-black font-mono tracking-tight">6 Hubs</div>
				<div class="text-sm text-black font-semibold mt-1">Midland HQ & Satellites</div>
				<div class="text-xs text-neutral-500 font-mono mt-0.5">Texas, Colorado & New Mexico</div>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- Streamlined Quick Quote Container -->
<QuoteSection />
