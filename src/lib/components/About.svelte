<script lang="ts">
	import { onMount } from 'svelte';
	import { ShieldCheck, Lightbulb, Palette, FileText } from 'lucide-svelte';

	let isVisible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
					}
				});
			},
			{ threshold: 0.2 }
		);

		const section = document.querySelector('#about');
		if (section) observer.observe(section);

		return () => observer.disconnect();
	});

	const features = [
		{
			icon: ShieldCheck,
			title: 'Trademark Protection',
			description:
				'Secure your brand identity with comprehensive trademark registration and protection services.',
			color: 'from-emerald-500 to-teal-500'
		},
		{
			icon: Lightbulb,
			title: 'Patent Registration',
			description:
				'Protect your innovations and inventions with our streamlined patent application process.',
			color: 'from-blue-500 to-cyan-500'
		},
		{
			icon: Palette,
			title: 'Design Rights',
			description:
				'Safeguard your creative designs and visual aesthetics with official design registration.',
			color: 'from-purple-500 to-pink-500'
		},
		{
			icon: FileText,
			title: 'Copyright Services',
			description:
				'Ensure legal protection for your literary, artistic, and creative works across Nigeria.',
			color: 'from-orange-500 to-red-500'
		}
	];
</script>

<section
	id="about"
	class="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white py-8"
>
	<!-- Subtle Background Blurs -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div class="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-green-100/40 blur-3xl"></div>
		<div
			class="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl"
		></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
		<!-- Section Header -->
		<div
			class=" transform text-center transition-all duration-700 ease-out
      {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}"
		>
			<h3
			class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 transition-all duration-700 
			{isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}"
		>
			Our Mandate
		</h3>
			<p class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
				The Intellectual Property Office (IPO) Nigeria is the official arm of the Federal Ministry
				of Industry, Trade and Investment, responsible for the registration and protection of
				Trademarks, Patents, and Industrial Designs in Nigeria. Through our online intellectual
				property portal, individuals, businesses, and innovators can file new applications, renew
				registrations, and manage their IP rights from anywhere. Our automated filing system is
				designed to make Trademark, Patent, and Design registration in Nigeria faster, simpler, and
				fully digital.
			</p>
		</div>
	</div>
</section>

<style>
	/* Animated gradient shimmer (optional aesthetic effect) */
	@keyframes gradient-shift {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}
</style>
