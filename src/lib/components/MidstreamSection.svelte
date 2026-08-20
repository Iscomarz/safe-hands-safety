<script lang="ts">
	const inspectorDuties = [
		{
			title: 'Pipeline & Facility Integrity',
			desc: 'Inspections of pipelines, storage tanks, pump stations, leak detection systems, and pressure monitoring infrastructure.'
		},
		{
			title: 'Regulatory & PHMSA Compliance',
			desc: 'Ensuring operations strictly align with PHMSA, state environmental standards, and client HSE protocols.'
		},
		{
			title: 'Hazard Mitigation & Pre-Job Risk',
			desc: 'Performing job hazard analyses (JHA), site risk assessments, and continuous contractor safety monitoring.'
		},
		{
			title: 'Incident Investigation & Audits',
			desc: 'Root-cause analysis of near-misses, corrective action verification, and digital audit-ready incident logs.'
		}
	];

	const inspectorRoles = [
		'Midstream Safety Inspector',
		'Pipeline Safety Inspector',
		'Midstream Operations Safety Specialist',
		'Hazardous Materials Safety Inspector'
	];
</script>

<section id="midstream" class="py-20 lg:py-28 bg-white text-black border-b border-neutral-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<div class="bg-neutral-50 p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-neutral-200">
			<div class="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
				
				<!-- Left Column: Context & Value -->
				<div class="lg:col-span-7 space-y-6">
					<div class="flex items-center gap-3">
						<span class="w-2.5 h-2.5 bg-[#D22F25]"></span>
						<span class="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold">
							FIELD INSPECTION & SAFETY OVERSIGHT
						</span>
					</div>

					<h2
						style="font-family: var(--font-elms);"
						class="text-3xl sm:text-5xl font-light text-black tracking-tight leading-tight"
					>
						Midstream Safety <br />
						<span class="text-[#D22F25]">Inspector Services</span>
					</h2>

					<p class="text-base text-neutral-700 font-light leading-relaxed max-w-xl">
						Our certified midstream safety inspectors monitor and enforce regulatory standards across pipelines, storage terminals, and gathering infrastructure, minimizing incident risk and maintaining flawless audit defense.
					</p>

					<!-- Core Responsibilities Grid -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
						{#each inspectorDuties as duty}
							<div class="bg-white border border-neutral-200 p-5 space-y-1.5 hover:border-black transition-colors">
								<h3
									style="font-family: var(--font-elms);"
									class="text-lg font-light text-black flex items-center gap-2"
								>
									<span class="w-1.5 h-1.5 bg-[#D22F25]"></span>
									{duty.title}
								</h3>
								<p class="text-xs text-neutral-600 font-light leading-relaxed">{duty.desc}</p>
							</div>
						{/each}
					</div>
				</div>

				<!-- Right Column: Inspector Qualifications & Deployment Card (5 cols) -->
				<div class="lg:col-span-5">
					<div class="bg-white border border-neutral-300 p-8 space-y-6">
						<div>
							<span class="text-xs font-mono text-[#D22F25] uppercase tracking-widest font-bold block mb-1">
								Inspector Credentials
							</span>
							<h3
								style="font-family: var(--font-elms);"
								class="text-2xl font-light text-black"
							>
								Certified Field Specialists
							</h3>
						</div>

						<div class="space-y-3 text-xs text-neutral-700">
							<div class="flex items-start gap-3 bg-neutral-50 p-4 border border-neutral-200">
								<span class="font-mono text-[#D22F25] font-bold">01</span>
								<div>
									<strong class="text-black block font-semibold">OSHA 30-Hour & API 570 Certified</strong>
									<span class="text-neutral-600 font-light">In-depth regulatory training in pipeline construction and pressure equipment.</span>
								</div>
							</div>

							<div class="flex items-start gap-3 bg-neutral-50 p-4 border border-neutral-200">
								<span class="font-mono text-[#D22F25] font-bold">02</span>
								<div>
									<strong class="text-black block font-semibold">Environmental & Spill Oversight</strong>
									<span class="text-neutral-600 font-light">Proactive monitoring to prevent environmental contamination and release incidents.</span>
								</div>
							</div>

							<div class="flex items-start gap-3 bg-neutral-50 p-4 border border-neutral-200">
								<span class="font-mono text-[#D22F25] font-bold">03</span>
								<div>
									<strong class="text-black block font-semibold">Turnaround Readiness</strong>
									<span class="text-neutral-600 font-light">24/7 deployment for scheduled plant outages and hot-work supervision.</span>
								</div>
							</div>
						</div>

						<!-- Typical Deployed Titles -->
						<div class="pt-4 border-t border-neutral-200">
							<span class="block text-[11px] font-mono uppercase text-neutral-500 mb-2 font-bold">Available Roles</span>
							<div class="flex flex-wrap gap-2">
								{#each inspectorRoles as role}
									<span class="text-[11px] font-mono bg-neutral-100 text-neutral-800 px-2.5 py-1 border border-neutral-300">
										{role}
									</span>
								{/each}
							</div>
						</div>

						<a
							href="#quote"
							class="w-full inline-flex items-center justify-center h-12 px-6 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-ring"
						>
							Request Inspector Deployment
						</a>
					</div>
				</div>

			</div>
		</div>

	</div>
</section>
