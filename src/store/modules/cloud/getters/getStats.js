/* Import modules. */
const msgpack = require('msgpack-lite')

/**
 * Get Statistical Data
 *
 * Returns ALL stored statistics.
 */
const getStats = (state) => {
    /* Validate state (of stats). */
    if (!state || !state.stats) {
        return null
    }

    /* Initialize stats. */
    const stats = msgpack.decode(Buffer.from(state.stats))

    /* Return stats. */
    return stats
}

/* Export module. */
export default getStats
