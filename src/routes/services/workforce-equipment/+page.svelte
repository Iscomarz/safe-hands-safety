<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import EquipmentSection from '$lib/components/EquipmentSection.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
</script>

<svelte:head>
	<title>Workforce & Equipment Certifications | Safe Hands Safety</title>
	<meta
		name="description"
		content="NCCER accredited mobile crane, rigger, signalman, MEWP aerial lift, and forklift operator training and practical evaluations."
	/>
</svelte:head>

<!-- Page Hero Header -->
<section class="bg-black text-white pt-36 sm:pt-40 lg:pt-48 pb-16 lg:pb-24 border-b border-neutral-800 relative overflow-hidden">
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="max-w-4xl space-y-6">
			<div class="flex items-center gap-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]"></span>
				<span class="text-xs font-mono uppercase tracking-widest text-neutral-400">
					02 / NCCER & OSHA ACCREDITED
				</span>
			</div>

			<h1
				style="font-family: var(--font-elms);"
				class="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight"
			>
				Workforce Development & <br />
				<span class="text-[#D22F25]">Equipment Certification</span>
			</h1>

			<p class="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light max-w-3xl">
				Standardized construction training, mobile crane operations, qualified rigging, aerial lifts, and forklift certifications that bridge the gap between classroom education and demanding industrial worksites.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Dedicated Equipment & NCCER Catalog Component -->
<EquipmentSection />

<!-- Quote Section -->
<QuoteSection />
