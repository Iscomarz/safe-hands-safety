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

	let openCourseIndex = $state<number | null>(null);
	let openMedIndex = $state<number | null>(null);

	function toggleCourse(idx: number) {
		openCourseIndex = openCourseIndex === idx ? null : idx;
	}

	function toggleMed(idx: number) {
		openMedIndex = openMedIndex === idx ? null : idx;
	}
</script>

<section id="health-safety" class="py-20 lg:py-28 bg-white text-black border-b border-neutral-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="max-w-3xl mb-14">
			<div class="flex items-center gap-3 mb-3">
				<span class="w-2.5 h-2.5 bg-[#D22F25]" aria-hidden="true"></span>
				<span class="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
					02 / SAFETY & OCCUPATIONAL HEALTH
				</span>
			</div>
			<h2
				style="font-family: var(--font-elms);"
				class="text-3xl sm:text-5xl font-light text-black tracking-tight leading-tight"
			>
				OSHA, Basin United & Medical Services
			</h2>
			<p class="mt-4 text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
				Keep your workforce fully certified and field-ready with standardized regional orientations, bilingual instruction, and complete DOT occupational health screening.
			</p>
		</div>

		<!-- Two Column Division: Safety Courses vs Medical Health Services -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			
			<!-- Left: Safety Orientations & Compliance Courses (7 cols) -->
			<div class="lg:col-span-7 space-y-6">
				<div class="flex items-center justify-between border-b border-neutral-200 pb-3">
					<h3
						style="font-family: var(--font-elms);"
						class="text-xl sm:text-2xl font-light text-black"
					>
						Safety Orientations & Courses
					</h3>
					<span class="text-xs font-mono text-neutral-500">BILINGUAL (EN/ES)</span>
				</div>

				<!-- Mobile Accordion (sm:hidden) -->
				<div class="sm:hidden space-y-2.5">
					{#each courses as course, idx}
						{@const isOpen = openCourseIndex === idx}
						<div class="bg-white border border-neutral-200 overflow-hidden transition-all {isOpen ? 'border-black shadow-sm' : ''}">
							<button
								type="button"
								onclick={() => toggleCourse(idx)}
								aria-expanded={isOpen}
								class="w-full p-4 text-left flex items-center justify-between gap-3 bg-neutral-50/60 hover:bg-neutral-100 transition-colors cursor-pointer"
							>
								<div>
									<div class="flex items-center gap-2 mb-1">
										<span class="text-[10px] font-mono font-bold uppercase px-1.5 py-0.2 bg-neutral-200 text-black border border-neutral-300">
											{course.badge}
										</span>
										<span class="text-[10px] font-mono text-[#D22F25] font-bold">{course.tag}</span>
									</div>
									<h4
										style="font-family: var(--font-elms);"
										class="font-light text-base text-black"
									>
										{course.title}
									</h4>
								</div>
								<div class="w-6 h-6 flex items-center justify-center border border-neutral-300 bg-white text-black shrink-0 transition-transform duration-200 {isOpen ? 'rotate-180 bg-black text-white' : ''}">
									<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
									</svg>
								</div>
							</button>

							{#if isOpen}
								<div class="p-4 pt-2 border-t border-neutral-200 space-y-3 animate-fade-in">
									<p class="text-xs text-neutral-700 font-light leading-relaxed">{course.desc}</p>
									<div class="flex items-center justify-between text-xs pt-2 border-t border-neutral-100 font-mono">
										<span class="text-neutral-500">Classroom / On-Site</span>
										<a href="#quote" class="font-bold text-[#D22F25] hover:text-[#EB392F]">
											Enroll in Course ›
										</a>
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>

				<!-- Desktop / Tablet Grid (hidden sm:grid) -->
				<div class="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4">
					{#each courses as course}
						<div class="bg-white p-6 border border-neutral-200 hover:border-black transition-all flex flex-col justify-between">
							<div>
								<div class="flex items-center justify-between gap-2 mb-3">
									<span class="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-neutral-100 text-black border border-neutral-300">
										{course.badge}
									</span>
									<span class="text-[10px] font-mono text-[#D22F25] font-bold">{course.tag}</span>
								</div>
								<h4
									style="font-family: var(--font-elms);"
									class="font-light text-xl text-black"
								>
									{course.title}
								</h4>
								<p class="text-sm text-neutral-700 font-light mt-2 leading-relaxed">{course.desc}</p>
							</div>
							<div class="mt-6 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
								<span class="font-mono text-neutral-500">Classroom / On-Site</span>
								<a href="#quote" class="font-bold text-[#D22F25] hover:text-[#EB392F] focus-ring">
									Enroll ›
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right: Medical & Industrial Health (5 cols) -->
			<div class="lg:col-span-5 space-y-6">
				<div class="flex items-center justify-between border-b border-neutral-200 pb-3">
					<h3
						style="font-family: var(--font-elms);"
						class="text-xl sm:text-2xl font-light text-black"
					>
						Medical & Health Services
					</h3>
					<span class="text-xs font-mono text-neutral-500">DOT FMCSA</span>
				</div>

				<!-- Mobile Accordion for Medical Services (sm:hidden) -->
				<div class="sm:hidden space-y-2.5">
					{#each medicalServices as med, idx}
						{@const isOpen = openMedIndex === idx}
						<div class="bg-white border border-neutral-200 border-l-4 border-l-[#D22F25] overflow-hidden transition-all {isOpen ? 'border-black shadow-sm' : ''}">
							<button
								type="button"
								onclick={() => toggleMed(idx)}
								aria-expanded={isOpen}
								class="w-full p-4 text-left flex items-center justify-between gap-3 bg-neutral-50/60 hover:bg-neutral-100 transition-colors cursor-pointer"
							>
								<div>
									<h4
										style="font-family: var(--font-elms);"
										class="font-light text-base text-black"
									>
										{med.title}
									</h4>
									<div class="text-[10px] font-mono text-neutral-500 mt-0.5">{med.standards}</div>
								</div>
								<div class="w-6 h-6 flex items-center justify-center border border-neutral-300 bg-white text-black shrink-0 transition-transform duration-200 {isOpen ? 'rotate-180 bg-black text-white' : ''}">
									<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
									</svg>
								</div>
							</button>

							{#if isOpen}
								<div class="p-4 pt-2 border-t border-neutral-200 space-y-2 animate-fade-in">
									<p class="text-xs text-neutral-700 font-light leading-relaxed">{med.desc}</p>
								</div>
							{/if}
						</div>
					{/each}
				</div>

				<!-- Desktop / Tablet View for Medical Services (hidden sm:block) -->
				<div class="hidden sm:block space-y-4">
					{#each medicalServices as med}
						<div class="bg-white p-6 border border-neutral-200 border-l-4 border-l-[#D22F25]">
							<div class="flex items-center justify-between gap-2 mb-1">
								<h4
									style="font-family: var(--font-elms);"
									class="font-light text-xl text-black"
								>
									{med.title}
								</h4>
								<span class="text-[10px] font-mono text-[#D22F25] font-bold border border-[#D22F25]/30 px-2 py-0.5">
									Certified
								</span>
							</div>
							<div class="text-xs font-mono text-neutral-500 mb-2">{med.standards}</div>
							<p class="text-sm text-neutral-700 font-light leading-relaxed">{med.desc}</p>
						</div>
					{/each}
				</div>

				<!-- Clinic Scheduling Box -->
				<div class="bg-neutral-900 text-white p-6 border border-neutral-800 space-y-3">
					<div class="flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-emerald-400"></span>
						<span class="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200">
							Walk-Ins & Contractor Batches Welcome
						</span>
					</div>
					<p class="text-xs text-neutral-300 font-light">
						Need fast turnaround drug screens or baseline audiograms for a newly mobilized crew?
					</p>
					<a
						href="#quote"
						class="w-full inline-flex items-center justify-center h-11 px-4 py-2 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-ring"
					>
						Book Crew Medical Intake
					</a>
				</div>
			</div>

		</div>
	</div>
</section>
