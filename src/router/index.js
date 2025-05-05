// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importá las vistas
import homeView from '@/views/homeView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: homeView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
