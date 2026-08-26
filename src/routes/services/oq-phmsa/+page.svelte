<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import PartnerMarquee from '$lib/components/PartnerMarquee.svelte';
	import OQPlatformsSection from '$lib/components/OQPlatformsSection.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
	import fieldEvalImg from '$lib/assets/photos/oq-evaluation-field.jpg';
	import classroomImg from '$lib/assets/photos/students-oq-training.jpg';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
	title="DOT (OQ) PHMSA Compliance | Safe Hands Safety"
	description="49 CFR 192 & 195 Operator Qualification implementation partner. Administering assessments for NCCER, Veriforce, Energy Worldnet, ITS, OQSG, and MEA."
/>

<!-- Page Header / Hero -->
<section class="bg-black text-white pt-36 sm:pt-40 lg:pt-48 pb-16 lg:pb-24 border-b border-neutral-800 relative overflow-hidden">
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<ScrollReveal class="max-w-4xl space-y-6">
			<div class="flex items-center gap-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]"></span>
				<span class="text-xs font-mono uppercase tracking-widest text-neutral-400">
					01 / DOT 49 CFR PARTS 192 & 195
				</span>
			</div>

			<h1
				style="font-family: var(--font-elms);"
				class="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight"
			>
				DOT (OQ) PHMSA <br />
				<span class="text-[#D22F25]">Operator Qualification</span>
			</h1>

			<p class="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light max-w-3xl">
				Operator Qualification (OQ) is a strict U.S. Department of Transportation requirement. We serve as your certified evaluation and proctoring partner, administering testing and maintaining audit-ready records across all major OQ systems.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Detailed Compliance Overview (Sharp, unboxed, line-divided) -->
<section class="py-16 bg-white text-black border-b border-neutral-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 border border-neutral-200">
			<ScrollReveal delay={100} class="p-8 sm:p-10 space-y-4">
				<span class="text-xs font-mono text-[#D22F25] font-bold uppercase tracking-widest block">01 / EVALUATION</span>
				<h3
					style="font-family: var(--font-elms);"
					class="text-2xl font-light text-black"
				>
					Administer Testing
				</h3>
				<p class="text-sm text-neutral-700 font-light leading-relaxed">
					We administer computer-based knowledge testing and hands-on skill evaluations on behalf of pipeline operators and contractors.
				</p>
			</ScrollReveal>

			<ScrollReveal delay={200} class="p-8 sm:p-10 space-y-4">
				<span class="text-xs font-mono text-[#D22F25] font-bold uppercase tracking-widest block">02 / DEFENSIBILITY</span>
				<h3
					style="font-family: var(--font-elms);"
					class="text-2xl font-light text-black"
				>
					Audit Recordkeeping
				</h3>
				<p class="text-sm text-neutral-700 font-light leading-relaxed">
					Maintain comprehensive digital audit trails, evaluator proctor certifications, and expiration tracking ready for PHMSA inspections.
				</p>
			</ScrollReveal>

			<ScrollReveal delay={300} class="p-8 sm:p-10 space-y-4">
				<span class="text-xs font-mono text-[#D22F25] font-bold uppercase tracking-widest block">03 / COMPLIANCE</span>
				<h3
					style="font-family: var(--font-elms);"
					class="text-2xl font-light text-black"
				>
					Operator Acceptance
				</h3>
				<p class="text-sm text-neutral-700 font-light leading-relaxed">
					Deliver verified documentation that pipeline operators review and accept without delay, keeping contractor crews mobilized.
				</p>
			</ScrollReveal>
		</div>
	</div>
</section>

<!-- Real Field Operations & Proctored Training Showcase -->
<section class="py-16 bg-neutral-900 text-white border-b border-neutral-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mb-10 flex items-center justify-between">
			<div>
				<span class="text-xs font-mono text-[#D22F25] font-bold uppercase tracking-widest block mb-1">Authentic Execution</span>
				<h2 style="font-family: var(--font-elms);" class="text-2xl sm:text-3xl font-light text-white">
					Field & Proctored Assessments in Action
				</h2>
			</div>
			<span class="hidden md:inline-block text-[11px] font-mono text-neutral-400 uppercase">
				Permian Basin & Multi-State Reach
			</span>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
			<ScrollReveal class="flex flex-col justify-between border border-neutral-800 bg-neutral-950 group overflow-hidden">
				<div class="overflow-hidden h-72 sm:h-80 w-full bg-neutral-900">
					<img
						src={fieldEvalImg}
						alt="Field performance evaluation on pipeline infrastructure"
						class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
						loading="lazy"
					/>
				</div>
				<div class="p-6 border-t border-neutral-800 bg-neutral-950">
					<span class="text-[10px] font-mono text-[#D22F25] uppercase tracking-wider font-bold">01 / Practical Verification</span>
					<h3 style="font-family: var(--font-elms);" class="text-lg font-light text-white mt-1">
						Hands-On Skill Evaluations
					</h3>
					<p class="text-xs text-neutral-400 font-light mt-2 leading-relaxed">
						Evaluators observe and score pipeline operators and contractor personnel directly on physical equipment to satisfy 49 CFR Part 192/195 qualification criteria.
					</p>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={150} class="flex flex-col justify-between border border-neutral-800 bg-neutral-950 group overflow-hidden">
				<div class="overflow-hidden h-72 sm:h-80 w-full bg-neutral-900">
					<img
						src={classroomImg}
						alt="Students undergoing proctored OQ knowledge evaluations"
						class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
						loading="lazy"
					/>
				</div>
				<div class="p-6 border-t border-neutral-800 bg-neutral-950">
					<span class="text-[10px] font-mono text-[#D22F25] uppercase tracking-wider font-bold">02 / Proctor Integrity</span>
					<h3 style="font-family: var(--font-elms);" class="text-lg font-light text-white mt-1">
						Classroom & Computer-Based Testing
					</h3>
					<p class="text-xs text-neutral-400 font-light mt-2 leading-relaxed">
						Administering secure written and digital knowledge assessments across all authorized platforms with full proctor defense and anti-fraud controls.
					</p>
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>

<!-- Partner & Compliance Auto-Slide Marquee -->
<PartnerMarquee />

<!-- 6 Platforms Deep-Dive Component -->
<OQPlatformsSection />

<!-- Quote Component -->
<QuoteSection />
