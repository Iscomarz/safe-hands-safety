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
		if (!elementNode) return;

		if (typeof IntersectionObserver === 'undefined') {
			gsap.set(elementNode, { opacity: 1, y: 0, scale: 1 });
			return;
		}

		gsap.set(elementNode, { opacity: 0, y: 20, scale: 0.99 });

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting && elementNode) {
						gsap.to(elementNode, {
							opacity: 1,
							y: 0,
							scale: 1,
							duration: 0.7,
							delay: delay / 1000,
							ease: 'power3.out'
						});
						observer.unobserve(entry.target);
					}
				}
			},
			{
				threshold: 0.01,
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
