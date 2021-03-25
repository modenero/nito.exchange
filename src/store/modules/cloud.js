/* Import modules (getters). */
import getStats from './cloud/getters/getStats'

/* Import modules (actions). */
import resetStats from './cloud/actions/resetStats'
import updateStats from './cloud/actions/updateStats'

/* Import modules (mutations). */
import setStats from './cloud/mutations/setStats'

/* Initialize state. */
const state = {
    /**
     * Statistical Data
     *
     * Privacy data is compiled from this 3rd-party provider.
     */
    stats: null,
}

/* Getters. */
const getters = {
    getStats,
}

/* Actions. */
const actions = {
    resetStats,
    updateStats,
}

/* Mutations. */
const mutations = {
    setStats,
}

/* Export. */
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
