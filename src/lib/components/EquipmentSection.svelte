<script lang="ts">
	import { EQUIPMENT_CATALOG } from '$lib/data/content';
	import nccerLogo from '$lib/assets/partners/nccer-logo.png';

	let activeCategoryIndex = $state(0);
	let selectedCategory = $derived(EQUIPMENT_CATALOG[activeCategoryIndex]);
</script>

<section id="equipment" class="py-20 lg:py-28 bg-white text-black border-b border-neutral-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="max-w-4xl mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
			<div class="max-w-2xl">
				<div class="flex items-center gap-3 mb-3">
					<span class="w-2.5 h-2.5 bg-[#D22F25]" aria-hidden="true"></span>
					<span class="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
						02 / WORKFORCE & MACHINERY
					</span>
				</div>
				<h2
					style="font-family: var(--font-elms);"
					class="text-3xl sm:text-5xl font-light text-black tracking-tight leading-tight"
				>
					Heavy Equipment & NCCER Craft Assessments
				</h2>
				<p class="mt-4 text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
					Safe Hands Safety partners with NCCER to deliver standardized craft training, mobile crane operations, rigging safety, MEWPs, and industrial forklift operator evaluations.
				</p>
			</div>
			<div class="p-3 bg-white border border-neutral-200 shadow-sm shrink-0 flex items-center justify-center self-start sm:self-auto">
				<img
					src={nccerLogo}
					alt="NCCER Accredited Assessment Center"
					class="h-10 sm:h-12 w-auto object-contain"
					loading="lazy"
				/>
			</div>
		</div>

		<!-- Category Navigation Tabs (Horizontally scrollable on mobile, wrap on desktop) -->
		<div class="flex overflow-x-auto sm:flex-wrap gap-2 border-b border-neutral-200 pb-3 mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0" role="tablist" aria-label="Equipment and Craft Categories">
			{#each EQUIPMENT_CATALOG as cat, idx}
				{@const isActive = idx === activeCategoryIndex}
				<button
					type="button"
					role="tab"
					aria-selected={isActive}
					aria-controls="equipment-panel-{idx}"
					id="equipment-tab-{idx}"
					onclick={() => (activeCategoryIndex = idx)}
					class="min-h-[44px] px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 focus-ring shrink-0 cursor-pointer {isActive
						? 'bg-[#D22F25] text-white shadow-sm'
						: 'bg-neutral-100 text-neutral-700 hover:text-black border border-neutral-300'}"
				>
					{cat.category}
				</button>
			{/each}
		</div>

		<!-- Active Category Display (Sharp, high contrast) -->
		<div
			id="equipment-panel-{activeCategoryIndex}"
			role="tabpanel"
			aria-labelledby="equipment-tab-{activeCategoryIndex}"
			class="bg-neutral-50 border border-neutral-200 p-6 sm:p-10"
		>
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-6 mb-8">
				<div>
					<span class="text-xs font-mono text-[#D22F25] font-bold uppercase tracking-widest block">
						Certified Program
					</span>
					<h3
						style="font-family: var(--font-elms);"
						class="text-2xl sm:text-3xl font-light text-black mt-1"
					>
						{selectedCategory.name}
					</h3>
				</div>
				<p class="text-sm text-neutral-700 font-light max-w-md leading-relaxed">
					{selectedCategory.description}
				</p>
			</div>

			<!-- Equipment / Assessment Types Grid (Sharp cells) -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
				{#each selectedCategory.types as typeName}
					<div class="bg-white p-4 border border-neutral-200 flex items-center justify-between gap-3 hover:border-black transition-colors">
						<span class="text-sm font-light text-neutral-900">{typeName}</span>
						<span class="w-5 h-5 bg-neutral-100 border border-neutral-300 text-[#D22F25] flex items-center justify-center shrink-0" aria-hidden="true">
							<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
							</svg>
						</span>
					</div>
				{/each}
			</div>

			<!-- Bottom NCCER & Practical Info Box -->
			<div class="bg-white p-6 border border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
				<div class="flex items-center gap-4">
					<div class="w-12 h-12 bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
						5 YR
					</div>
					<div>
						<div
							style="font-family: var(--font-elms);"
							class="text-lg font-light text-black"
						>
							Practical & Written Assessment
						</div>
						<div class="text-xs text-neutral-500 font-mono">Complies with ANSI, OSHA 1910/1926 & NCCER National Registry</div>
					</div>
				</div>
				<a
					href="#quote"
					class="inline-flex items-center justify-center h-12 px-7 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-ring shrink-0"
				>
					Schedule Equipment Session
				</a>
			</div>
		</div>

	</div>
</section>
