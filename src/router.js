import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sobre from './views/Sobre.vue'
import Contato from './views/Contato.vue'
import Github from './views/Github.vue'
import Resumo from './views/Resumo.vue'



Vue.use (Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/sobre',
            name: 'sobre',
            component: Sobre

        
        },
        {
            path: '/contato',
            name: 'contato',
            component: Contato

        
        },
        {
            path: '/resumo',
            name: 'resumo',
            component: Resumo
        },
        {
            path: '/github',
            name: 'github',
            component: Github

        }
    ]
});

