<script lang="ts">
	import type { Snippet } from 'svelte';
	import gsap from 'gsap';

	interface Props {
		children: Snippet;
		delay?: number;
		class?: string;
	}

	let { children, delay = 0, class: className = '' }: Props = $props();

	let elementNode = $state<HTMLElement | null>(null);

	$effect(() => {
		if (!elementNode || typeof IntersectionObserver === 'undefined') return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting && elementNode) {
						gsap.from(elementNode, {
							opacity: 0.3,
							y: 16,
							duration: 0.6,
							delay: delay / 1000,
							ease: 'power2.out'
						});
						observer.unobserve(entry.target);
					}
				}
			},
			{
				threshold: 0.05,
				rootMargin: '50px 0px 50px 0px'
			}
		);

		observer.observe(elementNode);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div bind:this={elementNode} class={className}>
	{@render children()}
</div>
