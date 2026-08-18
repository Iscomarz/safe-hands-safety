<script lang="ts">
	import { OQ_PLATFORMS } from '$lib/data/content';
</script>

<section id="oq-platforms" class="py-16 lg:py-24 bg-[#F8F9FA] border-b border-slate-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="max-w-3xl mb-12">
			<div class="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-slate-100 rounded-sm mb-3">
				<span class="w-2 h-2 rounded-full bg-[#D22F25]" aria-hidden="true"></span>
				<span class="text-xs font-mono font-bold uppercase tracking-wider">
					DOT 49 CFR Parts 192 & 195
				</span>
			</div>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
				Operator Qualification (OQ) Platforms
			</h2>
			<p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
				We serve as an implementation and evaluation partner, administering knowledge assessments, hands-on field evaluations, and digital audit documentation across all leading OQ platforms.
			</p>
		</div>

		<!-- 6 Platform Grid Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each OQ_PLATFORMS as platform}
				<div class="bg-white border border-slate-200 rounded-sm p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 group relative">
					
					<!-- Top Meta -->
					<div>
						<div class="flex items-center justify-between gap-2 mb-3">
							<span class="text-[11px] font-mono font-bold uppercase px-2 py-0.5 bg-slate-100 text-slate-700 rounded-sm border border-slate-200">
								{platform.badge}
							</span>
							{#if platform.pricing}
								<span class="text-xs font-mono font-bold text-[#D22F25] bg-red-50 px-2 py-0.5 rounded-sm">
									{platform.pricing}
								</span>
							{/if}
						</div>

						<h3 class="text-xl font-bold text-slate-900 group-hover:text-[#D22F25] transition-colors">
							{platform.name}
						</h3>

						<p class="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
							{platform.focus}
						</p>

						<!-- Key Features List -->
						<div class="mt-4 pt-4 border-t border-slate-100">
							<span class="block text-[11px] font-mono uppercase font-semibold text-slate-400 mb-2">
								Platform Capabilities
							</span>
							<ul class="space-y-1.5">
								{#each platform.keyFeatures as feat}
									<li class="flex items-start gap-2 text-xs text-slate-700">
										<span class="text-[#D22F25] font-bold">›</span>
										<span>{feat}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<!-- Bottom Strengths Box & CTA -->
					<div class="mt-6 pt-4 border-t border-slate-100">
						<div class="bg-slate-50 p-3 rounded-sm border border-slate-200/80 mb-4">
							<span class="block text-[10px] font-mono uppercase font-bold text-slate-500 mb-1">Key Strengths</span>
							<ul class="space-y-1">
								{#each platform.strengths as str}
									<li class="text-[11px] text-slate-600 flex items-center gap-1.5">
										<span class="w-1 h-1 bg-slate-400 rounded-full"></span>
										<span>{str}</span>
									</li>
								{/each}
							</ul>
						</div>

						<a
							href="#quote"
							class="w-full inline-flex items-center justify-center min-h-[40px] px-4 py-2 border border-slate-300 hover:border-[#D22F25] hover:bg-[#D22F25] hover:text-white text-slate-800 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 focus-ring"
						>
							Book Evaluator / Proctor
						</a>
					</div>

				</div>
			{/each}
		</div>

		<!-- Informational Regulatory Banner -->
		<div class="mt-10 bg-slate-900 text-slate-200 p-6 sm:p-8 rounded-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
			<div class="space-y-1">
				<h4 class="text-base sm:text-lg font-bold text-white">
					Need Multi-Platform Contractor Compliance Management?
				</h4>
				<p class="text-xs sm:text-sm text-slate-300 max-w-2xl">
					Safe Hands Safety qualifies contractor personnel, maintains qualification records, and delivers turnkey documentation that pipeline operators review and accept without delay.
				</p>
			</div>
			<a
				href="#quote"
				class="shrink-0 inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 focus-ring"
			>
				Schedule Operator Intake
			</a>
		</div>

	</div>
</section>
