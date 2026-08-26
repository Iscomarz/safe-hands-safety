<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import LocationsSection from '$lib/components/LocationsSection.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
	title="Locations & Training Centers | Safe Hands Safety"
	description="Safe Hands Safety offices in Midland TX, Houston, Corpus Christi, Dallas/Fort Worth, Durango CO, and Farmington NM."
/>

<!-- Page Hero Header -->
<section class="bg-black text-white pt-36 sm:pt-40 lg:pt-48 pb-16 lg:pb-24 border-b border-neutral-800 relative overflow-hidden">
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="max-w-4xl space-y-6">
			<div class="flex items-center gap-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]"></span>
				<span class="text-xs font-mono uppercase tracking-widest text-neutral-400">
					06 / REGIONAL PRESENCE & SATELLITES
				</span>
			</div>

			<h1
				style="font-family: var(--font-elms);"
				class="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight"
			>
				Locations & Regional <br />
				<span class="text-[#D22F25]">Training Centers</span>
			</h1>

			<p class="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light max-w-3xl">
				With our primary training campus in Midland, Texas, and satellite offices located strategically across major oil, gas, and mining basins, we ensure prompt contractor qualification wherever work takes place.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Locations Component -->
<LocationsSection />

<!-- Quote Section -->
<QuoteSection />
