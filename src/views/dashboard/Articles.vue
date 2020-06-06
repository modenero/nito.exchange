<template>
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

        openArticle(_url) {
            window.open(_url)
        },

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
