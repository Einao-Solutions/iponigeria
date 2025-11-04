<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
    import tradeAct from '$lib/assets/Trademarks Act.pdf';
    import patentAct from '$lib/assets/PatentDesign Act.pdf';
</script>

<div class="min-h-screen bg-white text-gray-800">
	<Header />

	<!-- Main Content -->
	<section class="mx-auto max-w-5xl px-6 py-24 sm:px-8 lg:px-20">
		<!-- Section Header -->
		<div class="mb-16 text-center transition-all duration-700 ease-out'}"
		>
			<h3 class="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
				Resources
			</h3>
            <p class="mx-auto max-w-2xl text-lg text-gray-600">
                Explore our collection of essential resources, including legal documents and FAQs, to help you navigate the intellectual property landscape in Nigeria.
            </p>

            <ul class="mt-8 space-y-4 text-left">
                <li>
                    <a href={tradeAct} target="_blank" rel="noopener noreferrer"
                         class="text-blue-600 hover:underline">
                        Trademarks Act
                    </a>
                </li>
                <li>
                    <a href={patentAct} target="_blank" rel="noopener noreferrer"
                         class="text-blue-600 hover:underline">
                        Patents and Designs Act
                    </a>
                </li>
                <li>
                    <a href="/faqs" 
                         class="text-blue-600 hover:underline">
                        FAQ 
                    </a>
                </li>
            </ul>
		</div>



	</section>

	<Footer />
</div>