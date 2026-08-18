<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		delay?: number;
		class?: string;
	}

	let { children, delay = 0, class: className = '' }: Props = $props();

	let visible = $state(false);
	let elementNode = $state<HTMLElement | null>(null);

	$effect(() => {
		if (!elementNode || typeof IntersectionObserver === 'undefined') {
			visible = true;
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visible = true;
						observer.unobserve(entry.target);
					}
				}
			},
			{
				threshold: 0.15,
				rootMargin: '0px 0px -40px 0px'
			}
		);

		observer.observe(elementNode);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div
	bind:this={elementNode}
	class="transition-all duration-700 ease-out {className} {visible
		? 'opacity-100 translate-y-0'
		: 'opacity-0 translate-y-8'}"
	style="transition-delay: {delay}ms;"
>
	{@render children()}
</div>
