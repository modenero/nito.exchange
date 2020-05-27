/* Initialize blockchain (socket) callback. */
const callback = () => {
    console.info('Blockchain (socket) connection has been closed.') // eslint-disable-line no-console
}

/**
 * Close Connection
 */
const closeConn = ({ getters }) => {
    /* Close connection. */
    getters.getConn(callback, 'close')
}

/* Export module. */
export default closeConn
