/* Import modules (getters). */
import getAccountBySession from './purse/getters/getAccountBySession'
import getAccountsBySession from './purse/getters/getAccountsBySession'
import getActiveSessionId from './purse/getters/getActiveSessionId'
import getBalance from './purse/getters/getBalance'
import getBalanceBySession from './purse/getters/getBalanceBySession'
import getCoinsBySession from './purse/getters/getCoinsBySession'
import getDerivationPath from './purse/getters/getDerivationPath'
import getDustAmount from './purse/getters/getDustAmount'
import getHDNode from './purse/getters/getHDNode'
// import getHistory from './purse/getters/getHistory'
import getMasterSeed from './purse/getters/getMasterSeed'
import getOutbox from './purse/getters/getOutbox'
import getSessions from './purse/getters/getSessions'

/* Import modules (actions). */
import addCoin from './purse/actions/addCoin'
import createSession from './purse/actions/createSession'
import initPurse from './purse/actions/initPurse'
// import nextCoin from './purse/actions/nextCoin'
import rebuildPurse from './purse/actions/rebuildPurse'
import updateCoins from './purse/actions/updateCoins'

/* Import modules (mutations). */
import setEmptyPurse from './purse/mutations/setEmptyPurse'
import setMasterSeed from './purse/mutations/setMasterSeed'
import setOutbox from './purse/mutations/setOutbox'
import setSessions from './purse/mutations/setSessions'

/* Initialize state. */
const state = {
    /**
     * Active Session Id
     *
     * Most recently selected session's id.
     */
    activeSessionId: null,

    /**
     * Master Seed
     *
     * A 32-byte key, used to secure the entire purse.
     */
    masterSeed: null,

    /**
     * Nito Cash Index
     *
     * Manages a single `session` and `chain` for this wallet type.
     * eg. m/44'/145'/0'/7867/<index>
     */
    nitoCashIdx: null,

    /**
     * Coins waiting to be sent out from the purse.
     */
    outbox: null,

    /**
     * Sessions
     *
     * Every new session is created on a separate derivation path.
     * The `session` chain is equivalent to the `account` chain.
     *
     * A standard BCH derivation path is used,
     *     m/44'/145'/<session>'/0/<index>
     * to allow for convenience and portability to desktop and mobile wallets.
     */
    sessions: null,
}

/* Getters. */
const getters = {
    getAccountBySession,
    getAccountsBySession,
    getActiveSessionId,
    getBalance,
    getBalanceBySession,
    getCoinsBySession,
    getDerivationPath,
    getDustAmount,
    getHDNode,
    // getHistory,
    getMasterSeed,
    getOutbox,
    getSessions,
}

/* Actions. */
const actions = {
    addCoin,
    createSession,
    initPurse,
    // nextCoin,
    rebuildPurse,
    updateCoins,
}

/* Mutations. */
const mutations = {
    setEmptyPurse,
    setMasterSeed,
    setOutbox,
    setSessions,
}

/* Export. */
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
