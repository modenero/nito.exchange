<template>
    <v-row>
        <v-col cols="12" sm="6" lg="3">
            <base-material-stats-card
                color="#4cca47"
                icon="mdi-currency-usd"
                title="BCH / USD"
                :value="currentPrice"
                sub-icon="mdi-chart-line"
                sub-icon-color="green"
                sub-text="+2.7% in the last 24hrs"
            />
        </v-col>

        <v-col cols="12" sm="6" lg="3">
            <base-material-stats-card
                color="blue"
                icon="mdi-wallet-travel"
                title="My Purse"
                value="$1,345"
                sub-icon="mdi-pulse"
                sub-text="in 4 active sesions"
            />
        </v-col>

        <v-col cols="12" sm="6" lg="3">
            <base-material-stats-card
                color="purple"
                icon="mdi-pulse"
                title="My Sessions"
                value="23"
                sub-icon="mdi-calendar"
                sub-text="since May 15, 2020"
            />
        </v-col>

        <v-col cols="12" sm="6" lg="3">
            <base-material-stats-card
                color="orange"
                icon="mdi-account-voice"
                title="Peers Online"
                value="28"
                sub-icon="mdi-clock"
                sub-text="updated 20 seconds ago"
            />
        </v-col>
    </v-row>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

/* Import components. */
import Nito from 'nitojs'
import numeral from 'numeral'

export default {
    components: {
        //
    },
    data() {
        return {
            ticker: null,
        }
    },
    computed: {
        ...mapGetters('purse', [
            // 'getActiveSessionId',
            // 'getSessions',
        ]),

        currentPrice() {
            if (this.ticker) {
                return numeral(this.ticker).format('$0,0.00')
            } else {
                return '$0.00'
            }
        }

    },
    methods: {
        ...mapActions('purse', [
            // 'createSession',
        ]),

        /**
         * Update Ticker
         */
        async updateTicker() {
            this.ticker = await Nito.Markets.getTicker('BCH')
        },

    },
    created: function () {
        /* Update ticker. */
        this.updateTicker()

    },
}
</script>

<style lang="sass" scoped>
#style
    .class
        color: white
</style>
