/* Initialize BITBOX. */
const bitbox = new window.BITBOX()

/**
* Get Balance by Session
*
* Retrieves the current (total) session balance.
*
* NOTE: Optional (market price) parameter is used to calculate fiat value,
*       and return a "formatted" value package.
*/
const getBalanceBySession = (
    state, getters, rootState, rootGetters
) => async (_sessionId, _currency) => {
    /* Validate (session) accounts. */
    if (!getters.getCoinsBySession(_sessionId)) {
        return null
    }

    /* Initialize search accounts. */
    const searchAccts = []

    /* Initialize counted accounts. */
    // FIXME: We are seeing duplicate counts.
    const countedAccts = []

    const coins = getters.getCoinsBySession(_sessionId)
    // console.log('GET BALANCE BY SESSION (coins)', coins)

    /* Add all active receiving account (searchAccts) to pool. */
    Object.keys(coins).forEach(txid => {
        /* Add to all receiving (pool). */
        searchAccts.push(coins[txid].cashAddress)
    })
    // console.log('GET BALANCE BY SESSION (all accounts)', searchAccts)

    /* Validate search accounts. */
    if (!searchAccts && searchAccts.length) {
        return 0
    }

    try {
        /* Initialize balance. */
        let balance = 0

        /* Retrieve (ALL) account(s) details. */
        const addrDetails = await bitbox.Address.details(searchAccts)
        // console.log('ALL ACCOUNTS DETAILS', JSON.stringify(addrDetails, null, 4))

        /* Validate (use of) unconfirmed transactions. */
        if (rootGetters['getFlags'] && rootGetters['getFlags'].unconfirmed) {
            addrDetails.forEach((address) => {
                /* Handlle duplicate counts. */
                // NOTE: Is this the best way to handle this??
                if (countedAccts.includes(address.cashAddress)) {
                    return
                } else {
                    countedAccts.push(address.cashAddress)
                }

                /* Both confirmed and unconfirmed. */
                balance += (address.balanceSat + address.unconfirmedBalanceSat)
            })
        } else {
            addrDetails.forEach((address) => {
                /* Handlle duplicate counts. */
                // NOTE: Is this the best way to handle this??
                if (countedAccts.includes(address.cashAddress)) {
                    return
                } else {
                    countedAccts.push(address.cashAddress)
                }

                /* Confirmed ONLY. */
                balance += address.balanceSat
            })
        }

        /* Retrieve market price. */
        const marketPrice =
            await rootGetters['blockchain/getTicker'](_currency)
        console.info(`Market price (${_currency})`, marketPrice) // eslint-disable-line no-console

        /* Validate market price. */
        if (marketPrice) {
            /* Format balance (for display). */
            // TODO: Support additional currencies.
            const formattedBalance =
                rootGetters['utils/getFormattedValue'](balance, marketPrice, 'USD')

            /* Return (formatted) balance. */
            return formattedBalance
        } else {
            /* Return (empty) balance. */
            return null
        }
    } catch (err) {
        console.error(err) // eslint-disable-line no-console

        /* Bugsnag alert. */
        throw new Error(err)
    }
}

/* Export module. */
export default getBalanceBySession
