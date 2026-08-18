<script lang="ts">
	import { SERVICE_PILLARS, type ServicePillar } from '$lib/data/content';

	let activePillarId = $state(SERVICE_PILLARS[0].id);

	let activePillar = $derived(
		SERVICE_PILLARS.find((p) => p.id === activePillarId) || SERVICE_PILLARS[0]
	);

	function selectPillar(id: string) {
		activePillarId = id;
	}
</script>

<section id="services" class="py-16 lg:py-24 bg-white border-b border-slate-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="max-w-3xl mb-12">
			<div class="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-sm mb-3">
				<span class="w-2 h-2 rounded-full bg-[#D22F25]" aria-hidden="true"></span>
				<span class="text-xs font-mono font-bold uppercase tracking-wider text-[#D22F25]">
					Comprehensive Catalog
				</span>
			</div>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
				Five Pillars of Industrial Safety & Compliance
			</h2>
			<p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
				Every solution is built to meet federal regulatory mandates, eliminate audit non-compliance, and protect field personnel in dynamic environments.
			</p>
		</div>

		<!-- Interactive Pillar Grid / Selector (Miller's Law: 5 clean items) -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			
			<!-- Left Navigation Cards / Tabs -->
			<div class="lg:col-span-5 space-y-3" role="tablist" aria-label="Service Pillars">
				{#each SERVICE_PILLARS as pillar}
					{@const isActive = pillar.id === activePillarId}
					<button
						type="button"
						role="tab"
						aria-selected={isActive}
						aria-controls="pillar-panel-{pillar.id}"
						id="pillar-tab-{pillar.id}"
						onclick={() => selectPillar(pillar.id)}
						class="w-full text-left p-4 sm:p-5 rounded-sm border transition-all duration-200 focus-ring relative group {isActive
							? 'bg-slate-900 text-white border-slate-900 shadow-md translate-x-1'
							: 'bg-[#F8F9FA] text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'}"
					>
						<div class="flex items-start justify-between gap-3">
							<div class="flex items-center gap-3">
								<span
									class="text-xs font-mono font-bold px-2 py-1 rounded-sm {isActive
										? 'bg-[#D22F25] text-white'
										: 'bg-slate-200 text-slate-700 group-hover:bg-slate-300'}"
								>
									{pillar.number}
								</span>
								<h3 class="font-bold text-base sm:text-lg tracking-tight {isActive ? 'text-white' : 'text-slate-900'}">
									{pillar.title}
								</h3>
							</div>
							<span
								class="text-[11px] font-mono font-medium px-2 py-0.5 rounded-sm shrink-0 {isActive
									? 'bg-slate-800 text-slate-300'
									: 'bg-white text-slate-600 border border-slate-200'}"
							>
								{pillar.tag}
							</span>
						</div>
						<p class="mt-2 text-xs sm:text-sm line-clamp-2 {isActive ? 'text-slate-300' : 'text-slate-600'}">
							{pillar.shortDesc}
						</p>
					</button>
				{/each}
			</div>

			<!-- Right Expanded Detail Panel (Progressive Disclosure) -->
			<div class="lg:col-span-7">
				<div
					id="pillar-panel-{activePillar.id}"
					role="tabpanel"
					aria-labelledby="pillar-tab-{activePillar.id}"
					class="bg-[#F8F9FA] border border-slate-200 rounded-sm p-6 sm:p-8 shadow-sm transition-all duration-200"
				>
					<!-- Detail Header -->
					<div class="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 flex-wrap gap-2">
						<div>
							<span class="text-xs font-mono font-bold text-[#D22F25] tracking-widest uppercase">
								Pillar {activePillar.number} Breakdown
							</span>
							<h3 class="text-2xl font-extrabold text-slate-900 mt-1">
								{activePillar.title}
							</h3>
						</div>
						<span class="px-3 py-1 bg-slate-200 text-slate-800 text-xs font-mono font-bold rounded-sm">
							{activePillar.tag}
						</span>
					</div>

					<!-- Key Highlights Badges -->
					<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
						{#each activePillar.highlights as highlight}
							<div class="bg-white p-3 border border-slate-200 rounded-sm">
								<span class="block text-[11px] font-mono uppercase text-slate-500">{highlight.label}</span>
								<span class="font-bold text-sm text-slate-900 mt-0.5 block">{highlight.value}</span>
							</div>
						{/each}
					</div>

					<!-- Core Deliverables / Bullet points -->
					<div class="space-y-3 mb-8">
						<h4 class="text-xs font-mono uppercase font-bold text-slate-500 tracking-wider">
							Core Capabilities & Deliverables
						</h4>
						<ul class="space-y-2.5">
							{#each activePillar.details as item}
								<li class="flex items-start gap-3 text-sm text-slate-700 leading-normal">
									<span class="w-5 h-5 rounded-full bg-red-100 text-[#D22F25] flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
										<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
										</svg>
									</span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Action Row inside Detail Panel -->
					<div class="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
						<div class="text-xs text-slate-500 font-mono">
							Customized contractor and utility packages available
						</div>
						<a
							href="#quote"
							class="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm transition-all duration-200 focus-ring"
						>
							Request Scope & Pricing
						</a>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>
