<template>
    <v-container fluid tag="section">

        <History />

        <Charts />

        <Last100 />

    </v-container>
</template>

<script>
/* Import components. */
import Charts from './stats/Charts'
import History from './stats/History'
import Last100 from './stats/Last100'

export default {
    components: {
        Charts,
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
