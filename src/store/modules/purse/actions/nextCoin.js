/* Import modules. */
const msgpack = require('msgpack-lite')

/**
 * (Request) Next Coin Address
 * FIXME: We need a better way to detect the use of "change"
 *        addresses; so NOT to waste (un-)used accounts.
 */
const nextCoin = ({ commit, state }, _session) => {
    console.info('Incrementing account index...') // eslint-disable-line no-console

    /* Initialize accounts. */
    const accounts = msgpack.decode(Buffer.from(state.a))

    /* Set accounts (from session pool). */
    const sessionCoins = accounts[_session]

    /* Set current (active index). */
    const currentIndex = Math.max(...Object.keys(sessionCoins))

    /* Set next account index. */
    const nextIndex = currentIndex + 1

    /* Add next index to active accounts (pool). */
    sessionCoins[nextIndex] = {
        s: 'a',
        u: {},
    }

    /* Update accounts. */
    accounts[_session] = sessionCoins

    /* Commit (updated) accounts. */
    commit('setCoins', accounts)
}

/* Export module. */
export default nextCoin
