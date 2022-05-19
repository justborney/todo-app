import { createRouter, createWebHistory } from 'vue-router'
import Basket from './views/Basket.vue'
import Goods from './views/Goods.vue'

export default createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                component: Goods
            },
            {
                path: '/basket',
                component: Basket
            }
        ]
    }
)