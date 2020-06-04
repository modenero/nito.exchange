<template>
    <v-container>
        <base-material-card
            icon="mdi-rotate-orbit"
            title="Last 100 CashShuffle transactions"
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
                    <tr v-for="shuffle of shuffleActivity" :key="shuffle.id">
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
/* Initialize vuex. */
import { mapGetters } from 'vuex'

/* Import modules. */
import moment from 'moment'

export default {
    data: () => {
        return {
            activity: null,
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
                const activity = this.getStats.shuffle.activity

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
        }
    },
    methods: {
        formatValue(_value) {
            const formatted = `${(_value / 100000000).toFixed(4)} BCH`

            return formatted
        },

    },
    created: async function () {
        //
    },
}
</script>
