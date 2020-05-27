<template>
    <v-container id="timeline" fluid tag="section">

        <v-btn-toggle>
            <v-btn :color="tab.stats" @click="toggle('stats')">Statistics</v-btn>
            <v-btn :color="tab.pools" @click="toggle('pools')">Pools</v-btn>
            <v-btn :color="tab.monitor" @click="toggle('monitor')">Security</v-btn>
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
// import MonitorView from './cashfusion/Monitor'
// import PoolsView from './cashfusion/Pools'
import StatsView from './cashfusion/Stats'

export default {
    components: {
        // MonitorView,
        // PoolsView,
        StatsView,
    },
    data: () => ({
        tab: {
            monitor: '',
            pools: '',
            stats: 'secondary',
        },
        menu: false,
        timelines: [
            {
                chip: 'Waiting for a coin...',
                color: 'success',
                icon: 'mdi-clock-outline',
                text: `CashFusion is the state-of-the-art in Bitcoin Cash privacy protocols; allowing you to specify how you want your coins returned to you.`,
                action: 'success',
                actionIcon: 'mdi-rotate-orbit',
                actions: [
                    'Start a NEW fusion',
                    'Learn more about CashFusion',
                ],
            },
        ],
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
