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
<section class="bg-[#0B111E] text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
	<div class="absolute inset-0 bg-grid-dark opacity-35" aria-hidden="true"></div>
	<div class="absolute top-0 right-1/4 w-80 h-80 bg-[#D22F25]/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="max-w-3xl space-y-4">
			<div class="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 rounded-sm">
				<span class="w-2 h-2 rounded-full bg-[#D22F25]"></span>
				<span class="text-xs font-mono uppercase font-bold text-slate-300">
					Direct Dispatch & Intake
				</span>
			</div>

			<h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
				Request a Quote / <br />
				<span class="text-[#D22F25]">Schedule Training</span>
			</h1>

			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				Complete the form below or call our intake desk directly. We provide tailored pricing, contractor batch rates, and rapid scheduling for all programs.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Quote Component -->
<QuoteSection />

<!-- Locations Overview Strip -->
<LocationsSection />
