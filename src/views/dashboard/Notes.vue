<template>
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
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        //
    },
    data() {
        return {
            //
        }
    },
    computed: {
        ...mapGetters('purse', [
            // 'getActiveSessionId',
            // 'getSessions',
        ]),

    },
    methods: {
        ...mapActions('purse', [
            // 'createSession',
        ]),

    },
    created: function () {
        //
    },
}
</script>

<style lang="sass" scoped>
#style
    .class
        color: white
</style>
