import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
        barImage: require('@/assets/sidebar-04.jpg'),
        drawer: null,
    },
    mutations: {
        SET_BAR_IMAGE (state, payload) {
            state.barImage = payload
        },
        SET_DRAWER (state, payload) {
            state.drawer = payload
        },
    },
    actions: {
        //
    },
})
