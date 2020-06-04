<template>
    <v-container fluid tag="section">

        <History />

        <v-row>
            <v-col>
                There are a total of 8 CashShuffle tiers, ranging from
                <br /><strong>0.0001 BTC | $0.0250</strong>
                <br />to
                <br /><strong>1,000 BTC | $250,000</strong>
            </v-col>
        </v-row>

        <hr />

        <Last100 />

    </v-container>
</template>

<script>
/* Import components. */
import History from './stats/History'
import Last100 from './stats/Last100'

export default {
    components: {
        History,
        Last100,
    },
    data: () => {
        return {
            //
        }
    },
    computed: {
        //
    },
    methods: {
        //
    },
    created: async function () {
        //
    },
}
</script>

<style lang="sass" scoped>
#style
    .class
        color: white
</style>
