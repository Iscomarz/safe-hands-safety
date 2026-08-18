<script lang="ts">
	const courses = [
		{
			title: 'Basin United Training',
			tag: 'Permian & Upstream Standard',
			badge: '2-Day Format',
			desc: 'Comprehensive safety orientation & leadership curriculum. Day 1: Fundamental Safety Orientation. Day 2: Leadership Safety for upstream frontline crews and supervisors.'
		},
		{
			title: 'OSHA 10 & 30-Hour',
			tag: 'General Industry & Construction',
			badge: 'DOL Cards',
			desc: 'Official OSHA hazard recognition, employee rights, personal protective equipment, fall protection, and safety compliance obligations.'
		},
		{
			title: 'Veriforce / PEC SafeLand 7.0',
			tag: 'Oil & Gas Recognized',
			badge: '40+ HSE Topics',
			desc: 'Comprehensive instructor-led orientation covering upstream/midstream hazards, emergency mitigation, and core HSE standards.'
		},
		{
			title: 'MSHA New Miner Training',
			tag: 'Colorado & Mining Ops',
			badge: 'Surface / Metal',
			desc: 'Comprehensive miner safety training aligned with Mine Safety and Health Administration regulations for mining and aggregate operations.'
		},
		{
			title: 'HASC Safety Essentials',
			tag: 'Gulf Coast Operators',
			badge: 'Site-Specific',
			desc: 'Houston Area and Corpus Christi Area refinery and plant contractor orientations.'
		},
		{
			title: 'CPR / AED & First Aid',
			tag: 'Emergency Response',
			badge: 'AHA Certified',
			desc: 'Hands-on practical training for workplace medical emergencies, bloodborne pathogens, and immediate life support.'
		}
	];

	const medicalServices = [
		{
			title: 'Drug & Alcohol Testing',
			standards: 'DOT & Non-DOT Protocols',
			desc: 'Instant rapid testing and lab-confirmed MRO-reviewed screening for pre-employment, random, post-accident, and reasonable suspicion programs.'
		},
		{
			title: 'Audiometric Testing',
			standards: 'OSHA 1910.95 Hearing Conservation',
			desc: 'Certified baseline and annual audiograms with STS tracking and audiology review to prevent industrial noise-induced hearing loss.'
		},
		{
			title: 'Comprehensive Background Checks',
			standards: 'DOT FMCSA & Corporate Standards',
			desc: 'Rapid contractor vetting, driving record checks (MVR), and identity verification for onboarding compliance.'
		}
	];
</script>

<section id="health-safety" class="py-16 lg:py-24 bg-[#F8F9FA] border-b border-slate-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="max-w-3xl mb-12">
			<div class="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-slate-100 rounded-sm mb-3">
				<span class="w-2 h-2 rounded-full bg-[#D22F25]" aria-hidden="true"></span>
				<span class="text-xs font-mono font-bold uppercase tracking-wider">
					Occupational Safety & Health
				</span>
			</div>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
				OSHA, Basin United & Medical Services
			</h2>
			<p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
				Keep your workforce fully certified and field-ready with standardized regional orientations, bilingual instruction, and complete DOT occupational health screening.
			</p>
		</div>

		<!-- Two Column Division: Safety Courses vs Medical Health Services -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			
			<!-- Left: Safety Orientations & Compliance Courses (7 cols) -->
			<div class="lg:col-span-7 space-y-4">
				<div class="flex items-center justify-between border-b border-slate-200 pb-3">
					<h3 class="text-lg font-extrabold text-slate-900 uppercase font-mono tracking-wide">
						Safety Orientations & Courses
					</h3>
					<span class="text-xs font-mono text-slate-500 font-semibold">BILINGUAL (EN/ES)</span>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{#each courses as course}
						<div class="bg-white p-5 rounded-sm border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
							<div>
								<div class="flex items-center justify-between gap-2 mb-2">
									<span class="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-slate-100 text-slate-700 rounded-sm">
										{course.badge}
									</span>
									<span class="text-[10px] font-mono text-[#D22F25] font-semibold">{course.tag}</span>
								</div>
								<h4 class="font-bold text-base text-slate-900">{course.title}</h4>
								<p class="text-xs text-slate-600 mt-2 leading-relaxed">{course.desc}</p>
							</div>
							<div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
								<span class="font-mono text-slate-400">Classroom / On-Site</span>
								<a href="#quote" class="font-bold text-[#D22F25] hover:text-[#EB392F] focus-ring px-1 rounded">
									Enroll ›
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right: Medical & Industrial Health (5 cols) -->
			<div class="lg:col-span-5 space-y-4">
				<div class="flex items-center justify-between border-b border-slate-200 pb-3">
					<h3 class="text-lg font-extrabold text-slate-900 uppercase font-mono tracking-wide">
						Medical & Health Services
					</h3>
					<span class="text-xs font-mono text-slate-500 font-semibold">DOT FMCSA</span>
				</div>

				<div class="space-y-4">
					{#each medicalServices as med}
						<div class="bg-white p-6 rounded-sm border border-slate-200 border-l-4 border-l-[#D22F25] shadow-xs">
							<div class="flex items-center justify-between gap-2 mb-1">
								<h4 class="font-bold text-base text-slate-900">{med.title}</h4>
								<span class="text-[10px] font-mono bg-red-50 text-[#D22F25] font-bold px-2 py-0.5 rounded-sm">
									Certified
								</span>
							</div>
							<div class="text-xs font-mono text-slate-500 mb-2">{med.standards}</div>
							<p class="text-xs sm:text-sm text-slate-600 leading-relaxed">{med.desc}</p>
						</div>
					{/each}

					<!-- Clinic Scheduling Box -->
					<div class="bg-slate-900 text-white p-5 rounded-sm border border-slate-800 space-y-3">
						<div class="flex items-center gap-2">
							<span class="w-2 h-2 rounded-full bg-emerald-400"></span>
							<span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
								Walk-Ins & Contractor Batches Welcome
							</span>
						</div>
						<p class="text-xs text-slate-300">
							Need fast turnaround drug screens or baseline audiograms for a newly mobilized crew?
						</p>
						<a
							href="#quote"
							class="w-full inline-flex items-center justify-center min-h-[44px] px-4 py-2 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-xs transition-all duration-200 focus-ring"
						>
							Book Crew Medical Intake
						</a>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>
