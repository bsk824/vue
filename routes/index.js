import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../components/main.vue';
import covid from '../components/covid.vue';
import BoardWrite from '../components/board/Write.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/vuetest', component: main },
		{ path: '/vuetest/covid', component: covid },
		{ path: '/vuetest/board/write', component: BoardWrite },
	]
})