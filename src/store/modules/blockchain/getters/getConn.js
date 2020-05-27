/* Initialize BITBOX. */
const bitbox = new window.BITBOX()

/* Set websocket endpoint. */
// const wsURL = 'https://ws.bitcoin.com'
const wsURL = 'wss://ws.bitcoin.com'

/**
 * Initialize WebSocket connection handler.
 *
 * NOTE: We DO NOT use the application "state"; so as to avoid
 *       persisting the connection data (and bloating the storage data).
 */
let conn = null

/**
* Get Connection
*/
const getConn = () => (_callback, _action) => {
    console.log('BLOCKCHAIN CONN', conn)

    /* Set callback. */
    const callback = _callback

    if (_action === 'open') {
        /* Open socket connection. */
        conn = new bitbox.Socket({ callback, wsURL })
    }

    if (_action === 'close' && conn) {
        /* Close connection. */
        conn.close(callback)
    }

    /* Return (web) socket connection. */
    return conn
}

/* Export module. */
export default getConn
