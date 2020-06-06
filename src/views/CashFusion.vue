<template>
    <v-container id="timeline" fluid tag="section">

        <v-btn-toggle>
            <v-btn :color="tab.stats" @click="toggle('stats')">Statistics</v-btn>
            <v-btn :color="tab.tiers" @click="toggle('tiers')">Tiers</v-btn>
            <v-btn :color="tab.guide" @click="toggle('guide')">Guide</v-btn>
        </v-btn-toggle>

        <v-row v-if="tab.guide">
            <Stats />
        </v-row>

        <v-row v-if="tab.tiers">
            <Tiers />
        </v-row>

        <v-row v-if="tab.stats">
            <Guide />
        </v-row>

    </v-container>
</template>

<script>
/* Import components. */
import Guide from './cashfusion/Guide'
import Tiers from './cashfusion/Tiers'
import Stats from './cashfusion/Stats'

export default {
    components: {
        Guide,
        Tiers,
        Stats,
    },
    data: () => ({
        tab: {
            stats: 'secondary',
            tiers: '',
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
                guide: '',
                tiers: '',
                stats: '',
            }

            /* Set active tab. */
            this.tab[_tab] = 'secondary'
        },
    },
}
</script>
