<template>
    <v-container>
        <base-material-card
            icon="mdi-rotate-orbit"
            title="Last 100 CashFusion transactions"
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

    </v-container>
</template>

<script>
/* Initialize vuex. */
import { mapGetters } from 'vuex'

/* Import modules. */
import moment from 'moment'
import superagent from 'superagent'

export default {
    data: () => {
        return {
            activity: null,

            cashFusions: null,
            cashShuffles: null,
        }
    },
    computed: {
        ...mapGetters('cloud', [
            'getStats',
        ]),

        /**
         * Fusion Activity
         */
        fusionActivity() {
            if (this.getStats && this.getStats.fusion) {
                /* Retrieve activity. */
                const activity = this.getStats.fusion.activity

                /* Reverse the activity. */
                activity.reverse()

                /* Initialize data. */
                const data = []

                for (let i = 0; i < 100; i++) {
                    /* Validate activity. */
                    if (activity[i]) {
                        /* Add to data. */
                        data.push({
                            ...activity[i],
                            amount: this.formatValue(activity[i].txs[0].inputs.min - 270),
                            timeAgo: moment.unix(activity[i].timestamp).fromNow(),
                        })
                    }
                }

                /* Return data. */
                return data
            } else {
                return null
            }
        },

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
        },
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
