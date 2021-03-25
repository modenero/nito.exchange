<template>
    <v-container fluid>

        <base-material-card
            icon="mdi-rotate-orbit"
            title="My Sessions"
            class="px-5 py-3"
        >
            <v-simple-table>
                <thead>
                    <tr>
                        <th class="text-center primary--text">
                            Pool Id
                        </th>
                        <th class="text-center primary--text">
                            Minimum BCH
                        </th>
                        <th class="text-center primary--text">
                            Minimum Fiat
                        </th>
                        <th class="text-center primary--text">
                            Current Waiting Pool
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="pool of pool.data" :key="pool.poolid">
                        <td class="text-center">
                            {{pool.poolid}}
                        </td>
                        <td class="text-center">
                            {{pool.minimumbch}}
                        </td>
                        <td class="text-center">
                            {{pool.minimumfiat}}
                        </td>
                        <td class="text-center">
                            {{pool.currentwaitingpool}}
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </base-material-card>

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

    </v-container>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

/* Import modules. */
import Nito from 'nitojs'
import numeral from 'numeral'
import superagent from 'superagent'

export default {
    data: () => ({
        tab: {
            all: 'secondary',
            shuffles: '',
            fusions: '',
        },

        dailySalesChart: null,
        dataCompletedTasksChart: null,
        emailsSubscriptionChart: null,

        ticker: null,

        pool: {
            title: 'CashShuffle Pool Statistics',
            subTitle: 'loading...',
            name: 'shuffle.servo.cash:8080',
            uri: 'https://shuffle.servo.cash:8080/stats',
            columns: [
                'Pool Id',
                'Minimum BCH',
                'Minimum Fiat',
                'Current Waiting Pool'
            ],
            data: [],
            connections: 0,
        },
        pools: [],
    }),
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

        loadPool() {
            /* Set server URI. */
            const serverUri = this.pool.uri

            superagent
                .get(serverUri)
                .set('accept', 'json')
                .end(async (err, data) => {
                    if (err) {
                        return console.error('API ERROR:', err)
                    }

                    console.log('API response:', data)

                    /* Filter production pools. */
                    const stats = data.body.pools.filter(pool => {
                        return pool.version === 300
                    })

                    /* Sort by pool tier (amount). */
                    stats.sort((a, b) => {
                        return a.amount - b.amount
                    })

                    /* Set subtitle. */
                    this.pool.subTitle = `Your current pool is [ ${this.pool.name} ] serving [ ${data.body.connections} ] active connections`

                    // console.log('Stats:', stats)

                    /* Clear pool data. */
                    this.pool.data = []

                    stats.forEach((pool, index) => {
                        this.pool.data.push({
                            poolid: `#${(index + 1)}`,
                            minimumbch: this.formatBCH(pool.amount),
                            minimumfiat: this.formatPrice(pool.amount),
                            currentwaitingpool: `${pool.members} of 5`
                        })
                    })

                })

        },

        displayFiat(_value) {
            const formatted = numeral(_value * this.ticker / 100000000).
                format('$0,0[.]00[00]')

            return formatted
        },

        /**
         * Format BCH
         */
        formatBCH: function (_satoshis) {
            /* Set value. */
            const value = (_satoshis / 100000000)

            /* Return formatted value. */
            return numeral(value).format('0,0.00[00]')
        },

        /**
         * Format Price
         */
        formatPrice: function (_satoshis) {
            /* Set value. */
            const value = (_satoshis / 100000000) * this.ticker

            /* Return formatted value. */
            if (value < 1) {
                return numeral(value).format('$0,0.00[00]')
            } else {
                return numeral(value).format('$0,0.00')
            }
        },

        /**
         * Update Price
         */
        async updatePrice() {
            try {
                /* Request current price. */
                const current = await Nito.Markets.getTicker('BCH', 'USD')

                /* Set current price. */
                this.ticker = current
            } catch (err) {
                console.error(err)
            }
        },

        initPools() {
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

        }

    },

    created: async function () {
        /* Load / set active pool. */
        this.loadPool()

        /* Update ticker price. */
        await this.updatePrice()

        /* Initialize pools. */
        this.initPools()

    },
}
</script>
