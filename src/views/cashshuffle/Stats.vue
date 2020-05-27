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
            title="Activity for the last 144 blocks (~24 hours)"
            class="px-5 py-3"
        >
            <v-simple-table>
                <thead>
                    <tr>
                        <th class="primary--text">
                            ID
                        </th>
                        <th class="text-center primary--text">
                            # Shuffles
                        </th>
                        <th class="text-center primary--text">
                            Inputs (min/max)
                        </th>
                        <th class="text-center primary--text">
                            Shuffle Amount
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
                            <strong>{{shuffle.txs[0].inputs.min}}</strong> |
                            <strong>{{shuffle.txs[0].inputs.max}}</strong>
                        </td>
                        <td class="text-center">
                            <strong>{{shuffle.txs[0].inputs.min - 270}}</strong>
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
                console.log('DATA', data)

                /* Return data. */
                return data
            } else {
                return null
            }
        }
    },
    created: async function () {
        /* Initialize start key. */
        const startKey = 636800

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
