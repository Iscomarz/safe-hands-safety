<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import EquipmentSection from '$lib/components/EquipmentSection.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
	import workerImg from '$lib/assets/photos/worker-safety-gear.jpg';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
	title="Workforce & Equipment Certifications | Safe Hands Safety"
	description="NCCER accredited mobile crane, rigger, signalman, MEWP aerial lift, and forklift operator training and practical evaluations."
/>

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

<!-- Practical Hands-On Verification & Field Standards -->
<section class="py-16 bg-neutral-900 text-white border-b border-neutral-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
			<ScrollReveal class="lg:col-span-5 relative group overflow-hidden border border-neutral-800 bg-neutral-950">
				<img
					src={workerImg}
					alt="Certified industrial worker with PPE, harness and hardhat"
					class="w-full h-80 sm:h-96 object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
					loading="lazy"
				/>
				<div class="p-4 border-t border-neutral-800 bg-neutral-950">
					<span class="text-[10px] font-mono text-[#D22F25] uppercase tracking-wider font-bold">Field-Ready Workforce</span>
					<div class="text-sm font-light text-white mt-0.5">OSHA & NCCER Standardized Assessments</div>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={150} class="lg:col-span-7 space-y-6">
				<div class="flex items-center gap-2.5">
					<span class="w-2 h-2 bg-[#D22F25]"></span>
					<span class="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
						Rigorous Hands-On Protocols
					</span>
				</div>
				<h2 style="font-family: var(--font-elms);" class="text-2xl sm:text-4xl font-light text-white leading-tight">
					Bridging Classroom Knowledge & Heavy Machine Operation
				</h2>
				<p class="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
					Safe Hands Safety puts operators through physical function tests, stability limits, load charts, and daily pre-operational inspections on actual site equipment before issuing qualifications.
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
					<div class="p-4 bg-neutral-950 border border-neutral-800">
						<span class="text-xs font-mono text-[#D22F25] font-bold block mb-1">01 / Practical Evaluations</span>
						<p class="text-xs text-neutral-400 font-light leading-relaxed">Hands-on maneuverability, obstacle clearance, and load-spotting drills.</p>
					</div>
					<div class="p-4 bg-neutral-950 border border-neutral-800">
						<span class="text-xs font-mono text-[#D22F25] font-bold block mb-1">02 / Auditable Records</span>
						<p class="text-xs text-neutral-400 font-light leading-relaxed">Immediate digital evaluator sign-offs accessible for site safety inspections.</p>
					</div>
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>

<!-- Dedicated Equipment & NCCER Catalog Component -->
<EquipmentSection />

<!-- Quote Section -->
<QuoteSection />
