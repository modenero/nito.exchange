/* Initialize BITBOX. */
const bitbox = new window.BITBOX()

/**
 * Update Coins (for ALL sessions)
 */
const updateCoins = async ({ dispatch, getters }) => {
    /* Set session id. */
    const sessionId = getters.getActiveSessionId

    /* Validate session id. */
    if (!sessionId) {
        return
    }

    /* Retrieve accounts. */
    const accounts = getters.getAccountsBySession(sessionId)
    // console.log('UPDATE COINS (accounts)', accounts)

    /* Validate accounts. */
    if (!accounts) {
        return
    }

    /* Build search array. */
    const acctSearch = accounts.map(obj => {
        return obj.address
    })
    // console.log('UPDATE COINS (acctSearch)', acctSearch)

    /* Retrieve address details. */
    const searchDetails = await bitbox.Address.details(acctSearch)
    // console.log('UPDATE COINS (address details)', searchDetails)

    searchDetails.forEach(addrDetails => {
        const searchAddr = addrDetails.cashAddress
        // console.log('UPDATE COINS (searchAddr)', searchAddr)

        const balanceSat = addrDetails.balanceSat
        // console.log('UPDATE COINS (addrDetails.balanceSat)', balanceSat)

        const txs = addrDetails.transactions
        // console.log('UPDATE COINS (addrDetails.txs)', txs)

        txs.forEach(async tx => {
            /* Retrieve transaction details. */
            const txDetails = await bitbox.Transaction.details(tx)
            // console.log('UPDATE COINS (tx details)', txDetails)

            /* Set outputs. */
            const outputs = txDetails.vout

            /* Handle all transaction outputs. */
            outputs.forEach((output, index) => {
                // console.log('UPDATE COINS (output)', output)

                /* Set satoshi (amount). */
                const satoshis = parseInt(output.value * 100000000)
                // console.log('UPDATE COINS (satoshis)', satoshis)

                /* Set script public key. */
                const scriptPubKey = output.scriptPubKey

                /* Set addresses. */
                const cashAddrs = scriptPubKey.cashAddrs
                // console.log('UPDATE COINS (cashAddrs)', cashAddrs)

                /* Initialize WIF. */
                let chainId = null

                /* Initialize WIF. */
                let wif = null

                /* Find the WIF. */
                for (let i = 0; i < accounts.length; i++) {
                    if (accounts[i].address === searchAddr) {
                        /* Set chain id. */
                        chainId = accounts[i].chainId

                        /* Set WIF. */
                        wif = accounts[i].wif

                        break
                    }
                }

                /* Validate search address. */
                if (cashAddrs.includes(searchAddr)) {
                    /* Set coin. */
                    const coin = {
                        status: 'active',
                        txid: txDetails.txid,
                        vout: index,
                        amountSatoshis: satoshis, // DEPRECATED
                        satoshis,
                        privateKeyWif: wif,
                        cashAddress: searchAddr,
                        legacyAddress: bitbox.Address.toLegacyAddress(searchAddr),
                    }
                    // console.log('UPDATE COINS (coin)', coin)

                    const coins = getters.getCoinsBySession(sessionId)
                    // console.log('COINS', coins)

                    /* Validate new coin. */
                    if (coins && !coins[`${coin.txid}:${coin.vout}`]) {
                        /* Create coin package. */
                        const pkg = {
                            sessionId,
                            chainId,
                            coin,
                        }

                        /* Add new coin. */
                        dispatch('addCoin', pkg)

                        try {
                            /* Initialize media. */
                            const media = new Audio(require('@/media/coins.wav'))

                            /* Play media. */
                            // WARNING: This action may fail on several browsers;
                            //          so it's best to do this last to avoid any
                            //          unforseen side-effects.
                            media.play()
                        } catch (err) {
                            console.error(err) // eslint-disable-line no-console
                        }
                    } else {
                        console.error('Coin already exists in the purse.')
                    }
                }
            })

        })

    })
}

/* Export module. */
export default updateCoins
