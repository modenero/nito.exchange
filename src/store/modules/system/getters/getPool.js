/**
 * Get (Active) Pool
 *
 * Returns addresses for ALL (in-use) receiving pool.
 */
const getPool = (state) => {
    /* Validate state (of sessions). */
    if (!state || !state.pool) {
        return null
    }

    /* Initialize pool. */
    const pool = state.pool

    /* Return sessions. */
    return pool
}

/* Export module. */
export default getPool
