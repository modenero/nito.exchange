/* Import modules (getters). */
import getFlags from './system/getters/getFlags'
import getLocale from './system/getters/getLocale'
import getNotices from './system/getters/getNotices'
import getPool from './system/getters/getPool'

/* Import modules (actions). */
import addNotice from './system/actions/addNotice'
import displayError from './system/actions/displayError'
import displayNotification from './system/actions/displayNotification'
import updatePool from './system/actions/updatePool'

/* Import modules (mutations). */
import setError from './system/mutations/setError'
import setFlags from './system/mutations/setFlags'
import setLocale from './system/mutations/setLocale'
import setNotices from './system/mutations/setNotices'
import setNotification from './system/mutations/setNotification'
import setPool from './system/mutations/setPool'

/* Initialize state. */
const state = {
    /**
     * Error Message
     */
    errors: null,

    /**
     * Flags
     *
     * 1. Dark mode
     * 2. Unconfirmed transactions
     */
    flags: {
        darkMode: false,
        unconfirmed: true,
    },

    /**
     * Locale
     *
     * Controls the localization language.
     * (default is english)
     */
    locale: 'en-US',

    /**
     * Notices
     *
     * System notices that nag/remind the user of some important action or
     * information; which can be permanently disabled ("Do Not Show Again")
     * via checkbox and confirmation.
     *
     * NOTE: Unique 1-byte (hex) codes (up to 255) are used to reduce the size
     *       of this storage field.
     */
    notices: {},

    /**
     * Notification Message
     */
    notifs: null,

    /**
     * Active Pool Server
     */
    pool: null,

    /**
     * Application Version
     */
    version: null,

    // FIXME: Re-factor this
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: require('@/assets/sidebar-04.jpg'),
    drawer: null,

}

/* Getters. */
const getters = {
    getBarColor: () => {
        return state.barColor
    },
    getBarImage: () => {
        return state.barImage
    },
    getDrawer: () => {
        return state.drawer
    },

    getFlags,
    getLocale,
    getNotices,
    getPool,
}

/* Actions. */
const actions = {
    addNotice,
    displayError,
    displayNotification,
    updatePool,
}

/* Mutations. */
const mutations = {
    SET_BAR_IMAGE (state, payload) {
        state.barImage = payload
    },
    SET_DRAWER (state, payload) {
        state.drawer = payload
    },

    setError,
    setFlags,
    setLocale,
    setNotices,
    setNotification,
    setPool,
}

/* Export. */
// NOTE: We DO NOT namespace here to allow for global use of `dispatch`.
export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
}
