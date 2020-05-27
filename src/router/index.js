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

                /* Sessions Manager */
                {
                    name: 'Sessions Manager',
                    path: 'sessions',
                    component: () => import('@/views/Sessions'),
                },

                /* Send Coins */
                {
                    name: 'Send Coins',
                    path: 'send',
                    component: () => import('@/views/Send'),
                },

                /* History */
                {
                    name: 'Transaction History',
                    path: 'history',
                    component: () => import('@/views/History'),
                },

                /* Settings */
                {
                    name: 'Settings',
                    path: 'settings',
                    component: () => import('@/views/Settings'),
                },

                /* Activity Monitor */
                {
                    name: 'CashShuffle',
                    path: 'cashshuffle',
                    component: () => import('@/views/CashShuffle'),
                },
                {
                    name: 'CashFusion',
                    path: 'cashfusion',
                    component: () => import('@/views/CashFusion'),
                },

                /* Exchange Pages */
                {
                    name: 'About Nito Exchange',
                    path: 'about',
                    component: () => import('@/views/About'),
                },
                {
                    name: 'Need Help?',
                    path: 'help',
                    component: () => import('@/views/Help'),
                },
                {
                    name: 'Frequently Asked Questions',
                    path: 'faq',
                    component: () => import('@/views/FAQ'),
                },
                {
                    name: 'Donation',
                    path: 'donate',
                    component: () => import('@/views/Donate'),
                },
                {
                    name: 'Warrant Canary',
                    path: 'canary',
                    component: () => import('@/views/Canary'),
                },

                /* Blank Template */
                {
                    name: 'Blank Template',
                    path: 'blank',
                    component: () => import('@/views/Blank'),
                },
            ],
        },
    ],
})
