<script lang="ts">
	import { onMount } from 'svelte';
	let isVisible = false;

	onMount(() => {
		setTimeout(() => (isVisible = true), 150);
	});

	function handleStartRegistration() {
		window.location.href = '/register';
	}
</script>

<section
	class="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100/40"
>
	<!-- Decorative Backgrounds -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-0 left-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-[120px]"></div>
		<div
			class="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-green-300/20 blur-[140px]"
		></div>
	</div>

	<!-- Subtle Grid Overlay -->
	<div
		class="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:48px_48px]"
	></div>

	<div class="relative mx-auto max-w-7xl px-6 py-24 text-center sm:px-8 lg:px-12">
		<h1
			class="mb-6 transform text-4xl font-extrabold tracking-tight transition-all duration-700 ease-out sm:text-5xl lg:text-6xl
      {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
		>
			<span class="block text-gray-900">Intellectual Property Office</span>
			<span
				class="block bg-gradient-to-r from-emerald-800 via-green-600 to-teal-700 bg-clip-text text-transparent"
			>
				(IPO) Nigeria
			</span>
		</h1>

		<p
			class="mb-6 transform text-xl font-medium text-emerald-700 transition-all delay-100 duration-700 ease-out sm:text-2xl
      {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
		>
			Protect Your Intellectual Property with Ease
		</p>

		<p
			class="mx-auto mb-10 max-w-2xl transform text-lg leading-relaxed text-gray-600 transition-all delay-200 duration-700 ease-out
      {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
		>
			The official online portal of the Federal Ministry of Industry, Trade and Investment for
			registering and managing Trademarks, Patents, and Industrial Designs in Nigeria. Seamlessly
			file, update, and track your applications — fast, secure, and 100% online.
		</p>

		<!-- CTA -->
		<div
			class="flex transform flex-col justify-center gap-4 transition-all delay-300 duration-700 ease-out sm:flex-row
      {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
		>
			<button
				on:click={handleStartRegistration}
				class="group relative rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-400/40"
			>
				<span class="relative flex items-center justify-center space-x-2">
					<span>Register Now</span>
					<svg
						class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
			</button>
		</div>

		<!-- Trust Indicators -->
		<div
			class="mt-20 flex transform flex-wrap items-center justify-center gap-6 transition-all delay-400 duration-700 ease-out
      {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
		>
			{#each [{ icon: 'M9 12l2 2 4-4', text: 'Secure & Trusted' }, { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'Fast Processing' }, { icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', text: '100% Online' }] as item}
				<div
					class="flex items-center space-x-3 rounded-xl bg-white/50 px-4 py-2 shadow-sm backdrop-blur-sm"
				>
					<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
						<svg
							class="h-6 w-6 text-emerald-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon} />
						</svg>
					</div>
					<span class="font-medium text-gray-700">{item.text}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- Bottom wave -->
	<div class="absolute right-0 bottom-0 left-0">
		<svg
			viewBox="0 0 1440 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="h-auto w-full"
		>
			<path
				d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
				fill="url(#wave)"
				fill-opacity="0.4"
			/>
			<defs>
				<linearGradient id="wave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
					<stop stop-color="#A7F3D0" />
					<stop offset="1" stop-color="#6EE7B7" />
				</linearGradient>
			</defs>
		</svg>
	</div>
</section>
