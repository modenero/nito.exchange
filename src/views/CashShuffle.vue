<template>
    <v-container id="timeline" fluid tag="section">

        <v-btn-toggle>
            <v-btn :color="tab.stats" @click="toggle('stats')">Statistics</v-btn>
            <v-btn :color="tab.pools" @click="toggle('pools')">Pools</v-btn>
            <v-btn :color="tab.guide" @click="toggle('guide')">Guide</v-btn>
        </v-btn-toggle>

        <v-row v-if="tab.stats">
            <Stats />
        </v-row>

        <v-row v-if="tab.pools">
            <Pools />
        </v-row>

        <v-row v-if="tab.guide">
            <Guide />
        </v-row>

    </v-container>
</template>

<script>
/* Import components. */
import Guide from './cashshuffle/Guide'
import Pools from './cashshuffle/Pools'
import Stats from './cashshuffle/Stats'

export default {
    components: {
        Guide,
        Pools,
        Stats,
    },
    data: () => ({
        tab: {
            stats: 'secondary',
            pools: '',
            guide: '',
        },
    }),
    methods: {
        /**
         * Toggle Tab
         */
        toggle(_tab) {
            /* Reset tabs. */
            this.tab = {
                stats: '',
                pools: '',
                guide: '',
            }

            /* Set active tab. */
            this.tab[_tab] = 'secondary'
        },
    },
}
</script>
