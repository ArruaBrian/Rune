<script setup>
	defineProps({
		variant: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<div class="logoWrapper">
		<div class="logoContainer" :class="variant" />
		<div :v-if="variant == 'blend'" class="logoContainer" :class="variant" />
	</div>
</template>

<style scoped>
	.logoWrapper {
		position: relative;
		width: clamp(4rem, 4vw, 10rem);
		height: clamp(4rem, 4vw, 10rem);
	}

	.logoContainer {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		position: absolute;
		z-index: 100;
		transition: all 0.3s ease-in-out;
	}

	.logoContainer:hover {
		transform: scale(1.05);
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}

	.primary {
		background-image: url('/runeWhite.svg');
	}

	.secondary {
		background-image: url('/runeBlack.svg');
	}

	.blend {
		mix-blend-mode: soft-light;
		background-image: url('/runeBlack.svg');
	}
</style>
