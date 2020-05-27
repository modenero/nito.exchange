<template>
    <v-container fluid tag="section">
        <Charts />

        <v-row>
            <v-col class="ml-auto mr-auto" md="8">
                <base-material-alert
                    color="error"
                    dark
                    dismissible
                    icon="mdi-bell"
                >
                    CashShuffle block data is sourced from 3rd-party services and is subject to their terms of service.
                </base-material-alert>
            </v-col>
        </v-row>

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

        <div class="py-3" />

    </v-container>
</template>

<script>
/* Import modules. */
import moment from 'moment'
import superagent from 'superagent'

/* Import components. */
import Charts from './stats/Charts'

export default {
    components: {
        Charts,
    },
    data: () => {
        return {
            bitbox: null,

            cashFusions: null,
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

<style lang="sass" scoped>
#style
    .class
        color: white
</style>
