/**
 * Update Pool
 */
const updatePool = async ({ commit }, _pool) => {
    commit('setPool', _pool)
}

/* Export module. */
export default updatePool
