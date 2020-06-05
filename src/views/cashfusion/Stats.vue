<template>
    <v-container fluid tag="section">
        <Charts />

        <v-row>
            <v-col class="ml-auto mr-auto" sm="8">
                <base-material-alert
                    color="error"
                    dark
                    dismissible
                    icon="mdi-bell"
                >
                    CashFusion block data is sourced from 3rd-party services and is subject to their terms of service.
                </base-material-alert>
            </v-col>
        </v-row>

        <base-material-card
            icon="mdi-rotate-orbit"
            title="Last 100 Blocks"
            class="px-5 py-3"
        >
            <v-simple-table>
                <thead>
                    <tr>
                        <th class="primary--text">
                            Block #
                        </th>
                        <th class="text-center primary--text">
                            # Fusions
                        </th>
                        <th class="text-center primary--text">
                            Inputs (min | max)
                        </th>
                        <th class="text-center primary--text">
                            Outputs (min | max)
                        </th>
                        <th class="text-right primary--text">
                            Event Time
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="shuffle of shuffleData" :key="shuffle.id">
                        <td>{{shuffle.id}}</td>
                        <td class="text-center">
                            {{shuffle.txs.length}}
                        </td>
                        <td class="text-center">
                            <strong><strong>{{shuffle.txs[0].inputs.count}}x</strong></strong>
                            &nbsp;
                            <strong>{{formatValue(shuffle.txs[0].inputs.min)}}</strong> |
                            <strong>{{formatValue(shuffle.txs[0].inputs.max)}}</strong>
                        </td>
                        <td class="text-center">
                            <strong><strong>{{shuffle.txs[0].outputs.count}}x</strong></strong>
                            &nbsp;
                            <strong>{{formatValue(shuffle.txs[0].outputs.min)}}</strong> |
                            <strong>{{formatValue(shuffle.txs[0].outputs.max)}}</strong>
                        </td>
                        <td class="text-right">{{shuffle.timeAgo}}</td>
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
                        timeAgo: moment.unix(shuffleBlk.timestamp).fromNow(),
                    }
                })

                /* Reverse the data. */
                data.reverse()
                // console.log('DATA', data)

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
            .get(`https://cloud.nito.exchange/v1/cashfusion/activity/${startKey}`)
            .catch(err => console.error(err))
        console.log('CASHFUSION STATS (activity):', activity)

        /* Set body. */
        const body = activity.body

        /* Validate body. */
        if (!body) {
            return console.error('Failed to retrieve CashFusion activity.')
        }

        /* Set CashFusion activity. */
        this.cashShuffles = body

    },
}
</script>

<style lang="sass" scoped>
#style
    .class
        color: white
</style>
