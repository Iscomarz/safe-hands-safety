<script lang="ts">
	import { COMPANY_INFO } from '$lib/data/content';
	import logoWhite from '$lib/assets/logo-white.png';

	let mobileMenuOpen = $state(false);
	let servicesDropdownOpen = $state(false);
	let scrollY = $state(0);
	let lastScrollY = $state(0);
	let isHidden = $state(false);
	let isScrolled = $state(false);

	$effect(() => {
		const currentY = scrollY;
		isScrolled = currentY > 40;

		// Keep navbar visible if mobile drawer or services dropdown is active
		if (mobileMenuOpen || servicesDropdownOpen) {
			isHidden = false;
			lastScrollY = currentY;
			return;
		}

		if (currentY <= 40) {
			isHidden = false;
		} else if (currentY > lastScrollY && currentY > 120) {
			// Scrolling DOWN -> Smoothly hide
			isHidden = true;
		} else if (currentY < lastScrollY) {
			// Scrolling UP -> Reveal with high-contrast background
			isHidden = false;
		}

		lastScrollY = currentY;
	});

	const serviceItems = [
		{
			label: 'DOT (OQ) PHMSA Compliance',
			href: '/services/oq-phmsa',
			desc: '49 CFR 192/195 multi-platform evaluation'
		},
		{
			label: 'Workforce & Equipment (NCCER)',
			href: '/services/workforce-equipment',
			desc: 'Cranes, rigging, MEWP & forklifts'
		},
		{
			label: 'OSHA, MSHA & Basin Safety',
			href: '/services/safety-training',
			desc: 'Basin United, SafeLand 7.0 & MSHA'
		},
		{
			label: 'Medical & Industrial Health',
			href: '/services/health-medical',
			desc: 'DOT drug screening & audiograms'
		},
		{
			label: 'Midstream Safety Inspectors',
			href: '/services/midstream-inspectors',
			desc: 'Certified pipeline & terminal oversight'
		}
	];

	const mobileNavItems = [
		{ label: 'Home', href: '/' },
		{ label: 'DOT (OQ) PHMSA Compliance', href: '/services/oq-phmsa' },
		{ label: 'Workforce & Equipment (NCCER)', href: '/services/workforce-equipment' },
		{ label: 'OSHA, MSHA & Basin Safety', href: '/services/safety-training' },
		{ label: 'Medical & Industrial Health', href: '/services/health-medical' },
		{ label: 'Midstream Safety Inspectors', href: '/services/midstream-inspectors' },
		{ label: 'Locations & Hubs', href: '/locations' }
	];

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
		servicesDropdownOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			mobileMenuOpen = false;
			servicesDropdownOpen = false;
		}
	}
</script>

<svelte:window bind:scrollY={scrollY} onkeydown={handleKeydown} />

<div class="fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out {isHidden ? '-translate-y-full' : 'translate-y-0'}">
	<!-- Top Notification & Contact Ribbon (Visible at top of page) -->
	{#if !isScrolled}
		<aside aria-label="Quick contact ribbon" class="bg-black/40 backdrop-blur-sm text-neutral-300 text-xs border-b border-white/10 transition-all duration-200">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
				<div class="flex items-center gap-4 flex-wrap">
					<span class="inline-flex items-center gap-1.5 text-neutral-200">
						<span class="w-2 h-2 bg-emerald-500 animate-pulse" aria-hidden="true"></span>
						<span class="font-medium text-neutral-100">{COMPANY_INFO.serviceArea}</span>
					</span>
					<span class="hidden md:inline text-neutral-600">|</span>
					<span class="hidden md:inline text-neutral-300 font-mono">{COMPANY_INFO.hours.regular}</span>
				</div>
				<div class="flex items-center gap-4 text-xs font-mono">
					<a
						href="tel:{COMPANY_INFO.mainContact.phone}"
						class="inline-flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors focus-ring py-1 px-1"
					>
						<svg class="w-3.5 h-3.5 text-[#D22F25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
						</svg>
						<span>Office: <strong class="font-semibold text-white">{COMPANY_INFO.mainContact.phone}</strong></span>
					</a>
					<span class="text-neutral-600">|</span>
					<a
						href="mailto:{COMPANY_INFO.mainContact.email}"
						class="hidden sm:inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors focus-ring py-1 px-1"
					>
						<svg class="w-3.5 h-3.5 text-[#D22F25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<span>{COMPANY_INFO.mainContact.email}</span>
					</a>
				</div>
			</div>
		</aside>
	{/if}

	<!-- Main Interactive Navigation Bar -->
	<header class="transition-all duration-200 text-white {isScrolled ? 'bg-neutral-950/95 backdrop-blur-2xl border-b border-neutral-800 shadow-2xl' : 'bg-black/20 backdrop-blur-md border-b border-white/10'}">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-20">
			<!-- Logo Brand Mark -->
			<a
				href="/"
				class="flex items-center gap-3 focus-ring py-1 group"
				aria-label="Safe Hands Safety Homepage"
			>
				<img
					src={logoWhite}
					alt="Safe Hands + Safety"
					class="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
				/>
				<span class="hidden sm:inline-block text-[10px] font-mono tracking-widest text-neutral-400 uppercase border-l border-white/20 pl-3">
					EHS Consulting
				</span>
			</a>

			<!-- Desktop Nav Links (Streamlined: Home, Services Dropdown, Locations) -->
			<nav class="hidden lg:flex items-center gap-2 xl:gap-4" aria-label="Primary Navigation">
				<a
					href="/"
					class="px-3 py-2 text-sm font-light text-neutral-200 hover:text-white hover:bg-white/5 transition-all duration-200 focus-ring"
				>
					Home
				</a>

				<!-- Services Dropdown Trigger -->
				<div
					class="relative"
					role="group"
					aria-label="Services dropdown"
					onmouseenter={() => (servicesDropdownOpen = true)}
					onmouseleave={() => (servicesDropdownOpen = false)}
				>
					<button
						type="button"
						onclick={() => (servicesDropdownOpen = !servicesDropdownOpen)}
						aria-expanded={servicesDropdownOpen}
						aria-haspopup="true"
						class="flex items-center gap-1.5 px-3 py-2 text-sm font-light text-neutral-200 hover:text-white hover:bg-white/5 transition-all duration-200 focus-ring cursor-pointer {servicesDropdownOpen ? 'text-white bg-white/5' : ''}"
					>
						<span>Services</span>
						<svg
							class="w-4 h-4 text-neutral-400 transition-transform duration-200 {servicesDropdownOpen ? 'rotate-180 text-white' : ''}"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>

					<!-- Services Dropdown Panel -->
					{#if servicesDropdownOpen}
						<div
							class="absolute top-full left-0 w-80 bg-neutral-950/98 backdrop-blur-2xl border border-neutral-800 shadow-2xl p-2 space-y-1 animate-fade-in z-50"
							role="menu"
						>
							{#each serviceItems as s}
								<a
									href={s.href}
									onclick={() => (servicesDropdownOpen = false)}
									class="block p-2.5 hover:bg-white/5 border-l-2 border-transparent hover:border-[#D22F25] transition-all group"
									role="menuitem"
								>
									<div class="text-xs font-semibold text-white group-hover:text-[#D22F25] transition-colors">
										{s.label}
									</div>
									<div class="text-[11px] font-mono text-neutral-400 font-light mt-0.5">
										{s.desc}
									</div>
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<a
					href="/locations"
					class="px-3 py-2 text-sm font-light text-neutral-200 hover:text-white hover:bg-white/5 transition-all duration-200 focus-ring"
				>
					Locations
				</a>
			</nav>

			<!-- Desktop CTAs -->
			<div class="hidden sm:flex items-center gap-3">
				<a
					href="/locations"
					class="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600 transition-all duration-200 focus-ring"
				>
					<svg class="w-3.5 h-3.5 text-[#D22F25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<span>Midland HQ & Satellites</span>
				</a>
				<a
					href="/quote"
					class="inline-flex items-center justify-center h-10 px-5 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-ring"
				>
					Request Quote
				</a>
			</div>

			<!-- Mobile Hamburger Button -->
			<div class="flex lg:hidden items-center gap-2">
				<a
					href="/quote"
					class="sm:hidden px-3 py-2 bg-[#D22F25] text-white text-xs font-bold uppercase"
				>
					Quote
				</a>
				<button
					type="button"
					onclick={toggleMenu}
					aria-expanded={mobileMenuOpen}
					aria-controls="mobile-navigation"
					aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					class="w-12 h-12 inline-flex items-center justify-center p-2 text-neutral-300 hover:text-white hover:bg-white/5 focus-ring cursor-pointer"
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
			class="lg:hidden border-t border-neutral-800 bg-neutral-950/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl space-y-3 animate-fade-in"
		>
			<nav class="flex flex-col space-y-1" aria-label="Mobile Navigation">
				{#each mobileNavItems as item}
					<a
						href={item.href}
						onclick={closeMenu}
						class="flex items-center justify-between min-h-[48px] px-4 py-3 text-base font-light text-neutral-200 hover:text-[#D22F25] hover:bg-white/5 transition-colors focus-ring"
					>
						<span>{item.label}</span>
						<svg class="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</a>
				{/each}
			</nav>

			<div class="pt-4 border-t border-neutral-800 flex flex-col gap-3">
				<a
					href="tel:{COMPANY_INFO.mainContact.phone}"
					onclick={closeMenu}
					class="flex items-center justify-center gap-2 min-h-[48px] px-4 py-3 border border-neutral-800 text-neutral-200 font-mono text-xs hover:bg-white/5 focus-ring"
				>
					<svg class="w-4 h-4 text-[#D22F25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
					</svg>
					Call Office: {COMPANY_INFO.mainContact.phone}
				</a>
				<a
					href="/quote"
					onclick={closeMenu}
					class="flex items-center justify-center min-h-[48px] px-4 py-3 bg-[#D22F25] text-white font-bold text-xs tracking-wider uppercase shadow hover:bg-[#EB392F] focus-ring"
				>
					Request Quote / Training
				</a>
			</div>
		</div>
	{/if}
</header>
</div>
