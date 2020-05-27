/* Import (core) modules. */
import Vue from 'vue'
import Vuex from 'vuex'

/* Import persisted state (for vuex). */
import createPersistedState from 'vuex-persistedstate'

/* Import (local) modules. */
import blockchain from './modules/blockchain'
// import purse from './modules/purse'
import system from './modules/system'
// import utils from './modules/utils'

/* Initialize Vuex. */
Vue.use(Vuex)

/* Export store. */
export default new Vuex.Store({
    modules: {
        blockchain,
        // purse,
        system,
        // utils,
    },
    plugins: [createPersistedState()],
    strict: process.env.NODE_ENV !== 'production'
})
