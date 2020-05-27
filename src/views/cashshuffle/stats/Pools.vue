<template>
    <v-row>
        <v-col cols="12" lg="4" v-for="pool of pools" :key="pool.id">
            <base-material-chart-card
                :data="emailsSubscriptionChart.data"
                :options="emailsSubscriptionChart.options"
                :responsive-options="emailsSubscriptionChart.responsiveOptions"
                :color="pool.color"
                hover-reveal
                type="Bar"
            >
                <h4 class="card-title font-weight-light mt-2 ml-2">
                    {{pool.title}}
                </h4>

                <p class="d-inline-flex font-weight-light ml-2 mt-1">
                    <v-icon color="green" small>
                        mdi-arrow-up
                    </v-icon>

                    <span class="green--text mr-1">25%</span>
                    increase in today's shuffles
                </p>

                <template v-slot:actions>
                    <v-icon class="mr-1" small>
                        mdi-clock-outline
                    </v-icon>

                    <span class="caption grey--text font-weight-light">
                        updated 10 minutes ago
                    </span>
                </template>
            </base-material-chart-card>
        </v-col>
    </v-row>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

/* Import modules. */
import numeral from 'numeral'

export default {
    data: () => {
        return {
            dailySalesChart: null,
            dataCompletedTasksChart: null,
            emailsSubscriptionChart: null,

            ticker: null,
            pools: [],
        }
    },
    computed: {
        ...mapGetters('blockchain', [
            'getTicker',
            // 'getSessions',
        ]),

    },
    methods: {
        ...mapActions('purse', [
            // 'createSession',
        ]),

        formatValue(_value) {
            const formatted = `${(_value / 100000000).toFixed(4)} BCH`

            return formatted
        },

        displayFiat(_value) {
            const formatted = numeral(_value * this.ticker / 10000000000).
                format('$0,0[.]00[00]')

            return formatted
        },

    },
    created: async function () {
        /* Set ticker. */
        this.ticker = await this.getTicker('USD')
        console.log('POOLS (usd):', this.ticker)

        /* Add 100 bits. */
        this.pools.push({
            id: '10000',
            title: `100 Bits | ${this.displayFiat(10000)}`,
            color: '#5E75C2',
        })

        /* Add 1,000 bits. */
        this.pools.push({
            id: '100000',
            title: `1,000 Bits | ${this.displayFiat(100000)}`,
            color: '#BB77C4',
        })

        /* Add 10K bits. */
        this.pools.push({
            id: '1000000',
            title: `10K Bits | ${this.displayFiat(1000000)}`,
            color: '#FD7EAC',
        })

        /* Add 0.1 BCH. */
        this.pools.push({
            id: '10000000',
            title: `0.1 BCH | ${this.displayFiat(10000000)}`,
            color: '#FF9987',
        })

        /* Add 1 BCH. */
        this.pools.push({
            id: '100000000',
            title: `1 BCH | ${this.displayFiat(100000000)}`,
            color: '#FFC66A',
        })

        /* Add 10 BCH. */
        this.pools.push({
            id: '1000000000',
            title: `10 BCH | ${this.displayFiat(1000000000)}`,
            color: '#F9F871',
        })

        /* Add 100 BCH. */
        this.pools.push({
            id: '10000000000',
            title: `100 BCH | ${this.displayFiat(10000000000)}`,
            color: '#C05864',
        })

        /* Add 1,000 BCH. */
        this.pools.push({
            id: '100000000000',
            title: `1,000 BCH | ${this.displayFiat(100000000000)}`,
            color: '#D2A517',
        })

        this.emailsSubscriptionChart = {
            data: {
                labels: [ 'Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju' ],
                series: [
                    [ 542, 443, 320, 780, 553, 453 ],
                ],
            },
            options: {
                axisX: {
                    showGrid: false,
                },
                low: 0,
                high: 1000,
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

    },
}
</script>
