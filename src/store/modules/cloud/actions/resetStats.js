/**
 * Reset Stats
 */
const resetStats = async ({ commit }) => {
    /* Reset stats. */
    commit('setStats', null)
}

/* Export module. */
export default resetStats
