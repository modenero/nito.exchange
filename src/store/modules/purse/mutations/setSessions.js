/* Import modules. */
const msgpack = require('msgpack-lite')

/**
 * Set Session
 */
const setSession = (state, _sessions) => {
    /* Set sessions. */
    state.sessions = msgpack.encode(_sessions)
}

/* Export module. */
export default setSession
