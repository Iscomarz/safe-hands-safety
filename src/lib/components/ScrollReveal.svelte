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
						gsap.fromTo(
							elementNode,
							{ opacity: 0, y: 28, scale: 0.97 },
							{
								opacity: 1,
								y: 0,
								scale: 1,
								duration: 0.7,
								delay: delay / 1000,
								ease: 'back.out(1.2)',
								clearProps: 'transform,opacity'
							}
						);
						observer.unobserve(entry.target);
					}
				}
			},
			{
				threshold: 0.05,
				rootMargin: '0px 0px -20px 0px'
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
