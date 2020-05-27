<template>
    <v-container id="timeline" fluid tag="section">

        <v-btn-toggle>
            <v-btn :color="tab.monitor" @click="toggle('monitor')">Monitor</v-btn>
            <v-btn :color="tab.pools" @click="toggle('pools')">Pools</v-btn>
            <v-btn :color="tab.stats" @click="toggle('stats')">Statistics</v-btn>
        </v-btn-toggle>

        <v-row>
            <v-col class="ml-auto mr-auto" md="8">
                <base-material-alert
                    color="info"
                    dark
                    dismissible
                    icon="mdi-bell"
                >
                    <p>
                        <strong>Nito Cloud is coming soon!</strong>
                        Please take a look at our <a href="https://docs.nito.exchange/ROADMAP.html" target="_blank"><strong>Development Roadmap</strong></a> to learn how you can help bring privacy to more Bitcoin Cash users today.
                    </p>
                </base-material-alert>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-timeline align-top>
                    <v-timeline-item
                        v-for="(timeline, i) in timelines"
                        :key="i"
                        :color="timeline.color"
                        :icon="timeline.icon"
                        fill-dot
                        large
                    >
                        <v-card class="pa-6">
                            <v-chip
                                :color="timeline.color"
                                class="overline mb-3"
                                small
                            >
                                {{ timeline.chip }}
                            </v-chip>

                            <p
                                class="subtitle-1 font-weight-light"
                                v-text="timeline.text"
                            />

                            <div
                                class="text-uppercase body-2"
                                v-text="timeline.subtext"
                            />

                            <template v-if="timeline.action">
                                <v-divider class="mb-3" />

                                <v-menu
                                    v-model="menu"
                                    bottom
                                    offset-y
                                    origin="top left"
                                    right
                                    transition="scale-transition"
                                >
                                    <template v-slot:activator="{ attrs, on }">
                                        <v-btn
                                            v-bind="attrs"
                                            :color="timeline.action"
                                            large
                                            rounded
                                            v-on="on"
                                        >
                                            <v-icon
                                                left
                                                v-text="timeline.actionIcon"
                                            />

                                            <v-icon right>
                                                {{ menu ? 'mdi-menu-up' : 'mdi-menu-down' }}
                                            </v-icon>
                                        </v-btn>
                                    </template>

                                    <v-sheet>
                                        <v-list>
                                            <v-list-item
                                                v-for="a in timeline.actions"
                                                :key="a"
                                                link
                                            >
                                                <v-list-item-title v-text="a" />
                                            </v-list-item>
                                        </v-list>
                                    </v-sheet>
                                </v-menu>
                            </template>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    data: () => ({
        tab: {
            monitor: 'secondary',
            pools: '',
            stats: '',
        },
        menu: false,
        timelines: [
            {
                chip: 'Waiting for an order...',
                color: 'success',
                icon: 'mdi-clock-outline',
                text: `Nito Cloud is the fastest and easiest way to "elaborately" anonymize your Bitcoin Cash (BCH); either while you're on-the-go (from your preferred Android or iOS wallet) OR from your home PC (using the Chrome or Brave web browser).`,
                action: 'success',
                actionIcon: 'mdi-rotate-orbit',
                actions: [
                    'Create a NEW transaction',
                    'Learn more about Nito Cloud',
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

<style lang="sass" scoped>
//
</style>
