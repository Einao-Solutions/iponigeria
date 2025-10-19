<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen bg-white text-gray-800">
	<Header />

	<!-- Main Content -->
	<section class="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-20">
		<!-- Section Header -->
		<div
			class="mb-16 text-center transition-all duration-700 ease-out'}"
		>
			<h3 class="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
				Our Services
			</h3>
			<p class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
				IPO Nigeria provides secure and efficient intellectual property registration services —
				from trademarks and patents to industrial designs. Whether you’re protecting your brand,
				invention, or product design, our platform ensures your rights are legally recognized and
				protected.
			</p>
		</div>

		<!-- Services List -->
		<div class="space-y-20">
			<!-- TRADEMARK -->
			<section class="rounded-xl bg-gray-50 p-10 shadow-sm ring-1 ring-gray-100">
				<h3 class="mb-3 text-2xl font-semibold text-gray-900">Trademark</h3>
				<p class="mb-5 text-gray-700 leading-relaxed">
					Protect your brand identity. We provide a simple, secure way to register your business
					name, logo, slogan, or symbol as a trademark in Nigeria. Trademark registration grants you
					exclusive legal rights and helps build brand trust and market distinction.
				</p>

				<h4 class="mb-3 text-lg font-semibold text-gray-800">Available Services</h4>
				<ul class="list-disc list-inside space-y-2 text-gray-700">
					<li>New Trademark Application Filings</li>
					<li>Certificate Issuance</li>
					<li>Amendments / Clerical Update</li>
					<li>Publication of Marks and Opposition</li>
					<li>Renewals</li>
					<li>
						Recordal / Post-registration Services (Registered User, Merger, Renewal, Assignment,
						Change of Applicant Name, and Change of Applicant Address)
					</li>
				</ul>

				<div class="mt-10">
					<a
						href="https://portal.iponigeria.com"
						class="inline-block rounded-lg bg-green-600 px-8 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					>
						Get Started
					</a>
				</div>
			</section>

			<!-- PATENT -->
			<section class="rounded-xl bg-gray-50 p-10 shadow-sm ring-1 ring-gray-100">
				<h3 class="mb-3 text-2xl font-semibold text-gray-900">Patent</h3>
				<p class="mb-5 text-gray-700 leading-relaxed">
					Secure exclusive rights to your invention. Our patent service ensures your new product,
					process, or technological innovation is legally protected from unauthorized use or
					reproduction for up to 20 years (subject to annual filings and renewal).
				</p>

				<h4 class="mb-3 text-lg font-semibold text-gray-800">Available Services</h4>
				<ul class="list-disc list-inside space-y-2 text-gray-700">
					<li>New Patent Application Filings</li>
					<li>Grant of Patent</li>
					<li>Amendments / Clerical Update</li>
					<li>Annuity (Renewals)</li>
					<li>
						Post-registration Services (Merger, Renewal, Assignment, Change of Applicant Name, and
						Change of Applicant Address)
					</li>
				</ul>

				<div class="mt-10">
					<a
						href="https://portal.iponigeria.com"
						class="inline-block rounded-lg bg-green-600 px-8 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					>
						Get Started
					</a>
				</div>
			</section>

			<!-- DESIGN -->
			<section class="rounded-xl bg-gray-50 p-10 shadow-sm ring-1 ring-gray-100">
				<h3 class="mb-3 text-2xl font-semibold text-gray-900">Design</h3>
				<p class="mb-5 text-gray-700 leading-relaxed">
					Protect the visual design of your product. If your product has a unique shape, pattern, or
					appearance, you can register its design to prevent imitation and enhance market value.
					Designs are protected for up to 15 years with renewals.
				</p>

				<h4 class="mb-3 text-lg font-semibold text-gray-800">Available Services</h4>
				<ul class="list-disc list-inside space-y-2 text-gray-700">
					<li>New Industrial Application Filings</li>
					<li>Certificate Issuance</li>
					<li>Design Renewals</li>
					<li>
						Post-registration Services (Transfer and Licensing of Design Rights, Change of Applicant
						Name, and Change of Applicant Address)
					</li>
				</ul>

				<div class="mt-10">
					<a
						href="https://portal.iponigeria.com"
						class="inline-block rounded-lg bg-green-600 px-8 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					>
						Get Started
					</a>
				</div>
			</section>

			<!-- PRELIMINARY ADVICE -->
			<section class="rounded-xl bg-gray-50 p-10 shadow-sm ring-1 ring-gray-100">
				<h3 class="mb-3 text-2xl font-semibold text-gray-900">Preliminary Advice</h3>
				<p class="mb-5 text-gray-700 leading-relaxed">
					Get expert guidance before you file. Not sure if your idea or brand qualifies for
					protection? We offer preliminary advice on eligibility, classification, and documentation
					requirements to help you make informed decisions before filing.
				</p>

				<h4 class="mb-3 text-lg font-semibold text-gray-800">Available Services</h4>
				<ul class="list-disc list-inside space-y-2 text-gray-700">
					<li>Availability Checks</li>
					<li>Classification Guidance</li>
					<li>Filing Eligibility Requirements Overview</li>
					<li>Application Readiness Support</li>
				</ul>

				<div class="mt-10">
					<a
						href="/contact"
						class="inline-block rounded-lg bg-green-600 px-8 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					>
						Request Advice
					</a>
				</div>
			</section>
		</div>
	</section>

	<Footer />
</div>
