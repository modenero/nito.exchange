/**
 * Add New Coin
 */
const addCoin = ({ commit, getters }, _pkg) => {
    console.info('Adding new coin...', _pkg)

    /* Set session id. */
    const sessionId = _pkg.sessionId
    // console.log('ADD NEW COIN (sessionid):', sessionId)

    /* Set chain id. */
    const chainId = _pkg.chainId
    // console.log('ADD NEW COIN (chainid):', chainId)

    /* Set coin. */
    const coin = _pkg.coin
    // console.log('ADD NEW COIN (coin):', coin)

    /* Set sessions. */
    const sessions = getters.getSessions
    // console.log('ADD NEW COIN (sessions):', sessions)

    /* Validate session id. */
    if (!sessions[sessionId]) {
        return
    }

    /* Add coin to session. */
    sessions[sessionId].coins[`${coin.txid}:${coin.vout}`] = coin

    /* Increment deposit account. */
    switch(chainId) {
    case 0:
        sessions[sessionId].accounts.deposit++
        break
    case 1:
        sessions[sessionId].accounts.change++
        break
    case 7867:
        sessions[sessionId].accounts.nito++
        break
    case 7888:
        sessions[sessionId].accounts.xchg++
        break
    }

    /* Commit updated sessions. */
    commit('setSessions', sessions)
}

/* Export module. */
export default addCoin
