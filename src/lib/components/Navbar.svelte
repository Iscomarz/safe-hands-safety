<script lang="ts">
	import { COMPANY_INFO } from '$lib/data/content';

	let mobileMenuOpen = $state(false);

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'DOT (OQ) PHMSA', href: '/services/oq-phmsa' },
		{ label: 'Equipment & NCCER', href: '/services/workforce-equipment' },
		{ label: 'OSHA & Medical', href: '/services/safety-training' },
		{ label: 'Midstream Inspectors', href: '/services/midstream-inspectors' },
		{ label: 'Locations', href: '/locations' }
	];

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && mobileMenuOpen) {
			closeMenu();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Top Notification & Contact Ribbon -->
<aside aria-label="Quick contact ribbon" class="bg-[#0B111E] text-slate-300 text-xs border-b border-slate-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
		<div class="flex items-center gap-4 flex-wrap">
			<span class="inline-flex items-center gap-1.5 text-slate-200">
				<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
				<span class="font-medium text-slate-100">{COMPANY_INFO.serviceArea}</span>
			</span>
			<span class="hidden md:inline text-slate-600">|</span>
			<span class="hidden md:inline text-slate-400 font-mono">{COMPANY_INFO.hours.regular}</span>
		</div>
		<div class="flex items-center gap-4 text-xs font-mono">
			<a
				href="tel:{COMPANY_INFO.mainContact.phone}"
				class="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors focus-ring py-1 px-1 rounded"
			>
				<svg class="w-3.5 h-3.5 text-[#D22F25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
				</svg>
				<span>Office: <strong class="font-semibold text-white">{COMPANY_INFO.mainContact.phone}</strong></span>
			</a>
			<span class="text-slate-600">|</span>
			<a
				href="mailto:{COMPANY_INFO.mainContact.email}"
				class="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors focus-ring py-1 px-1 rounded"
			>
				<svg class="w-3.5 h-3.5 text-[#D22F25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
				</svg>
				<span>{COMPANY_INFO.mainContact.email}</span>
			</a>
		</div>
	</div>
</aside>

<!-- Main Interactive Navigation Bar -->
<header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all duration-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-20">
			<!-- Logo Brand Mark -->
			<a
				href="/"
				class="flex items-center gap-3 focus-ring rounded p-1 group"
				aria-label="Safe Hands Safety Homepage"
			>
				<!-- Technical Shield / Hand Emblem -->
				<div class="w-11 h-11 bg-[#D22F25] text-white flex items-center justify-center font-black rounded-sm shadow-md group-hover:bg-[#EB392F] transition-colors duration-200">
					<span class="font-mono text-xl tracking-tight">SH</span>
				</div>
				<div class="flex flex-col">
					<span class="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0F172A] leading-tight">
						SAFE HANDS <span class="text-[#D22F25]">SAFETY</span>
					</span>
					<span class="text-[11px] font-mono tracking-widest text-slate-500 uppercase font-medium">
						EHS Consulting & Training
					</span>
				</div>
			</a>

			<!-- Desktop Nav Links (Miller's Law: 6 items) -->
			<nav class="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Primary Navigation">
				{#each navItems as item}
					<a
						href={item.href}
						class="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#D22F25] hover:bg-slate-100/80 rounded-sm transition-all duration-200 focus-ring"
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<!-- Desktop CTAs (Fitts' Law: Min 48px height, clear affordance) -->
			<div class="hidden sm:flex items-center gap-3">
				<a
					href="/locations"
					class="hidden xl:inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-mono font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 rounded-sm transition-all duration-200 focus-ring"
				>
					<svg class="w-3.5 h-3.5 text-[#D22F25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<span>Midland & Satellites</span>
				</a>
				<a
					href="/quote"
					class="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 bg-[#D22F25] hover:bg-[#EB392F] active:scale-[0.98] text-white text-xs xl:text-sm font-bold tracking-wide rounded-sm shadow-sm transition-all duration-200 focus-ring uppercase"
				>
					Request Quote
				</a>
			</div>

			<!-- Mobile Hamburger Button (Fitts' Law: 48x48px touch target) -->
			<div class="flex lg:hidden items-center gap-2">
				<a
					href="/quote"
					class="sm:hidden px-3 py-2 bg-[#D22F25] text-white text-xs font-bold uppercase rounded-sm"
				>
					Quote
				</a>
				<button
					type="button"
					onclick={toggleMenu}
					aria-expanded={mobileMenuOpen}
					aria-controls="mobile-navigation"
					aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					class="w-12 h-12 inline-flex items-center justify-center p-2 rounded-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-ring"
				>
					{#if mobileMenuOpen}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Drawer Menu -->
	{#if mobileMenuOpen}
		<div
			id="mobile-navigation"
			class="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3 animate-fade-in"
		>
			<nav class="flex flex-col space-y-1" aria-label="Mobile Navigation">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={closeMenu}
						class="flex items-center justify-between min-h-[48px] px-4 py-3 text-base font-semibold text-slate-800 hover:text-[#D22F25] hover:bg-slate-50 rounded-sm transition-colors focus-ring"
					>
						<span>{item.label}</span>
						<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</a>
				{/each}
			</nav>

			<div class="pt-4 border-t border-slate-200 flex flex-col gap-3">
				<a
					href="tel:{COMPANY_INFO.mainContact.phone}"
					onclick={closeMenu}
					class="flex items-center justify-center gap-2 min-h-[48px] px-4 py-3 border border-slate-300 text-slate-800 font-bold text-sm rounded-sm hover:bg-slate-50 focus-ring"
				>
					<svg class="w-4 h-4 text-[#D22F25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
					</svg>
					Call Office: {COMPANY_INFO.mainContact.phone}
				</a>
				<a
					href="/quote"
					onclick={closeMenu}
					class="flex items-center justify-center min-h-[48px] px-4 py-3 bg-[#D22F25] text-white font-bold text-sm tracking-wide uppercase rounded-sm shadow hover:bg-[#EB392F] focus-ring"
				>
					Request Quote / Training
				</a>
			</div>
		</div>
	{/if}
</header>
