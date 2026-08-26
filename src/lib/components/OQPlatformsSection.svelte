<script lang="ts">
	import { OQ_PLATFORMS } from '$lib/data/content';
	import veriforceSvg from '$lib/assets/partners/veriforce-dark.svg';
	import ewnSvg from '$lib/assets/partners/ewn-dark.svg';
	import itsSvg from '$lib/assets/partners/its-logo.svg';
	import oqsgPng from '$lib/assets/partners/oqsg-white.png';
	import meaSvg from '$lib/assets/partners/mea-logo.svg';
	import nccerPng from '$lib/assets/partners/nccer-logo.png';

	const platformLogos: Record<string, string> = {
		nccer: nccerPng,
		veriforce: veriforceSvg,
		'energy-worldnet': ewnSvg,
		its: itsSvg,
		oqsg: oqsgPng,
		mea: meaSvg
	};

	let openAccordionIndex = $state<number | null>(null);

	function toggleAccordion(idx: number) {
		openAccordionIndex = openAccordionIndex === idx ? null : idx;
	}
</script>

<section id="oq-platforms" class="py-20 lg:py-28 bg-white text-black border-b border-neutral-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="max-w-3xl mb-14">
			<div class="flex items-center gap-3 mb-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]" aria-hidden="true"></span>
				<span class="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
					02 / EVALUATION PLATFORMS
				</span>
			</div>
			<h2
				style="font-family: var(--font-elms);"
				class="text-3xl sm:text-5xl font-light text-black tracking-tight leading-tight"
			>
				Operator Qualification (OQ) Platforms
			</h2>
			<p class="mt-4 text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
				We serve as an implementation and evaluation partner, administering knowledge assessments, hands-on field evaluations, and digital audit documentation across all leading OQ platforms.
			</p>
		</div>

		<!-- Mobile Collapsible Accordion (sm:hidden - prevents infinite scrolling on phones) -->
		<div class="md:hidden space-y-3 mb-8">
			{#each OQ_PLATFORMS as platform, idx}
				{@const isOpen = openAccordionIndex === idx}
				<div class="bg-white border border-neutral-200 overflow-hidden transition-all {isOpen ? 'border-black shadow-sm' : ''}">
					<!-- Accordion Header Button -->
					<button
						type="button"
						onclick={() => toggleAccordion(idx)}
						aria-expanded={isOpen}
						class="w-full p-4 text-left flex items-center justify-between gap-3 bg-neutral-50/50 hover:bg-neutral-100 transition-colors cursor-pointer"
					>
						<div class="flex items-center gap-2.5 flex-wrap">
							{#if platformLogos[platform.id]}
								<img
									src={platformLogos[platform.id]}
									alt=""
									class="h-6 max-w-[80px] object-contain {platform.id === 'oqsg' ? 'bg-black px-1.5 py-0.5' : ''}"
								/>
							{/if}
							<span class="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-neutral-100 text-black border border-neutral-300">
								{platform.badge}
							</span>
							<h3
								style="font-family: var(--font-elms);"
								class="text-lg font-light text-black"
							>
								{platform.name}
							</h3>
						</div>
						<div class="w-7 h-7 flex items-center justify-center border border-neutral-300 bg-white text-black shrink-0 transition-transform duration-200 {isOpen ? 'rotate-180 bg-neutral-900 text-white' : ''}">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</div>
					</button>

					<!-- Accordion Body -->
					{#if isOpen}
						<div class="p-4 pt-2 border-t border-neutral-200 space-y-4 animate-fade-in">
							{#if platform.pricing}
								<div class="text-xs font-mono text-[#D22F25] font-bold">
									Assessment Rate: {platform.pricing}
								</div>
							{/if}

							<p class="text-sm text-neutral-700 font-light leading-relaxed">
								{platform.focus}
							</p>

							<!-- Capabilities -->
							<div class="pt-2 border-t border-neutral-100">
								<span class="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-2 font-bold">
									Capabilities
								</span>
								<ul class="space-y-1.5">
									{#each platform.keyFeatures as feat}
										<li class="flex items-start gap-2 text-xs text-neutral-800 font-light">
											<span class="text-[#D22F25] font-bold">›</span>
											<span>{feat}</span>
										</li>
									{/each}
								</ul>
							</div>

							<!-- Strengths -->
							<div class="bg-neutral-50 p-3 border border-neutral-200">
								<span class="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5 font-bold">Key Strengths</span>
								<ul class="space-y-1">
									{#each platform.strengths as str}
										<li class="text-xs text-neutral-700 font-light flex items-center gap-2">
											<span class="w-1.5 h-1.5 bg-[#D22F25]"></span>
											<span>{str}</span>
										</li>
									{/each}
								</ul>
							</div>

							<a
								href="#quote"
								class="w-full inline-flex items-center justify-center h-11 px-4 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all focus-ring"
							>
								Book Evaluator / Proctor
							</a>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- 6 Platform Grid Cards (Desktop / Tablet view: hidden on mobile) -->
		<div class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each OQ_PLATFORMS as platform}
				<div class="bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between hover:border-black transition-all duration-200 group relative">
					
					<!-- Top Meta -->
					<div>
						<div class="flex items-center justify-between gap-2 mb-4">
							<span class="text-[11px] font-mono font-bold uppercase px-2.5 py-1 bg-neutral-100 text-black border border-neutral-300">
								{platform.badge}
							</span>
							{#if platform.pricing}
								<span class="text-xs font-mono text-[#D22F25] font-bold border border-[#D22F25]/30 px-2 py-0.5">
									{platform.pricing}
								</span>
							{/if}
						</div>

						{#if platformLogos[platform.id]}
							<div class="h-10 mb-4 flex items-center">
								<img
									src={platformLogos[platform.id]}
									alt={platform.name}
									class="h-8 max-w-[130px] object-contain {platform.id === 'oqsg' ? 'bg-black px-2 py-1 brightness-125' : 'grayscale group-hover:grayscale-0'} transition-all duration-200"
									loading="lazy"
								/>
							</div>
						{/if}

						<h3
							style="font-family: var(--font-elms);"
							class="text-2xl font-light text-black group-hover:text-[#D22F25] transition-colors"
						>
							{platform.name}
						</h3>

						<p class="mt-2 text-sm text-neutral-700 font-light leading-relaxed min-h-[44px]">
							{platform.focus}
						</p>

						<!-- Key Features List -->
						<div class="mt-6 pt-4 border-t border-neutral-200">
							<span class="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-3">
								Platform Capabilities
							</span>
							<ul class="space-y-2">
								{#each platform.keyFeatures as feat}
									<li class="flex items-start gap-2 text-xs text-neutral-800 font-light">
										<span class="text-[#D22F25] font-bold">›</span>
										<span>{feat}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<!-- Bottom Strengths Box & CTA -->
					<div class="mt-8 pt-4 border-t border-neutral-200">
						<div class="bg-neutral-50 p-4 border border-neutral-200 mb-5">
							<span class="block text-[10px] font-mono uppercase text-neutral-500 mb-2 font-bold">Key Strengths</span>
							<ul class="space-y-1.5">
								{#each platform.strengths as str}
									<li class="text-xs text-neutral-700 font-light flex items-center gap-2">
										<span class="w-1.5 h-1.5 bg-[#D22F25]"></span>
										<span>{str}</span>
									</li>
								{/each}
							</ul>
						</div>

						<a
							href="#quote"
							class="w-full inline-flex items-center justify-center h-11 px-4 py-2 border border-neutral-300 hover:border-black hover:bg-black hover:text-white text-black text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-ring"
						>
							Book Evaluator / Proctor
						</a>
					</div>

				</div>
			{/each}
		</div>

		<!-- Informational Regulatory Banner -->
		<div class="mt-12 bg-neutral-900 text-white p-8 sm:p-10 border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
			<div class="space-y-2">
				<h4
					style="font-family: var(--font-elms);"
					class="text-xl sm:text-2xl font-light text-white"
				>
					Need Multi-Platform Contractor Compliance Management?
				</h4>
				<p class="text-sm text-neutral-300 font-light max-w-2xl leading-relaxed">
					Safe Hands Safety qualifies contractor personnel, maintains qualification records, and delivers turnkey documentation that pipeline operators review and accept without delay.
				</p>
			</div>
			<a
				href="#quote"
				class="shrink-0 inline-flex items-center justify-center h-12 px-7 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-ring"
			>
				Schedule Operator Intake
			</a>
		</div>

	</div>
</section>
