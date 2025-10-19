<script lang="ts">
	import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Globe } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'About Us', href: '/about' },
		{ label: 'Our Services', href: '/services' },
		// { label: 'Resources', href: '/resources' },
		{ label: 'FAQs', href: '/faqs' }
	];

	const services = [
		{ label: 'Trademark Registration', href: 'https://portal.iponigeria.com' },
		{ label: 'Patent Registration', href: 'https://portal.iponigeria.com' },
		{ label: 'Industrial Design', href: 'https://portal.iponigeria.com' },
		{ label: 'Copyright Protection', href: 'https://portal.iponigeria.com' }
	];

	const legal = [
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Terms of Service', href: '/terms' },
		{ label: 'IP Guidelines', href: '/guidelines' }
	];

	const socials = [
		{ icon: Facebook, href: '#', label: 'Facebook' },
		{ icon: Twitter, href: '#', label: 'Twitter' },
		{ icon: Linkedin, href: '#', label: 'LinkedIn' },
		{ icon: Globe, href: '#', label: 'Website' }
	];
</script>

<footer
	class="relative bg-gradient-to-b from-green-950 via-green-900 to-emerald-950 py-16 text-gray-200"
>
	<!-- Decorative gradient glows -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div class="absolute top-16 left-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl"></div>
		<div class="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-green-300/10 blur-3xl"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
			<!-- Brand / About -->
			<div>
				<h5 class="mb-4 text-2xl font-bold text-white">IPO Nigeria</h5>
				<p class="mb-5 text-sm leading-relaxed text-gray-300">
					Federal Ministry of Industry, Trade & Investment<br />
					Commercial Law Department
				</p>

				<ul class="space-y-2 text-sm text-gray-300">
					<li class="flex items-center gap-2">
						<Mail size={16} class="text-emerald-400" />
						<span>customersupport@iponigeria.com</span>
					</li>
					<li class="flex items-center gap-2">
						<Phone size={16} class="text-emerald-400" />
						<span>+234 903 897 9681</span>
					</li>
					<li class="flex items-center gap-2">
						<MapPin size={16} class="text-emerald-400" />
						<span>Block D, Old secretariat, Area 1, Garki, Abuja, Nigeria</span>
					</li>
				</ul>
			</div>

			<!-- Quick Links -->
			<div>
				<h5 class="mb-4 text-lg font-semibold text-white">Quick Links</h5>
				<ul class="space-y-2">
					{#each quickLinks as link}
						<li>
							<a
								href={link.href}
								class="text-sm transition-colors duration-200 hover:text-emerald-400"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h5 class="mb-4 text-lg font-semibold text-white">Our Services</h5>
				<ul class="space-y-2">
					{#each services as service}
						<li>
							<a
								href={service.href}
								class="text-sm transition-colors duration-200 hover:text-emerald-400"
							>
								{service.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Divider -->
		<div class="mt-12 border-t border-green-800 pt-8 text-center">
			<p class="text-sm text-gray-300">
				&copy; {currentYear} IPO Nigeria. All rights reserved.
			</p>
			<p class="mt-2 text-xs text-gray-400">Powered by Einao Solutions</p>
			<img
				src="src\lib\assets\einao.png"
				alt="Einao Solutions logo"
				class="mx-auto mt-3 h-8"
				loading="lazy"
			/>
		</div>
	</div>
</footer>

<style>
	footer {
		backdrop-filter: blur(10px);
	}
</style>
