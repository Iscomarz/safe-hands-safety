<script lang="ts">
	import { COMPANY_INFO, OFFICE_LOCATIONS } from '$lib/data/content';
	import logoWhite from '$lib/assets/logo-white.png';
</script>

<footer class="bg-black text-neutral-400 text-xs border-t border-neutral-800">
	<!-- Main Footer Body -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
			
			<!-- Col 1: Brand & Identity (4 cols) -->
			<div class="lg:col-span-4 space-y-4">
				<a href="/" class="inline-flex items-center gap-3 group">
					<img
						src={logoWhite}
						alt="Safe Hands + Safety"
						class="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
					/>
				</a>
				<div class="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
					{COMPANY_INFO.legalName}
				</div>

				<p class="text-slate-400 text-xs leading-relaxed max-w-sm">
					Comprehensive occupational health, operator qualification (OQ), equipment certification, and safety compliance consulting for oil & gas, mining, pipeline, and industrial construction operations.
				</p>

				<div class="pt-2 border-l-2 border-[#D22F25] pl-3 space-y-0.5">
					<div class="font-mono text-[11px] text-white font-bold">{COMPANY_INFO.motto.advice}</div>
					<div class="font-mono text-[11px] text-white font-bold">{COMPANY_INFO.motto.strategies}</div>
					<div class="font-mono text-[11px] text-white font-bold">{COMPANY_INFO.motto.experts}</div>
				</div>
			</div>

			<!-- Col 2: Quick Links & Pillars (3 cols) -->
			<div class="lg:col-span-3 space-y-3">
				<h4 class="text-xs font-mono font-bold uppercase text-white tracking-widest">
					Solutions & Catalog
				</h4>
				<ul class="space-y-2">
					<li>
						<a href="#services" class="hover:text-white transition-colors focus-ring py-0.5">
							5 Core Safety Pillars
						</a>
					</li>
					<li>
						<a href="#oq-platforms" class="hover:text-white transition-colors focus-ring py-0.5">
							DOT (OQ) PHMSA Platforms
						</a>
					</li>
					<li>
						<a href="#equipment" class="hover:text-white transition-colors focus-ring py-0.5">
							Cranes, MEWPs & Forklifts
						</a>
					</li>
					<li>
						<a href="#health-safety" class="hover:text-white transition-colors focus-ring py-0.5">
							Basin United & SafeLand 7.0
						</a>
					</li>
					<li>
						<a href="#health-safety" class="hover:text-white transition-colors focus-ring py-0.5">
							DOT Drug & Audiometric Testing
						</a>
					</li>
					<li>
						<a href="#midstream" class="hover:text-white transition-colors focus-ring py-0.5">
							Midstream Safety Inspectors
						</a>
					</li>
				</ul>
			</div>

			<!-- Col 3: Regional Hubs (3 cols) -->
			<div class="lg:col-span-3 space-y-3">
				<h4 class="text-xs font-mono font-bold uppercase text-white tracking-widest">
					Offices & Facilities
				</h4>
				<ul class="space-y-1.5 font-mono text-[11px]">
					<li class="text-slate-200">
						<strong class="text-[#D22F25]">HQ:</strong> Midland, TX (5301 Cholla Rd)
					</li>
					{#each OFFICE_LOCATIONS.filter(l => l.type === 'Satellite Office') as loc}
						<li>
							<span class="text-slate-400">{loc.city}, {loc.state}</span>
						</li>
					{/each}
				</ul>

				<div class="pt-2 text-xs font-mono text-slate-400">
					<div class="text-slate-300 font-semibold">{COMPANY_INFO.hours.regular}</div>
					<div>{COMPANY_INFO.hours.extended}</div>
				</div>
			</div>

			<!-- Col 4: Intake & Billing (2 cols) -->
			<div class="lg:col-span-2 space-y-3">
				<h4 class="text-xs font-mono font-bold uppercase text-white tracking-widest">
					Intake Direct
				</h4>
				<div class="space-y-2 font-mono text-[11px]">
					<div>
						<div class="text-slate-500">Dispatch / Coordinator</div>
						<a href="tel:{COMPANY_INFO.mainContact.phone}" class="text-white hover:text-[#D22F25] font-semibold block">
							{COMPANY_INFO.mainContact.phone}
						</a>
					</div>
					<div>
						<div class="text-slate-500">AR / Invoicing</div>
						<a href="tel:{COMPANY_INFO.billingContact.phone}" class="text-slate-300 hover:text-white block">
							{COMPANY_INFO.billingContact.phone}
						</a>
					</div>
					<div>
						<div class="text-slate-500">Billing Email</div>
						<a href="mailto:{COMPANY_INFO.billingContact.email}" class="text-slate-300 hover:text-white block truncate">
							{COMPANY_INFO.billingContact.email}
						</a>
					</div>
				</div>
			</div>

		</div>

		<!-- Bottom Sub-Footer -->
		<div class="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
			<div>
				© {new Date().getFullYear()} {COMPANY_INFO.legalName} • All Rights Reserved
			</div>
			<div class="flex items-center gap-4">
				<span>DOT 49 CFR 192/195</span>
				<span>•</span>
				<span>NCCER Accredited</span>
				<span>•</span>
				<span>OSHA / MSHA Compliant</span>
			</div>
		</div>
	</div>
</footer>
