<script lang="ts">
	import { COMPANY_INFO } from '$lib/data/content';
	import quoteBgImage from '$lib/assets/backgrounds/pexels-michael-pointner-134459625-15893881.jpg';

	// Form State Types (Scott Hurff 5 States)
	type FormStatus = 'idle' | 'loading' | 'success' | 'error';

	let status = $state<FormStatus>('idle');
	let errorMessage = $state('');

	let formData = $state({
		companyName: '',
		contactName: '',
		phone: '',
		email: '',
		serviceType: 'DOT (OQ) PHMSA Compliance',
		location: 'Midland, TX (Main HQ)',
		headcount: '1-5 workers',
		details: '',
		honeypot: '' // Anti-spam field
	});

	let touched = $state({
		companyName: false,
		contactName: false,
		phone: false,
		email: false
	});

	// Field validation checks
	let isEmailValid = $derived(
		formData.email.trim() === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
	);
	let isPhoneValid = $derived(
		formData.phone.trim() === '' || /^[\d\s\-+().]{7,20}$/.test(formData.phone)
	);

	let isFormValid = $derived(
		formData.companyName.trim().length > 1 &&
		formData.contactName.trim().length > 1 &&
		formData.phone.trim().length >= 7 &&
		isPhoneValid &&
		formData.email.trim().length >= 5 &&
		isEmailValid &&
		formData.honeypot === ''
	);

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		touched.companyName = true;
		touched.contactName = true;
		touched.phone = true;
		touched.email = true;

		if (!isFormValid) {
			return;
		}

		status = 'loading';
		errorMessage = '';

		try {
			// Simulating network submission / server action with fallback
			await new Promise((resolve) => setTimeout(resolve, 900));

			// Success transition
			status = 'success';
		} catch (err: unknown) {
			status = 'error';
			errorMessage = err instanceof Error ? err.message : 'Unable to transmit request. Please call our office directly.';
		}
	}

	function resetForm() {
		formData.companyName = '';
		formData.contactName = '';
		formData.phone = '';
		formData.email = '';
		formData.details = '';
		formData.honeypot = '';
		touched.companyName = false;
		touched.contactName = false;
		touched.phone = false;
		touched.email = false;
		status = 'idle';
	}
</script>

<section id="quote" class="py-20 lg:py-28 bg-white text-black border-b border-neutral-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-neutral-200">
			
			<!-- Left Column: Integrated Industrial Photo & Title (5 cols) -->
			<div class="lg:col-span-5 relative overflow-hidden min-h-[460px] lg:min-h-full flex flex-col justify-between p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-neutral-200 bg-black text-white">
				<!-- Background Photo -->
				<div
					class="absolute inset-0 bg-cover bg-center opacity-75"
					style="background-image: url('{quoteBgImage}');"
					aria-hidden="true"
				></div>
				<!-- Vignette Overlay: dark at the bottom and top for text legibility, clear in the middle -->
				<div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/70 pointer-events-none" aria-hidden="true"></div>

				<!-- Top Content -->
				<div class="relative z-10 space-y-6">
					<div class="flex items-center gap-3">
						<span class="w-2.5 h-2.5 bg-[#D22F25]" aria-hidden="true"></span>
						<span class="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400">
							03 / DIRECT INTAKE
						</span>
					</div>

					<h2
						style="font-family: var(--font-elms);"
						class="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight"
					>
						Request Training, OQ or Health Services
					</h2>

					<p class="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
						Fast-track scheduling for pipeline OQ evaluations, heavy equipment assessments, and occupational medical testing across Texas and the Permian Basin.
					</p>
				</div>

				<!-- Bottom Direct Contact Strip -->
				<div class="relative z-10 pt-8 mt-8 border-t border-neutral-800/80 space-y-3 font-mono text-xs text-neutral-300">
					<span class="text-[10px] uppercase text-neutral-400 tracking-wider block">
						Immediate Scheduling Desk
					</span>
					<div class="space-y-1">
						<div>Phone: <a href="tel:{COMPANY_INFO.mainContact.phone}" class="text-white font-bold hover:text-[#D22F25]">{COMPANY_INFO.mainContact.phone}</a></div>
						<div>Email: <a href="mailto:{COMPANY_INFO.mainContact.email}" class="text-neutral-300 hover:text-white">{COMPANY_INFO.mainContact.email}</a></div>
						<div class="text-neutral-400">Midland, TX Headquarters</div>
					</div>
				</div>
			</div>

			<!-- Right Column: Interactive Form Container with 5 States (7 cols) -->
			<div class="lg:col-span-7 bg-neutral-50 p-6 sm:p-10">
				
				{#if status === 'loading'}
					<!-- Loading / Skeleton State (Scott Hurff State 3) -->
					<div class="py-12 space-y-6 animate-pulse" aria-live="polite" aria-busy="true">
						<div class="h-6 bg-neutral-200 w-1/3"></div>
						<div class="space-y-4">
							<div class="h-12 bg-white border border-neutral-300"></div>
							<div class="h-12 bg-white border border-neutral-300"></div>
							<div class="h-12 bg-white border border-neutral-300"></div>
							<div class="h-24 bg-white border border-neutral-300"></div>
						</div>
						<div class="h-12 bg-[#D22F25]/40"></div>
						<p class="text-center text-xs font-mono text-neutral-500">Transmitting quote request securely...</p>
					</div>

				{:else if status === 'success'}
					<!-- Success State (Scott Hurff State 1/Confirmed) -->
					<div class="py-10 text-center space-y-5" aria-live="polite">
						<div class="w-16 h-16 bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto" aria-hidden="true">
							<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
							</svg>
						</div>

						<div class="space-y-2">
							<h3 class="text-2xl font-light text-black">Request Received</h3>
							<p class="text-sm text-neutral-700 max-w-md mx-auto leading-relaxed font-light">
								Thank you, <strong>{formData.contactName}</strong>. Our intake team for <strong>{formData.companyName}</strong> will review your request for <em>{formData.serviceType}</em> and reach out within 1 business hour.
							</p>
						</div>

						<div class="bg-white p-4 border border-neutral-300 max-w-md mx-auto text-left text-xs font-mono text-neutral-800 space-y-1">
							<div>Location: <strong class="text-black">{formData.location}</strong></div>
							<div>Confirmation Contact: <strong class="text-black">{formData.phone}</strong> | {formData.email}</div>
						</div>

						<button
							type="button"
							onclick={resetForm}
							class="min-h-[48px] px-6 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all focus-ring"
						>
							Submit Another Request
						</button>
					</div>

				{:else if status === 'error'}
					<!-- Error State with escape hatch / retry (Scott Hurff State 5) -->
					<div class="py-8 text-center space-y-4" aria-live="assertive">
						<div class="w-14 h-14 bg-rose-50 border border-rose-300 text-rose-600 flex items-center justify-center mx-auto">
							<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
							</svg>
						</div>
						<h3 class="text-xl font-bold text-black">Transmission Error</h3>
						<p class="text-xs sm:text-sm text-rose-600 max-w-md mx-auto font-mono">
							{errorMessage || 'There was an issue sending your request.'}
						</p>
						<div class="pt-2 flex justify-center gap-3">
							<button
								type="button"
								onclick={() => (status = 'idle')}
								class="min-h-[48px] px-6 py-2.5 bg-[#D22F25] hover:bg-[#EB392F] text-white text-xs font-bold uppercase tracking-wider focus-ring"
							>
								Retry Submission
							</button>
							<a
								href="tel:{COMPANY_INFO.mainContact.phone}"
								class="min-h-[48px] inline-flex items-center px-6 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider focus-ring"
							>
								Call Directly
							</a>
						</div>
					</div>

				{:else}
					<!-- Ideal State (Scott Hurff State 1 / Interactive Form) -->
					<form onsubmit={handleSubmit} novalidate class="space-y-4">
						
						<!-- Anti-Spam Honeypot -->
						<div class="hidden" aria-hidden="true">
							<label for="website_url_hp">Leave this field empty</label>
							<input
								type="text"
								id="website_url_hp"
								name="website_url_hp"
								bind:value={formData.honeypot}
								tabindex="-1"
								autocomplete="off"
							/>
						</div>

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<!-- Company Name -->
							<div>
								<label for="companyName" class="block text-xs font-mono font-bold uppercase text-neutral-700 mb-1">
									Company Name <span class="text-[#D22F25]">*</span>
								</label>
								<input
									type="text"
									id="companyName"
									required
									bind:value={formData.companyName}
									onblur={() => (touched.companyName = true)}
									placeholder="e.g. Acme Pipeline Services"
									class="w-full min-h-[48px] px-3.5 py-2.5 bg-white border text-sm text-black placeholder-neutral-400 transition-all focus:border-black focus:ring-1 focus:ring-black focus-ring {touched.companyName && formData.companyName.trim().length <= 1 ? 'border-rose-500 text-rose-600' : 'border-neutral-300'}"
								/>
								{#if touched.companyName && formData.companyName.trim().length <= 1}
									<p class="text-xs text-rose-600 mt-1 font-mono">Company name is required.</p>
								{/if}
							</div>

							<!-- Contact Name -->
							<div>
								<label for="contactName" class="block text-xs font-mono font-bold uppercase text-neutral-700 mb-1">
									Contact Person <span class="text-[#D22F25]">*</span>
								</label>
								<input
									type="text"
									id="contactName"
									required
									bind:value={formData.contactName}
									onblur={() => (touched.contactName = true)}
									placeholder="e.g. John Doe"
									class="w-full min-h-[48px] px-3.5 py-2.5 bg-white border text-sm text-black placeholder-neutral-400 transition-all focus:border-black focus:ring-1 focus:ring-black focus-ring {touched.contactName && formData.contactName.trim().length <= 1 ? 'border-rose-500 text-rose-600' : 'border-neutral-300'}"
								/>
								{#if touched.contactName && formData.contactName.trim().length <= 1}
									<p class="text-xs text-rose-600 mt-1 font-mono">Contact name is required.</p>
								{/if}
							</div>
						</div>

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<!-- Phone Number -->
							<div>
								<label for="phone" class="block text-xs font-mono font-bold uppercase text-neutral-700 mb-1">
									Phone Number <span class="text-[#D22F25]">*</span>
								</label>
								<input
									type="tel"
									id="phone"
									required
									bind:value={formData.phone}
									onblur={() => (touched.phone = true)}
									placeholder="(432) 555-0199"
									class="w-full min-h-[48px] px-3.5 py-2.5 bg-white border text-sm text-black placeholder-neutral-400 transition-all focus:border-black focus:ring-1 focus:ring-black focus-ring {touched.phone && (!isPhoneValid || formData.phone.trim() === '') ? 'border-rose-500 text-rose-600' : 'border-neutral-300'}"
								/>
								{#if touched.phone && (!isPhoneValid || formData.phone.trim() === '')}
									<p class="text-xs text-rose-600 mt-1 font-mono">Please enter a valid phone number.</p>
								{/if}
							</div>

							<!-- Email Address -->
							<div>
								<label for="email" class="block text-xs font-mono font-bold uppercase text-neutral-700 mb-1">
									Email Address <span class="text-[#D22F25]">*</span>
								</label>
								<input
									type="email"
									id="email"
									required
									bind:value={formData.email}
									onblur={() => (touched.email = true)}
									placeholder="user@company.com"
									class="w-full min-h-[48px] px-3.5 py-2.5 bg-white border text-sm text-black placeholder-neutral-400 transition-all focus:border-black focus:ring-1 focus:ring-black focus-ring {touched.email && (!isEmailValid || formData.email.trim() === '') ? 'border-rose-500 text-rose-600' : 'border-neutral-300'}"
								/>
								{#if touched.email && (!isEmailValid || formData.email.trim() === '')}
									<p class="text-xs text-rose-600 mt-1 font-mono">Please enter a valid email address.</p>
								{/if}
							</div>
						</div>

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<!-- Primary Service Requested -->
							<div>
								<label for="serviceType" class="block text-xs font-mono font-bold uppercase text-neutral-700 mb-1">
									Service Needed
								</label>
								<select
									id="serviceType"
									bind:value={formData.serviceType}
									class="w-full min-h-[48px] px-3.5 py-2.5 bg-white border border-neutral-300 text-sm text-black transition-all focus:border-black focus:ring-1 focus:ring-black focus-ring"
								>
									<option value="DOT (OQ) PHMSA Compliance">DOT (OQ) PHMSA Compliance (49 CFR 192/195)</option>
									<option value="NCCER Crane & Rigging Certifications">NCCER Crane & Rigging Certifications</option>
									<option value="Forklift & MEWP Equipment Certification">Forklift & MEWP Equipment Certification</option>
									<option value="Basin United Safety Orientation">Basin United Safety Orientation (2-Day)</option>
									<option value="OSHA 10/30-Hour Training">OSHA 10/30-Hour Training</option>
									<option value="MSHA New Miner Training">MSHA New Miner Training</option>
									<option value="Drug & Alcohol Testing (DOT/Non-DOT)">Drug & Alcohol Testing (DOT/Non-DOT)</option>
									<option value="Audiometric Hearing Conservation">Audiometric Hearing Conservation</option>
									<option value="Midstream Safety Inspector Placement">Midstream Safety Inspector Placement</option>
								</select>
							</div>

							<!-- Preferred Location Hub -->
							<div>
								<label for="location" class="block text-xs font-mono font-bold uppercase text-neutral-700 mb-1">
									Preferred Location / On-Site
								</label>
								<select
									id="location"
									bind:value={formData.location}
									class="w-full min-h-[48px] px-3.5 py-2.5 bg-white border border-neutral-300 text-sm text-black transition-all focus:border-black focus:ring-1 focus:ring-black focus-ring"
								>
									<option value="Midland, TX (Main HQ)">Midland, TX (Main Headquarters)</option>
									<option value="Houston, TX">Houston, TX Satellite</option>
									<option value="Corpus Christi, TX">Corpus Christi, TX Satellite</option>
									<option value="Dallas / Fort Worth, TX">Dallas / Fort Worth, TX Satellite</option>
									<option value="Durango, CO">Durango, CO Satellite</option>
									<option value="Farmington, NM">Farmington, NM Satellite</option>
									<option value="Client Field Site / On-Site Dispatch">Client Field Site / On-Site Dispatch</option>
								</select>
							</div>
						</div>

						<!-- Scope & Comments -->
						<div>
							<label for="details" class="block text-xs font-mono font-bold uppercase text-neutral-700 mb-1">
								Scope Details or Number of Personnel (Optional)
							</label>
							<textarea
								id="details"
								rows="3"
								bind:value={formData.details}
								placeholder="Provide dates, covered tasks (e.g. NCCER, Veriforce, EWN), or specific requirements..."
								class="w-full px-3.5 py-2.5 bg-white border border-neutral-300 text-sm text-black placeholder-neutral-400 transition-all focus:border-black focus:ring-1 focus:ring-black focus-ring"
							></textarea>
						</div>

						<!-- Submit Button (Fitts' Law: Min 48px height, clear feedback) -->
						<div class="pt-2">
							<button
								type="submit"
								disabled={!isFormValid}
								class="w-full min-h-[48px] px-6 py-3 bg-[#D22F25] hover:bg-[#EB392F] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-ring flex items-center justify-center gap-2"
							>
								<span>Submit Request For Quote</span>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</button>
						</div>

						<p class="text-center text-[11px] text-neutral-500 font-mono">
							Questions? Call our intake coordinator directly at <strong class="text-black">{COMPANY_INFO.mainContact.phone}</strong>
						</p>

					</form>
				{/if}

			</div>

		</div>
	</div>
</section>
