<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PillarsSection from '$lib/components/PillarsSection.svelte';
	import OQPlatformsSection from '$lib/components/OQPlatformsSection.svelte';
	import EquipmentSection from '$lib/components/EquipmentSection.svelte';
	import HealthComplianceSection from '$lib/components/HealthComplianceSection.svelte';
	import MidstreamSection from '$lib/components/MidstreamSection.svelte';
	import LocationsSection from '$lib/components/LocationsSection.svelte';
	import QuoteSection from '$lib/components/QuoteSection.svelte';
</script>

<svelte:head>
	<title>Safe Hands Safety | DOT (OQ) PHMSA, OSHA, NCCER & Industrial Health</title>
	<meta
		name="description"
		content="Official safety partner for pipeline operators and industrial contractors. DOT 49 CFR 192/195 Operator Qualification, NCCER Crane & Rigging, MEWP/Forklifts, Basin United, SafeLand 7.0, and DOT Drug Testing."
	/>
</svelte:head>

<Hero />
<PillarsSection />
<OQPlatformsSection />
<EquipmentSection />
<HealthComplianceSection />
<MidstreamSection />
<LocationsSection />
<QuoteSection />
