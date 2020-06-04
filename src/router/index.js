/* Import core modules. */
import Vue from 'vue'
import VueRouter from 'vue-router'

/* Dashboard */
import Dashboard from '@/views/Dashboard'

/* Sessions Manager */
// import Sessions from '@/views/Sessions'

/* Send Coins */
// import Send from '@/views/Send'

/* Event History */
// import History from '@/views/History'

/* Settings */
// import Settings from '@/views/Settings'

/* Activity Monitor */
import CashShuffle from '@/views/CashShuffle'
import CashFusion from '@/views/CashFusion'

/* Exchange Pages */
import About from '@/views/About'
import Download from '@/views/Download'
import Help from '@/views/Help'
import FAQ from '@/views/FAQ'
import Donate from '@/views/Donate'
import Canary from '@/views/Canary'

/* DEVELOPMENT ONLY */
import Blank from '@/views/Blank'
import ComingSoon from '@/views/ComingSoon'

/* Initialize vue router. */
Vue.use(VueRouter)

/* Initialize (navigation) routes. */
const routes = [{
    path: '/',
    component: () => import('@/views/Index'),
    children: [
        /* Dashboard */
        {
            name: 'Dashboard',
            path: '',
            component: Dashboard,
        },

        /* Sessions Manager */
        {
            name: 'Sessions Manager',
            path: 'sessions',
            // component: Sessions,
            component: ComingSoon,
        },

        /* Send Coins */
        {
            name: 'Send Coins',
            path: 'send',
            // component: Send,
            component: ComingSoon,
        },

        /* Event History */
        {
            name: 'Event History',
            path: 'history',
            // component: History,
            component: ComingSoon,
        },

        /* Settings */
        {
            name: 'Settings',
            path: 'settings',
            // component: Settings,
            component: ComingSoon,
        },

        /* Activity Monitor */
        {
            name: 'CashShuffle',
            path: 'cashshuffle',
            component: CashShuffle,
        },
        {
            name: 'CashFusion',
            path: 'cashfusion',
            component: CashFusion,
        },

        /* Exchange Pages */
        {
            name: 'About Nito Exchange',
            path: 'about',
            component: About,
        },
        {
            name: 'Download',
            path: 'download',
            component: Download,
        },
        {
            name: 'Need Help?',
            path: 'help',
            component: Help,
        },
        {
            name: 'Frequently Asked Questions',
            path: 'faq',
            component: FAQ,
        },
        {
            name: 'Donation',
            path: 'donate',
            component: Donate,
        },
        {
            name: 'Warrant Canary',
            path: 'canary',
            component: Canary,
        },

        /* DEVELOPMENT ONLY */
        {
            name: 'Blank Template',
            path: 'blank',
            component: Blank,
        },
        {
            name: 'Coming Soon',
            path: 'coming-soon',
            component: ComingSoon,
        },
    ],
}]

/* Initialize (page navigation) router. */
const router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    mode: process.env.BASE_URL === '/' ? 'history': 'hash',
    // mode: 'hash',
    // mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

/* Export module. */
export default router
