<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import HealthComplianceSection from '$lib/components/HealthComplianceSection.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
</script>

<svelte:head>
	<title>OSHA, Basin United & Safety Courses | Safe Hands Safety</title>
	<meta
		name="description"
		content="Bilingual safety orientations: Basin United 2-Day, OSHA 10/30-Hour, Veriforce/PEC SafeLand 7.0, and Colorado MSHA New Miner Training."
	/>
</svelte:head>

<!-- Page Hero Header -->
<section class="bg-black text-white pt-36 sm:pt-40 lg:pt-48 pb-16 lg:pb-24 border-b border-neutral-800 relative overflow-hidden">
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="max-w-4xl space-y-6">
			<div class="flex items-center gap-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]"></span>
				<span class="text-xs font-mono uppercase tracking-widest text-neutral-400">
					03 / BILINGUAL INSTRUCTION (EN / ES)
				</span>
			</div>

			<h1
				style="font-family: var(--font-elms);"
				class="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight"
			>
				OSHA, Basin United & <br />
				<span class="text-[#D22F25]">Energy Basin Safety</span>
			</h1>

			<p class="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light max-w-3xl">
				Keep your frontline workers and supervisors compliant with mandated basin orientations, comprehensive OSHA cards, PEC SafeLand, and regional MSHA training programs.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Course & Health Component -->
<HealthComplianceSection />

<!-- Quote Section -->
<QuoteSection />
