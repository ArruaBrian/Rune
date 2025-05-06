<script setup>
	import headerLayout from '@/layouts/headerLayout.vue';
</script>

<template>
	<div id="mainBody">
		<headerLayout />
		<router-view />
	</div>
</template>

<style scoped>
	html,
	body,
	#app {
		height: 100%;
		margin: 0;
		padding: 0;
	}

	#mainBody {
		min-height: 100vh; /* Ocupa toda la altura visible al menos */
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color-background);
		position: relative;
		overflow: hidden;
	}
</style>
