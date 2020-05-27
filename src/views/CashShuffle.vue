<template>
    <v-container id="timeline" fluid tag="section">

        <v-btn-toggle>
            <v-btn :color="tab.stats" @click="toggle('stats')">Statistics</v-btn>
            <v-btn :color="tab.pools" @click="toggle('pools')">Pools</v-btn>
            <v-btn :color="tab.security" @click="toggle('security')">Security</v-btn>
        </v-btn-toggle>

        <v-row v-if="tab.stats">
            <StatsView />
        </v-row>

        <v-row v-if="tab.pools">
            <PoolsView />
        </v-row>

        <v-row v-if="tab.security">
            <SecurityView />
        </v-row>

    </v-container>
</template>

<script>
/* Import components. */
import PoolsView from './cashshuffle/Pools'
import SecurityView from './cashshuffle/Security'
import StatsView from './cashshuffle/Stats'

export default {
    components: {
        PoolsView,
        SecurityView,
        StatsView,
    },
    data: () => ({
        tab: {
            stats: 'secondary',
            pools: '',
            security: '',
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
                security: '',
            }

            /* Set active tab. */
            this.tab[_tab] = 'secondary'
        },
    },
}
</script>
