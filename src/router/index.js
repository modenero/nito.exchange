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

                /* Coins Manager */
                {
                    name: 'Coins Manager',
                    path: 'coins',
                    component: () => import('@/views/Coins'),
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

                /* History */
                {
                    name: 'History',
                    path: 'history',
                    component: () => import('@/views/History'),
                },

                /* Help & Support */
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
