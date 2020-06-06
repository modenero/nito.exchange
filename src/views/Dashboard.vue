<template>
    <v-container id="dashboard" fluid tag="section">
        <Highlights />

        <v-row>
            <v-col cols="12" sm="6">
                <base-material-card color="warning">
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Need a Quick Exchange?
                        </div>

                        <div class="subtitle-1 font-weight-light">
                            Bitcoin privacy is just moments away...
                        </div>
                    </template>

                    <v-card-text>
                        <p>
                            Quickly exchange your coin(s) with other peers, waiting in one of the community privacy pools.
                        </p>
                        <v-row>
                            <v-col cols="12" sm="6" class="text-center">
                                <v-dialog v-model="dialog" width="500">
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                            color="red lighten-2"
                                            dark
                                            v-on="on"
                                        >
                                            Quick Shuffle
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

                                <div class="mt-2">
                                    <small color="danger">average time &lt;1 min</small>
                                </div>
                            </v-col>

                            <v-col cols="12" sm="6" class="text-center">
                                <v-dialog v-model="dialog" width="500">
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                            color="red lighten-2"
                                            dark
                                            v-on="on"
                                        >
                                            Quick Fusion
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

                                <div class="mt-2">
                                    <small class="text-danger">average time ~15 mins</small>
                                </div>
                            </v-col>

                        </v-row>
                    </v-card-text>
                </base-material-card>
            </v-col>

            <v-col cols="12" sm="6">
                <v-carousel class="carousel" cycle height="315" hide-delimiter-background show-arrows-on-hover>

                    <!-- <v-carousel-item>
                        <v-sheet color="indigo" height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="display-3">
                                    Nito Exchange
                                    <br />Hush Your Money™
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item> -->

                    <v-carousel-item>
                        <v-sheet color="indigo" height="100%" @click="openArticle('https://www.coindesk.com/coinbase-analytics-blockchain-analysis-crypto-government')">
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="display-3">
                                    Coinbase Offers US Feds
                                    <br />New Crypto Surveillance Tools
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-sheet color="pink darken-2" height="100%">
                            <img src="https://i.imgur.com/NGxy53Y.png" class="img-fluid" width="500" />
                        </v-sheet>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-sheet color="deep-purple accent-4" height="100%">
                            <img src="https://i.imgur.com/0ikEzMq.png" class="img-fluid" width="500" />
                        </v-sheet>
                    </v-carousel-item>

                </v-carousel>
            </v-col>
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
        // Charts: () => import('./dashboard/Charts'),
        FusionSpotlight: () => import('./dashboard/FusionSpotlight'),
        Highlights: () => import('./dashboard/Highlights'),
        Sessions: () => import('./dashboard/Sessions'),
        ShuffleSpotlight: () => import('./dashboard/ShuffleSpotlight'),
    },
    data: () => {
        return {
            list: null,
            dialog: false,
        }
    },

    methods: {
        openArticle(_url) {
            window.open(_url)
        },
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
.carousel
    cursor: pointer
</style>
