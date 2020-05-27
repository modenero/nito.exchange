/**
 * Get Session Coins
 *
 * Returns UTXOs for ALL (in-use) session coins.
 */
const getCoinsBySession = (state, getters) => (_sessionId) => {
    // console.log('GET COINS BY SESSION (sessionid)', _sessionId)
    /* Validate sessions. */
    if (!getters.getSessions) {
        return null
    }

    /* Initialize sessions. */
    const sessions = getters.getSessions
    // console.log('GET COINS BY SESSION (sessions)', sessions)

    /* Validate session. */
    if (!sessions[_sessionId]) {
        return null
    }

    /* Initialize (session) coins. */
    const coins = sessions[_sessionId].coins

    /* Return (session) coins. */
    return coins
}

/* Export module. */
export default getCoinsBySession
