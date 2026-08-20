<script lang="ts">
	import { COMPANY_INFO, OFFICE_LOCATIONS } from '$lib/data/content';
</script>

<section id="locations" class="py-20 lg:py-28 bg-white text-black border-b border-neutral-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="max-w-3xl mb-14">
			<div class="flex items-center gap-3 mb-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]" aria-hidden="true"></span>
				<span class="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
					REGIONAL HUBS & SATELLITES
				</span>
			</div>
			<h2
				style="font-family: var(--font-elms);"
				class="text-3xl sm:text-5xl font-light text-black tracking-tight leading-tight"
			>
				Locations & Training Centers
			</h2>
			<p class="mt-4 text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
				Headquartered in Midland, Texas, with strategic satellite offices across major energy basins in Texas, Colorado, and New Mexico.
			</p>
		</div>

		<!-- Locations Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
			
			<!-- Main Office Highlight Card -->
			<div class="bg-neutral-900 text-white p-6 sm:p-8 border border-neutral-800 flex flex-col justify-between relative overflow-hidden md:col-span-2 lg:col-span-1">
				<div>
					<div class="flex items-center justify-between mb-4">
						<span class="text-[11px] font-mono font-bold uppercase px-2.5 py-1 bg-[#D22F25] text-white">
							MAIN HEADQUARTERS
						</span>
						<span class="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
							<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
							Active Center
						</span>
					</div>

					<h3
						style="font-family: var(--font-elms);"
						class="text-2xl sm:text-3xl font-light text-white"
					>
						Midland, Texas
					</h3>
					<p class="text-xs sm:text-sm text-neutral-400 font-mono mt-1">5301 Cholla Rd, Midland, TX 79706</p>
					
					<p class="text-sm text-neutral-300 font-light mt-4 leading-relaxed">
						Primary Permian Basin hands-on testing center, proctoring station, and classroom training facility.
					</p>

					<div class="mt-6 pt-4 border-t border-neutral-800 space-y-2.5 text-xs font-mono">
						<div class="flex items-center justify-between">
							<span class="text-neutral-400">Direct Intake:</span>
							<a href="tel:{COMPANY_INFO.mainContact.phone}" class="text-white hover:text-[#D22F25] font-bold focus-ring">
								{COMPANY_INFO.mainContact.phone}
							</a>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-neutral-400">Coordinator:</span>
							<span class="text-neutral-200">{COMPANY_INFO.mainContact.name}</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-neutral-400">Email:</span>
							<a href="mailto:{COMPANY_INFO.mainContact.email}" class="text-neutral-300 hover:text-white truncate max-w-[200px] focus-ring">
								{COMPANY_INFO.mainContact.email}
							</a>
						</div>
					</div>
				</div>

				<div class="mt-6 pt-4 border-t border-neutral-800">
					<span class="block text-[11px] font-mono text-neutral-400 mb-2">Operating Hours</span>
					<span class="text-xs text-white block font-mono">{COMPANY_INFO.hours.regular}</span>
					<span class="text-[11px] text-neutral-400 block font-mono">{COMPANY_INFO.hours.extended}</span>
				</div>
			</div>

			<!-- Satellite Locations Cards -->
			{#each OFFICE_LOCATIONS.filter(l => l.type === 'Satellite Office') as loc}
				<div class="bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between hover:border-black transition-all duration-200">
					<div>
						<div class="flex items-center justify-between mb-3">
							<span class="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-neutral-100 text-black border border-neutral-300">
								SATELLITE BRANCH
							</span>
							<span class="text-xs font-mono text-[#D22F25] font-bold">{loc.state}</span>
						</div>

						<h3
							style="font-family: var(--font-elms);"
							class="text-2xl font-light text-black"
						>
							{loc.city}, {loc.state}
						</h3>
						
						{#if loc.note}
							<p class="text-sm text-neutral-700 font-light mt-2 leading-relaxed">{loc.note}</p>
						{/if}
					</div>

					<div class="mt-6 pt-4 border-t border-neutral-200 space-y-2 text-xs font-mono">
						<div class="flex items-center justify-between text-neutral-600">
							<span>Phone:</span>
							<a href="tel:{loc.phone}" class="font-bold text-black hover:text-[#D22F25] focus-ring">
								{loc.phone}
							</a>
						</div>
						<div class="flex items-center justify-between text-neutral-600">
							<span>Intake:</span>
							<span class="text-neutral-900">{loc.email}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Accounting & Administration Contacts Strip -->
		<div class="bg-neutral-50 text-black p-8 sm:p-10 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
			<div class="space-y-2">
				<h4
					style="font-family: var(--font-elms);"
					class="text-xl sm:text-2xl font-light text-black"
				>
					Accounts Receivable & Corporate Billing
				</h4>
				<p class="text-sm text-neutral-700 font-light max-w-xl leading-relaxed">
					For corporate master service agreements (MSA), direct invoicing, or contractor vendor packet approvals:
				</p>
				<div class="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-700 pt-1">
					<span>Phone: <strong class="text-black">{COMPANY_INFO.billingContact.phone}</strong></span>
					<span>•</span>
					<span>Email: <strong class="text-black">{COMPANY_INFO.billingContact.email}</strong></span>
				</div>
			</div>
			<a
				href="mailto:{COMPANY_INFO.billingContact.email}"
				class="inline-flex items-center justify-center h-12 px-7 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-ring shrink-0"
			>
				Contact Accounting
			</a>
		</div>

	</div>
</section>
