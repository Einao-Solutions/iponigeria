<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import ministry from '$lib/assets/ministry.png';
	import cld from '$lib/assets/cld.png';
	export let onLoginClick: () => void = () => {};

	let isScrolled = false;
	let mobileMenuOpen = false;

	const handleScroll = () => {
		isScrolled = window.scrollY > 10;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300"
	class:bg-white={isScrolled}
	class:backdrop-blur-lg={isScrolled}
	class:shadow-md={isScrolled}
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<!-- Brand / Logo -->
			<a href="/" class="group flex items-center space-x-3">
				<img
					src={cld}
					alt="Commercial Law Department"
					class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-12"
					loading="lazy"
					on:error={(e) => (e.currentTarget.style.display = 'none')}
				/>
				<!-- Stylized Text Logo -->
				<div class="hidden sm:flex flex-col leading-tight">
					<span
						class="text-2xl font-extrabold tracking-tight text-green-800 transition-colors group-hover:text-green-700 md:text-3xl"
					>
						IPO
						<span
							class="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent"
						>
							NIGERIA
						</span>
					</span>
				</div>
				<!-- <img
					src={ministry}
					alt="Nigerian Coat of Arms"
					class="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105 md:h-50 md:w-50"
					on:error={(e) => (e.currentTarget.style.display = 'none')}
				/> -->
				
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden items-center space-x-10 lg:flex">
				{#each [{ href: '/about', label: 'About' }, { href: '/services', label: 'Services' }, { href: '/contact', label: 'Contact' }] as link}
					<a
						href={link.href}
						class="group relative font-medium text-gray-700 transition-colors hover:text-green-700"
					>
						{link.label}
						<span
							class="absolute bottom-0 left-0 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full"
						/>
					</a>
				{/each}
			</nav>

			<!-- CTA + Mobile Menu Toggle -->
			<div class="flex items-center space-x-4">
				<a
					href="https://portal.iponigeria.com"
					class="group relative overflow-hidden rounded-lg px-4 py-2 font-semibold text-white"
				>
					<div
						class="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 transition-transform duration-300 group-hover:scale-105"
					></div>
					<span class="relative flex items-center space-x-2">
						<span>Login</span>
						<svg
							class="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</span>
				</a>

				<!-- Mobile Menu Button -->
				<button
					class="p-2 text-gray-700 transition-colors hover:text-green-700 lg:hidden"
					aria-label="Toggle navigation"
					aria-expanded={mobileMenuOpen}
					on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if mobileMenuOpen}
		<nav
			class="absolute top-full left-0 w-full border-t border-gray-100 bg-white shadow-md lg:hidden"
			transition:fade
		>
			{#each [{ href: '/about', label: 'About' }, { href: '/services', label: 'Services' }, { href: '/contact', label: 'Contact' }] as link}
				<a
					href={link.href}
					class="block px-6 py-3 font-medium text-gray-700 hover:bg-green-50 hover:text-green-700"
					on:click={() => (mobileMenuOpen = false)}
				>
					{link.label}
				</a>
			{/each}
		</nav>
	{/if}

	<!-- Decorative Line -->
	<div
		class="absolute right-0 bottom-0 left-0 h-1 animate-[shimmer_3s_linear_infinite] bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-[length:200%_100%]"
	></div>
</header>

<style>
	@keyframes shimmer {
		0% {
			background-position: -200% 0;
		}
		100% {
			background-position: 200% 0;
		}
	}

	:global(body) {
		padding-top: 80px; /* offset for fixed header */
	}
</style>
