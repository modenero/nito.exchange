/* Initialize BITBOX. */
const bitbox = new window.BITBOX()

/**
 * Initialize Purse
 */
const initPurse = async ({ state, commit }) => {
    console.info('Initializing purse...') // eslint-disable-line no-console

    /* Validate purse. */
    if (state.masterSeed) {
        console.info('Purse already exists.') // eslint-disable-line no-console

        /* Cancel initialization. */
        return
    } else {
        console.info('Initializing NEW purse...') // eslint-disable-line no-console
    }

    /**
     * Master Seed
     *
     * Generate a wallet master seed from random bytes.
     *
     * !!! WARNING !!! WARNING !!! WARNING !!!
     * We MUST properly evaluate ANY and ALL weaknesses with
     * using randomBytes via a ("mobile") web browser.
     */
    const masterSeed = bitbox.Crypto.randomBytes(32).toString('hex')

    /* Set new master (private) key. */
    commit('setMasterSeed', masterSeed)
}

/* Export module. */
export default initPurse
