<script lang="ts">
	import { COMPANY_INFO, OFFICE_LOCATIONS } from '$lib/data/content';
</script>

<section id="locations" class="py-16 lg:py-24 bg-[#F8F9FA] border-b border-slate-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="max-w-3xl mb-12">
			<div class="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-sm mb-3">
				<span class="w-2 h-2 rounded-full bg-[#D22F25]" aria-hidden="true"></span>
				<span class="text-xs font-mono font-bold uppercase tracking-wider text-[#D22F25]">
					Regional Presence
				</span>
			</div>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
				Locations & Training Centers
			</h2>
			<p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
				Headquartered in Midland, Texas, with strategic satellite offices across major energy basins in Texas, Colorado, and New Mexico.
			</p>
		</div>

		<!-- Locations Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
			
			<!-- Main Office Highlight Card -->
			<div class="bg-slate-900 text-white p-6 sm:p-8 rounded-sm border border-slate-800 flex flex-col justify-between shadow-md relative overflow-hidden md:col-span-2 lg:col-span-1">
				<div class="absolute top-0 right-0 w-32 h-32 bg-[#D22F25]/20 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>
				<div>
					<div class="flex items-center justify-between mb-4">
						<span class="text-[11px] font-mono font-bold uppercase px-2.5 py-1 bg-[#D22F25] text-white rounded-sm">
							MAIN HEADQUARTERS
						</span>
						<span class="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
							<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
							Active Center
						</span>
					</div>

					<h3 class="text-2xl font-extrabold text-white">Midland, Texas</h3>
					<p class="text-xs sm:text-sm text-slate-300 font-mono mt-1">5301 Cholla Rd, Midland, TX 79706</p>
					
					<p class="text-xs text-slate-400 mt-4 leading-relaxed">
						Primary Permian Basin hands-on testing center, proctoring station, and classroom training facility.
					</p>

					<div class="mt-6 pt-4 border-t border-slate-800 space-y-2 text-xs">
						<div class="flex items-center justify-between">
							<span class="text-slate-400">Direct Intake:</span>
							<a href="tel:{COMPANY_INFO.mainContact.phone}" class="font-mono text-[#D22F25] hover:text-[#EB392F] font-bold focus-ring px-1 rounded">
								{COMPANY_INFO.mainContact.phone}
							</a>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-slate-400">Contact:</span>
							<span class="text-slate-200 font-semibold">{COMPANY_INFO.mainContact.name}</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-slate-400">Email:</span>
							<a href="mailto:{COMPANY_INFO.mainContact.email}" class="text-slate-300 hover:text-white truncate max-w-[200px] focus-ring px-1 rounded">
								{COMPANY_INFO.mainContact.email}
							</a>
						</div>
					</div>
				</div>

				<div class="mt-6 pt-4 border-t border-slate-800">
					<span class="block text-[11px] font-mono text-slate-400 mb-2">Operating Hours</span>
					<span class="text-xs text-slate-200 block font-mono">{COMPANY_INFO.hours.regular}</span>
					<span class="text-[11px] text-slate-400 block font-mono">{COMPANY_INFO.hours.extended}</span>
				</div>
			</div>

			<!-- Satellite Locations Cards -->
			{#each OFFICE_LOCATIONS.filter(l => l.type === 'Satellite Office') as loc}
				<div class="bg-white border border-slate-200 rounded-sm p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all duration-200">
					<div>
						<div class="flex items-center justify-between mb-3">
							<span class="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-slate-100 text-slate-700 rounded-sm border border-slate-200">
								SATELLITE BRANCH
							</span>
							<span class="text-xs font-mono font-bold text-slate-500">{loc.state}</span>
						</div>

						<h3 class="text-xl font-bold text-slate-900">{loc.city}, {loc.state}</h3>
						
						{#if loc.note}
							<p class="text-xs text-slate-600 mt-2 leading-relaxed">{loc.note}</p>
						{/if}
					</div>

					<div class="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs font-mono">
						<div class="flex items-center justify-between text-slate-600">
							<span>Phone:</span>
							<a href="tel:{loc.phone}" class="font-bold text-[#D22F25] hover:text-[#EB392F] focus-ring px-1 rounded">
								{loc.phone}
							</a>
						</div>
						<div class="flex items-center justify-between text-slate-600">
							<span>Intake:</span>
							<span class="text-slate-800">{loc.email}</span>
						</div>
					</div>
				</div>
			{/each}

		</div>

		<!-- Accounting & Administration Contacts Strip -->
		<div class="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
			<div class="flex items-start gap-4">
				<div class="w-12 h-12 bg-red-50 text-[#D22F25] flex items-center justify-center rounded-sm shrink-0" aria-hidden="true">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
					</svg>
				</div>
				<div>
					<h3 class="text-base font-bold text-slate-900">Accounts Receivable / Accounts Payable</h3>
					<p class="text-xs text-slate-600 mt-0.5">
						For vendor onboarding, invoice routing, contractor PO verification, and billing inquiries.
					</p>
					<div class="flex items-center gap-4 mt-2 text-xs font-mono">
						<a href="tel:{COMPANY_INFO.billingContact.phone}" class="font-bold text-slate-800 hover:text-[#D22F25] focus-ring">
							AR/AP: {COMPANY_INFO.billingContact.phone}
						</a>
						<span class="text-slate-300">|</span>
						<a href="mailto:{COMPANY_INFO.billingContact.email}" class="text-slate-600 hover:text-[#D22F25] focus-ring">
							{COMPANY_INFO.billingContact.email}
						</a>
					</div>
				</div>
			</div>

			<a
				href="mailto:{COMPANY_INFO.billingContact.email}"
				class="shrink-0 inline-flex items-center justify-center min-h-[44px] px-5 py-2 border border-slate-300 hover:border-slate-400 bg-[#F8F9FA] hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-sm transition-all focus-ring"
			>
				Contact Accounting
			</a>
		</div>

	</div>
</section>
