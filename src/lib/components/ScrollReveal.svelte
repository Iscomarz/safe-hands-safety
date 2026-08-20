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
		if (!elementNode || typeof IntersectionObserver === 'undefined') {
			return;
		}

		// Initial hidden state
		gsap.set(elementNode, { opacity: 0, y: 28, scale: 0.985 });

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting && elementNode) {
						gsap.to(elementNode, {
							opacity: 1,
							y: 0,
							scale: 1,
							duration: 0.8,
							delay: delay / 1000,
							ease: 'power3.out'
						});
						observer.unobserve(entry.target);
					}
				}
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -30px 0px'
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
