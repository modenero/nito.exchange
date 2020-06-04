/* Import modules. */
import superagent from 'superagent'

/* Initialize BITBOX. */
const bitbox = new window.BITBOX()

/**
 * Update Stats
 */
const updateStats = async ({ commit, getters }) => {
// const updateStats = async ({ getters }) => {

    /* Set 90 days (in blocks). */
    // const blocksToSearch = 12960
    const blocksToSearch = 144

    /* Retrieve current stats. */
    const currentStats = getters.getStats
    console.log('CURRENT STATS', currentStats)

    /* Initialize activity. */
    let activity = null

    /* Initialize body. */
    let body = null

    /* Initialize block numbers. */
    let blockNums = null

    /* Initialize start key. */
    let startKey = null

    /* Set start key. */
    startKey = await bitbox.Blockchain.getBlockCount() - blocksToSearch

    if (currentStats.shuffle.blockAge <= startKey && currentStats.shuffle.blockHeight > startKey) {
        startKey = currentStats.shuffle.blockHeight
    }

    activity = await superagent
        .get(`https://cloud.nito.exchange/v1/cashshuffle/activity/${startKey}`)
        .catch(err => console.error(err))
    // console.log('CASHSHUFFLE STATS (activity):', activity)

    /* Set body. */
    if (activity && activity.body) {
        body = activity.body
    }

    /* Validate body. */
    if (!body) {
        return console.error('Failed to retrieve CashShuffle activity.')
    }
    // console.log('UPDATED STATS (body):', body)

    /* Initialize shuffle data. */
    let shuffleData = null

    /* Set shuffle data. */
    if (currentStats.shuffle.activity) {
        shuffleData = Object.assign(currentStats.shuffle.activity, body.data)
    } else {
        shuffleData = body.data
    }

    blockNums = shuffleData.map(item => {
        return parseInt(item.id)
    })
    // console.log('BLOCK NUMS:', blockNums)

    let shuffleBlockHeight = null

    /* Set latest block height. */
    if (Math.max( ...blockNums ) > currentStats.shuffle.blockHeight) {
        shuffleBlockHeight = Math.max( ...blockNums )
    } else {
        shuffleBlockHeight = currentStats.shuffle.blockHeight
    }
    // console.log('LATEST SHUFFLE BLOCK:', shuffleBlockHeight)

    /* Set oldest block height. */
    let shuffleBlockAge = null

    if (Math.min( ...blockNums ) < currentStats.shuffle.blockAge) {
        shuffleBlockAge = Math.min( ...blockNums )
    } else {
        shuffleBlockAge = currentStats.shuffle.blockAge
    }
    // console.log('OLDEST SHUFFLE BLOCK:', shuffleBlockAge)

    /* Set start key. */
    startKey = await bitbox.Blockchain.getBlockCount() - blocksToSearch

    if (currentStats.fusion.blockAge <= startKey && currentStats.fusion.blockHeight > startKey) {
        startKey = currentStats.fusion.blockHeight
    }

    activity = await superagent
        .get(`https://cloud.nito.exchange/v1/cashfusion/activity/${startKey}`)
        .catch(err => console.error(err))
    // console.log('CASHFUSION STATS (activity):', activity)

    /* Set body. */
    if (activity && activity.body) {
        body = activity.body
    }

    /* Validate body. */
    if (!body) {
        return console.error('Failed to retrieve CashFusion activity.')
    }
    // console.log('UPDATED STATS (body):', body)

    /* Initialize fusion data. */
    let fusionData = null

    /* Set fusion data. */
    if (currentStats.fusion.activity) {
        fusionData = Object.assign(currentStats.fusion.activity, body.data)
    } else {
        fusionData = body.data
    }

    blockNums = fusionData.map(item => {
        return parseInt(item.id)
    })
    // console.log('BLOCK NUMS:', blockNums)

    let fusionBlockHeight = null

    /* Set latest block height. */
    if (Math.max( ...blockNums ) > currentStats.fusion.blockHeight) {
        fusionBlockHeight = Math.max( ...blockNums )
    } else {
        fusionBlockHeight = currentStats.fusion.blockHeight
    }
    // console.log('LATEST FUSION BLOCK:', fusionBlockHeight)

    /* Set oldest block height. */
    let fusionBlockAge = null

    if (Math.min( ...blockNums ) < currentStats.fusion.blockAge) {
        fusionBlockAge = Math.min( ...blockNums )
    } else {
        fusionBlockAge = currentStats.fusion.blockAge
    }
    // console.log('OLDEST FUSION BLOCK:', fusionBlockAge)

    /* Build stats. */
    const updatedStats = {
        fusion: {
            activity: fusionData,
            blockAge: fusionBlockAge,
            blockHeight: fusionBlockHeight,
        },
        shuffle: {
            activity: shuffleData,
            blockAge: shuffleBlockAge,
            blockHeight: shuffleBlockHeight,
        },
    }

    // console.log('UPDATED STATS', updatedStats)

    commit('setStats', updatedStats)
}

/* Export module. */
export default updateStats
