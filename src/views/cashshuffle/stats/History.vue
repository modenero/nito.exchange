<template>
    <v-row>
        <v-col cols="12" sm="6">
            <base-material-chart-card
                :data="volumeChart.data"
                :options="volumeChart.options"
                :responsive-options="volumeChart.responsiveOptions"
                color="#669999"
                hover-reveal
                type="Bar"
            >
                <h4 class="card-title font-weight-light mt-2 ml-2">
                    Weekly Shuffle Transactions
                </h4>

                <p class="d-inline-flex font-weight-light ml-2 mt-1">
                    <v-icon color="green" small>
                        mdi-arrow-up
                    </v-icon>

                    <span class="green--text mr-1">12.5%</span>
                    increase in volume this week
                </p>

                <template v-slot:actions>
                    <v-icon class="mr-1" small>
                        mdi-clock-outline
                    </v-icon>

                    <span class="caption grey--text font-weight-light">
                        {{displayLastUpdate}}
                    </span>
                </template>
            </base-material-chart-card>
        </v-col>

        <v-col cols="12" sm="6">
            <base-material-chart-card
                :data="valueChart.data"
                :options="valueChart.options"
                :responsive-options="valueChart.responsiveOptions"
                color="#996699"
                hover-reveal
                type="Line"
            >
                <h4 class="card-title font-weight-light mt-2 ml-2">
                    Weekly Shuffle Value (in BCH)
                </h4>

                <p class="d-inline-flex font-weight-light ml-2 mt-1">
                    <v-icon color="green" small>
                        mdi-arrow-up
                    </v-icon>

                    <span class="green--text mr-1">25%</span>
                    increase in value this week
                </p>

                <template v-slot:actions>
                    <v-icon class="mr-1" small>
                        mdi-clock-outline
                    </v-icon>

                    <span class="caption grey--text font-weight-light">
                        {{displayLastUpdate}}
                    </span>
                </template>
            </base-material-chart-card>
        </v-col>
    </v-row>
</template>

<script>
/* Initialize vuex. */
import { mapGetters } from 'vuex'

/* Import modules. */
import moment from 'moment'
import numeral from 'numeral'

export default {
    data: () => {
        return {
            // activity: null,
            valueChart: null,
            volumeChart: null,
            updatedAt: null,
        }
    },
    computed: {
        ...mapGetters('cloud', [
            'getStats',
        ]),

        displayLastUpdate() {
            if (this.updatedAt) {
                return `last updated ${moment.unix(this.updatedAt).fromNow()}`
            } else {
                return 'loading...'
            }
        },
    },
    methods: {
        formatValue(_value) {
            const formatted = `${(_value / 100000000).toFixed(4)} BCH`

            return formatted
        },

        getWeekStats(_weeksAgo) {
            const data = this.getStats.shuffle.activity
            // console.log('HISTORICAL DATA:', data)

            /* Validate data. */
            if (!data) {
                return {
                    labels: [],
                    series: [],
                }
            }

            let weekEnd = null

            const weekStart = moment().subtract(_weeksAgo, 'weeks').weekday(0)
            if (_weeksAgo > 0) {
                weekEnd = moment().subtract((_weeksAgo - 1), 'weeks').weekday(0)
            } else {
                weekEnd = moment()
            }
            // const weekStart = moment().weekday(0)
            // console.log('WEEK START-1:', weekStart.format('llll'), weekEnd.format('llll'))

            const curWeek = data.filter((block) => {
                /* Update timestamp. */
                if (!this.updatedAt || block.timestamp > this.updatedAt) {
                    this.updatedAt = block.timestamp
                }

                return (block.timestamp > weekStart.unix()) &&
                    (block.timestamp < weekEnd.unix())
            })
            // console.log('HISTORICAL DATA (curWeek):', curWeek)

            if (curWeek.length === 0) {
                return null
            }

            const eventsNum = curWeek.reduce((acc, block) => {
                const numTxs = block.txs.length
                return numTxs + parseInt(acc) || 0
            })
            // console.log('HISTORICAL DATA (eventsNum):', eventsNum)

            const eventsVal = curWeek.reduce((acc, block) => {
                let txVal = 0

                block.txs.forEach(tx => {
                    txVal += tx.outputs.value
                })

                return txVal + parseInt(acc) || 0
            })
            // console.log('HISTORICAL DATA (eventsVal):', eventsVal)

            /* Initailize label. */
            let label = ''

            if (_weeksAgo === 0) {
                // label = 'This week'
                label = 'Now'
            } else {
                // label = `Week of ${weekStart.format('M/D')}`
                // label = `Wk ${weekStart.format('M/D')}`
                label = weekStart.format('M/D')
            }

            return {
                label,
                eventsNum,
                eventsVal,
            }
        },

        /**
         * Parse (Activity) Data
         */
        async parseData() {
            /* Set six months (in blocks). */
            // const sixMosBlks = 25920

            /**
             * Delay (Execution)
             */
            const _delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

            /* Calculate this week's stats. */
            // this.valueChart.data.labels = this.getWeekStats(1).labels
            // this.valueChart.data.series = this.getWeekStats(1).series

            /* Validate chart series. */
            if (!this.volumeChart.data.series[0]) {
                this.volumeChart.data.series[0] = []
            }

            /* Initialize high mark. */
            let high = this.volumeChart.options.high

            for (let i = 0; i < 8; i++) {
                const stats = this.getWeekStats(i)

                if (!stats) {
                    break
                }

                this.volumeChart.data.labels.unshift(stats.label)
                this.volumeChart.data.series[0].unshift(stats.eventsNum)

                if (stats.eventsNum > high) {
                    high = stats.eventsNum + 100 // TODO: Round to 100

                    /* Set new high mark. */
                    this.volumeChart.options.high = high
                }

                await _delay(250)
            }

            /* Validate chart series. */
            if (!this.valueChart.data.series[0]) {
                this.valueChart.data.series[0] = []
            }

            /* Initialize high mark. */
            high = this.valueChart.options.high

            for (let i = 0; i < 8; i++) {
                const stats = this.getWeekStats(i)

                if (!stats) {
                    break
                }

                this.valueChart.data.labels.unshift(stats.label)
                this.valueChart.data.series[0].unshift(stats.eventsVal)

                if (stats.eventsVal > high) {
                    high = stats.eventsVal + 100 // TODO: Round to 100

                    /* Set new high mark. */
                    this.valueChart.options.high = high
                }

                await _delay(250)
            }
        },

    },
    created: async function () {
        this.valueChart = {
            data: {
                labels: [],
                series: [],
            },
            options: {
                axisY: {
                    labelInterpolationFnc: function (_value) {
                        return `${numeral(_value / 100000000).format('0.0a')}`
                    }
                },
                lineSmooth: this.$chartist.Interpolation.cardinal({
                    tension: 0,
                }),
                low: 0,
                high: 50,
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
        }

        this.volumeChart = {
            data: {
                labels: [],
                series: [],
            },
            options: {
                // showArea: true,
                axisX: {
                    showGrid: false,
                },
                low: 0,
                high: 100,
                chartPadding: {
                    top: 0,
                    right: 5,
                    bottom: 0,
                    left: 0,
                },
            },
            responsiveOptions: [
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0]
                        },
                    },
                }],
            ],
        }

        /* Initialize start key. */
        // const startKey = await this.bitbox.Blockchain.getBlockCount() - sixMosBlks

        /* Initialize activity. */
        // let activity = null

        /* Initialize activity. */
        // activity = await superagent
        //     .get(`https://cloud.nito.exchange/v1/cashshuffle/activity/${startKey}`)
        //     .catch(err => console.error(err))
        // console.log('HISTORICAL STATS (activity):', activity)

        /* Initailize body. */
        // let body = null

        /* Validate activity. */
        // if (activity && activity.body) {
        //     body = activity.body
        // }

        /* Validate body. */
        // if (!body) {
        //     return console.error('Failed to retrieve CashShuffle activity.')
        // }

        /* Set activity. */
        // this.activity = body

        /* Parse (activity) data. */
        this.parseData()
    },
    mounted: function () {
        //
    },
}
</script>
