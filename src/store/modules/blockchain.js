/* Import libraries. */
// import telr from '../../api/telr'

/* Import modules (getters). */
import getAccountBalance from './blockchain/getters/getAccountBalance'
import getConn from './blockchain/getters/getConn'
import getTicker from './blockchain/getters/getTicker'

/* Import modules (actions). */
import closeConn from './blockchain/actions/closeConn'
import openConn from './blockchain/actions/openConn'

/* Import modules (mutations). */
// ...

/* Initialize state. */
const state = {
    /**
     * (Monitoring) Queue
     *
     * Real-time tracking of:
     *     1. Block confirmation
     *     2. Transaction notifications
     */
    q: null,

    /**
     * Testnet
     *
     * TODO: Add support to Bitcoin Cash testnet.
     *       Disable Nito wallet and Savings wallet.
     */
    t: false,
}

/* Getters. */
const getters = {
    getAccountBalance,
    getConn,
    getTicker,
}

/* Actions. */
const actions = {
    closeConn,
    openConn,
}

/* Mutations. */
const mutations = {
    //
}

/* Export. */
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
