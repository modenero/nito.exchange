/* Import modules. */
import superagent from 'superagent'

/* Initialize BITBOX. */
const bitbox = new window.BITBOX()

/**
 * Process Statistical Data
 *
 * Type: either `fusion` or `shuffle`
 */
const processStats = async (_type, _currentStats, _blockAge) => {
    /* Initialize body. */
    let body = null

    /* Initialize start key. */
    let startKey = null

    /* Set start key. */
    startKey = await bitbox.Blockchain.getBlockCount() - _blockAge

    if (_currentStats && _currentStats[_type].blockAge <= startKey && _currentStats[_type].blockHeight > startKey) {
        startKey = _currentStats[_type].blockHeight
    }

    let target = null

    if (_type === 'fusion') {
        target = `https://cloud.nito.exchange/v1/cashfusion/activity/${startKey}`
    } else {
        target = `https://cloud.nito.exchange/v1/cashshuffle/activity/${startKey}`
    }

    /* Request cloud statistial data. */
    const cloudStats = await superagent
        .get(target)
        .catch(err => console.error(err))
    // console.log(`[ ${_type} ] CLOUD STATS:`, cloudStats)

    /* Set body. */
    if (cloudStats && cloudStats.body) {
        body = cloudStats.body
    }

    /* Validate body. */
    if (!body) {
        return console.error(`Failed to retrieve [ ${_type} ] activity.`)
    }
    console.log(`CLOUD [ ${_type} ] STATS (body):`, body)

    /* Initialize activity data. */
    let activity = null

    /* Validate current activity. */
    if (_currentStats && _currentStats[_type].activity) {
        /* Set current activity. */
        activity = _currentStats[_type].activity

        /* Parse new activity for duplicate(s). */
        body.data.forEach(item => {
            /* Search for duplicate. */
            const dup = activity.find(el => {
                return el.id === item.id
            })

            /* Validate duplicate. */
            if (!dup) {
                /* Add item to activity. */
                activity.push(item)
            }
        })
    } else {
        /* Set activity data. */
        activity = body.data
    }

    /* Sort activity data. */
    activity.sort((a, b) => {
        return (a.id > b.id) ? 1 : -1
    })

    /* Retrieve block (height) numbers. */
    const blockNums = activity.map(item => {
        return parseInt(item.id)
    })
    // console.log('BLOCK NUMS:', blockNums)

    let blockHeight = null

    /* Set latest block height. */
    if (_currentStats && _currentStats[_type].blockHeight >= Math.max( ...blockNums )) {
        blockHeight = _currentStats[_type].blockHeight
    } else {
        blockHeight = Math.max( ...blockNums )
    }
    console.log(`LATEST [ ${_type} ] BLOCK:`, blockHeight)

    /* Set oldest block height. */
    let blockAge = null

    if (_currentStats && _currentStats[_type].blockAge <= Math.min( ...blockNums )) {
        blockAge = _currentStats[_type].blockAge
    } else {
        blockAge = Math.min( ...blockNums )
    }
    console.log(`OLDEST [ ${_type} ] BLOCK:`, blockAge)

    /* Return activity data. */
    return {
        activity,
        blockAge,
        blockHeight,
    }
}

/**
 * Update Stats
 */
const updateStats = async ({ commit, getters }, _blockAge) => {
    /* Retrieve current stats. */
    const currentStats = getters.getStats
    console.log('CURRENT STATS', currentStats)

    /* Process CashFusion stats. */
    const fusion = await processStats('fusion', currentStats, _blockAge)

    /* Process CashShuffle stats. */
    const shuffle = await processStats('shuffle', currentStats, _blockAge)

    /* Build stats. */
    const updatedStats = {
        fusion,
        shuffle,
    }

    console.log('UPDATED STATS', updatedStats)

    commit('setStats', updatedStats)
    // commit('setStats', null)
}

/* Export module. */
export default updateStats
