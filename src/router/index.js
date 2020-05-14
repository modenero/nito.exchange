import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('@/views/Index'),
            children: [
                // Dashboard
                {
                    name: 'Overview',
                    path: '',
                    component: () => import('@/views/Dashboard'),
                },
                // Pages
                {
                    name: 'Coin Manager',
                    path: 'manager',
                    component: () => import('@/views/Manager'),
                },
                {
                    name: 'Activity Monitor',
                    path: 'monitor',
                    component: () => import('@/views/Monitor'),
                },
                // Tables
                {
                    name: 'Transactions',
                    path: 'transactions',
                    component: () => import('@/views/Transactions'),
                },
                // Upgrade
                {
                    name: 'Need Help?',
                    path: 'upgrade',
                    component: () => import('@/views/Upgrade'),
                },
                // Donate
                {
                    name: 'Donation',
                    path: 'donate',
                    component: () => import('@/views/Donate'),
                },
                // Warrant Canary
                {
                    name: 'Warrant Canary',
                    path: 'canary',
                    component: () => import('@/views/Canary'),
                },
                // Template Samples
                {
                    name: 'Icons',
                    path: 'components/icons',
                    component: () => import('@/views/component/Icons'),
                },
                {
                    name: 'Component View',
                    path: 'component',
                    component: () => import('@/views/component/Tabs'),
                },
                {
                    name: 'Notifications',
                    path: 'notifications',
                    component: () => import('@/views/component/Notifications'),
                },
            ],
        },
    ],
})
