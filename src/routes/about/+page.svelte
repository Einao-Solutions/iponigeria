<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	let isVisible = true;
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
	<Header />

	<section class="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-20">
		<!-- Section Header -->
		<div
			class="mb-16 text-center transition-all duration-700 ease-out
			{isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}"
		>
			<h3
				class="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl
				{isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}"
			>
				About Us
			</h3>
			<p class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
				Intellectual Property Office (IPO) Nigeria is the official digital platform of Nigeria’s
				Trademark, Patent, and Design Registries, operating under the Commercial Law Department of
				the Federal Ministry of Industry, Trade and Investment. We are committed to helping
				individuals, businesses, and innovators secure and enforce their intellectual property
				rights in Nigeria with ease.
			</p>
		</div>

		<!-- Info Cards -->
		<div class="grid gap-10 md:gap-12">
			<!-- Mission -->
			<div
				class="rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all hover:shadow-lg"
			>
				<h4 class="mb-4 text-2xl font-semibold text-gray-900">Our Mission</h4>
				<p class="leading-relaxed text-gray-700">
					Through our digital-first approach, we simplify the process of filing and managing
					trademarks, patents, and designs, making it easier than ever to protect your brand,
					invention, or creative design. Whether you're launching a startup, developing a product,
					or growing a brand, IPO Nigeria is your trusted gateway to protecting what you create.
				</p>
			</div>

			<!-- Trademark Registry -->
			<div
				class="rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all hover:shadow-lg"
			>
				<h4 class="mb-4 text-2xl font-semibold text-gray-900">Trademark Registry</h4>
				<p class="mb-4 leading-relaxed text-gray-700">
					The Trademark Registry in Nigeria is the official government body responsible for the
					registration and regulation of trademarks. Operated under the Commercial Law Department of
					the Federal Ministry of Industry, Trade and Investment, the Registry handles the
					examination, approval, publication, and maintenance of trademark rights.
				</p>
				<p class="mb-4 leading-relaxed text-gray-700">
					By registering your trademark, you gain exclusive legal rights to your brand’s identity
					such as your business name, logo, or slogan, ensuring that no one else can legally use it
					in the Nigerian market.
				</p>
				<h5 class="mb-2 text-lg font-semibold text-gray-800">Core Functions:</h5>
				<ul class="list-inside list-disc space-y-1 text-gray-700">
					<li>Examination and registration of trademarks</li>
					<li>Publication in the Trademark Journal</li>
					<li>Issuance of certificates of registration</li>
					<li>Renewal, assignment, and post-registration services</li>
					<li>Handling of oppositions and disputes</li>
				</ul>
				<p class="mt-3 text-sm text-gray-500 italic">
					Trademark protection is valid for 7 years initially, renewable every 14 years thereafter.
				</p>
			</div>

			<!-- Patent & Design Registry -->
			<div
				class="rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all hover:shadow-lg"
			>
				<h4 class="mb-4 text-2xl font-semibold text-gray-900">Patent & Design Registry</h4>
				<p class="mb-4 leading-relaxed text-gray-700">
					The Patent and Design Registry is the official authority that manages the registration of
					inventions (patents) and aesthetic creations (industrial designs) in Nigeria. Also housed
					within the Commercial Law Department of the Federal Ministry of Industry, Trade and
					Investment, it ensures innovators and creators receive legal protection and commercial
					rights over their work.
				</p>
				<p class="mb-4 leading-relaxed text-gray-700">
					A patent grants inventors exclusive rights to their new products, processes, or technical
					improvements for up to 20 years, subject to annual renewals. An industrial design, on the
					other hand, protects the visual and ornamental aspects of a product for an initial period
					of 5 years, extendable up to 15 years.
				</p>
				<h5 class="mb-2 text-lg font-semibold text-gray-800">Core Functions:</h5>
				<ul class="list-inside list-disc space-y-1 text-gray-700">
					<li>Examination and grant of Patent rights</li>
					<li>Registration of industrial designs</li>
					<li>Issuance of Patent and Design certificates</li>
					<li>Maintenance and renewal of rights</li>
					<li>Recordal of assignments, licenses, and other post-registration services</li>
				</ul>
				<p class="mt-3 text-sm text-gray-500">
					The Registry plays a key role in fostering innovation and protecting the intellectual
					property rights of inventors, creatives, startups, and businesses across Nigeria.
				</p>
			</div>

			<!-- Leadership -->
			<div
				class="rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all hover:shadow-lg"
			>
				<h4 class="mb-4 text-2xl font-semibold text-gray-900">
					Leadership of the Intellectual Property Office
				</h4>

				<!-- Replace the src paths with your real images (e.g. /images/team/jumoke-oduwole.jpg) -->
				<div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
					<!-- Jumoke Oduwole -->
					<article
						class="group flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
					>
						<img
							src="src/lib/assets/jumoke.jpg"
							alt="Hon. Jumoke Oduwole"
							class="mb-4 h-24 w-24 rounded-full border-2 border-gray-200 object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
						/>
						<h5 class="text-lg font-semibold text-gray-900">Dr. Jumoke Oduwole MFR</h5>
						<p class="mt-1 text-sm text-gray-600 italic">
							Honourable Minister of Trade and Investment
						</p>
						<p class="mt-1 text-xs text-gray-500">
							Federal Ministry of Industry, Trade, and Investment
						</p>
					</article>

					<!-- Barr. Jane Igwe -->
					<article
						class="group flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
					>
						<img
							src="/images/team/barr-jane-igwe.jpg"
							alt="Barr. Jane Igwe"
							class="mb-4 h-16 w-16 rounded-full border-2 border-gray-200 object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
						/>
						<h5 class="text-lg font-semibold text-gray-900">Barr. Jane Igwe</h5>
						<p class="mt-1 text-sm text-gray-600 italic">Registrar, Patent and Design Registry</p>
					</article>

					<!-- Barr. Shafiu Adamu Yauri -->
					<article
						class="group flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
					>
						<img
							src="/images/team/barr-shafiu-adamu-yauri.jpg"
							alt="Barr. Shafiu Adamu Yauri"
							class="mb-4 h-16 w-16 rounded-full border-2 border-gray-200 object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
						/>
						<h5 class="text-lg font-semibold text-gray-900">Barr. Shafiu Adamu Yauri</h5>
						<p class="mt-1 text-sm text-gray-600 italic">Registrar, Trademark Registry</p>
					</article>
				</div>
			</div>
		</div>
	</section>
    <Footer/>
</div>
