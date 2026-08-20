<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import heroBg from '$lib/assets/backgrounds/pexels-janzakelj-16862261.jpg';

	let titleElement: HTMLElement | null = $state(null);
	let subtitleElement: HTMLElement | null = $state(null);

	onMount(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

			if (titleElement) {
				tl.from(titleElement, {
					x: -100,
					opacity: 0,
					duration: 1.4,
					delay: 0.2
				});
			}

			if (subtitleElement) {
				tl.from(
					subtitleElement,
					{
						x: -60,
						opacity: 0,
						duration: 1.2
					},
					'-=0.8'
				);
			}
		});

		return () => ctx.revert();
	});
</script>

<section class="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-black text-white">
	<!-- Background Image -->
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('{heroBg}');"
		aria-hidden="true"
	></div>

	<!-- Minimalist Dark Vignette Overlay for Readability -->
	<div
		class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/40 pointer-events-none"
		aria-hidden="true"
	></div>
	<div
		class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none"
		aria-hidden="true"
	></div>

	<!-- Hero Main Content: Minimalist Title with Elms Sans (centered in available vertical space) -->
	<div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-40 sm:pt-48 lg:pt-56 pb-12 flex-grow flex flex-col justify-center">
		<div class="max-w-4xl">
			<!-- Animated Main Title -->
			<h1
				bind:this={titleElement}
				style="font-family: var(--font-elms);"
				class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15] text-balance"
			>
				Industrial Safety Training, <br class="hidden sm:inline" />
				<span class="font-normal text-white">DOT (OQ)</span> & Workforce Certification
			</h1>

			<!-- Clean minimalist subtitle -->
			<p
				bind:this={subtitleElement}
				style="font-family: var(--font-elms);"
				class="mt-5 text-base sm:text-lg lg:text-xl font-light text-slate-200/90 tracking-wide max-w-2xl leading-relaxed"
			>
				Safe Hands Safety • Pipeline Compliance, Heavy Equipment & Industrial Health
			</p>
		</div>
	</div>

	<!-- Bottom Baseline Strip & Scroll Anchor -->
	<div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-8 pt-4 flex items-center justify-between border-t border-white/10 text-xs font-mono text-neutral-300">
		<div class="flex items-center gap-2">
			<span class="w-1.5 h-1.5 bg-[#D22F25]"></span>
			<span class="tracking-widest uppercase text-[11px] text-neutral-300">Permian Basin • Midland HQ</span>
		</div>
		<a href="#services" class="hover:text-white flex items-center gap-2 transition-colors focus-ring py-1 text-[11px] uppercase tracking-wider text-neutral-200">
			<span>Explore Pillars</span>
			<svg class="w-3.5 h-3.5 text-[#D22F25] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</a>
	</div>
</section>
