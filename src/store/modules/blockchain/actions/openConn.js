/* Initialize BITBOX. */
const bitbox = new window.BITBOX()

/* Initialize blockchain (socket) callback. */
const callback = () => {
    console.info('Blockchain: Connected to MAINNET!') // eslint-disable-line no-console
}

/**
 * Account Transaction
 */
// const accountTransaction = (_dispatch, _rootGetters, _message) => {
//     // console.log('TRANSACTION MESSAGE', _message)
//
//     /* Retreive (wallet) addresses. */
//     // TODO: Profile this performance of this action, considering the
//     //       amount of cryptography involved in deriving these addresses.
//     const walletAddresses = _rootGetters['wallets/getAddresses']('BCH')
//     // console.log('\nWALLET ADDRESSES', walletAddresses)
//
//     /* Set format. */
//     // const format = _message.format
//     // console.log('TRANSACTION FORMAT', format)
//
//     /* Set transaction id. */
//     // const txId = format.txid
//     // console.log('Transaction Id', txId)
//
//     /* Set inputs. */
//     // const inputs = message.inputs
//
//     /* Set outputs. */
//     const outputs = _message.outputs
//
//     /* Handle all transaction outputs. */
//     outputs.forEach(output => {
//         // console.log('OUTPUT', output)
//
//         /* Set satoshi (amount). */
//         const satoshi = output.satoshi
//         // console.log('SATOSHI', satoshi)
//
//         /* Set script public key. */
//         const scriptPubKey = output.scriptPubKey
//
//         /* Set addresses. */
//         const addresses = scriptPubKey.addresses
//         // console.log('ADDRESSES', addresses)
//
//         /* Handle all transaction addresses. */
//         addresses.forEach(address => {
//             // console.log('ADDRESS', address)
//
//             /* Set cash address. */
//             const cashAddress = bitbox.Address.toCashAddress(address)
//             // console.log('CASH ADDRESS', cashAddress)
//
//             /* Process ALL wallet addresses. */
//             Object.keys(walletAddresses).forEach(index => {
//                 /* Set wallet address. */
//                 const walletAddress = walletAddresses[index].address
//                 // console.log('OUR ADDRESS', walletAddress)
//
//                 /* Validate wallet address. */
//                 if (walletAddress === cashAddress) {
//                     /* Set notification message. */
//                     const notifMsg = `Receiving ${(satoshi / 100)} bits to ${cashAddress.slice(12, 18)} ... ${cashAddress.slice(-6)}`
//
//                     /* Dispatch notification. */
//                     _dispatch('displayNotification', notifMsg, { root: true })
//
//                     /* Increment receiving wallet (index). */
//                     _dispatch('wallets/nextAccount', 'BCH', { root: true })
//
//                     /* Build (inputs) update package. */
//                     const updateInputs = {
//                         action: 'add',
//                         address: walletAddress,
//                         wallet: 'BCH',
//                     }
//
//                     /* Update account inputs. */
//                     _dispatch('wallets/updateInputs', updateInputs, { root: true })
//
//                     try {
//                         /* Initialize media. */
//                         const media = new Audio(require('@/media/coins.wav'))
//
//                         /* Play media. */
//                         // WARNING: This action may fail on several browsers;
//                         //          so it's best to do this last to avoid any
//                         //          unforseen side-effects.
//                         media.play()
//                     } catch (err) {
//                         console.error(err) // eslint-disable-line no-console
//                     }
//                 }
//             })
//         })
//     })
// }

/**
 * Open Connection
 */
const openConn = ({ dispatch, getters, rootGetters }) => {
    /* Retreive connection handler. */
    const conn = getters.getConn(callback, 'open')

    // TODO: Change this from `blocks` to `transactions` and monitor
    //       for our `current` account; then update address (index).
    //       https://developer.bitcoin.com/bitbox/docs/socket
    // conn.listen('blocks', (message) => {
    // conn.listen('transactions', (message) => {
    //     try {
    //         /* Parse message. */
    //         message = JSON.parse(message)
    //         // console.log('\nTRANSACTION MESSAGE', message)
    //
    //         /* Handle account transactions. */
    //         accountTransaction(dispatch, rootGetters, message)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // })
}

/* Export module. */
export default openConn
