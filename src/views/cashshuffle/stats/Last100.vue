<template>
    <v-container>
        <base-material-card
            icon="mdi-rotate-orbit"
            title="CashShuffle activity for the last 100 blocks"
            class="px-5 py-3"
        >
            <v-simple-table>
                <thead>
                    <tr>
                        <th class="primary--text">
                            Block #
                        </th>
                        <th class="text-center primary--text">
                            # Shuffles
                        </th>
                        <th class="text-center primary--text">
                            Inputs (min | max)
                        </th>
                        <th class="text-center primary--text">
                            Avg Shuffle Amount
                        </th>
                        <th class="text-right primary--text">
                            Event Time
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="shuffle of shuffleData" :key="shuffle.id">
                        <td>{{shuffle.id}}</td>
                        <td class="text-center">{{shuffle.txs.length}}</td>
                        <td class="text-center">
                            <strong>{{formatValue(shuffle.txs[0].inputs.min)}}</strong> |
                            <strong>{{formatValue(shuffle.txs[0].inputs.max)}}</strong>
                        </td>
                        <td class="text-center">
                            <strong>{{shuffle.amount}}</strong>
                        </td>
                        <td class="text-right"><em>{{shuffle.timeAgo}}</em></td>
                    </tr>
                </tbody>
            </v-simple-table>
        </base-material-card>

        <v-pagination
            :length="5"
            :value="1"
            circle
            class="justify-start"
        />

    </v-container>
</template>

<script>
/* Import modules. */
import moment from 'moment'
import superagent from 'superagent'

export default {
    data: () => {
        return {
            bitbox: null,

            cashShuffles: null,
        }
    },
    computed: {
        shuffleData() {
            if (this.cashShuffles && this.cashShuffles.data) {
                /* Set data. */
                const data = this.cashShuffles.data.map(shuffleBlk => {
                    return {
                        ...shuffleBlk,
                        amount: this.formatValue(shuffleBlk.txs[0].inputs.min - 270),
                        timeAgo: moment.unix(shuffleBlk.timestamp).fromNow(),
                    }
                })

                /* Reverse the data. */
                data.reverse()
                console.log('DATA', data)

                /* Return data. */
                return data
            } else {
                return null
            }
        }
    },
    methods: {
        /**
         * Initialize BITBOX
         */
        initBitbox() {
            console.info('Initializing BITBOX..')

            try {
                /* Initialize BITBOX. */
                // this.bitbox = new BITBOX()
                this.bitbox = new window.BITBOX()
            } catch (err) {
                console.error(err)
            }
        },

        formatValue(_value) {
            const formatted = `${(_value / 100000000).toFixed(4)} BCH`

            return formatted
        },

    },
    created: async function () {
        /* Initialize BITBOX. */
        this.initBitbox()

        /* Initialize start key. */
        const startKey = await this.bitbox.Blockchain.getBlockCount() - 100

        /* Initialize activity. */
        const activity = await superagent
            .get(`https://cloud.nito.exchange/v1/cashshuffle/activity/${startKey}`)
            .catch(err => console.error(err))
        console.log('CASHSHUFFLE STATS (activity):', activity)

        /* Set body. */
        const body = activity.body

        /* Validate body. */
        if (!body) {
            return console.error('Failed to retrieve CashShuffle activity.')
        }

        /* Set CashShuffle activity. */
        this.cashShuffles = body

    },
}
</script>
