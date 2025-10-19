<!-- src/lib/components/Services.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { services } from '$lib/services';
	import type { Service } from '$lib';

	let isVisible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) isVisible = true;
				});
			},
			{ threshold: 0.2 }
		);

		const section = document.querySelector('#services');
		if (section) observer.observe(section);
		return () => observer.disconnect();
	});

	function handleServiceClick(service: Service) {
		if (service.link) window.location.assign(service.link);
	}
</script>

<section
	id="services"
	class="relative overflow-hidden bg-gradient-to-b from-white via-green-50/40 to-white py-20"
>
	<!-- Decorative background elements -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div class="absolute top-16 left-1/3 h-64 w-64 rounded-full bg-green-100/30 blur-3xl"></div>
		<div class="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl"></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
		<h3
			class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 transition-all duration-700 
			{isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}"
		>
			Our Services
		</h3>

		<p
			class="mx-auto mb-16 max-w-2xl text-lg text-gray-600 transition-all delay-200 duration-700 
			{isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}"
		>
			We provide end-to-end intellectual property solutions — protecting, registering, and managing
			your trademarks, patents, and creative designs with speed and precision.
		</p>

		<div
			class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ease-out 
			{isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}"
		>
			{#each services as service}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<div
					on:click={() => handleServiceClick(service)}
					role="button"
					tabindex="0"
					class="group relative flex flex-col items-center rounded-2xl border border-green-100 
						bg-white/80 backdrop-blur-sm p-8 shadow-md transition-all duration-300 
						hover:-translate-y-2 hover:shadow-lg cursor-pointer"
				>
					<div
						class="mb-5 flex h-16 w-16 items-center justify-center rounded-full 
							bg-gradient-to-br from-green-400 to-emerald-600 text-white shadow-md 
							group-hover:scale-110 transition-transform duration-300"
					>
						{#if typeof service.icon === 'string'}
							<span class="text-3xl">{service.icon}</span>
						{:else}
							<svelte:component this={service.icon} size={32} class="text-white" />
						{/if}
					</div>

					<h4 class="mb-2 text-xl font-semibold text-gray-900">{service.title}</h4>
					<p class="text-gray-600 leading-relaxed text-sm">{service.description}</p>

					<span
						class="mt-5 inline-flex items-center text-sm font-semibold text-emerald-700 
							group-hover:text-emerald-800 transition-colors"
					>
						Learn More →
					</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-6px);
		}
	}

	/* Optional: Add subtle floating effect to cards */
	.group:hover {
		animation: float 2s ease-in-out infinite;
	}
</style>
