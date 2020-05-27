/* Initialize BITBOX. */
const bitbox = new window.BITBOX()

/* Initialize accounts. */
const accounts = []

/**
 * Load Accounts
 */
const loadAccounts = (_getters, _sessionId, _chainId, _acctIdx) => {
    /* Initialize HD node. */
    const hdNode = _getters.getHDNode

    /* Set derivation path. */
    const path = _getters.getDerivationPath(_sessionId, _chainId, _acctIdx)
    // console.log('GET ACCOUNTS (path)', path)

    /* Initialize child node. */
    const childNode = hdNode.derivePath(path)

    /* Set WIF. */
    const wif = bitbox.HDNode.toWIF(childNode)

    /* Set account (address). */
    const address = bitbox.HDNode.toCashAddress(childNode)
    // console.log('GET ACCOUNTS (address)', address)

    /* Add to all receiving (pool). */
    accounts.push({
        sessionId: _sessionId,
        chainId: _chainId,
        address,
        wif,
    })

}

/**
 * Get ALL Session Accounts
 *
 * Returns account (address, index, WIF) for ALL (in-use) sessions.
 */
const getAccounts = (state, getters) => (_sessionId) => {
    /* Validate sessions. */
    if (!getters.getSessions) {
        return null
    }

    /* Initialize sessions. */
    const sessions = getters.getSessions
    console.log('GET ACCOUNTS (sessions):', sessions)

    /* Set session. */
    const session = sessions[_sessionId]
    console.log('GET ACCOUNTS (session):', session)

    /* Loop through ALL (deposit) indexes (inclusive). */
    for (let i = 0; i <= session.accounts.deposit; i++) {
        loadAccounts(getters, _sessionId, 0, i)
    }

    /* Loop through ALL (change) indexes (inclusive). */
    for (let i = 0; i <= session.accounts.change; i++) {
        loadAccounts(getters, _sessionId, 1, i)
    }

    /* Loop through ALL (Nito Cash) indexes (inclusive). */
    for (let i = 0; i <= session.accounts.nito; i++) {
        loadAccounts(getters, _sessionId, 7867, i)
    }

    /* Loop through ALL (Nito Xchg) indexes (inclusive). */
    for (let i = 0; i <= session.accounts.xchg; i++) {
        loadAccounts(getters, _sessionId, 7888, i)
    }
    console.log('GET ACCOUNTS (accounts):', accounts)

    /* Return accounts. */
    return accounts
}

/* Export module. */
export default getAccounts
