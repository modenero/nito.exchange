/**
 * Rebuild Purse
 */
const rebuildPurse = ({ commit, dispatch }) => {
    console.info('Rebuilding purse...')

    /* Commit empty purse. */
    commit('setEmptyPurse')

    /* Request purse initialization. */
    dispatch('initPurse')
}

/* Export module. */
export default rebuildPurse
