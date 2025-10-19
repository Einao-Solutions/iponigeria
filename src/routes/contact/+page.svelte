<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen bg-white text-gray-800">
	<Header />

	<!-- Main Content -->
	<section class="mx-auto max-w-5xl px-6 py-24 sm:px-8 lg:px-20">
		<!-- Section Header -->
		<div class="mb-16 text-center transition-all duration-700 ease-out'}"
		>
			<h3 class="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
				Contact Us
			</h3>
			<p class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
				We’re here to assist with all inquiries about trademarks, patents, and design services.
				Reach out to our team for support, guidance, or technical assistance.
			</p>
		</div>

		<!-- Contact Details -->
		<div class="grid gap-10 sm:grid-cols-2">
			<!-- General Enquiries -->
			<div class="rounded-xl bg-gray-50 p-10 shadow-sm ring-1 ring-gray-100">
				<h3 class="mb-4 text-2xl font-semibold text-gray-900">General Enquiries</h3>
				<p class="mb-2 text-gray-700">Federal Ministry of Industry, Trade and Investment</p>
				<p class="text-gray-700">Commercial Law Department</p>
				<p class="text-gray-700">Block D, Old Secretariat</p>
				<p class="text-gray-700 mb-4">Area 1, Garki, Abuja</p>

				<p class="text-gray-700">
					<span class="font-medium text-gray-900">Email:</span>
					<a
						href="mailto:customersupport@iponigeria.com"
						class="text-green-700 hover:underline ml-1"
					>
						customersupport@iponigeria.com
					</a>
				</p>
			</div>

			<!-- Technical Support -->
			<div class="rounded-xl bg-gray-50 p-10 shadow-sm ring-1 ring-gray-100">
				<h3 class="mb-4 text-2xl font-semibold text-gray-900">Technical Support</h3>
				<p class="text-gray-700">
					<span class="font-medium text-gray-900">Phone:</span>
					<a href="tel:09038979681" class="text-green-700 hover:underline ml-1">
						0903 897 9681
					</a>
				</p>
				<p class="mt-2 text-gray-700">
					<span class="font-medium text-gray-900">WhatsApp:</span>
					<a
						href="https://wa.me/2349038979681"
						target="_blank"
						class="text-green-700 hover:underline ml-1"
					>
						0903 897 9681
					</a>
				</p>
			</div>
		</div>

		<!-- Optional Message Section -->
		<div class="mt-20 text-center">
			<p class="text-gray-600">
				For inquiries or feedback, please send us an email or reach out through our support channels.
			</p>
		</div>
	</section>

	<Footer />
</div>
