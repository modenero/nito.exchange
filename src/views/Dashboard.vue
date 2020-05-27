<template>
    <v-container id="dashboard" fluid tag="section">
        <v-row>
            <v-col cols="12" sm="6" lg="3">
                <base-material-stats-card
                    color="#4cca47"
                    icon="mdi-currency-usd"
                    title="BCH / USD"
                    value="$227.79"
                    sub-icon="mdi-chart-line"
                    sub-icon-color="green"
                    sub-text="+2.7% in the last 24hrs"
                />
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <base-material-stats-card
                    color="blue"
                    icon="mdi-wallet-travel"
                    title="My Purse"
                    value="$1,345"
                    sub-icon="mdi-pulse"
                    sub-text="in 4 active sesions"
                />
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <base-material-stats-card
                    color="purple"
                    icon="mdi-pulse"
                    title="My Sessions"
                    value="23"
                    sub-icon="mdi-calendar"
                    sub-text="since May 15, 2020"
                />
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <base-material-stats-card
                    color="orange"
                    icon="mdi-account-voice"
                    title="Peers Online"
                    value="28"
                    sub-icon="mdi-clock"
                    sub-text="updated 20 seconds ago"
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6">
                <base-material-card color="warning" class="px-5 py-3">
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Need a Quick Exchange?
                        </div>

                        <div class="subtitle-1 font-weight-light">
                            There are 30+ peers waiting for you...
                        </div>
                    </template>

                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        <v-dialog v-model="dialog" width="500">
                              <template v-slot:activator="{ on }">
                                <v-btn
                                  color="red lighten-2"
                                  dark
                                  v-on="on"
                                >
                                  Click Me
                                </v-btn>
                              </template>

                              <v-card>
                                <v-card-title
                                  class="headline grey lighten-2"
                                  primary-title
                                >
                                  Privacy Policy
                                </v-card-title>

                                <v-card-text>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="primary"
                                    text
                                    @click="dialog = false"
                                  >
                                    I accept
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                    </v-card-text>
                </base-material-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet :color="colors[i]" height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="display-3">
                                    {{ slide }} Slide
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <DashboardCharts />

        <v-row>
            <v-col cols="12" md="6">
                <DashboardStats />
            </v-col>

            <v-col cols="12" md="6">
                <DashboardFeed />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components: {
        DashboardCharts: () => import('./dashboard/Charts'),
        DashboardFeed: () => import('./dashboard/Feed'),
        DashboardStats: () => import('./dashboard/Stats'),
    },
    data: () => {
        return {
            list: null,
            colors: [
              'indigo',
              'pink darken-2',
              'deep-purple accent-4',
            ],
            slides: [
              'First',
              'Second',
              'Third',
            ],
            dialog: false,
        }
    },

    methods: {
        // complete (index) {
        //     this.list[index] = !this.list[index]
        // },
    },
    created: function () {
        this.list = {
            0: false,
            1: false,
            2: false,
        }

    },
}
</script>


<style lang="sass">
//
</style>
