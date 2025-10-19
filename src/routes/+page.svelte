<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import About from '$lib/components/About.svelte';
</script>

<div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
	<Header />
	<Hero />
	<About />
	<Services />
	<Footer />
</div>
