<script lang="ts">
	import { COMPANY_INFO } from '$lib/data/content';
</script>

<section class="relative bg-[#0B111E] text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
	<!-- Technical Grid & Ambient Lighting Background -->
	<div class="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true"></div>
	<div class="absolute -top-24 right-0 w-96 h-96 bg-[#D22F25]/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
	<div class="absolute bottom-0 left-1/4 w-80 h-80 bg-slate-800/40 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
			
			<!-- Left Main Copy (Z-Pattern Entry Node) -->
			<div class="lg:col-span-7 space-y-6">
				<!-- Live Accreditation Chip -->
				<div class="inline-flex items-center gap-2.5 px-3 py-1.5 bg-slate-900/90 border border-slate-700 rounded-sm">
					<span class="w-2 h-2 rounded-full bg-[#D22F25]" aria-hidden="true"></span>
					<span class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
						DOT PHMSA • NCCER • OSHA • MSHA COMPLIANCE
					</span>
				</div>

				<!-- Main Headline -->
				<h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
					Industrial Safety Training, <br class="hidden sm:inline" />
					<span class="text-[#D22F25]">DOT (OQ)</span> & Workforce Certification
				</h1>

				<!-- Official Motto Cards (Chunked for cognitive clarity) -->
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
					<div class="bg-slate-900/80 border-l-2 border-[#D22F25] p-3 rounded-sm border border-slate-800/60">
						<span class="block text-xs font-mono font-bold text-[#D22F25] uppercase tracking-wide">ADVICE</span>
						<span class="text-xs text-slate-300 font-medium">You can rely on</span>
					</div>
					<div class="bg-slate-900/80 border-l-2 border-[#D22F25] p-3 rounded-sm border border-slate-800/60">
						<span class="block text-xs font-mono font-bold text-[#D22F25] uppercase tracking-wide">STRATEGIES</span>
						<span class="text-xs text-slate-300 font-medium">That work</span>
					</div>
					<div class="bg-slate-900/80 border-l-2 border-[#D22F25] p-3 rounded-sm border border-slate-800/60">
						<span class="block text-xs font-mono font-bold text-[#D22F25] uppercase tracking-wide">EXPERTS</span>
						<span class="text-xs text-slate-300 font-medium">Who've been there</span>
					</div>
				</div>

				<!-- Value Proposition Text -->
				<p class="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
					Safe Hands Safety is your trusted implementation partner for pipeline operator qualification under 
					<strong class="text-white">49 CFR Parts 192 & 195</strong>, heavy equipment practical certifications, 
					specialized Basin United orientations, and DOT FMCSA health diagnostics.
				</p>

				<!-- Conversion CTAs (Fitts' Law: Min 48px height, clear affordance) -->
				<div class="flex flex-col sm:flex-row gap-4 pt-2">
					<a
						href="#quote"
						class="inline-flex items-center justify-center min-h-[48px] px-7 py-3.5 bg-[#D22F25] hover:bg-[#EB392F] active:scale-[0.98] text-white text-sm font-bold tracking-wide uppercase rounded-sm shadow-lg transition-all duration-200 focus-ring text-center"
					>
						<span>Get Immediate Quote / Schedule</span>
						<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
						</svg>
					</a>
					<a
						href="#services"
						class="inline-flex items-center justify-center min-h-[48px] px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700 active:scale-[0.98] text-slate-100 text-sm font-semibold border border-slate-700 rounded-sm transition-all duration-200 focus-ring text-center"
					>
						Explore 5 Core Pillars
					</a>
				</div>

				<!-- Operational Guarantee Strip -->
				<div class="pt-4 flex items-center gap-6 text-xs text-slate-400 font-mono border-t border-slate-800/80 flex-wrap">
					<span class="flex items-center gap-1.5">
						<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						Midland HQ + 5 Satellites
					</span>
					<span class="flex items-center gap-1.5">
						<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						Bilingual Instruction (EN/ES)
					</span>
					<span class="flex items-center gap-1.5">
						<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						Same-Day D&A Testing
					</span>
				</div>
			</div>

			<!-- Right Visual Technical Summary Card -->
			<div class="lg:col-span-5">
				<div class="bg-slate-900 border border-slate-800 rounded-sm p-6 shadow-2xl relative">
					<!-- Technical Header Ribbon -->
					<div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
						<div class="flex items-center gap-2">
							<span class="w-2.5 h-2.5 bg-[#D22F25] rounded-full"></span>
							<span class="font-mono text-xs uppercase tracking-widest text-slate-300 font-bold">
								COMPLIANCE MATRIX
							</span>
						</div>
						<span class="text-[11px] font-mono text-slate-500">AUDIT DEFENSE READY</span>
					</div>

					<!-- Key Core Statistics -->
					<div class="grid grid-cols-2 gap-4 mb-5">
						<div class="bg-[#0B111E] p-4 rounded-sm border border-slate-800">
							<div class="text-2xl sm:text-3xl font-extrabold text-white font-mono">6 OQ</div>
							<div class="text-xs text-slate-400 mt-1">Leading Platforms Supported</div>
						</div>
						<div class="bg-[#0B111E] p-4 rounded-sm border border-slate-800">
							<div class="text-2xl sm:text-3xl font-extrabold text-[#D22F25] font-mono">100%</div>
							<div class="text-xs text-slate-400 mt-1">DOT 49 CFR 192/195 Defensible</div>
						</div>
						<div class="bg-[#0B111E] p-4 rounded-sm border border-slate-800">
							<div class="text-2xl sm:text-3xl font-extrabold text-white font-mono">25+</div>
							<div class="text-xs text-slate-400 mt-1">NCCER Craft Disciplines</div>
						</div>
						<div class="bg-[#0B111E] p-4 rounded-sm border border-slate-800">
							<div class="text-2xl sm:text-3xl font-extrabold text-white font-mono">24/7</div>
							<div class="text-xs text-slate-400 mt-1">After-Hours by Appointment</div>
						</div>
					</div>

					<!-- Direct Rapid Contact Box -->
					<div class="bg-slate-950 p-4 border border-slate-800 rounded-sm space-y-2">
						<div class="text-xs font-mono uppercase text-slate-400 font-semibold">Direct Intake & Scheduling</div>
						<div class="flex items-center justify-between text-sm font-semibold">
							<span class="text-slate-200">Joyce Sanchez</span>
							<a href="tel:{COMPANY_INFO.mainContact.phone}" class="text-[#D22F25] hover:text-[#EB392F] font-mono focus-ring px-1 py-0.5 rounded">
								{COMPANY_INFO.mainContact.phone}
							</a>
						</div>
						<div class="text-xs text-slate-400 font-mono">
							HQ: 5301 Cholla Rd, Midland, TX 79706
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>
