<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	let openSection: string | null = null;
	const toggle = (section: string) => {
		openSection = openSection === section ? null : section;
	};
</script>

<div class="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50">
	<Header />

	<section class="max-w-6xl mx-auto px-6 py-16">
		<h1 class="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
			Frequently Asked Questions
		</h1>

		<p class="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
			Learn everything you need to know about Trademark, Patent, and Design registration,
			renewal, and protection in Nigeria. This comprehensive guide from the
			<strong>Intellectual Property Office (IPO) Nigeria</strong>, under the
			<strong>Federal Ministry of Industry, Trade and Investment</strong>,
			answers the most common questions from applicants, business owners, and innovators.
		</p>

		<!-- Accordion Section -->
		<div class="space-y-6">
			<!-- TRADEMARK -->
			<div class="bg-white rounded-2xl shadow p-6">
				<button
					class="flex justify-between items-center w-full text-left"
					on:click={() => toggle('trademark')}
				>
					<h2 class="text-xl font-semibold text-green-700">Trademark</h2>
					<span class="text-gray-500 text-2xl">{openSection === 'trademark' ? '−' : '+'}</span>
				</button>
				{#if openSection === 'trademark'}
					<div class="mt-4 text-gray-700 space-y-4 leading-relaxed">
						<h3 class="font-bold text-lg text-gray-800">Understanding Trademarks in Nigeria</h3>
						<p><strong>Q:</strong> What is a trademark?<br>
						<strong>A:</strong> A trademark is a symbol, word, or phrase that identifies and distinguishes
						the source of goods or services of one party from another. It helps consumers tell one
						business apart from another in the marketplace.</p>

						<p><strong>Q:</strong> Why register a trademark?<br>
						<strong>A:</strong> Registration provides exclusive legal rights, brand protection, investor
						confidence, and legal recourse against infringement.</p>

						<p><strong>Q:</strong> How long does a trademark registration last?<br>
						<strong>A:</strong> It’s valid for 7 years initially and can be renewed indefinitely every 14 years.</p>

						<h3 class="font-bold text-lg text-gray-800 mt-6">How to Register a Trademark</h3>
						<ol class="list-decimal ml-5 space-y-1">
							<li>Create a profile at <a href="https://portal.iponigeria.com" class="text-green-700 underline">portal.iponigeria.com</a>.</li>
							<li>Select “Pre-Registration → Trademark → Create New Trademark.”</li>
							<li>Complete applicant, trademark, and correspondence details, then upload supporting documents.</li>
							<li>Make payment online and receive a receipt and acknowledgment letter.</li>
							<li>Track your application through “Application History.”</li>
						</ol>

						<h3 class="font-bold text-lg text-gray-800 mt-6">Eligibility and Requirements</h3>
						<ul class="list-disc ml-5 space-y-1">
							<li>Distinctive names, signatures, or invented words.</li>
							<li>Marks not deceptive, scandalous, or contrary to law.</li>
							<li>Power of Attorney and applicant details required.</li>
						</ul>

						<h3 class="font-bold text-lg text-gray-800 mt-6">Validity, Renewal & Foreign Applicants</h3>
						<p>Trademarks are class-based (1–45). Renew after 7 years, then every 14 years. Foreign
						applicants must file through a local representative.</p>

						<p class="text-sm italic text-gray-500 mt-2">
							Note: Nigeria is a WIPO member, but international registrations do not automatically apply.
						</p>
					</div>
				{/if}
			</div>

			<!-- PATENT -->
			<div class="bg-white rounded-2xl shadow p-6">
				<button
					class="flex justify-between items-center w-full text-left"
					on:click={() => toggle('patent')}
				>
					<h2 class="text-xl font-semibold text-green-700">Patent</h2>
					<span class="text-gray-500 text-2xl">{openSection === 'patent' ? '−' : '+'}</span>
				</button>
				{#if openSection === 'patent'}
					<div class="mt-4 text-gray-700 space-y-4 leading-relaxed">
						<h3 class="font-bold text-lg text-gray-800">Understanding Patents in Nigeria</h3>
						<p><strong>Q:</strong> What is a patent?<br>
						<strong>A:</strong> A patent grants exclusive rights to an inventor for a new and useful
						invention, preventing others from making, using, or selling it without permission.</p>

						<p><strong>Q:</strong> Why register a patent?<br>
						<strong>A:</strong> It provides ownership rights, protects inventions, and boosts investor confidence.</p>

						<p><strong>Q:</strong> Duration?<br>
						<strong>A:</strong> Utility patents last 20 years; design patents last 15 years — both require annual renewals.</p>

						<h3 class="font-bold text-lg text-gray-800 mt-6">How to Register a Patent</h3>
						<ol class="list-decimal ml-5 space-y-1">
							<li>Log in to <a href="https://portal.iponigeria.com" class="text-green-700 underline">portal.iponigeria.com</a>.</li>
							<li>Go to “Pre-Registration → Patent → Create New Patent.”</li>
							<li>Fill in Applicant, Inventor, and Patent details, then upload supporting documents.</li>
							<li>Pay online and track progress in your dashboard.</li>
						</ol>
					</div>
				{/if}
			</div>

			<!-- DESIGN -->
			<div class="bg-white rounded-2xl shadow p-6">
				<button
					class="flex justify-between items-center w-full text-left"
					on:click={() => toggle('design')}
				>
					<h2 class="text-xl font-semibold text-green-700">Design</h2>
					<span class="text-gray-500 text-2xl">{openSection === 'design' ? '−' : '+'}</span>
				</button>
				{#if openSection === 'design'}
					<div class="mt-4 text-gray-700 space-y-4 leading-relaxed">
						<h3 class="font-bold text-lg text-gray-800">Understanding Industrial Designs</h3>
						<p><strong>Q:</strong> What is a design?<br>
						<strong>A:</strong> The visual appearance of a product, including shape, configuration, or pattern applied by any industrial process.</p>

						<p><strong>Q:</strong> Why register a design?<br>
						<strong>A:</strong> To protect your product’s unique appearance and gain exclusive rights in Nigeria.</p>

						<h3 class="font-bold text-lg text-gray-800 mt-6">How to Register a Design</h3>
						<ol class="list-decimal ml-5 space-y-1">
							<li>Login to the portal and select “Pre-Registration → Design → Create New Design.”</li>
							<li>Provide Applicant, Creator, and Design details, upload documents, and pay online.</li>
							<li>Track your application in “Application History.”</li>
						</ol>
					</div>
				{/if}
			</div>

			<!-- GENERAL -->
			<div class="bg-white rounded-2xl shadow p-6">
				<button
					class="flex justify-between items-center w-full text-left"
					on:click={() => toggle('general')}
				>
					<h2 class="text-xl font-semibold text-green-700">General Intellectual Property FAQs</h2>
					<span class="text-gray-500 text-2xl">{openSection === 'general' ? '−' : '+'}</span>
				</button>
				{#if openSection === 'general'}
					<div class="mt-4 text-gray-700 space-y-4 leading-relaxed">
						<p><strong>Benefits of Registration:</strong></p>
						<ul class="list-disc ml-5 space-y-1">
							<li>Legal protection for brands, inventions, and designs.</li>
							<li>Exclusive rights to use, sell, or license your creation.</li>
							<li>Competitive marketplace advantage.</li>
							<li>Investor trust and brand credibility.</li>
						</ul>

						<h3 class="font-bold text-lg text-gray-800 mt-6">
							Common Mistakes by Entrepreneurs and Small Business Owners
						</h3>
						<ol class="list-decimal ml-5 space-y-1">
							<li>Delaying registration until competitors copy your brand.</li>
							<li>Assuming CAC registration covers IP rights (it doesn’t).</li>
							<li>Failing to renew on time.</li>
							<li>Using marks too similar to established brands.</li>
						</ol>
					</div>
				{/if}
			</div>
		</div>
	</section>
  <Footer/>
</div>
