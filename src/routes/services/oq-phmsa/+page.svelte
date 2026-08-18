<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import OQPlatformsSection from '$lib/components/OQPlatformsSection.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
</script>

<svelte:head>
	<title>DOT (OQ) PHMSA Compliance | Safe Hands Safety</title>
	<meta
		name="description"
		content="49 CFR 192 & 195 Operator Qualification implementation partner. Administering assessments for NCCER, Veriforce, Energy Worldnet, ITS, OQSG, and MEA."
	/>
</svelte:head>

<!-- Page Header / Hero -->
<section class="bg-[#0B111E] text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
	<div class="absolute inset-0 bg-grid-dark opacity-35" aria-hidden="true"></div>
	<div class="absolute top-0 right-1/4 w-80 h-80 bg-[#D22F25]/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="max-w-3xl space-y-4">
			<div class="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 rounded-sm">
				<span class="w-2 h-2 rounded-full bg-[#D22F25]"></span>
				<span class="text-xs font-mono uppercase font-bold text-slate-300">
					49 CFR Parts 192 & 195 Compliance
				</span>
			</div>

			<h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
				DOT (OQ) PHMSA <br />
				<span class="text-[#D22F25]">Operator Qualification</span>
			</h1>

			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				Operator Qualification (OQ) is a strict U.S. Department of Transportation requirement. We serve as your certified evaluation and proctoring partner, administering testing and maintaining audit-ready records across all major OQ systems.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Detailed Compliance Overview -->
<section class="py-12 bg-white border-b border-slate-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<ScrollReveal delay={100} class="bg-[#F8F9FA] p-6 rounded-sm border border-slate-200">
				<span class="text-xs font-mono font-bold text-[#D22F25] uppercase">01. Evaluation</span>
				<h3 class="text-lg font-bold text-slate-900 mt-1">Administer Testing</h3>
				<p class="text-xs text-slate-600 mt-2 leading-relaxed">
					We administer computer-based knowledge testing and hands-on skill evaluations on behalf of pipeline operators and contractors.
				</p>
			</ScrollReveal>

			<ScrollReveal delay={200} class="bg-[#F8F9FA] p-6 rounded-sm border border-slate-200">
				<span class="text-xs font-mono font-bold text-[#D22F25] uppercase">02. Defensibility</span>
				<h3 class="text-lg font-bold text-slate-900 mt-1">Audit Recordkeeping</h3>
				<p class="text-xs text-slate-600 mt-2 leading-relaxed">
					Maintain comprehensive digital audit trails, evaluator proctor certifications, and expiration tracking ready for PHMSA inspections.
				</p>
			</ScrollReveal>

			<ScrollReveal delay={300} class="bg-[#F8F9FA] p-6 rounded-sm border border-slate-200">
				<span class="text-xs font-mono font-bold text-[#D22F25] uppercase">03. Contractor Acceptance</span>
				<h3 class="text-lg font-bold text-slate-900 mt-1">Operator Acceptance</h3>
				<p class="text-xs text-slate-600 mt-2 leading-relaxed">
					Deliver verified documentation that pipeline operators review and accept without delay, keeping contractor crews mobilized.
				</p>
			</ScrollReveal>
		</div>
	</div>
</section>

<!-- 6 Platforms Deep-Dive Component -->
<OQPlatformsSection />

<!-- Quote Component -->
<QuoteSection />
