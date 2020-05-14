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
                /* Dashboard */
                {
                    name: 'Dashboard',
                    path: '',
                    component: () => import('@/views/Dashboard'),
                },

                /* Coin Manager */
                {
                    name: 'Coin Manager',
                    path: 'manager',
                    component: () => import('@/views/Manager'),
                },

                /* Activity Monitor */
                {
                    name: 'Activity Monitor',
                    path: 'monitor',
                    component: () => import('@/views/Monitor'),
                },

                /* Transactions */
                {
                    name: 'Transactions',
                    path: 'transactions',
                    component: () => import('@/views/Transactions'),
                },

                /* Help & Support */
                {
                    name: 'Need Help?',
                    path: 'upgrade',
                    component: () => import('@/views/Upgrade'),
                },

                /* Donate */
                {
                    name: 'Donation',
                    path: 'donate',
                    component: () => import('@/views/Donate'),
                },

                /* Warrant Canary */
                {
                    name: 'Warrant Canary',
                    path: 'canary',
                    component: () => import('@/views/Canary'),
                },

                /* Templates */
                {
                    name: 'Buttons',
                    path: 'buttons',
                    component: () => import('@/views/templates/Buttons'),
                },
                {
                    name: 'Grid',
                    path: 'grid',
                    component: () => import('@/views/templates/Grid'),
                },
                {
                    name: 'Icons',
                    path: 'icons',
                    component: () => import('@/views/templates/Icons'),
                },
                {
                    name: 'Notifications',
                    path: 'notifications',
                    component: () => import('@/views/templates/Notifications'),
                },
                {
                    name: 'Tabs',
                    path: 'tabs',
                    component: () => import('@/views/templates/Tabs'),
                },
            ],
        },
    ],
})
