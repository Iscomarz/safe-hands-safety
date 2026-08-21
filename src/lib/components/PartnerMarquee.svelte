<script lang="ts">
	import veriforceSvg from '$lib/assets/partners/veriforce-dark.svg';
	import ewnSvg from '$lib/assets/partners/ewn-dark.svg';
	import oqsgPng from '$lib/assets/partners/oqsg-white.png';
	import itsSvg from '$lib/assets/partners/its-logo.svg';
	import co811Svg from '$lib/assets/partners/co811.svg';

	const partners = [
		{
			name: 'Veriforce',
			type: 'svg',
			src: veriforceSvg,
			category: 'OQ & PEC SafeLand',
			alt: 'Veriforce OQ & PEC SafeLand'
		},
		{
			name: 'Energy Worldnet',
			type: 'svg',
			src: ewnSvg,
			category: 'EWN Pipeline OQ',
			alt: 'Energy Worldnet EWN'
		},
		{
			name: 'ITS Platform',
			type: 'svg',
			src: itsSvg,
			category: 'Industrial Training Services',
			alt: 'ITS Industrial Training Services'
		},
		{
			name: 'OQSG 5Keys',
			type: 'png',
			src: oqsgPng,
			category: '600+ Covered Tasks',
			alt: 'OQSG Operator Qualification Solutions Group',
			invert: true
		},
		{
			name: 'NCCER',
			type: 'custom',
			acronym: 'NCCER',
			title: 'Pipeline & Craft',
			category: 'National Accreditation',
			alt: 'NCCER National Center for Construction Education and Research'
		},
		{
			name: 'Basin United',
			type: 'custom',
			acronym: 'BASIN UNITED',
			title: 'Fundamental & Leadership',
			category: 'Permian Upstream Standard',
			alt: 'Basin United Safety Orientation'
		},
		{
			name: 'OSHA / DOL',
			type: 'custom',
			acronym: 'OSHA 10/30',
			title: 'General & Construction',
			category: 'Federal Standard',
			alt: 'OSHA 10 and 30-Hour Training'
		},
		{
			name: 'MEA EnergyU',
			type: 'custom',
			acronym: 'MEA OQS',
			title: 'EnergyU Badges',
			category: 'Gas Utility Compliance',
			alt: 'MEA Operator Qualification System'
		},
		{
			name: 'Colorado 811',
			type: 'svg',
			src: co811Svg,
			category: 'Call Before You Dig',
			alt: 'Colorado 811 Damage Prevention'
		}
	];
</script>

<section class="py-10 bg-neutral-100/70 border-y border-neutral-200 overflow-hidden select-none">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
		<div class="flex items-center gap-2.5">
			<span class="w-2 h-2 bg-[#D22F25]"></span>
			<span class="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-600">
				Authorized Evaluations, OQ Platforms & Accreditations
			</span>
		</div>
		<span class="text-[10px] font-mono text-neutral-500 uppercase">
			DOT 49 CFR 192/195 • OSHA • NCCER • BASIN UNITED
		</span>
	</div>

	<!-- Infinite Marquee Track Container -->
	<div class="relative w-full overflow-hidden marquee-container group">
		<!-- Left & Right Gradient Shadows for seamless edge blending -->
		<div class="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-neutral-100 to-transparent pointer-events-none" aria-hidden="true"></div>
		<div class="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-neutral-100 to-transparent pointer-events-none" aria-hidden="true"></div>

		<!-- Ticker Wrapper (duplicated for infinite seamless loop) -->
		<div class="flex items-center gap-6 marquee-track group-hover:paused w-max">
			
			<!-- Set 1 -->
			{#each partners as p}
				<div class="h-20 min-w-[200px] px-5 py-3 bg-white border border-neutral-200 hover:border-black transition-all duration-200 flex items-center justify-center gap-3.5 shadow-sm hover:shadow group/card cursor-pointer">
					{#if p.type === 'svg' || p.type === 'png'}
						<div class="h-10 w-24 flex items-center justify-center {p.invert ? 'bg-black p-1.5' : ''}">
							<img
								src={p.src}
								alt={p.alt}
								class="max-h-8 max-w-[90px] object-contain grayscale group-hover/card:grayscale-0 transition-all duration-200 {p.invert ? 'brightness-125' : 'opacity-85 group-hover/card:opacity-100'}"
								loading="lazy"
							/>
						</div>
					{:else}
						<div class="flex flex-col text-left">
							<span class="font-mono text-xs font-black tracking-tight text-black group-hover/card:text-[#D22F25] transition-colors">
								{p.acronym}
							</span>
							<span class="text-[10px] text-neutral-600 font-mono tracking-tight leading-tight">
								{p.title}
							</span>
						</div>
					{/if}
					
					<div class="h-6 w-[1px] bg-neutral-200" aria-hidden="true"></div>
					<span class="text-[10px] font-mono text-neutral-500 uppercase tracking-tighter shrink-0">
						{p.category}
					</span>
				</div>
			{/each}

			<!-- Set 2 (for seamless endless loop) -->
			{#each partners as p}
				<div class="h-20 min-w-[200px] px-5 py-3 bg-white border border-neutral-200 hover:border-black transition-all duration-200 flex items-center justify-center gap-3.5 shadow-sm hover:shadow group/card cursor-pointer" aria-hidden="true">
					{#if p.type === 'svg' || p.type === 'png'}
						<div class="h-10 w-24 flex items-center justify-center {p.invert ? 'bg-black p-1.5' : ''}">
							<img
								src={p.src}
								alt=""
								class="max-h-8 max-w-[90px] object-contain grayscale group-hover/card:grayscale-0 transition-all duration-200 {p.invert ? 'brightness-125' : 'opacity-85 group-hover/card:opacity-100'}"
								loading="lazy"
							/>
						</div>
					{:else}
						<div class="flex flex-col text-left">
							<span class="font-mono text-xs font-black tracking-tight text-black group-hover/card:text-[#D22F25] transition-colors">
								{p.acronym}
							</span>
							<span class="text-[10px] text-neutral-600 font-mono tracking-tight leading-tight">
								{p.title}
							</span>
						</div>
					{/if}
					
					<div class="h-6 w-[1px] bg-neutral-200" aria-hidden="true"></div>
					<span class="text-[10px] font-mono text-neutral-500 uppercase tracking-tighter shrink-0">
						{p.category}
					</span>
				</div>
			{/each}

		</div>
	</div>
</section>

<style>
	.marquee-track {
		display: flex;
		animation: scrollMarquee 32s linear infinite;
	}

	.group-hover\:paused:hover {
		animation-play-state: paused;
	}

	@keyframes scrollMarquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
