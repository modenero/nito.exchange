<template>
    <v-container>
        <base-material-card
            icon="mdi-rotate-orbit"
            title="CashShuffle transaction details from the last 30 days"
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
                            Highest Input
                        </th>
                        <th class="text-center primary--text">
                            Shared Output
                        </th>
                        <th class="text-right primary--text">
                            Event Time
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        class="txItem"
                        v-for="shuffle of shuffleActivity"
                        :key="shuffle.id"
                        @click="openTx(shuffle.id)"
                    >
                        <td>{{shuffle.id}}</td>
                        <td class="text-center">{{shuffle.txs.length}}</td>
                        <td class="text-center">
                            <strong>{{formatValue(shuffle.txs[0].inputs.max)}}</strong>
                            <strong class="primary--text"> | </strong>
                            <strong>{{formatFiat(shuffle.txs[0].inputs.max)}}</strong>
                        </td>
                        <td class="text-center">
                            <strong>{{formatValue(shuffle.amount)}}</strong>
                            <strong class="primary--text"> | </strong>
                            <strong>{{formatFiat(shuffle.amount)}}</strong>
                        </td>
                        <td class="text-right"><em>{{shuffle.timeAgo}}</em></td>
                    </tr>
                </tbody>
            </v-simple-table>
        </base-material-card>

        <v-pagination
            :length="numPages"
            :value="3"
            total-visible="10"
            v-model="page"
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
import Nito from 'nitojs'
import numeral from 'numeral'

export default {
    data: () => {
        return {
            ticker: null,

            activity: null,

            page: null,
            itemsPerPage: null,
            numPages: null,
        }
    },
    computed: {
        ...mapGetters('cloud', [
            'getStats',
        ]),

        /**
         * Shuffle Activity
         */
        shuffleActivity() {
            if (this.getStats && this.getStats.shuffle) {
                /* Retrieve activity. */
                // NOTE: We make a copy, to later be reversed.
                const activity = [...this.getStats.shuffle.activity]
                // console.log('ACTIVITY', activity)

                /* Reverse the activity. */
                activity.reverse()

                /* Initialize data. */
                const data = []

                for (let i = ((this.page - 1) * this.itemsPerPage); i < (this.itemsPerPage * this.page); i++) {
                    /* Validate activity. */
                    if (activity[i]) {
                        /* Add to data. */
                        data.push({
                            ...activity[i],
                            amount: activity[i].txs[0].inputs.min - 270,
                            timeAgo: moment.unix(activity[i].timestamp).fromNow(),
                        })
                    }
                }

                /* Return data. */
                return data
            } else {
                return null
            }
        }
    },
    methods: {
        /**
         * Open Transaction
         */
        openTx(_shuffleId) {
            // console.log('SHUFFLE ID', _shuffleId)

            /* Retrieve the block from activity. */
            const block = this.getStats.shuffle.activity.find(block => block.id === _shuffleId)
            // console.log('BLOCK', block)

            /* Set transactions. */
            const txs = block.txs
            // console.log('TXS', txs)

            /* Open each window in explorer. */
            // FIXME: We cannot open multiple window, so provide a modal
            //        for the user to open a transaction individually.
            // txs.forEach(tx => {
            //     window.open(`https://explorer.bitcoin.com/bch/tx/${tx.txid}`)
            // })
            window.open(`https://explorer.bitcoin.com/bch/tx/${txs[0].txid}`)
        },

        /**
         * Format Fiat
         */
        formatFiat(_satoshis) {
            /* Set fiat value. */
            const value = _satoshis / 100000000 * this.ticker

            if (value < 1) {
                return `${numeral(value).format('$0,0.00[00]')}`
            } else {
                return `${numeral(value).format('$0,0.00')}`
            }
        },

        /**
         * Format Value
         */
        formatValue(_value) {
            return `${numeral(_value / 100000000).format('0,0.0[000]')} BCH`
        },

        /**
         * Update Ticker
         */
        async updateTicker() {
            this.ticker = await Nito.Markets.getTicker('BCH')
        },

    },
    created: async function () {
        /* Update ticker. */
        this.updateTicker()

        /* Set number of pages. */
        this.numPages = Math.ceil(this.getStats.shuffle.activity.length / 10)

        /* Set items per pages. */
        this.itemsPerPage = 10

        /* Set starting page. */
        this.page = 1
    },
}
</script>

<style scoped>
.txItem {
    cursor: pointer;
}
</style>
