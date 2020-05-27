<template>
    <v-container id="timeline" fluid tag="section">

        <v-btn-toggle>
            <v-btn :color="tab.stats" @click="toggle('stats')">Statistics</v-btn>
            <v-btn :color="tab.pools" @click="toggle('pools')">Pools</v-btn>
            <v-btn :color="tab.monitor" @click="toggle('monitor')">Monitor</v-btn>
        </v-btn-toggle>

        <v-row v-if="tab.monitor">
            <monitor-view />
        </v-row>

        <v-row v-if="tab.pools">
            <pools-view />
        </v-row>

        <v-row v-if="tab.stats">
            <stats-view />
        </v-row>

    </v-container>
</template>

<script>
/* Import components. */
import MonitorView from './cashshuffle/Monitor'
import PoolsView from './cashshuffle/Pools'
import StatsView from './cashshuffle/Stats'

export default {
    components: {
        MonitorView,
        PoolsView,
        StatsView,
    },
    data: () => ({
        tab: {
            monitor: '',
            pools: '',
            stats: 'secondary',
        },
    }),
    methods: {
        /**
         * Toggle Tab
         */
        toggle(_tab) {
            /* Reset tabs. */
            this.tab = {
                monitor: '',
                pools: '',
                stats: '',
            }

            /* Set active tab. */
            this.tab[_tab] = 'secondary'
        },
    },
}
</script>
