<template>
    <v-container fluid tag="section">

        <History />

        <!-- <v-row>
            <v-col>
                There are a total of 8 CashShuffle tiers, ranging from
                <br /><strong>0.0001 BTC | $0.0250</strong>
                <br />to
                <br /><strong>1,000 BTC | $250,000</strong>
            </v-col>
        </v-row> -->

        <!-- <hr /> -->

        <ListView />

    </v-container>
</template>

<script>
/* Import components. */
import History from './stats/History'
import ListView from './stats/ListView'

export default {
    components: {
        History,
        ListView,
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
