<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
	import LocationsSection from '$lib/components/LocationsSection.svelte';
</script>

<svelte:head>
	<title>Request Quote & Schedule Training | Safe Hands Safety</title>
	<meta
		name="description"
		content="Request a quote for DOT Operator Qualification (OQ), equipment certifications, OSHA/MSHA courses, or occupational health testing."
	/>
</svelte:head>

<!-- Page Hero Header -->
<section class="bg-black text-white pt-36 sm:pt-40 lg:pt-48 pb-16 lg:pb-24 border-b border-neutral-800 relative overflow-hidden">
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="max-w-4xl space-y-6">
			<div class="flex items-center gap-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]"></span>
				<span class="text-xs font-mono uppercase tracking-widest text-neutral-400">
					07 / DIRECT DISPATCH & INTAKE
				</span>
			</div>

			<h1
				style="font-family: var(--font-elms);"
				class="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight"
			>
				Request a Quote / <br />
				<span class="text-[#D22F25]">Schedule Training</span>
			</h1>

			<p class="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light max-w-3xl">
				Complete the form below or call our intake desk directly. We provide tailored pricing, contractor batch rates, and rapid scheduling for all programs.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Quote Component -->
<QuoteSection />

<!-- Locations Overview Strip -->
<LocationsSection />
