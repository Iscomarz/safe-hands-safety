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

<section id="midstream" class="py-16 lg:py-24 bg-white border-b border-slate-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<div class="bg-[#0B111E] rounded-sm text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-slate-800">
			<!-- Background Tech Lines -->
			<div class="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" aria-hidden="true"></div>
			<div class="absolute -bottom-10 -right-10 w-80 h-80 bg-[#D22F25]/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

			<div class="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
				
				<!-- Left Column: Role Details & Core Mission (7 cols) -->
				<div class="lg:col-span-7 space-y-6">
					<div class="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 rounded-sm">
						<span class="w-2 h-2 rounded-full bg-[#D22F25]" aria-hidden="true"></span>
						<span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
							Field Inspection & Safety Oversight
						</span>
					</div>

					<h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
						Midstream Safety <br />
						<span class="text-[#D22F25]">Inspector Services</span>
					</h2>

					<p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
						Our certified midstream safety inspectors monitor and enforce regulatory standards across pipelines, storage terminals, and gathering infrastructure, minimizing incident risk and maintaining flawless audit defense.
					</p>

					<!-- Core Responsibilities Grid -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
						{#each inspectorDuties as duty}
							<div class="bg-slate-900/90 border border-slate-800 p-4 rounded-sm">
								<h3 class="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
									<span class="w-1.5 h-1.5 bg-[#D22F25] rounded-full"></span>
									{duty.title}
								</h3>
								<p class="text-xs text-slate-400 leading-normal">{duty.desc}</p>
							</div>
						{/each}
					</div>
				</div>

				<!-- Right Column: Inspector Qualifications & Deployment Card (5 cols) -->
				<div class="lg:col-span-5">
					<div class="bg-slate-900 border border-slate-800 rounded-sm p-6 sm:p-8 space-y-6">
						<div>
							<span class="text-xs font-mono font-bold uppercase text-[#D22F25] tracking-wider block mb-1">
								Inspector Credentials
							</span>
							<h3 class="text-xl font-bold text-white">Certified Field Specialists</h3>
						</div>

						<div class="space-y-3 text-xs text-slate-300">
							<div class="flex items-start gap-3 bg-[#0B111E] p-3 rounded-sm border border-slate-800">
								<span class="font-mono text-[#D22F25] font-bold">01</span>
								<div>
									<strong class="text-white block">OSHA 30-Hour & API 570 Certified</strong>
									<span>In-depth regulatory training in pipeline construction and pressure equipment.</span>
								</div>
							</div>

							<div class="flex items-start gap-3 bg-[#0B111E] p-3 rounded-sm border border-slate-800">
								<span class="font-mono text-[#D22F25] font-bold">02</span>
								<div>
									<strong class="text-white block">Environmental & Spill Oversight</strong>
									<span>Proactive monitoring to prevent environmental contamination and release incidents.</span>
								</div>
							</div>

							<div class="flex items-start gap-3 bg-[#0B111E] p-3 rounded-sm border border-slate-800">
								<span class="font-mono text-[#D22F25] font-bold">03</span>
								<div>
									<strong class="text-white block">Remote Field Readiness</strong>
									<span>Equipped for hazardous, extreme weather, and remote basin deployments.</span>
								</div>
							</div>
						</div>

						<!-- Typical Deployed Titles -->
						<div class="pt-2 border-t border-slate-800">
							<span class="block text-[11px] font-mono uppercase text-slate-500 mb-2">Available Roles</span>
							<div class="flex flex-wrap gap-1.5">
								{#each inspectorRoles as role}
									<span class="text-[11px] font-mono bg-slate-800 text-slate-300 px-2.5 py-1 rounded-sm">
										{role}
									</span>
								{/each}
							</div>
						</div>

						<a
							href="#quote"
							class="w-full inline-flex items-center justify-center min-h-[48px] px-6 py-3 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-md transition-all duration-200 focus-ring"
						>
							Deploy Inspectors to Your Project
						</a>
					</div>
				</div>

			</div>
		</div>

	</div>
</section>
