<script setup>
	import RuneLogo from '../components/logos/runeLogo.vue';
	import awesomeGradient from '@/layouts/awesomeGradient.vue';
	import headerNavButton from '@/components/buttons/headerNavButton.vue';
</script>

<template>
	<div class="header-body">
		<div class="header-content">
			<RuneLogo variant="blend" />
			<nav class="navContainer">
				<headerNavButton to="/" desc="Home" />
				<headerNavButton to="/about" desc="About" />
				<headerNavButton to="/contact" desc="Contact" />
			</nav>
			<awesomeGradient class="frame-options" />
		</div>
	</div>
</template>

<style scoped>
	.navContainer {
		position: relative;
		width: 100%;
		height: 50%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		z-index: 100;
	}

	.frame-options {
		position: absolute;
		top: -37.5rem;
		right: -25rem;
		width: 220%;
		height: 800px;
		transform: rotate(-170deg);
		border: none;
		pointer-events: none;
		z-index: 10;
		filter: brightness(0.8) saturate(1.8);
	}

	.header-body {
		position: relative;
		width: 100%;
		height: 90px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		isolation: isolate;
	}

	.header-content {
		position: relative;
		width: 90%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 100;
	}
</style>
