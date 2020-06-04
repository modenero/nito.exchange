/* Import modules. */
const msgpack = require('msgpack-lite')

/**
 * Set Stats
 */
const setStats = (state, _stats) => {
    /* Set stats. */
    state.stats = msgpack.encode(_stats)
}

/* Export module. */
export default setStats
