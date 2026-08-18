<script lang="ts">
	import { EQUIPMENT_CATALOG } from '$lib/data/content';

	let activeCategoryIndex = $state(0);
	let selectedCategory = $derived(EQUIPMENT_CATALOG[activeCategoryIndex]);
</script>

<section id="equipment" class="py-16 lg:py-24 bg-white border-b border-slate-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="max-w-3xl mb-12">
			<div class="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-sm mb-3">
				<span class="w-2 h-2 rounded-full bg-[#D22F25]" aria-hidden="true"></span>
				<span class="text-xs font-mono font-bold uppercase tracking-wider text-[#D22F25]">
					Workforce & Machinery Certifications
				</span>
			</div>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
				Heavy Equipment & NCCER Craft Assessments
			</h2>
			<p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
				Safe Hands Safety partners with NCCER to deliver standardized craft training, mobile crane operations, rigging safety, MEWPs, and industrial forklift operator evaluations.
			</p>
		</div>

		<!-- Category Navigation Tabs (Miller's law: 4 clear categories) -->
		<div class="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-8" role="tablist" aria-label="Equipment and Craft Categories">
			{#each EQUIPMENT_CATALOG as cat, idx}
				{@const isActive = idx === activeCategoryIndex}
				<button
					type="button"
					role="tab"
					aria-selected={isActive}
					aria-controls="equipment-panel-{idx}"
					id="equipment-tab-{idx}"
					onclick={() => (activeCategoryIndex = idx)}
					class="min-h-[44px] px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide rounded-sm transition-all duration-200 focus-ring {isActive
						? 'bg-slate-900 text-white shadow-sm'
						: 'bg-[#F8F9FA] text-slate-700 hover:bg-slate-200/80 border border-slate-200'}"
				>
					{cat.category}
				</button>
			{/each}
		</div>

		<!-- Active Category Display -->
		<div
			id="equipment-panel-{activeCategoryIndex}"
			role="tabpanel"
			aria-labelledby="equipment-tab-{activeCategoryIndex}"
			class="bg-[#F8F9FA] border border-slate-200 rounded-sm p-6 sm:p-8"
		>
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
				<div>
					<span class="text-xs font-mono font-bold text-[#D22F25] uppercase tracking-widest">
						Certified Program
					</span>
					<h3 class="text-2xl font-extrabold text-slate-900 mt-1">
						{selectedCategory.name}
					</h3>
				</div>
				<p class="text-xs sm:text-sm text-slate-600 max-w-md">
					{selectedCategory.description}
				</p>
			</div>

			<!-- Equipment / Assessment Types Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
				{#each selectedCategory.types as typeName}
					<div class="bg-white p-4 rounded-sm border border-slate-200 flex items-center justify-between gap-3 shadow-xs hover:border-slate-300 transition-colors">
						<span class="text-sm font-semibold text-slate-800">{typeName}</span>
						<span class="w-6 h-6 rounded-full bg-slate-100 text-[#D22F25] flex items-center justify-center shrink-0" aria-hidden="true">
							<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
							</svg>
						</span>
					</div>
				{/each}
			</div>

			<!-- Bottom NCCER & Practical Info Box -->
			<div class="bg-white p-5 rounded-sm border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs rounded-sm shrink-0">
						5 YR
					</div>
					<div>
						<div class="text-xs font-bold text-slate-900">Practical & Written Assessment</div>
						<div class="text-[11px] text-slate-500 font-mono">Complies with ANSI, OSHA 1910/1926 & NCCER National Registry</div>
					</div>
				</div>
				<a
					href="#quote"
					class="inline-flex items-center justify-center min-h-[44px] px-5 py-2 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-xs transition-all duration-200 focus-ring shrink-0"
				>
					Schedule Equipment Session
				</a>
			</div>
		</div>

	</div>
</section>
