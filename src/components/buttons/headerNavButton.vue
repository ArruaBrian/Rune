<script setup>
	import { RouterLink } from 'vue-router';

	defineProps({
		to: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<RouterLink :to="to" class="headerButton"> {{ desc }} </RouterLink>
</template>

<style scoped>
	.headerButton {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--fs-lg);
		font-weight: 600;
		color: var(--color-background);
		text-decoration: none;
		text-align: center;
		background-color: transparent;
		transition: all 0.1s ease-in-out;
		font-family: Inter;
		font-weight: 600;
	}
	.headerButton:hover {
		transform: scale(1.05);
		opacity: 0.7;
	}
</style>
