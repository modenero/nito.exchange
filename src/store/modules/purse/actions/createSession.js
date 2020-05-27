/**
 * Create Session
 */
const createSession = ({ commit, getters }) => {
    console.info('Creating a NEW session...') // eslint-disable-line no-console

    /* Initialize session model. */
    let sessionsModel = null

    try {
        /* Initialize sessions. */
        const sessions = getters.getSessions

        /* Validate sessions. */
        if (sessions) {
            /* Set current (active index). */
            const currentIndex = Math.max(...Object.keys(sessionCoins))

            /* Set next coin index. */
            const nextIndex = currentIndex + 1

            /* Add new session to model. */
            sessionModel[nextIndex] = {
                status: 'active',
                coins: {},
            }
        } else {
            /**
             * Accounts Model
             *
             * Manages the indexes of accounts (addresses) and their respective
             * derivation paths.
             *
             * Deposit   : m/44'/145'/<session>'/0/<index>
             * Change    : m/44'/145'/<session>'/1/<index>
             * Nito Cash : m/44'/145'/0'/7867/<index>
             * Nito Xchg : m/44'/145'/<session>'/7888/<index>
             *
             * NOTE: Change is considered "toxic waste", and will be
             *       discarded (read. donated to Causes Cash) once it reaches
             *       below the lowest threshold for shuffles & fusions.
             *
             * NOTE: Nito Cash will be a single `session` and `chain` to allow
             *       for better support using Nito Cash wallet.
             */
            const accountsModel = {
                deposit: 0,
                change: 0,
                nitoxchg: 0, // FOR FUTURE COMPATIBILITY
            }

            /**
             * Session Model
             *
             * Status codes:
             *     (a) Active: Session address is ready to receive OR spend funds.
             *     (d) Disabled: Already received and spent funds (MUST be empty).
             *     (l) Locked: Session address is reserved OR has received funds
             *                 currently being held in reserve for a later use.
             *                 (eg. CashShuffle, CashFusion, ANYONECANPAY, etc)
             *
             * Coins are (UTXO) objects containing:
             *     - txid
             *     - vout
             *     - amountSatoshis
             *     - privateKeyWif
             *     - cashAddress
             *     - legacyAddress
             *
             * NOTE: We start our session index at `1`, in order to protect
             *       Nito Cash assets at account level `0`.
             */
            sessionsModel = {
                1: {
                    status: 'active',
                    accounts: accountsModel,
                    coins: {}
                }
            }
        }

        /* Initialize sessions. */
        commit('setSessions', sessionsModel)
    } catch (err) {
        console.error(err) // eslint-disable-line no-console

        /* Bugsnag alert. */
        throw new Error(err)
    }
}

/* Export module. */
export default createSession
