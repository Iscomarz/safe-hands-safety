<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import MidstreamSection from '$lib/components/MidstreamSection.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
</script>

<svelte:head>
	<title>Midstream Safety Inspector Services | Safe Hands Safety</title>
	<meta
		name="description"
		content="Certified midstream safety inspectors for pipeline construction, gathering systems, storage terminal operations, and PHMSA compliance audits."
	/>
</svelte:head>

<!-- Page Hero Header -->
<section class="bg-black text-white pt-36 sm:pt-40 lg:pt-48 pb-16 lg:pb-24 border-b border-neutral-800 relative overflow-hidden">
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="max-w-4xl space-y-6">
			<div class="flex items-center gap-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]"></span>
				<span class="text-xs font-mono uppercase tracking-widest text-neutral-400">
					05 / PIPELINE & TERMINAL SAFETY
				</span>
			</div>

			<h1
				style="font-family: var(--font-elms);"
				class="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight"
			>
				Midstream Safety <br />
				<span class="text-[#D22F25]">Inspector Placement</span>
			</h1>

			<p class="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light max-w-3xl">
				Deploy qualified, vetted safety inspectors with deep technical knowledge of pipeline integrity, storage terminals, leak detection systems, and regulatory reporting.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Dedicated Midstream Inspector Details Component -->
<MidstreamSection />

<!-- Quote Section -->
<QuoteSection />
