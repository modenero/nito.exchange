<template>
    <v-container id="dashboard" fluid tag="section">
        <Highlights />

        <v-row>
            <QuickExchange />
            <Articles />
        </v-row>

        <v-row>
            <v-col cols="12" sm="4">
                <v-sheet
                    elevation="3"
                    class="mx-auto pa-5"
                    height="515"
                >
                    Nostrud cohaerescant iis fabulas in sint arbitrantur laborum tamen commodo e
                    culpa senserit relinqueret, ex veniam ingeniis coniunctione, voluptate iis
                    offendit ad officia noster pariatur qui velit non quamquam in si qui magna
                    senserit. Noster ab de quorum expetendis, proident anim nam nostrud
                    concursionibus, se legam ut quem, constias eram quem consequat summis. Id e
                    instituendarum.Appellat labore consequat an quis vidisse in mentitum, laborum
                    ipsum possumus ex labore ut iis noster nescius. Se irure velit iis consequat,
                    deserunt legam qui mandaremus tractavissent, quem cupidatat transferrem, malis
                    offendit ita familiaritatem, do quis cohaerescant qui quid deserunt hic
                    praesentibus ex commodo eu iudicem de se constias praetermissum. Hic tamen ubi
                    fore, e quorum eruditionem.
                </v-sheet>
            </v-col>

            <v-col cols="12" sm="8">
                <Sessions />
            </v-col>
        </v-row>

        <!-- <Charts /> -->

        <v-row>
            <v-col cols="12" sm="6">
                <ShuffleSpotlight />
            </v-col>

            <v-col cols="12" sm="6">
                <FusionSpotlight />
            </v-col>
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
.carousel
    cursor: pointer
</style>
