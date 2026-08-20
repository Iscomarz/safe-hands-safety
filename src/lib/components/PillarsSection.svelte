<script lang="ts">
	import { SERVICE_PILLARS } from '$lib/data/content';
	import gsap from 'gsap';

	let activePillarId = $state(SERVICE_PILLARS[0].id);
	let contentContainer: HTMLElement | null = $state(null);

	let activePillar = $derived(
		SERVICE_PILLARS.find((p) => p.id === activePillarId) || SERVICE_PILLARS[0]
	);

	function selectPillar(id: string) {
		if (activePillarId === id) return;
		activePillarId = id;

		if (contentContainer) {
			gsap.fromTo(
				contentContainer,
				{ opacity: 0, x: -12 },
				{ opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }
			);
		}
	}
</script>

<section id="services" class="py-20 lg:py-28 bg-white text-black border-b border-neutral-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header: Minimalist & Direct -->
		<div class="mb-14">
			<div class="flex items-center gap-3 mb-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]" aria-hidden="true"></span>
				<span class="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
					02 / SERVICES & COMPLIANCE
				</span>
			</div>
			<h2
				style="font-family: var(--font-elms);"
				class="text-3xl sm:text-5xl lg:text-6xl font-light text-black tracking-tight leading-tight max-w-4xl"
			>
				Five Pillars of Industrial Safety
			</h2>
		</div>

		<!-- Sharp Minimalist Horizontal Tab Strip (Zero rounding, pure architectural lines) -->
		<div class="border-b border-neutral-200 mb-12" role="tablist" aria-label="Service Selection">
			<div class="flex flex-wrap gap-x-8 gap-y-3">
				{#each SERVICE_PILLARS as pillar}
					{@const isActive = pillar.id === activePillarId}
					<button
						type="button"
						role="tab"
						aria-selected={isActive}
						aria-controls="service-panel-{pillar.id}"
						id="service-tab-{pillar.id}"
						onclick={() => selectPillar(pillar.id)}
						class="group pb-4 text-left transition-all relative cursor-pointer {isActive ? 'text-black font-medium' : 'text-neutral-500 hover:text-black'}"
					>
						<div class="flex items-center gap-2">
							<span class="font-mono text-xs transition-colors {isActive ? 'text-[#D22F25] font-bold' : 'text-neutral-400 group-hover:text-neutral-700'}">
								{pillar.number}
							</span>
							<span class="text-sm sm:text-base tracking-tight transition-transform group-hover:translate-x-0.5">
								{pillar.title}
							</span>
						</div>
						<!-- Active / Hover Bottom Sharp Bar -->
						{#if isActive}
							<div class="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D22F25]"></div>
						{:else}
							<div class="absolute bottom-0 left-0 right-0 h-[1px] bg-transparent group-hover:bg-neutral-300 transition-colors"></div>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<!-- Expansive Unboxed Editorial Content View -->
		<div
			bind:this={contentContainer}
			id="service-panel-{activePillar.id}"
			role="tabpanel"
			aria-labelledby="service-tab-{activePillar.id}"
			class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
		>
			<!-- Left Column: Big typography & value proposition -->
			<div class="lg:col-span-6 space-y-8">
				<div>
					<span class="inline-block text-xs font-mono uppercase tracking-widest text-[#D22F25] font-bold mb-3">
						{activePillar.tag}
					</span>
					<h3
						style="font-family: var(--font-elms);"
						class="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight leading-tight"
					>
						{activePillar.title}
					</h3>
				</div>

				<p class="text-base sm:text-lg text-neutral-700 leading-relaxed font-light">
					{activePillar.shortDesc}
				</p>

				<!-- Minimalist Metrics Strip (Border grid, zero rounded boxes) -->
				<div class="grid grid-cols-3 border-y border-neutral-200 py-4 divide-x divide-neutral-200">
					{#each activePillar.highlights as highlight}
						<div class="px-3 first:pl-0 last:pr-0">
							<span class="block text-[11px] font-mono text-neutral-500 uppercase tracking-wider">{highlight.label}</span>
							<span class="block text-sm sm:text-base font-medium text-black mt-1">{highlight.value}</span>
						</div>
					{/each}
				</div>

				<!-- Square CTAs -->
				<div class="flex flex-wrap items-center gap-4 pt-2">
					<a
						href="/quote"
						class="inline-flex items-center justify-center h-12 px-7 bg-[#D22F25] hover:bg-[#EB392F] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow"
					>
						<span>Get Direct Quote</span>
						<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
						</svg>
					</a>
					<a
						href={activePillar.href}
						class="inline-flex items-center justify-center h-12 px-7 bg-white hover:bg-neutral-50 text-neutral-900 text-xs font-semibold uppercase tracking-wider border border-neutral-300 hover:border-black transition-all duration-200"
					>
						Full Specifications
					</a>
				</div>
			</div>

			<!-- Right Column: Deliverables with clean hairline separators (No cards, no boxes) -->
			<div class="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-neutral-200 pt-8 lg:pt-0 lg:pl-12 space-y-6">
				<div class="flex items-center justify-between pb-2 border-b border-neutral-200">
					<span class="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold">
						Deliverables & Capabilities
					</span>
					<span class="text-xs font-mono text-[#D22F25] font-bold">Immediate Deployment</span>
				</div>

				<ul class="space-y-4">
					{#each activePillar.details as detail, idx}
						<li class="flex items-start gap-4 p-3 -mx-3 border-l-2 border-transparent hover:border-[#D22F25] hover:bg-neutral-50/80 transition-all duration-200 group/item">
							<span class="font-mono text-xs text-[#D22F25] font-bold mt-1 shrink-0">
								0{idx + 1}
							</span>
							<span class="text-base text-neutral-800 font-light leading-relaxed group-hover/item:text-black">
								{detail}
							</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>

	</div>
</section>
