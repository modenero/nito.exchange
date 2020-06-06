<template>
    <v-container id="dashboard" fluid tag="section">
        <Highlights />

        <v-row>
            <QuickExchange />
            <Articles />
        </v-row>

        <v-row>
            <Notes />
            <Sessions />
        </v-row>

        <!-- <Charts /> -->

        <v-row>
            <ShuffleSpotlight />
            <FusionSpotlight />
        </v-row>
    </v-container>
</template>

<script>
export default {
    components: {
        Articles: () => import('./dashboard/Articles'),
        // Charts: () => import('./dashboard/Charts'),
        FusionSpotlight: () => import('./dashboard/FusionSpotlight'),
        Highlights: () => import('./dashboard/Highlights'),
        Notes: () => import('./dashboard/Notes'),
        Sessions: () => import('./dashboard/Sessions'),
        ShuffleSpotlight: () => import('./dashboard/ShuffleSpotlight'),
        QuickExchange: () => import('./dashboard/QuickExchange'),
    },
    data: () => {
        return {
            //
        }
    },

    methods: {
        //
    },
    created: function () {
        //
    },
}
</script>


<style lang="sass">
// 
</style>
